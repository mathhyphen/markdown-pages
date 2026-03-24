---
layout: page
title: "10｜完整索引：66 个 Claude Cookbooks 逐条导读"
---

这一页相当于整套站点的“总目录”。我按照 top-level 主题，把当前 recipes 注册表中的 **66 个 notebook / recipe** 全部列出来，方便你检索、跳转和二次改写。

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


## 如何使用这一页

- 想快速找某个主题，先看目录分组；
- 想写专栏，直接从这里挑一个子主题继续展开；
- 想核对是否已经覆盖仓库内容，这一页最省事。

## 快速统计

- 总 recipes：**66**
- 最大的几个板块：  
  - `misc`：14  
  - `third_party`：13  
  - `tool_use`：11  
  - `multimodal`：6  
  - `capabilities`：5  
  - `claude_agent_sdk`：5

## Capabilities 基础能力（5）

- **Classification with Claude** — 用 Claude 做文本/工单分类，示范如何结合 RAG 与推理过程提升分类质量。（`capabilities/classification/guide.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/classification/guide.ipynb)）
- **Enhancing RAG with contextual retrieval** — 通过给 chunk 补充上下文再做 embedding，提升检索质量。（`capabilities/contextual-embeddings/guide.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/contextual-embeddings/guide.ipynb)）
- **Retrieval augmented generation** — 从基础 RAG 到评测、summary indexing、reranking 的完整优化路径。（`capabilities/retrieval_augmented_generation/guide.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/retrieval_augmented_generation/guide.ipynb)）
- **Summarization with Claude** — 以法律文档为例，系统讲解摘要任务、评测与高级技巧。（`capabilities/summarization/guide.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/summarization/guide.ipynb)）
- **Text to SQL with Claude** — 把自然语言问题转换成 SQL，并展示如何用 RAG 与自我改进提升效果。（`capabilities/text_to_sql/guide.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/text_to_sql/guide.ipynb)）

## Tool Use（11）

- **Using a calculator tool with Claude** — 最基础的工具调用示例：让 Claude 借助计算器。（`tool_use/calculator_tool.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/calculator_tool.ipynb)）
- **Creating a customer service agent with client-side tools** — 用客户查询、订单查询、取消订单等工具搭建客服代理。（`tool_use/customer_service_agent.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/customer_service_agent.ipynb)）
- **Extracting structured JSON using Claude and tool use** — 用工具调用把抽取结果稳定约束成结构化 JSON。（`tool_use/extracting_structured_json.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/extracting_structured_json.ipynb)）
- **Memory & context management with Claude Sonnet 4.6** — 面向代理应用的持久记忆、上下文编辑与状态管理。（`tool_use/memory_cookbook.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/memory_cookbook.ipynb)）
- **Parallel tool calls on Claude 3.7 Sonnet** — 通过 meta-pattern 让 Claude 更高效地并行调用工具。（`tool_use/parallel_tools.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/parallel_tools.ipynb)）
- **Tool choice** — 控制 Claude 在自动、强制、禁用等不同模式下如何选工具。（`tool_use/tool_choice.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/tool_choice.ipynb)）
- **Note-saving tool with Pydantic and Anthropic tool use** — 用 Pydantic 定义更可靠、更类型安全的工具接口。（`tool_use/tool_use_with_pydantic.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/tool_use_with_pydantic.ipynb)）
- **Using vision with tools** — 把视觉输入与工具调用结合，做结构化提取。（`tool_use/vision_with_tools.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/vision_with_tools.ipynb)）
- **Programmatic tool calling (PTC)** — 让 Claude 在代码执行环境里以程序化方式调用工具，降低延迟与 token 消耗。（`tool_use/programmatic_tool_calling_ptc.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/programmatic_tool_calling_ptc.ipynb)）
- **Tool search with embeddings** — 当工具很多时，用 embedding 做语义匹配与动态工具发现。（`tool_use/tool_search_with_embeddings.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/tool_search_with_embeddings.ipynb)）
- **Automatic context compaction** — 在长流程代理中自动压缩上下文，管理 token 预算。（`tool_use/automatic-context-compaction.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/automatic-context-compaction.ipynb)）

