---
layout: page
title: "11｜发布篇：把这套文章放到 GitHub Pages"
---

这篇不谈 Claude，本质上是在教你怎么把这套 Markdown 文章直接挂到 GitHub Pages。

## 系列导航

- [Claude Cookbooks 中文导读](index.html)
- [01｜仓库总览：Claude Cookbooks 到底在教什么](01-repo-overview.html)
- [02｜基础能力篇：分类、RAG、摘要与 Text-to-SQL](02-capabilities.html)
- [03｜工具调用篇：从函数调用到工具生态](03-tool-use.html)
- [04｜多模态篇：视觉、文档、图表与图像理解](04-multimodal.html)
- [05｜Agent 模式篇：链式、并行、路由与编排](05-agent-patterns.html)
- [06｜Claude Agent SDK 篇：把模式落成真正的代理](06-claude-agent-sdk.html)
- [07｜响应工程篇：JSON、缓存、引用、评测与成本](07-responses-and-performance.html)
- [08｜生态集成篇：LlamaIndex、Pinecone、MongoDB、音频与语音](08-integrations.html)
- [09｜Skills、微调与垂直化能力](09-skills-finetuning.html)
- [10｜完整索引：66 个 Claude Cookbooks 逐条导读](10-full-inventory.html)
- [11｜发布篇：把这套文章放到 GitHub Pages](11-github-pages-deploy.html)


## 最简单的发布方式

这份包我已经按 **`docs/` 目录发布** 的思路整理好了。你只需要：

1. 把整个 `docs/` 目录放进你的 GitHub 仓库；
2. 提交并推送到 `main`（或你的默认分支）；
3. 打开 GitHub 仓库的 **Settings → Pages**；
4. 在 **Build and deployment** 里选择 **Deploy from a branch**；
5. 选择你的分支，例如 `main`；
6. 目录选择 **`/docs`**；
7. 保存。

几分钟后，你的站点就会出现在：

- `https://<你的用户名>.github.io/<仓库名>/`

## 什么时候改用 GitHub Actions

GitHub 官方现在更推荐用 **GitHub Actions** 来部署 Pages，尤其当你有以下需求时：

- 想在发布前做额外构建；
- 用的不是标准 Jekyll 流程；
- 想自动化检查、打包和部署；
- 仓库里有符号链接或更复杂的构建逻辑。

不过，如果你只是想先把这组文章挂起来，`/docs` 分支发布是最省事的方式。

## 这份站点包里有什么

- `_config.yml`：Jekyll / GitHub Pages 的基础配置；
- `index.md`：站点首页；
- `01` 到 `11` 的系列文章；
- 所有页面都已经带好了 front matter，可以直接被 GitHub Pages 处理。

## 你可能想顺手改的三个地方

### 1. 站点标题
改 `docs/_config.yml` 里的：

```yml
title: Claude Cookbooks 中文导读
description: Anthropic Claude Cookbooks 仓库系统梳理与 GitHub Pages 文章系列
```

### 2. 首页文案
改 `docs/index.md` 顶部介绍，让它更像你的个人博客或团队专栏。

### 3. 文章风格
现在这套稿子是“导读型”。你可以继续改成：
- 更偏教程；
- 更偏翻译；
- 更偏源码解读；
- 更偏企业落地案例。

## 自定义域名怎么做

如果你后面要接自己的域名，GitHub Pages 也支持自定义域名。通常步骤是：

1. 在 **Settings → Pages** 里填你的 custom domain；
2. 在 DNS 服务商那里配置对应记录；
3. 建议顺手完成域名验证；
4. 打开 HTTPS。

## 我建议的下一步

最实用的做法不是先美化主题，而是先补两类内容：

1. **你的个人观点**：比如“我最推荐的 10 篇 notebook”；  
2. **你的实战案例**：比如“我把某一篇改成了可运行 demo”。

这样站点就会从“资料整理”升级为“有作者性的专栏”。

## 推荐的仓库结构

```text
your-repo/
├── README.md
└── docs/
    ├── _config.yml
    ├── index.md
    ├── 01-repo-overview.md
    ├── 02-capabilities.md
    ├── ...
    └── 11-github-pages-deploy.md
```

## 原始资料

- [GitHub Pages 文档首页](https://docs.github.com/pages)
- [Configuring a publishing source for your GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [About GitHub Pages and Jekyll](https://docs.github.com/github/working-with-github-pages/about-github-pages-and-jekyll)
