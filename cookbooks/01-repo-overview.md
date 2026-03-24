---
layout: page
title: "01｜仓库总览：Claude Cookbooks 到底在教什么"
---

这篇是整套系列的开场。先给结论：**Claude Cookbooks 不是一个单一产品，也不是一门线性教程，而是一座不断扩张的“Claude 应用模式仓库”**。你可以把它理解成 Anthropic 官方不断更新的 recipe 集：每篇 notebook 解决一个明确问题，组合起来就构成了从基础能力到工程化 Agent 的完整地图。

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


## 1. 这个仓库的定位

从 README 的表述来看，它的核心目标是提供 **code and guides**，也就是“可复制的代码 + 实践说明”，让开发者把 Claude 接进自己的产品、工作流和实验环境里。  
因此它最适合的使用方式不是“从头到尾顺着学一遍”，而是：

- 先按场景找到对应 recipe；
- 跑通一个最小例子；
- 再把其中的模式抽出来，移植到自己的工程里。

## 2. 怎么理解它的仓库结构

这个仓库表面上是许多 notebook，但本质上可以分成三层：

### 第一层：面向读者的 recipe 层

这一层就是你最常读的 notebook，主要集中在这些目录里：

- `capabilities/`：基础能力，如分类、摘要、RAG、Text-to-SQL；
- `tool_use/`：工具调用；
- `multimodal/`：视觉、图表、文档；
- `patterns/agents/`：通用 Agent 模式；
- `claude_agent_sdk/`：用 SDK 做真正代理；
- `third_party/`：接第三方生态；
- `misc/`：缓存、评测、JSON、引用、批处理等杂项但非常实用。

### 第二层：工程支撑层

仓库根目录还能看到一些明显不是“教程正文”的内容，例如：

- `anthropic_cookbook/`
- `scripts/`
- `tests/`
- `registry.yaml`
- `pyproject.toml`
- `uv.lock`

这说明它并不是“扔一堆 notebook 就完事”的演示仓库，而是按持续维护的方式组织起来的工程仓库。

### 第三层：持续扩展层

近年的新增内容很明显往两个方向扩张：

- **更工程化**：例如 Prompt Caching、Batch API、Usage & Cost Admin API、Tool Evaluation；
- **更 Agent 化**：例如 Basic Workflows、Orchestrator、Claude Agent SDK、Memory / Context 管理、Automatic Context Compaction。

## 3. 这个仓库在教什么

如果把 66 个 recipe 压缩成几句话，它实际在教你六件事：

1. **如何把 Claude 当成基础模型能力来用**  
   例如分类、摘要、RAG、Text-to-SQL。
2. **如何把 Claude 接上外部世界**  
   例如 tools、数据库、搜索、网页、WolframAlpha、Pinecone。
3. **如何让 Claude 处理复杂输入**  
   例如图片、PDF、表单、图表、语音。
4. **如何组织多步工作流**  
   例如 chaining、parallelization、routing、orchestrator-workers。
5. **如何把 demo 做成产品能力**  
   例如 JSON mode、prompt caching、session memory、tool choice。
6. **如何把原型做成长期系统**  
   例如 evals、observability、usage cost、tool evaluation。

## 4. 读这个仓库最容易踩的三个误区

### 误区一：把每个 notebook 当成最佳实践“终稿”
很多 notebook 的价值在于**说明模式**，而不是提供可以直接进生产环境的代码。尤其在 Agent 模式、第三方框架集成、实验性能力这几类里，更应该把它们当“路线图”。

### 误区二：把 `misc/` 当边角料
实际上，`misc/` 往往最像工程化实战，比如：
- Prompt caching
- JSON mode
- Citations
- Batches API
- Sampling past max tokens
- Session memory compaction

这些内容不一定炫，但很接近真实应用上线时会遇到的问题。

### 误区三：把 `third_party/` 当成 Anthropic 官方推荐架构
这部分更准确的理解是：**Claude 如何嵌入现有 AI 生态**。  
它的价值不在“你必须用这个框架”，而在于“你可以用这些方式接进去”。

## 5. 我建议怎么学

### 路线 A：想做知识库 / 企业问答
从 `capabilities/` 开始，再看 `third_party/` 里的 Pinecone、LlamaIndex、MongoDB，然后补 `misc/building_evals.ipynb` 和 `misc/using_citations.ipynb`。

### 路线 B：想做工具型 Agent
先看 `tool_use/`，再看 `patterns/agents/`，之后进入 `claude_agent_sdk/`。

### 路线 C：想做多模态与文档理解
先看 `multimodal/`，再看 `tool_use/vision_with_tools.ipynb`，最后补 `misc/pdf_upload_summarization.ipynb`。

### 路线 D：想做稳、快、便宜的线上系统
优先看 `misc/`、`extended_thinking/`、`observability/`、`tool_evaluation/`。

## 6. 推荐你重点关注的代表 notebook

### 能力基础
- **Classification with Claude**：用 Claude 做文本/工单分类，示范如何结合 RAG 与推理过程提升分类质量。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/classification/guide.ipynb)）
- **Enhancing RAG with contextual retrieval**：通过给 chunk 补充上下文再做 embedding，提升检索质量。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/contextual-embeddings/guide.ipynb)）
- **Retrieval augmented generation**：从基础 RAG 到评测、summary indexing、reranking 的完整优化路径。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/retrieval_augmented_generation/guide.ipynb)）
- **Summarization with Claude**：以法律文档为例，系统讲解摘要任务、评测与高级技巧。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/summarization/guide.ipynb)）
- **Text to SQL with Claude**：把自然语言问题转换成 SQL，并展示如何用 RAG 与自我改进提升效果。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/text_to_sql/guide.ipynb)）

### 工具与代理
- **Creating a customer service agent with client-side tools**：用客户查询、订单查询、取消订单等工具搭建客服代理。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/customer_service_agent.ipynb)）
- **Basic workflows**：用 prompt chaining、parallelization、routing 三种模式搭建多 LLM 工作流。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/basic_workflows.ipynb)）
- **The one-liner research agent**：使用 Claude Agent SDK 和 WebSearch 构建最小化研究代理。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/00_The_one_liner_research_agent.ipynb)）
- **Memory & context management with Claude Sonnet 4.6**：面向代理应用的持久记忆、上下文编辑与状态管理。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/memory_cookbook.ipynb)）

### 工程化
- **Prompt caching through the Claude API**：复用上下文缓存以降低成本、提升响应速度。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/prompt_caching.ipynb)）
- **Building evals**：搭建评测系统来衡量和改进 Claude 的输出质量。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/building_evals.ipynb)）
- **Usage & cost Admin API cookbook**：通过 Admin API 拉取 Claude API 的用量与成本数据。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/observability/usage_cost_api.ipynb)）

## 7. 这一篇的核心结论

- 这不是一本教程，而是一个不断更新的 **Claude 应用模式库**；
- 真正的阅读单位不是“章节”，而是“场景”；
- 仓库越往后越能看出 Anthropic 的重点正在从“单次调用”走向“可落地的 Agent 系统”。

## 原始资料

- [仓库首页](https://github.com/anthropics/claude-cookbooks)
- [README](https://github.com/anthropics/claude-cookbooks/blob/main/README.md)
- [recipes 注册表](https://raw.githubusercontent.com/anthropics/claude-cookbooks/main/registry.yaml)
