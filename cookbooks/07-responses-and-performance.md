---
layout: page
title: "07｜响应工程篇：JSON、缓存、引用、评测与成本"
---

很多人第一次打开 Claude Cookbooks，会优先看 RAG、工具调用或多模态。但如果你真的要做一个 **稳定、可控、可上线** 的系统，那么最该认真看的，反而是 `misc/`、`extended_thinking/`、`observability/` 和 `tool_evaluation/` 这些看起来不那么“炫”的部分。

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


## 1. 为什么这一组最像“工程实战”

因为真实项目最后都会落到这些问题上：

- 怎样拿到稳定 JSON；
- 如何控制成本；
- 怎样管理长上下文；
- 怎样给回答加引用；
- 怎样评估系统，而不是靠感觉；
- 怎样知道到底花了多少钱、哪个环节最慢；
- 怎样在超长输出、批量处理这类边界情况下仍然可用。

这一组 notebook 的价值就在这里：它们让你看到 **LLM 应用的非功能性要求**。

## 2. 结构化输出：JSON、引用与可核查性

- **Prompting Claude for JSON mode**：通过提示工程稳定拿到 JSON 输出。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/how_to_enable_json_mode.ipynb)）
- **Citations**：让 Claude 在基于文档回答时带上引用来源。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/using_citations.ipynb)）
- **Extracting structured JSON using Claude and tool use**：用工具调用把抽取结果稳定约束成结构化 JSON。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/extracting_structured_json.ipynb)）

这几篇共同围绕一个现实问题：  
**模型输出再聪明，如果系统消费不了、核查不了，也很难进入生产环境。**

### JSON mode
重点不是“模型会不会 JSON”，而是如何通过 prompt 和约束提升成功率。

### Citations
重点不是“多一个脚注”，而是让回答可验证、可追踪、可审计。

### Structured JSON via tool use
重点不是文本美感，而是让抽取任务天然走向可解析结果。

## 3. 上下文与成本：缓存、压缩、批处理

- **Batch processing with Message Batches API**：用批处理 API 低成本处理大批量请求。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/batch_processing.ipynb)）
- **Prompt caching through the Claude API**：复用上下文缓存以降低成本、提升响应速度。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/prompt_caching.ipynb)）
- **Session memory compaction**：在长对话/长代理流程里压缩会话记忆，控制上下文长度。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/session_memory_compaction.ipynb)）
- **Speculative prompt caching**：在用户输入完成前预热缓存，缩短首 token 等待时间。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/speculative_prompt_caching.ipynb)）
- **Automatic context compaction**：在长流程代理中自动压缩上下文，管理 token 预算。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/automatic-context-compaction.ipynb)）

这是最接近“上线之后才会真正痛”的部分。

### Prompt caching
解决重复上下文太贵的问题。

### Speculative prompt caching
解决等待首 token 太慢的问题。

### Session memory compaction / automatic context compaction
解决长流程代理越跑越胖、越跑越贵的问题。

### Batch processing
解决“大量任务都要跑，但不是每个都必须实时返回”的问题。

这几篇加在一起，等于是在教你：  
**如何让 Claude 应用在吞吐、延迟、上下文长度和预算之间找到平衡。**

## 4. 思考与推理：Extended Thinking

- **Extended thinking**：介绍 extended thinking 的思路、预算管理和透明推理体验。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/extended_thinking/extended_thinking.ipynb)）
- **Extended thinking with tool use**：把 extended thinking 与工具调用结合，覆盖多步任务场景。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/extended_thinking/extended_thinking_with_tool_use.ipynb)）

Extended Thinking 这组内容体现的是一个很重要的方向：  
**复杂任务不只是“给更多 tokens”，而是给模型一个更清晰的思考预算和多步推理空间。**

当它和工具调用结合时，意义更大，因为多步任务里往往需要：

- 先判断；
- 再搜集；
- 再调用工具；
- 最后综合。

这比“单发 prompt”更接近真实工作流。

## 5. 评测与质量保障：不要只看 demo

- **Building evals**：搭建评测系统来衡量和改进 Claude 的输出质量。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/building_evals.ipynb)）
- **Generate synthetic test data for your prompt template**：自动生成测试样例来评估和改进 prompt。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/generate_test_cases.ipynb)）
- **Tool evaluation**：并行评估工具本身的表现，而不是只评估最终回答。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_evaluation/tool_evaluation.ipynb)）

许多 LLM 项目停留在“看起来不错”，是因为它们缺一个稳定评测框架。  
这里至少有三条思路：

- 建立业务指标；
- 先自动生成测试样例；
- 把工具本身也拿出来单独评估。

尤其 `tool_evaluation` 很关键，因为多步 Agent 里，最终失败未必是模型的锅，也可能是工具本身的设计、权限、延迟或返回格式有问题。

## 6. 可观测性：用量与成本

- **Usage & cost Admin API cookbook**：通过 Admin API 拉取 Claude API 的用量与成本数据。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/observability/usage_cost_api.ipynb)）

这是非常“生产系统”的一篇。  
当团队开始真实使用 Claude API 后，大家很快会问：

- 谁在花钱；
- 哪个应用最贵；
- 哪个模型最耗；
- 哪类请求增长最快。

如果没有可观测性，LLM 系统的成本治理几乎无从谈起。

## 7. 其他很实用但容易被忽略的内容

