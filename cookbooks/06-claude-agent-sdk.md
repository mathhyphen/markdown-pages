---
layout: page
title: "06｜Claude Agent SDK 篇：把模式落成真正的代理"
---

如果说 `patterns/agents/` 是“架构概念课”，那么 `claude_agent_sdk/` 就是“把架构写成代码”的地方。它代表的是 Claude Cookbooks 的一个明显新阶段：从 recipe demo 走向 **真正的代理开发 SDK**。

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


## 1. 这一组内容为什么值得单独成篇

因为它不再满足于讲“怎么设计一个多步流程”，而是开始回答：

- 代理应该怎么定义；
- 工具如何授权；
- 与外部系统怎么连接；
- 子代理如何组织；
- 如何从其他 Agent SDK 迁移过来。

也就是说，它已经不再只是“调用一个模型”，而是在讲 **代理运行时** 的问题。

## 2. 最小起点：Research Agent

- **The one-liner research agent**：使用 Claude Agent SDK 和 WebSearch 构建最小化研究代理。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/00_The_one_liner_research_agent.ipynb)）

这一篇非常适合作为 SDK 的第一篇，因为它展示了一个很清晰的代理任务：  
**信息不在输入里，而在外部世界里；代理需要一边搜索、一边判断下一步搜什么。**

这比很多“玩具 Agent”更真实，因为研究任务本来就具备两个特点：

1. 答案不自带，需要外部检索；
2. 路径不是预先写死，而是边查边展开。

## 3. 组织型代理：Chief of Staff

- **The chief of staff agent**：用子代理、hooks、output styles 与 plan mode 组织多代理工作流。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/01_The_chief_of_staff_agent.ipynb)）

这类例子把多代理系统从“技术演示”拉近到“组织协作 metaphor”。  
Chief of Staff 不是单纯回答问题，而像一个高层协调者：

- 接收目标；
- 制定计划；
- 分给不同子代理；
- 回收结果并输出最终产物。

如果你要写博客，这一篇很适合讲“AI 代理如何模拟组织分工”。

## 4. 外部系统与可操作环境：Observability / SRE

- **The observability agent**：通过 MCP 把代理连接到 GitHub 等外部系统，做监控与 CI 工作流。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/02_The_observability_agent.ipynb)）
- **The site reliability agent**：面向 SRE/事故响应，展示可读写 MCP 工具下的诊断、修复与复盘。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/03_The_site_reliability_agent.ipynb)）

这两篇的意义在于：  
它们把代理从“只会看文档”推进到了“能接外部系统做真实工作”的阶段。

### Observability Agent
强调的是监控、GitHub、CI 等外部系统连接，往往通过 MCP 来暴露能力。

### Site Reliability Agent
更进一步，不只是观察，还包含读写能力、诊断、修复和事后文档化。

这说明 Claude Agent SDK 的使用场景，正在明显靠近工程运维与真实企业系统。

## 5. 迁移视角：从 OpenAI Agents SDK 迁过来

- **Migrating from the OpenAI Agents SDK**：把 OpenAI Agents SDK 应用迁移到 Claude Agent SDK。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/04_migrating_from_openai_agents_sdk.ipynb)）

这一篇很重要，因为它说明 Anthropic 已经不只是面向“新用户”，而是在争取已经使用其他 Agent 框架的人。  
对写作者来说，这也提供了很好的选题方向：

- Claude Agent SDK 和 OpenAI Agents SDK 的概念映射；
- tools / sessions / handoffs / guardrails 的对应关系；
- 迁移成本与心智模型变化。

## 6. 这一组内容的核心变化

和前面的 notebook 相比，`claude_agent_sdk/` 至少有三点新意：

### 更像真实软件开发
开始出现 SDK、依赖、配置、工具授权、运行时事件等概念。

### 更像系统设计
不再只是“写一个 prompt”，而是考虑代理生命周期。

### 更强调外部环境
代理能做什么，越来越依赖它接入了哪些系统、允许哪些动作。

## 7. 对中文内容创作的启发

如果你要把它写成一个长期专栏，我建议这一组拆成：

1. **什么是 Claude Agent SDK**
2. **为什么 Research Agent 是最好的第一例子**
3. **Chief of Staff：多代理系统的组织学隐喻**
4. **从可观测性到 SRE：代理开始进入生产系统**
5. **如何从 OpenAI Agents SDK 迁移到 Claude Agent SDK**

## 8. 这篇的核心结论

- `claude_agent_sdk/` 是 Claude Cookbooks 里最明显“迈向工程化代理开发”的一组内容；
- 它把 Agent 从概念模式推进到 SDK、系统连接和运行时层面；
- 如果你真正打算做长期可维护的 Agent 系统，这一组比单个 demo 更值得反复看。

## 对应原始 notebook

- **The one-liner research agent**：使用 Claude Agent SDK 和 WebSearch 构建最小化研究代理。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/00_The_one_liner_research_agent.ipynb)）
- **The chief of staff agent**：用子代理、hooks、output styles 与 plan mode 组织多代理工作流。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/01_The_chief_of_staff_agent.ipynb)）
- **The observability agent**：通过 MCP 把代理连接到 GitHub 等外部系统，做监控与 CI 工作流。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/02_The_observability_agent.ipynb)）
- **The site reliability agent**：面向 SRE/事故响应，展示可读写 MCP 工具下的诊断、修复与复盘。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/03_The_site_reliability_agent.ipynb)）
- **Migrating from the OpenAI Agents SDK**：把 OpenAI Agents SDK 应用迁移到 Claude Agent SDK。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/claude_agent_sdk/04_migrating_from_openai_agents_sdk.ipynb)）

## 相关补充

- [patterns/agents/basic_workflows.ipynb](https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/basic_workflows.ipynb)
- [Anthropic 开发文档](https://docs.claude.com)
