---
layout: page
title: "08｜生态集成篇：LlamaIndex、Pinecone、MongoDB、音频与语音"
---

`third_party/` 是 Claude Cookbooks 里最能体现“生态位”的一组内容。它传递的不是“你必须用某个框架”，而是：**Claude 可以嵌入很多现成生态，从而降低你接入生产系统的门槛。**

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


## 为什么这组内容值得单独讲

因为很多开发者并不会从零搭一套系统，而是已经在用：

- Pinecone / MongoDB 这样的数据底座；
- LlamaIndex / LangChain 这样的编排框架；
- Deepgram / ElevenLabs 这样的音视频服务；
- WolframAlpha 这样的专业计算服务。

`third_party/` 的价值，就在于它把 Claude 放进这些已有组件里。

## 1. RAG 生态：Pinecone、MongoDB、LlamaIndex

- **RAG pipeline with LlamaIndex**：使用 LlamaIndex 快速搭建基础 RAG 流水线。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/Basic_RAG_With_LlamaIndex.ipynb)）
- **Multi-document agents**：用 LlamaIndex 的 DocumentAgents 处理多文档问答。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/Multi_Document_Agents.ipynb)）
- **RouterQuery engine**：把查询路由到不同索引或不同知识源。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/Router_Query_Engine.ipynb)）
- **SubQuestionQueryEngine**：把复杂问题拆成子问题，再跨文档回答。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/SubQuestion_Query_Engine.ipynb)）
- **How to build a RAG system using Claude 3 and MongoDB**：用 MongoDB 构建带知识库的对话系统。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/MongoDB/rag_using_mongodb.ipynb)）
- **Claude 3 RAG agents with LangChain v1**：借助 LangChain v1 的 agent 框架做 Claude RAG agents。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/Pinecone/claude_3_rag_agent.ipynb)）
- **Retrieval-augmented generation using Pinecone**：把 Claude 与 Pinecone 向量数据库连接起来。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/Pinecone/rag_using_pinecone.ipynb)）

这里的重点不是某个框架语法，而是你能看到三种集成思路：

### 存储层集成
例如 Pinecone、MongoDB。  
适合：你已经决定了数据底座，只想把 Claude 接进去。

### 编排层集成
例如 LlamaIndex、LangChain。  
适合：你已经采用某种上层框架来组织 RAG、tool use、agents。

### 多文档 / 路由 / 子问题分解
这类 notebook 特别适合写成“复杂查询如何拆解”的专题。

## 2. 工具与专业服务集成

- **Iteratively searching Wikipedia with Claude**：展示较早期的迭代式 Wikipedia 搜索研究流程。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/Wikipedia/wikipedia-search-cookbook.ipynb)）
- **Using the Wolfram Alpha LLM API as a tool with Claude**：把 Wolfram Alpha LLM API 作为 Claude 的外部工具。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/WolframAlpha/using_llm_api.ipynb)）

这一类示例提醒你：  
Claude 不一定什么都要自己算、自己查、自己推。  
当遇到数学、科学计算、百科检索等任务时，把专业系统作为工具接入，往往更稳。

## 3. 音频与语音：从文字世界走向声音世界

- **Transcribe audio with Deepgram and prepare interview questions**：用 Deepgram 做音频转写，再用 Claude 生成面试问题。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/Deepgram/prerecorded_audio.ipynb)）
- **Low latency voice assistant with ElevenLabs**：结合 ElevenLabs 做低延迟语音助手。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/ElevenLabs/low_latency_stt_claude_tts.ipynb)）

这两篇很适合写成“语音 Agent”系列，因为它们展示了：

- 语音输入（STT）；
- Claude 的理解与生成；
- 语音输出（TTS）；
- 面向实时或低延迟交互的系统组合。

它们的重点不是 Claude 会不会说话，而是：**怎么把 Claude 放进一个完整的语音链路里**。

## 4. 多模态框架桥接

- **Multi-modal with LlamaIndex**：借助 LlamaIndex 的多模态抽象对接 Anthropic 模型。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/Multi_Modal.ipynb)）
- **ReAct agent with LlamaIndex**：在 LlamaIndex 中实现基于 ReAct 的工具型代理。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/ReAct_Agent.ipynb)）

