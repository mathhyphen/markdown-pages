// D 版 toc-auto.js — 浅色纸面 + 右侧 TOC + 滚到 heading 高亮
(function() {
  if (!document.body.classList.contains('article-page')) return;

  // 隐藏文章正文里任何 class="toc" 但不在 article-layout 里的内嵌 toc
  // (旧文章里可能嵌了 <nav class="toc"> 或 <div class="toc"> 列表)
  document.querySelectorAll('.toc').forEach(el => {
    if (!el.closest('.article-layout')) el.style.display = 'none';
  });

  // 已有 toc — 强制它在右栏
  const existing = document.querySelector('.article-layout .toc');
  if (existing) {
    existing.style.gridColumn = '2';
    existing.style.gridRow = '1';
    wireScrollSpy(existing);
    return;
  }

  // 找正文容器
  const container = document.querySelector('.prose, .prose-content, main, .container');
  if (!container) return;

  const headings = Array.from(container.querySelectorAll('h2, h3')).filter(h => {
    if (!h.textContent.trim()) return false;
    return !h.closest('.hero, header.hero, .hero-card');
  });
  if (headings.length < 2) return;

  // 给 heading 加 id
  const seen = new Set();
  headings.forEach(h => {
    if (!h.id) {
      let slug = h.textContent.trim()
        .replace(/[^一-龥a-zA-Z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .toLowerCase()
        .slice(0, 40);
      if (!slug) slug = 'section-' + Math.random().toString(36).slice(2, 8);
      let id = slug, n = 2;
      while (seen.has(id)) id = slug + '-' + (n++);
      h.id = id;
    }
    seen.add(h.id);
  });

  // 构造 toc HTML
  const tocItems = headings.map(h => {
    const cls = h.tagName === 'H3' ? ' class="lvl-3"' : '';
    return '<a' + cls + ' href="#' + h.id + '">' + h.textContent.trim() + '</a>';
  }).join('');

  // 找或建 article-layout
  let layout = document.querySelector('.article-layout');
  if (!layout) {
    layout = document.createElement('div');
    layout.className = 'article-layout';
    container.parentElement.insertBefore(layout, container);
    layout.appendChild(container);
  }

  // 把 toc 放到最前面
  layout.insertAdjacentHTML('afterbegin', '<aside class="toc"><h4>目录</h4>' + tocItems + '</aside>');
  wireScrollSpy(layout.querySelector('.toc'));
})();

function wireScrollSpy(toc) {
  if (!toc) return;
  const layout = toc.closest('.article-layout');
  if (!layout) return;
  const tocLinks = toc.querySelectorAll('a');
  const headings = [];
  tocLinks.forEach(a => {
    const h = document.getElementById(a.getAttribute('href').slice(1));
    if (h) headings.push({h, a});
  });
  if (!headings.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        tocLinks.forEach(x => x.classList.remove('active'));
        const link = toc.querySelector('a[href="#' + e.target.id + '"]');
        if (link) link.classList.add('active');
      }
    });
  }, { rootMargin: '0px 0px -70% 0px', threshold: 0 });
  headings.forEach(x => obs.observe(x.h));
}