## Multimodal（6）

- **Getting started with vision** — 从零开始把图片传给 Claude 做视觉理解。（`multimodal/getting_started_with_vision.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/getting_started_with_vision.ipynb)）
- **Best practices for using vision with Claude** — 总结视觉模型输入、分辨率、任务设计与结果校验的经验。（`multimodal/best_practices_for_vision.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/best_practices_for_vision.ipynb)）
- **How to transcribe documents with Claude** — 把图片或 PDF 中的非结构化文本提取成结构化内容。（`multimodal/how_to_transcribe_text.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/how_to_transcribe_text.ipynb)）
- **Working with charts, graphs, and slide decks** — 分析图表、幻灯片和可视化材料。（`multimodal/reading_charts_graphs_powerpoints.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/reading_charts_graphs_powerpoints.ipynb)）
- **Using Haiku as a sub-agent** — 用 Haiku 子代理做提取，再用更强模型做综合。（`multimodal/using_sub_agents.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/using_sub_agents.ipynb)）
- **Giving Claude a crop tool for better image analysis** — 给 Claude 一个裁剪工具，让它放大局部区域进行更细的图像分析。（`multimodal/crop_tool.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/crop_tool.ipynb)）

## Agent Patterns（3）

- **Basic workflows** — 用 prompt chaining、parallelization、routing 三种模式搭建多 LLM 工作流。（`patterns/agents/basic_workflows.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/basic_workflows.ipynb)）
- **Evaluator optimizer** — 生成—评估—反馈循环的经典代理模式。（`patterns/agents/evaluator_optimizer.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/evaluator_optimizer.ipynb)）
- **Orchestrator workers** — 由中心模型动态分派任务给多个 worker 并合成结果。（`patterns/agents/orchestrator_workers.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/orchestrator_workers.ipynb)）

## Claude Agent SDK（5）

- **The one-liner research agent** — 使用 Claude Agent SDK 和 WebSearch 构建最小化研究代理。（`claude_agent_sdk/00_The_one_liner_research_agent.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/00_The_one_liner_research_agent.ipynb)）
- **The chief of staff agent** — 用子代理、hooks、output styles 与 plan mode 组织多代理工作流。（`claude_agent_sdk/01_The_chief_of_staff_agent.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/01_The_chief_of_staff_agent.ipynb)）
- **The observability agent** — 通过 MCP 把代理连接到 GitHub 等外部系统，做监控与 CI 工作流。（`claude_agent_sdk/02_The_observability_agent.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/02_The_observability_agent.ipynb)）
- **The site reliability agent** — 面向 SRE/事故响应，展示可读写 MCP 工具下的诊断、修复与复盘。（`claude_agent_sdk/03_The_site_reliability_agent.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/03_The_site_reliability_agent.ipynb)）
- **Migrating from the OpenAI Agents SDK** — 把 OpenAI Agents SDK 应用迁移到 Claude Agent SDK。（`claude_agent_sdk/04_migrating_from_openai_agents_sdk.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/04_migrating_from_openai_agents_sdk.ipynb)）

## Responses / Misc（14）

