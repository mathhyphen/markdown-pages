// Normalize every article page into a two-column reading layout:
// content on the left, table of contents on the right.
(function () {
  if (!document.body.classList.contains('article-page')) return;

  const articleRoot = getArticleRoot();
  if (!articleRoot) return;

  const layout = ensureLayout(articleRoot);
  const content = getContentNode(layout);
  if (!content) return;

  const headings = collectHeadings(content);
  if (headings.length < 2) {
    hideLegacyTocs(layout);
    return;
  }

  ensureHeadingIds(headings);

  const toc = buildOrReuseToc(layout, headings);
  hideLegacyTocs(layout, toc);
  wireScrollSpy(toc);
  wireSmoothScroll(toc);
})();

function getArticleRoot() {
  return (
    document.querySelector('.article-layout') ||
    document.querySelector('.page-layout') ||
    document.querySelector('main.container') ||
    document.querySelector('body.article-page > main') ||
    document.querySelector('body.article-page > .container') ||
    document.querySelector('body.article-page > .main-content') ||
    document.querySelector('main') ||
    document.body
  );
}

function ensureLayout(root) {
  if (root.classList.contains('article-layout')) return root;

  const content = findPrimaryContent(root);
  if (!content || !content.parentElement) return root;

  const layout = document.createElement('div');
  layout.className = 'article-layout';
  content.parentElement.insertBefore(layout, content);
  layout.appendChild(content);
  return layout;
}

function findPrimaryContent(root) {
  if (root.matches('main, article, .container, .wrap, .main, .main-content, .prose, .prose-content')) {
    return root;
  }

  return (
    root.querySelector('.prose') ||
    root.querySelector('.prose-content') ||
    root.querySelector('main.container') ||
    root.querySelector('.container') ||
    root.querySelector('.main-content') ||
    root.querySelector('.main') ||
    root.querySelector('.wrap') ||
    root.querySelector('article') ||
    root.querySelector('main')
  );
}

function getContentNode(layout) {
  return (
    layout.querySelector(':scope > .prose') ||
    layout.querySelector(':scope > .prose-content') ||
    layout.querySelector(':scope > .main-content') ||
    layout.querySelector(':scope > .main') ||
    layout.querySelector(':scope > .wrap') ||
    layout.querySelector(':scope > article') ||
    layout.querySelector(':scope > main') ||
    findPrimaryContent(layout)
  );
}

function collectHeadings(content) {
  return Array.from(content.querySelectorAll('h2, h3')).filter((heading) => {
    const text = heading.textContent.trim();
    if (!text) return false;
    if (heading.closest('.hero, header.hero, .hero-card, .toc, .sidebar')) return false;
    return true;
  });
}

function ensureHeadingIds(headings) {
  const seen = new Set(
    Array.from(document.querySelectorAll('[id]'))
      .map((el) => el.id)
      .filter(Boolean)
  );

  headings.forEach((heading) => {
    if (heading.id) return;

    let slug = heading.textContent
      .trim()
      .replace(/<[^>]*>/g, '')
      .replace(/[^\u4e00-\u9fa5a-zA-Z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .toLowerCase()
      .slice(0, 64);

    if (!slug) slug = 'section';

    let id = slug;
    let index = 2;
    while (seen.has(id)) {
      id = `${slug}-${index}`;
      index += 1;
    }

    heading.id = id;
    seen.add(id);
  });
}

function buildOrReuseToc(layout, headings) {
  const existing = layout.querySelector(':scope > .toc');
  if (existing) {
    existing.classList.add('toc');
    existing.innerHTML = renderTocItems(headings);
    return existing;
  }

  const legacyLinks = collectLegacyTocLinks(layout);
  const toc = document.createElement('aside');
  toc.className = 'toc';
  toc.innerHTML = legacyLinks.length
    ? renderLinks(legacyLinks)
    : renderTocItems(headings);

  layout.insertBefore(toc, layout.firstElementChild);
  return toc;
}

function collectLegacyTocLinks(layout) {
  const source =
    layout.querySelector(':scope > .sidebar') ||
    document.querySelector('.page-layout > .sidebar') ||
    document.querySelector('.toc-nav') ||
    document.querySelector('.toc-list');

  if (!source) return [];

  return Array.from(source.querySelectorAll('a[href^="#"]'))
    .map((link) => ({
      href: link.getAttribute('href'),
      text: link.textContent.trim(),
      level: link.classList.contains('sub') ||
        link.classList.contains('lvl-2') ||
        link.closest('.lvl-2')
        ? 3
        : 2,
    }))
    .filter((item) => item.href && item.text && getTargetFromHref(item.href));
}

function renderTocItems(headings) {
  const items = headings.map((heading) => ({
    href: `#${heading.id}`,
    text: heading.textContent.trim(),
    level: heading.tagName === 'H3' ? 3 : 2,
  }));

  return renderLinks(items);
}

function renderLinks(items) {
  const links = items
    .map((item) => {
      const className = item.level === 3 ? ' class="lvl-3"' : '';
      return `<a${className} href="${item.href}">${escapeHtml(item.text)}</a>`;
    })
    .join('');

  return `<h4>目录</h4>${links}`;
}

function hideLegacyTocs(layout, activeToc) {
  document.querySelectorAll('.toc, .sidebar, .toc-nav, .toc-list').forEach((el) => {
    if (el === activeToc) return;
    if (activeToc && el.closest('.toc') === activeToc) return;
    if (el.closest('.topbar')) return;

    const isLegacyToc =
      el.classList.contains('toc') ||
      el.classList.contains('sidebar') ||
      el.classList.contains('toc-nav') ||
      el.classList.contains('toc-list');

    if (isLegacyToc && !el.closest('.article-layout .toc')) {
      el.setAttribute('hidden', '');
      el.setAttribute('aria-hidden', 'true');
    }
  });

  layout.classList.add('toc-normalized');
}

function wireScrollSpy(toc) {
  if (!toc) return;

  const tocLinks = Array.from(toc.querySelectorAll('a[href^="#"]'));
  const headings = tocLinks
    .map((link) => ({
      link,
      heading: getTargetFromHref(link.getAttribute('href')),
    }))
    .filter((item) => item.heading);

  if (!headings.length || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];

      if (!visible) return;

      tocLinks.forEach((link) => link.classList.remove('active'));
      const active = toc.querySelector(`a[href="#${escapeSelector(visible.target.id)}"]`);
      if (active) active.classList.add('active');
    },
    { rootMargin: '-12% 0px -72% 0px', threshold: 0 }
  );

  headings.forEach(({ heading }) => observer.observe(heading));
}

function wireSmoothScroll(toc) {
  toc.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = getTargetFromHref(link.getAttribute('href'));
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', link.getAttribute('href'));
    });
  });
}

function getTargetFromHref(href) {
  if (!href || href[0] !== '#') return null;

  const rawId = href.slice(1);
  if (!rawId) return null;

  try {
    return document.getElementById(decodeURIComponent(rawId)) || document.getElementById(rawId);
  } catch (_) {
    return document.getElementById(rawId);
  }
}

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeSelector(value) {
  if (window.CSS && typeof window.CSS.escape === 'function') {
    return window.CSS.escape(value);
  }

  return value.replace(/"/g, '\\"');
}