- **Building a moderation filter with Claude**：用提示规则自定义内容审核/风控过滤器。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/building_moderation_filter.ipynb)）
- **How to make SQL queries with Claude**：在给定数据库 schema 的前提下，让 Claude 生成 SQL。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/how_to_make_sql_queries.ipynb)）
- **Metaprompt**：用元提示帮你从空白页出发，生成更好的初始 prompt。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/metaprompt.ipynb)）
- **Uploading PDFs to Claude via the API**：通过 API 解析 PDF、提取文本，并交给 Claude 总结。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/pdf_upload_summarization.ipynb)）
- **Summarizing web page content with Claude 3 Haiku**：抓取网页正文并用 Haiku 做快速摘要。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/read_web_pages_with_haiku.ipynb)）
- **Sampling responses from Claude beyond the max tokens limit**：用 continuation / prefill 的方式绕过单次 max_tokens 限制。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/sampling_past_max_tokens.ipynb)）

这一组没有统一大标题，但都很像“你迟早会用到”的技巧仓库。

## 8. 如果只挑 5 篇，我会选这些

- **Extended thinking with tool use**：把 extended thinking 与工具调用结合，覆盖多步任务场景。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/extended_thinking/extended_thinking_with_tool_use.ipynb)）
- **Building evals**：搭建评测系统来衡量和改进 Claude 的输出质量。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/building_evals.ipynb)）
- **Prompt caching through the Claude API**：复用上下文缓存以降低成本、提升响应速度。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/prompt_caching.ipynb)）
- **Citations**：让 Claude 在基于文档回答时带上引用来源。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/using_citations.ipynb)）
- **Usage & cost Admin API cookbook**：通过 Admin API 拉取 Claude API 的用量与成本数据。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/observability/usage_cost_api.ipynb)）

## 9. 这篇的核心结论

- 这一组内容最不花哨，但最接近真正的生产需求；
- 工程化不是多接几个 tool，而是把 **输出稳定性、可评测性、成本、上下文、速度** 一起考虑；
- 如果你要做长期应用，应该把这些 notebook 当成“上线指南”。

## 对应原始 notebook

- **Extended thinking**：介绍 extended thinking 的思路、预算管理和透明推理体验。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/extended_thinking/extended_thinking.ipynb)）
- **Extended thinking with tool use**：把 extended thinking 与工具调用结合，覆盖多步任务场景。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/extended_thinking/extended_thinking_with_tool_use.ipynb)）
- **Batch processing with Message Batches API**：用批处理 API 低成本处理大批量请求。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/batch_processing.ipynb)）
- **Building evals**：搭建评测系统来衡量和改进 Claude 的输出质量。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/building_evals.ipynb)）
- **Building a moderation filter with Claude**：用提示规则自定义内容审核/风控过滤器。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/building_moderation_filter.ipynb)）
- **Generate synthetic test data for your prompt template**：自动生成测试样例来评估和改进 prompt。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/generate_test_cases.ipynb)）
- **Prompting Claude for JSON mode**：通过提示工程稳定拿到 JSON 输出。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/how_to_enable_json_mode.ipynb)）
- **How to make SQL queries with Claude**：在给定数据库 schema 的前提下，让 Claude 生成 SQL。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/how_to_make_sql_queries.ipynb)）
- **Metaprompt**：用元提示帮你从空白页出发，生成更好的初始 prompt。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/metaprompt.ipynb)）
- **Uploading PDFs to Claude via the API**：通过 API 解析 PDF、提取文本，并交给 Claude 总结。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/pdf_upload_summarization.ipynb)）
- **Prompt caching through the Claude API**：复用上下文缓存以降低成本、提升响应速度。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/prompt_caching.ipynb)）
- **Session memory compaction**：在长对话/长代理流程里压缩会话记忆，控制上下文长度。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/session_memory_compaction.ipynb)）
- **Summarizing web page content with Claude 3 Haiku**：抓取网页正文并用 Haiku 做快速摘要。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/read_web_pages_with_haiku.ipynb)）
- **Sampling responses from Claude beyond the max tokens limit**：用 continuation / prefill 的方式绕过单次 max_tokens 限制。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/sampling_past_max_tokens.ipynb)）
- **Speculative prompt caching**：在用户输入完成前预热缓存，缩短首 token 等待时间。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/speculative_prompt_caching.ipynb)）
- **Citations**：让 Claude 在基于文档回答时带上引用来源。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/using_citations.ipynb)）
- **Usage & cost Admin API cookbook**：通过 Admin API 拉取 Claude API 的用量与成本数据。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/observability/usage_cost_api.ipynb)）
- **Tool evaluation**：并行评估工具本身的表现，而不是只评估最终回答。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_evaluation/tool_evaluation.ipynb)）
- **Memory & context management with Claude Sonnet 4.6**：面向代理应用的持久记忆、上下文编辑与状态管理。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/memory_cookbook.ipynb)）

## 原始资料

- [misc 目录](https://github.com/anthropics/claude-cookbooks/tree/main/misc)
- [extended_thinking 目录](https://github.com/anthropics/claude-cookbooks/tree/main/extended_thinking)
- [observability 目录](https://github.com/anthropics/claude-cookbooks/tree/main/observability)
- [tool_evaluation 目录](https://github.com/anthropics/claude-cookbooks/tree/main/tool_evaluation)