这些 notebook 的价值在于让你看到：  
多模态与 ReAct 并不是 Anthropic 专属写法，而是可以通过第三方抽象层整合到更大的系统中。

## 5. 该怎么读这组 notebook

### 先问自己：你已经有什么
- 已经有向量库？先看 Pinecone / MongoDB；
- 已经有框架？先看 LlamaIndex / LangChain；
- 已经有语音链路？先看 Deepgram / ElevenLabs。

### 不要把它当“官方唯一答案”
这些 notebook 更像“生态适配样例”，而不是“官方标准架构”。

### 重点看模式迁移
真正值得带走的是：
- 外部系统如何暴露给 Claude；
- 检索层和编排层如何分工；
- 哪些能力应该由专业服务承担。

## 6. 可写成哪些文章

- **Claude 接 Pinecone：RAG 不只是换一个模型**
- **用 LlamaIndex 做 Claude 应用时，到底是谁在负责什么**
- **语音 Agent 的最小闭环：Deepgram + Claude + ElevenLabs**
- **为什么专业计算应该交给 WolframAlpha，而不是让模型硬算**

## 7. 这篇的核心结论

- `third_party/` 体现的是 Claude 的生态兼容性，而不是某种固定框架路线；
- 这组内容特别适合已经有现成技术栈的团队；
- 真正值得学的是“Claude 如何嵌入系统”，而不是“某个库怎么 import”。

## 对应原始 notebook

- **Transcribe audio with Deepgram and prepare interview questions**：用 Deepgram 做音频转写，再用 Claude 生成面试问题。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/Deepgram/prerecorded_audio.ipynb)）
- **RAG pipeline with LlamaIndex**：使用 LlamaIndex 快速搭建基础 RAG 流水线。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/Basic_RAG_With_LlamaIndex.ipynb)）
- **Multi-document agents**：用 LlamaIndex 的 DocumentAgents 处理多文档问答。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/Multi_Document_Agents.ipynb)）
- **Multi-modal with LlamaIndex**：借助 LlamaIndex 的多模态抽象对接 Anthropic 模型。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/Multi_Modal.ipynb)）
- **ReAct agent with LlamaIndex**：在 LlamaIndex 中实现基于 ReAct 的工具型代理。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/ReAct_Agent.ipynb)）
- **RouterQuery engine**：把查询路由到不同索引或不同知识源。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/Router_Query_Engine.ipynb)）
- **SubQuestionQueryEngine**：把复杂问题拆成子问题，再跨文档回答。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/LlamaIndex/SubQuestion_Query_Engine.ipynb)）
- **How to build a RAG system using Claude 3 and MongoDB**：用 MongoDB 构建带知识库的对话系统。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/MongoDB/rag_using_mongodb.ipynb)）
- **Claude 3 RAG agents with LangChain v1**：借助 LangChain v1 的 agent 框架做 Claude RAG agents。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/Pinecone/claude_3_rag_agent.ipynb)）
- **Retrieval-augmented generation using Pinecone**：把 Claude 与 Pinecone 向量数据库连接起来。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/Pinecone/rag_using_pinecone.ipynb)）
- **Iteratively searching Wikipedia with Claude**：展示较早期的迭代式 Wikipedia 搜索研究流程。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/Wikipedia/wikipedia-search-cookbook.ipynb)）
- **Using the Wolfram Alpha LLM API as a tool with Claude**：把 Wolfram Alpha LLM API 作为 Claude 的外部工具。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/WolframAlpha/using_llm_api.ipynb)）
- **Low latency voice assistant with ElevenLabs**：结合 ElevenLabs 做低延迟语音助手。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/third_party/ElevenLabs/low_latency_stt_claude_tts.ipynb)）

## 原始资料

- [third_party 目录](https://github.com/anthropics/claude-cookbooks/tree/main/third_party)
- [recipes 注册表](https://raw.githubusercontent.com/anthropics/claude-cookbooks/main/registry.yaml)
