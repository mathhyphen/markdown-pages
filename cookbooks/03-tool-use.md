---
layout: page
title: "03｜工具调用篇：从函数调用到工具生态"
---

如果 `capabilities/` 解决的是“Claude 能干什么”，那么 `tool_use/` 解决的就是“Claude **如何接入外部能力**”。这也是 Claude Cookbooks 里最像现代 Agent 工程的一组内容。

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


## 为什么工具调用是分水岭

只靠模型本身，Claude 再强也受限于：

- 不能直接查数据库；
- 不能执行真实操作；
- 不能访问你自己的业务系统；
- 不能天然保证数值计算、结构化输出或状态变更的可靠性。

一旦接上工具，Claude 就从“会说”变成“能做”。  
因此 `tool_use/` 可以看成整座仓库从“模型调用”迈向“代理系统”的关键转折点。

## 1. 最基础的一层：给 Claude 一个明确工具

- **Using a calculator tool with Claude**：最基础的工具调用示例：让 Claude 借助计算器。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/calculator_tool.ipynb)）
- **Creating a customer service agent with client-side tools**：用客户查询、订单查询、取消订单等工具搭建客服代理。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/customer_service_agent.ipynb)）
- **Extracting structured JSON using Claude and tool use**：用工具调用把抽取结果稳定约束成结构化 JSON。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/extracting_structured_json.ipynb)）
- **Tool choice**：控制 Claude 在自动、强制、禁用等不同模式下如何选工具。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/tool_choice.ipynb)）
- **Note-saving tool with Pydantic and Anthropic tool use**：用 Pydantic 定义更可靠、更类型安全的工具接口。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/tool_use_with_pydantic.ipynb)）

这一层解决的是两个基础问题：

1. 工具 schema 怎么定义；
2. Claude 什么时候该调工具、怎么把结果接回来。

### 这几篇应该怎么读

- **calculator_tool**：理解最小工具调用闭环；
- **customer_service_agent**：理解工具如何形成业务操作流程；
- **extracting_structured_json**：理解“把模型输出稳定成结构”的另一种路径；
- **tool_choice**：理解你可以强控还是放手让模型选；
- **tool_use_with_pydantic**：理解为什么类型校验对工程可靠性很重要。

## 2. 更进一步：让工具调用更像系统，而不是单次函数调用

- **Memory & context management with Claude Sonnet 4.6**：面向代理应用的持久记忆、上下文编辑与状态管理。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/memory_cookbook.ipynb)）
- **Parallel tool calls on Claude 3.7 Sonnet**：通过 meta-pattern 让 Claude 更高效地并行调用工具。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/parallel_tools.ipynb)）
- **Automatic context compaction**：在长流程代理中自动压缩上下文，管理 token 预算。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/automatic-context-compaction.ipynb)）

当你的 Agent 不再只执行一步，而是开始长时间运行、持续调用很多工具时，真正的问题会变成：

- 上下文越来越长怎么办；
- 工具可以并行吗；
- 记忆和状态要不要持久化；
- 多轮操作如何维持一致性。

这三篇很像“Agent 工程的日常问题清单”。

### Memory cookbook 为什么重要

很多人一开始做 Agent，只关注能不能连上工具；真正上线后，最先崩的常常不是工具本身，而是：

- 对话历史太长；
- 上下文污染；
- 状态漂移；
- 忘记关键事实。

所以 **memory / context management** 其实是工具型 Agent 是否可用的核心。

## 3. 最新趋势：工具数量变多以后怎么办

- **Programmatic tool calling (PTC)**：让 Claude 在代码执行环境里以程序化方式调用工具，降低延迟与 token 消耗。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/programmatic_tool_calling_ptc.ipynb)）
- **Tool search with embeddings**：当工具很多时，用 embedding 做语义匹配与动态工具发现。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/tool_search_with_embeddings.ipynb)）

当工具从 3 个涨到 30 个、300 个，问题就不是“会不会调工具”，而是：

- Claude 怎么知道有哪些工具；
- 怎么避免把所有工具 schema 都塞进上下文；
- 怎么减少 tool planning 的 token 成本；
- 怎么让工具选择更聪明。

这两篇分别代表了两个方向：

