---
layout: page
title: "05｜Agent 模式篇：链式、并行、路由与编排"
---

`patterns/agents/` 这一组内容，像是 Claude Cookbooks 的“架构课”。它不关心某个具体业务，而是关心：**多步任务应该怎样拆、怎样编排、怎样在成本与效果之间折中。**

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


## 1. 为什么这组内容很重要

很多团队一开始做 Agent，脑子里只有一个模糊想法：  
“让模型自己规划一下，然后一步步做完。”

但真实系统往往会失败在两个地方：

- 任务拆解方式混乱；
- 把所有复杂度都塞给一个大模型。

`patterns/agents/` 的价值就在于：把一些经常被神秘化的“Agent 能力”，重新还原成清楚的工作流模式。

## 2. 三个基础模式：链式、并行、路由

- **Basic workflows**：用 prompt chaining、parallelization、routing 三种模式搭建多 LLM 工作流。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/basic_workflows.ipynb)）

`basic_workflows.ipynb` 本质上在讲三件事：

### Prompt Chaining
把一个复杂任务拆成若干顺序步骤，每一步只解决一个子问题。  
适合：
- 信息抽取后再格式化；
- 先理解再生成；
- 需要中间结果可检查的流程。

### Parallelization
把彼此独立的子任务同时交给多个模型调用。  
适合：
- 多视角分析；
- 多利益相关者影响评估；
- 多候选方案并行生成。

### Routing
先判断输入属于哪一类，再把它送到不同的专用 prompt / 子流程里。  
适合：
- 工单分流；
- 任务类型识别；
- 多业务线共享入口。

这三个模式其实已经能覆盖大量“伪 Agent”场景。  
很多时候，你不需要一个复杂自治体，只需要清楚的 workflow design。

## 3. 生成—评估—优化循环

- **Building evals**：搭建评测系统来衡量和改进 Claude 的输出质量。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/building_evals.ipynb)）
- **Evaluator optimizer**：生成—评估—反馈循环的经典代理模式。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/evaluator_optimizer.ipynb)）

`evaluator_optimizer` 是很经典的一类模式：  
一个模型先生成，另一个模型负责评估并反馈，然后继续修正。

它很适合：

- 需要质量门槛的生成任务；
- 规范严格的文档写作；
- 结构化输出纠错；
- Prompt 自动改进。

这也是“让模型自我改进”最容易走向工程化的一条路，因为它天然与 **评测系统** 相连。

## 4. Orchestrator + Workers：真正进入代理编排

- **Using Haiku as a sub-agent**：用 Haiku 子代理做提取，再用更强模型做综合。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/using_sub_agents.ipynb)）
- **Orchestrator workers**：由中心模型动态分派任务给多个 worker 并合成结果。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/orchestrator_workers.ipynb)）

当问题过于复杂，一个模型很难既做分解、又做执行、还做整合。这时就会进入更像组织结构的模式：

- **Orchestrator**：负责拆任务、分派任务、收集结果；
- **Workers**：负责执行各自的子任务；
- **Synthesizer**：有时由 orchestrator 兼任，负责汇总输出。

这是理解多代理系统最好的起点，因为它避开了很多“自治神话”，直接让你看到：  
**多代理本质上是任务分工与结果合成。**

## 5. 什么时候不该上复杂 Agent

这是很多文章不愿意讲，但 Claude Cookbooks 这组内容其实在暗示的地方：

- 如果流程固定，先用 chaining；
- 如果任务能独立拆分，先用 parallelization；
- 如果只是多类型输入，先用 routing；
- 只有当任务路径会随信息发现而改变时，再认真考虑更强 Agent。

这也是为什么后续 `claude_agent_sdk/` 的研究代理会被放在更靠后的学习路径里。

## 6. 你可以从这里学到什么架构判断

### 先看任务结构，而不是先看框架
Agent 不是产品类别，而是一种任务组织方式。

### 复杂度要分层
不要让一个模型既负责分类、又负责计划、又负责执行、又负责复盘。

### 评估闭环要从一开始就设计
越是多步流程，越需要知道到底是哪个环节在掉链子。

## 7. 可写成哪些文章

- **别再泛化“Agent”了：其实就是这三种工作流**
- **什么时候该用 chaining，什么时候该上 orchestrator**
- **多代理系统不是越多越好**
- **Evaluator-Optimizer：最值得落地的 Agent 模式之一**

## 8. 这篇的核心结论

- `patterns/agents/` 不是在教“炫酷 Agent”，而是在教 **工作流结构**；
- 绝大多数实用系统，都可以从 chaining / parallelization / routing 开始；
- 复杂代理应该是最后一步，而不是第一步。

## 对应原始 notebook

- **Basic workflows**：用 prompt chaining、parallelization、routing 三种模式搭建多 LLM 工作流。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/basic_workflows.ipynb)）
- **Evaluator optimizer**：生成—评估—反馈循环的经典代理模式。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/evaluator_optimizer.ipynb)）
- **Orchestrator workers**：由中心模型动态分派任务给多个 worker 并合成结果。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/patterns/agents/orchestrator_workers.ipynb)）

## 相关补充

- [claude_agent_sdk 目录](https://github.com/anthropics/claude-cookbooks/tree/main/claude_agent_sdk)
- [multimodal/using_sub_agents.ipynb](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/using_sub_agents.ipynb)