- **Batch processing with Message Batches API** — 用批处理 API 低成本处理大批量请求。（`misc/batch_processing.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/batch_processing.ipynb)）
- **Building evals** — 搭建评测系统来衡量和改进 Claude 的输出质量。（`misc/building_evals.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/building_evals.ipynb)）
- **Building a moderation filter with Claude** — 用提示规则自定义内容审核/风控过滤器。（`misc/building_moderation_filter.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/building_moderation_filter.ipynb)）
- **Generate synthetic test data for your prompt template** — 自动生成测试样例来评估和改进 prompt。（`misc/generate_test_cases.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/generate_test_cases.ipynb)）
- **Prompting Claude for JSON mode** — 通过提示工程稳定拿到 JSON 输出。（`misc/how_to_enable_json_mode.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/how_to_enable_json_mode.ipynb)）
- **How to make SQL queries with Claude** — 在给定数据库 schema 的前提下，让 Claude 生成 SQL。（`misc/how_to_make_sql_queries.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/how_to_make_sql_queries.ipynb)）
- **Metaprompt** — 用元提示帮你从空白页出发，生成更好的初始 prompt。（`misc/metaprompt.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/metaprompt.ipynb)）
- **Uploading PDFs to Claude via the API** — 通过 API 解析 PDF、提取文本，并交给 Claude 总结。（`misc/pdf_upload_summarization.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/pdf_upload_summarization.ipynb)）
- **Prompt caching through the Claude API** — 复用上下文缓存以降低成本、提升响应速度。（`misc/prompt_caching.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/prompt_caching.ipynb)）
- **Session memory compaction** — 在长对话/长代理流程里压缩会话记忆，控制上下文长度。（`misc/session_memory_compaction.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/session_memory_compaction.ipynb)）
- **Summarizing web page content with Claude 3 Haiku** — 抓取网页正文并用 Haiku 做快速摘要。（`misc/read_web_pages_with_haiku.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/read_web_pages_with_haiku.ipynb)）
- **Sampling responses from Claude beyond the max tokens limit** — 用 continuation / prefill 的方式绕过单次 max_tokens 限制。（`misc/sampling_past_max_tokens.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/sampling_past_max_tokens.ipynb)）
- **Speculative prompt caching** — 在用户输入完成前预热缓存，缩短首 token 等待时间。（`misc/speculative_prompt_caching.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/speculative_prompt_caching.ipynb)）
- **Citations** — 让 Claude 在基于文档回答时带上引用来源。（`misc/using_citations.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/using_citations.ipynb)）

## Extended Thinking（2）

- **Extended thinking** — 介绍 extended thinking 的思路、预算管理和透明推理体验。（`extended_thinking/extended_thinking.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/extended_thinking/extended_thinking.ipynb)）
- **Extended thinking with tool use** — 把 extended thinking 与工具调用结合，覆盖多步任务场景。（`extended_thinking/extended_thinking_with_tool_use.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/extended_thinking/extended_thinking_with_tool_use.ipynb)）

## Observability（1）

- **Usage & cost Admin API cookbook** — 通过 Admin API 拉取 Claude API 的用量与成本数据。（`observability/usage_cost_api.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/observability/usage_cost_api.ipynb)）

## Skills（3）

- **Introduction to Claude Skills** — 介绍 Skills 的概念、安装方式，以及 Excel / PowerPoint / PDF 能力。（`skills/notebooks/01_skills_introduction.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/skills/notebooks/01_skills_introduction.ipynb)）
- **Claude Skills for financial applications** — 把 Skills 用到财务 dashboard、投资组合分析等场景。（`skills/notebooks/02_skills_financial_applications.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/skills/notebooks/02_skills_financial_applications.ipynb)）
- **Building custom Skills for Claude** — 自定义、打包和管理自己的 Skills。（`skills/notebooks/03_skills_custom_development.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/skills/notebooks/03_skills_custom_development.ipynb)）

## Fine-Tuning（1）

- **Finetuning Claude 3 Haiku on Bedrock** — 在 Amazon Bedrock 上微调 Claude 3 Haiku 的步骤与注意事项。（`finetuning/finetuning_on_bedrock.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/finetuning/finetuning_on_bedrock.ipynb)）

## Coding / Prompting（1）

- **Prompting for frontend aesthetics** — 讨论如何提示 Claude 产出更有风格感的前端界面，而不是“千篇一律”的 AI 设计。（`coding/prompting_for_frontend_aesthetics.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb)）

