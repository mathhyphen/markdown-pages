# Markdown Pages Design System

## Overall Direction
- Mood: editorial, curated, warm, research-oriented, calm confidence
- Platform: web, desktop-first with strong mobile adaptation
- Experience goal: users should know where to start within 30 seconds

## Color Roles
- Page Background: `#f4ecdf`
- Surface Primary: `rgba(255, 250, 243, 0.82)`
- Surface Secondary: `rgba(248, 240, 229, 0.9)`
- Text Primary: `#1f252c`
- Text Secondary: `#5f6770`
- Accent Warm: `#a24f34`
- Accent Cool: `#1e5a50`
- Border: `rgba(31, 37, 44, 0.12)`

## Typography
- Display / Section Titles: classic serif stack
  - `"Iowan Old Style", "Palatino Linotype", "Book Antiqua", Georgia, "Songti SC", "STSong", serif`
- Body / UI: humanist sans stack
  - `"Avenir Next", "Segoe UI", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans SC", sans-serif`
- Tone: headings should feel like a print essay or seminar handout, not SaaS dashboard chrome

## Layout Principles
- Homepage should behave like a curated exhibition entry, not a sidebar-heavy file browser
- First screen must communicate purpose, entry points, and archive scale
- Use large asymmetric hero + dense but readable supporting panel
- Organize exploration by user intent first, by content type second
- Long lists should sit below a strong orientation layer

## Components

### Top Navigation
- Sticky glass-like bar
- Compact pill nav items
- Active state should be visible but understated

### Hero Stage
- Left: large editorial headline and short positioning copy
- Right: curator note, reading protocol, archive counts
- Add subtle atmospheric gradients instead of flat backgrounds

### Entry Lanes
- Four intent-based cards
- Each lane includes a purpose statement plus three quick cues
- Cards should feel clickable and substantial

### Spotlight Cards
- Use for high-value entry links only
- Strong title hierarchy, short explanation, one clear CTA

### Archive Cards
- Keep metadata visible at top
- Use a thin accent rule for visual rhythm
- Favor clarity over decorative complexity

## Motion
- Simple rise-in on load
- Hover lift on cards and buttons
- Respect `prefers-reduced-motion`

## Content Style
- Chinese copy should be direct, slightly editorial, and confident
- Avoid empty marketing language
- Explain why to click, not just what the item is