### Programmatic Tool Calling（PTC）
把一部分工具调用逻辑转到代码执行环境里，从而减少延迟与 token 消耗。  
它的意义在于：**让模型做高层规划，让程序做低层执行**。

### Tool Search with Embeddings
当工具数量巨大时，用 embedding 做语义检索，让 Claude 动态发现工具。  
它的意义在于：**工具也可以像知识库一样先检索再调用**。

## 4. 视觉与工具的结合

- **Using vision with tools**：把视觉输入与工具调用结合，做结构化提取。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/vision_with_tools.ipynb)）

这是一个非常有代表性的跨界例子：图像理解本身并不总能直接形成最终结果，但如果配合工具，就能把视觉输入转成结构化记录、数据库写入或后续自动化流程。

这说明 Claude Cookbooks 不是按能力孤岛组织的，而是在不断展示 **能力之间如何组合**。

## 5. 我最建议你吸收的不是代码，而是四个设计原则

### 原则一：工具描述就是接口设计
工具的 `name`、`description`、`input_schema` 不是装饰，而是 Claude 选择和使用工具的核心上下文。

### 原则二：让模型做判断，让程序做确定性执行
越是可确定的步骤，越应该交给程序，而不是让模型自由发挥。

### 原则三：长流程 Agent 一定会遇到上下文管理问题
不要等系统变慢、变贵、变乱了再补 memory compaction。

### 原则四：工具生态迟早会膨胀
今天是 3 个工具，明天就是 50 个工具。  
所以越早思考工具搜索、工具分类、工具治理，越不容易重构。

## 6. 可以写成哪些博客选题

你完全可以把这一组拆成这些文章：

- **Claude 工具调用不是 function calling 的换皮**
- **如何设计一个好用的 tool schema**
- **长上下文 Agent 为什么最终会死在记忆管理上**
- **当工具越来越多时，为什么要给工具做 embedding**

## 7. 这篇的核心结论

- `tool_use/` 是从“会回答”迈向“会执行”的关键目录；
- 真正重要的不是某一个 demo，而是 **工具治理、状态管理、上下文控制**；
- Claude Cookbooks 在这一块的演进方向，非常明显地指向更真实的 Agent 工程。

## 对应原始 notebook

- **Using a calculator tool with Claude**：最基础的工具调用示例：让 Claude 借助计算器。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/calculator_tool.ipynb)）
- **Creating a customer service agent with client-side tools**：用客户查询、订单查询、取消订单等工具搭建客服代理。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/customer_service_agent.ipynb)）
- **Extracting structured JSON using Claude and tool use**：用工具调用把抽取结果稳定约束成结构化 JSON。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/extracting_structured_json.ipynb)）
- **Memory & context management with Claude Sonnet 4.6**：面向代理应用的持久记忆、上下文编辑与状态管理。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/memory_cookbook.ipynb)）
- **Parallel tool calls on Claude 3.7 Sonnet**：通过 meta-pattern 让 Claude 更高效地并行调用工具。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/parallel_tools.ipynb)）
- **Tool choice**：控制 Claude 在自动、强制、禁用等不同模式下如何选工具。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/tool_choice.ipynb)）
- **Note-saving tool with Pydantic and Anthropic tool use**：用 Pydantic 定义更可靠、更类型安全的工具接口。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/tool_use_with_pydantic.ipynb)）
- **Using vision with tools**：把视觉输入与工具调用结合，做结构化提取。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/vision_with_tools.ipynb)）
- **Programmatic tool calling (PTC)**：让 Claude 在代码执行环境里以程序化方式调用工具，降低延迟与 token 消耗。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/programmatic_tool_calling_ptc.ipynb)）
- **Tool search with embeddings**：当工具很多时，用 embedding 做语义匹配与动态工具发现。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/tool_search_with_embeddings.ipynb)）
- **Automatic context compaction**：在长流程代理中自动压缩上下文，管理 token 预算。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/automatic-context-compaction.ipynb)）

## 原始资料

- [tool_use 目录](https://github.com/anthropics/claude-cookbooks/tree/main/tool_use)
- [recipes 注册表](https://raw.githubusercontent.com/anthropics/claude-cookbooks/main/registry.yaml)