## Third-party Integrations（13）

- **Transcribe audio with Deepgram and prepare interview questions** — 用 Deepgram 做音频转写，再用 Claude 生成面试问题。（`third_party/Deepgram/prerecorded_audio.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/Deepgram/prerecorded_audio.ipynb)）
- **RAG pipeline with LlamaIndex** — 使用 LlamaIndex 快速搭建基础 RAG 流水线。（`third_party/LlamaIndex/Basic_RAG_With_LlamaIndex.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/Basic_RAG_With_LlamaIndex.ipynb)）
- **Multi-document agents** — 用 LlamaIndex 的 DocumentAgents 处理多文档问答。（`third_party/LlamaIndex/Multi_Document_Agents.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/Multi_Document_Agents.ipynb)）
- **Multi-modal with LlamaIndex** — 借助 LlamaIndex 的多模态抽象对接 Anthropic 模型。（`third_party/LlamaIndex/Multi_Modal.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/Multi_Modal.ipynb)）
- **ReAct agent with LlamaIndex** — 在 LlamaIndex 中实现基于 ReAct 的工具型代理。（`third_party/LlamaIndex/ReAct_Agent.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/ReAct_Agent.ipynb)）
- **RouterQuery engine** — 把查询路由到不同索引或不同知识源。（`third_party/LlamaIndex/Router_Query_Engine.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/Router_Query_Engine.ipynb)）
- **SubQuestionQueryEngine** — 把复杂问题拆成子问题，再跨文档回答。（`third_party/LlamaIndex/SubQuestion_Query_Engine.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/SubQuestion_Query_Engine.ipynb)）
- **How to build a RAG system using Claude 3 and MongoDB** — 用 MongoDB 构建带知识库的对话系统。（`third_party/MongoDB/rag_using_mongodb.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/MongoDB/rag_using_mongodb.ipynb)）
- **Claude 3 RAG agents with LangChain v1** — 借助 LangChain v1 的 agent 框架做 Claude RAG agents。（`third_party/Pinecone/claude_3_rag_agent.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/Pinecone/claude_3_rag_agent.ipynb)）
- **Retrieval-augmented generation using Pinecone** — 把 Claude 与 Pinecone 向量数据库连接起来。（`third_party/Pinecone/rag_using_pinecone.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/Pinecone/rag_using_pinecone.ipynb)）
- **Iteratively searching Wikipedia with Claude** — 展示较早期的迭代式 Wikipedia 搜索研究流程。（`third_party/Wikipedia/wikipedia-search-cookbook.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/Wikipedia/wikipedia-search-cookbook.ipynb)）
- **Using the Wolfram Alpha LLM API as a tool with Claude** — 把 Wolfram Alpha LLM API 作为 Claude 的外部工具。（`third_party/WolframAlpha/using_llm_api.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/WolframAlpha/using_llm_api.ipynb)）
- **Low latency voice assistant with ElevenLabs** — 结合 ElevenLabs 做低延迟语音助手。（`third_party/ElevenLabs/low_latency_stt_claude_tts.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/ElevenLabs/low_latency_stt_claude_tts.ipynb)）

## Tool Evaluation（1）

- **Tool evaluation** — 并行评估工具本身的表现，而不是只评估最终回答。（`tool_evaluation/tool_evaluation.ipynb`，[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_evaluation/tool_evaluation.ipynb)）

## 你可以怎么继续扩展这份索引

1. 给每条 notebook 再补一列“适合谁看”；  
2. 增加“难度等级”；  
3. 增加“与哪些 notebook 一起看效果最好”；  
4. 增加你自己的中文实战文章链接。

## 原始资料

- [recipes 注册表](https://raw.githubusercontent.com/anthropics/claude-cookbooks/main/registry.yaml)
- [Claude Cookbooks 仓库首页](https://github.com/anthropics/claude-cookbooks)
