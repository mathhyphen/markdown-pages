---
layout: page
title: "Claude Cookbooks 中文导读"
---

欢迎来到这套 **Claude Cookbooks 中文导读**。这是一组面向开发者、产品经理和 AI 应用实践者的系列文章，目标不是逐字翻译 Anthropic 的 notebook，而是把整个仓库重新拆解成更容易理解、也更适合持续发布的中文专栏。

这个站点适合三类读者：

- 想快速知道 `anthropics/claude-cookbooks` 里到底有什么；
- 想根据自己的场景，跳到最相关的 notebook；
- 想把这些内容整理成博客、知识库或团队内部学习资料。

当前整理范围基于仓库中的 recipes / notebooks 注册表，总计 **66** 个 recipe，重点板块包括：`misc` 14 篇、`third_party` 13 篇、`tool_use` 11 篇、`multimodal` 6 篇、`capabilities` 5 篇、`claude_agent_sdk` 5 篇、`patterns` 3 篇、`skills` 3 篇、`extended_thinking` 2 篇、`coding` 1 篇、`finetuning` 1 篇、`observability` 1 篇、`tool_evaluation` 1 篇。

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


## 建议阅读顺序

1. 先看 **01 仓库总览**，建立对整个 repo 的认知地图。  
2. 按你的目标进入分支：  
   - 想做知识库问答，看 **02 基础能力篇**。  
   - 想做工具型 Agent，看 **03 工具调用篇** 和 **05 Agent 模式篇**。  
   - 想做图像、PDF、表单处理，看 **04 多模态篇**。  
   - 想做真正的工程化代理，看 **06 Claude Agent SDK 篇**。  
   - 想压缩成本、提升稳定性，看 **07 响应工程篇**。  
   - 想接入现成生态，看 **08 生态集成篇**。  
3. 最后用 **10 完整索引** 当目录，用 **11 发布篇** 部署到 GitHub Pages。


## 这套文章怎么读

这套导读遵循一个很简单的逻辑：**先地图，后能力，再模式，最后工程化与发布**。

- **地图**：先理解仓库本身是怎么组织的；
- **能力**：再看 Claude 在分类、RAG、摘要、多模态、工具调用上的“原子能力”；
- **模式**：然后看 Agent 模式和 SDK；
- **工程化**：最后看缓存、评测、引用、成本、发布与二次创作。

## 你可以直接怎么用

1. 把这份 `docs/` 目录放进你的 GitHub 仓库；  
2. 在 GitHub Pages 里把发布源指向 `/docs`；  
3. 修改站点标题、作者名、页脚介绍；  
4. 继续往里追加你自己的“实战篇”或“源码解读篇”。

## 原始资料

- [Claude Cookbooks 仓库首页](https://github.com/anthropics/claude-cookbooks)
- [registry.yaml（所有 recipes 注册表）](https://raw.githubusercontent.com/anthropics/claude-cookbooks/main/registry.yaml)
- [Anthropic 开发文档](https://docs.claude.com)
