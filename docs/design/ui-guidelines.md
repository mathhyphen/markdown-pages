# UI 设计规范 | Design Guidelines

## 设计理念

**学术风格 (Academic Style)** — 优雅、沉稳、专业

追求知性的美感：温暖的底色、精致的排版、克制的动效。界面应当像一本装帧精美的学术期刊，让阅读成为享受。

---

## 色彩系统

### 主色调

| Token | 色值 | 用途 |
|--------|------|------|
| `--bg-primary` | `#FAFAF8` | 页面背景，暖象牙白 |
| `--bg-secondary` | `#F5F5F0` | 次级背景 |
| `--bg-card` | `#FFFFFF` | 卡片背景 |
| `--bg-sidebar` | `#FFFFFF` | 侧边栏背景 |

### 强调色

| Token | 色值 | 用途 |
|--------|------|------|
| `--accent-blue` | `#2563EB` | 主强调色，链接、按钮、活跃状态 |
| `--accent-purple` | `#7C3AED` | 次强调色，分类标签 |
| `--accent-teal` | `#0D9488` | 辅助强调，Microsoft 标签 |
| `--accent-gold` | `#B45309` | 研究/工具标签 |

### 文字色

| Token | 色值 | 用途 |
|--------|------|------|
| `--text-primary` | `#1A1A1A` | 正文标题 |
| `--text-secondary` | `#525252` | 正文内容 |
| `--text-muted` | `#737373` | 次要信息 |

### 边框与阴影

```css
--border-light: rgba(0, 0, 0, 0.08);
--border-medium: rgba(0, 0, 0, 0.12);
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
--shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 8px 30px rgba(0, 0, 0, 0.08);
--shadow-hover: 0 12px 40px rgba(37, 99, 235, 0.12);
```

---

## 字体系统

### 字体族

- **标题 / Brand**: Crimson Pro (衬线，优雅学术感)
- **正文 / Body**: Noto Sans SC (无衬线，清晰易读)

### 字号层级

| 用途 | 尺寸 | 权重 |
|------|------|------|
| 品牌名 | 1.15rem | 700 |
| 区块标题 | 1.3rem | 700 |
| 卡片标题 | 0.95rem | 600 |
| 正文 | 0.82rem | 400 |
| 标签 | 0.65rem | 600 |
| 小标签 | 0.72rem | 700 |

### 行高

- 正文: `1.6`
- 标题: `1.4`

---

## 布局系统

### 网格

```
主区域: 280px 侧边栏 + 1fr 内容区
最大宽度: 1400px
```

### 间距

| 元素 | 间距 |
|------|------|
| 页面内边距 | 40px 48px |
| 区块间距 | 52px |
| 卡片间距 | 16px |
| 卡片内边距 | 20px 22px |
| 侧边栏内边距 | 32px 20px |

### 响应式断点

```css
@media (max-width: 1100px) {
  /* 移动端: 单列布局 */
  grid-template-columns: 1fr;
}
```

---

## 组件规范

### 侧边栏 (Sidebar)

```css
position: sticky;
top: 0;
height: 100vh;
border-right: 1px solid var(--border-light);
box-shadow: 2px 0 20px rgba(0, 0, 0, 0.03);
```

### 卡片 (Card)

```css
background: var(--bg-card);
border: 1px solid var(--border-light);
border-radius: 14px;
padding: 20px 22px;
box-shadow: var(--shadow-sm);
transition: all 0.3s ease;
```

**悬停状态:**
```css
:hover {
  border-color: rgba(37, 99, 235, 0.25);
  box-shadow: var(--shadow-hover);
  transform: translateY(-3px);
}
```

### 标签 (Badge)

```css
padding: 3px 8px;
border-radius: 4px;
font-size: 0.65rem;
font-weight: 600;
```

**按来源分类:**
- OpenAI: 蓝底白字
- Anthropic: 紫底白字
- Microsoft: 青底白字
- DeepMind: 金底白字
- arXiv: 灰底

### 按钮

**主按钮:**
```css
background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
color: #FFFFFF;
border-radius: 8px;
```

**次按钮:**
```css
background: var(--bg-secondary);
color: var(--text-secondary);
border: 1px solid var(--border-light);
```

---

## 动效规范

### 入场动画

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
```

使用 `animation-fill-mode: both` + 递增延迟 (`0.1s`, `0.2s`...) 实现错落有致的入场效果。

### 过渡

- 默认: `all 0.3s ease`
- 快速: `all 0.2s ease`

### 原则

- **克制**: 只在关键交互处使用动效
- **微妙**: 避免夸张的发光、缩放
- **有意义**: 动效应暗示元素可交互或提供反馈

---

## 代码模板

### HTML 结构

```html
<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>页面标题</title>
  <link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;0,700;1,400&family=Noto+Sans+SC:wght@400;500;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="./assets/style.css">
  <style>
    /* 使用上面的 CSS 变量 */
  </style>
</head>
<body>
  <div class="layout">
    <aside class="sidebar">
      <div class="brand">
        <a href="./index.html">品牌名</a>
        <span class="tagline">英文 tagline</span>
      </div>
      <div class="nav-title">导航 Navigation</div>
      <ul class="nav-list">
        <li><a href="#section" class="active">菜单项</a></li>
      </ul>
    </aside>
    <main class="main">
      <!-- 内容区 -->
    </main>
  </div>
</body>
</html>
```

---

## 设计检查清单

设计完成后逐项检查:

- [ ] 背景色是否为暖白色而非纯白?
- [ ] 强调色是否克制使用(不超过 3 处)?
- [ ] 卡片是否有微妙的阴影?
- [ ] 悬停状态是否有蓝色调的阴影?
- [ ] 是否避免了霓虹发光效果?
- [ ] 字体是否使用 Crimson Pro + Noto Sans SC?
- [ ] 动效是否克制、不夸张?
- [ ] 响应式布局是否正常?
- [ ] 标签颜色是否符合语义?
