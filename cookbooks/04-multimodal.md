---
layout: page
title: "04｜多模态篇：视觉、文档、图表与图像理解"
---

Claude Cookbooks 的多模态部分很值得看，因为它并不只是展示“Claude 能看图”，而是在回答一个更实用的问题：**图片、PDF、图表、表单、幻灯片这些复杂输入，如何被接进真实工作流？**

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


## 多模态在这座仓库里的位置

多模态并不是一个孤立能力，它在整个 repo 中承担的是“把现实世界里的非结构化材料变成可理解、可处理对象”的角色。  
换句话说，如果 `tool_use/` 解决“Claude 怎么行动”，那 `multimodal/` 解决的就是“Claude 怎么看懂复杂输入”。

## 1. 入门两件套：先会传图，再学会提问

- **Getting started with vision**：从零开始把图片传给 Claude 做视觉理解。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/getting_started_with_vision.ipynb)）
- **Best practices for using vision with Claude**：总结视觉模型输入、分辨率、任务设计与结果校验的经验。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/best_practices_for_vision.ipynb)）

这两篇应该一起看：

- **Getting started with vision**：教你把图像输入传给 Claude；
- **Best practices for vision**：告诉你怎样设计输入与任务，避免视觉任务失真。

视觉任务里最常见的问题并不是“模型看不懂”，而是：

- 图太大或太小；
- 局部信息太密；
- 任务目标写得太含糊；
- 没有要求结构化输出；
- 缺乏结果核对机制。

因此“best practices” 往往比“hello world”更接近真实价值。

## 2. 文档理解：多模态最容易落地的地方

- **Uploading PDFs to Claude via the API**：通过 API 解析 PDF、提取文本，并交给 Claude 总结。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/misc/pdf_upload_summarization.ipynb)）
- **How to transcribe documents with Claude**：把图片或 PDF 中的非结构化文本提取成结构化内容。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/how_to_transcribe_text.ipynb)）

许多公司真正的多模态需求并不是图片生成，而是：

- 扫描件 OCR / 转写；
- 合同、表单、发票、票据解析；
- PDF 摘要；
- 截图内容抽取；
- 手写或排版复杂内容的结构化整理。

`how_to_transcribe_text` 这类 notebook 的核心价值是让你看到：**图像理解并不是终点，结构化提取才是业务价值所在**。

## 3. 图表与幻灯片：从“看见”到“读懂”

- **Working with charts, graphs, and slide decks**：分析图表、幻灯片和可视化材料。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/reading_charts_graphs_powerpoints.ipynb)）
- **Giving Claude a crop tool for better image analysis**：给 Claude 一个裁剪工具，让它放大局部区域进行更细的图像分析。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/crop_tool.ipynb)）

图表类任务的难点在于，它不是 OCR 问题，而是混合了：

- 图形元素识别；
- 坐标含义理解；
- 局部标签定位；
- 趋势解释；
- 文本与图形之间的联动推断。

`crop_tool` 特别有代表性，因为它体现了一个关键思想：  
**当图太复杂时，不是硬让模型一次全读，而是给它一个“看局部”的工具。**

这和 RAG、tool use 的思路其实一致：  
你不是要求模型直接掌握一切，而是给它合适的外部机制来改善理解。

## 4. 子代理与多模态的结合

- **Using Haiku as a sub-agent**：用 Haiku 子代理做提取，再用更强模型做综合。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/using_sub_agents.ipynb)）
- **Using vision with tools**：把视觉输入与工具调用结合，做结构化提取。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/vision_with_tools.ipynb)）

多模态任务很适合分层处理，例如：

1. 一个轻量模型负责局部抽取；
2. 一个更强模型负责整合；
3. 工具系统负责结果校验、存储或二次处理。

所以多模态内容和 Agent 内容并不是两条线，而是会在真实产品里合流。

## 5. 这一组 notebook 最值得吸收的三个思路

### 思路一：多模态 = 输入层能力
多模态最重要的意义，不是“模型会看图”，而是让原本不能进入 LLM 的资料进入系统。

### 思路二：多模态任务需要拆分
图像理解经常要拆成：
- 识别局部；
- 抽取字段；
- 再综合解释。  
这比“请总结这张图”更可靠。

### 思路三：多模态最终还是要回到结构化输出
真正能进入业务系统的，通常不是一段自由文本，而是：
- 表格；
- JSON；
- 字段集合；
- 审核结果；
- 风险标签。

## 6. 建议你怎么改写成中文内容

可以拆成以下几篇：

- **Claude 做视觉理解，不只是 OCR**
- **处理 PDF / 表单时，为什么结构化抽取比摘要更重要**
- **图表理解为什么需要 crop / zoom 类工具**
- **多模态 Agent：看图、抽字段、再执行动作**

## 7. 这篇的核心结论

- `multimodal/` 不只是“演示能看图”，而是在教你如何处理真实世界的复杂输入；
- 多模态任务往往要和工具调用、子代理、结构化输出一起设计；
- 文档、PDF、图表、表单，是最值得优先落地的多模态场景。

## 对应原始 notebook

- **Getting started with vision**：从零开始把图片传给 Claude 做视觉理解。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/getting_started_with_vision.ipynb)）
- **Best practices for using vision with Claude**：总结视觉模型输入、分辨率、任务设计与结果校验的经验。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/best_practices_for_vision.ipynb)）
- **How to transcribe documents with Claude**：把图片或 PDF 中的非结构化文本提取成结构化内容。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/how_to_transcribe_text.ipynb)）
- **Working with charts, graphs, and slide decks**：分析图表、幻灯片和可视化材料。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/reading_charts_graphs_powerpoints.ipynb)）
- **Using Haiku as a sub-agent**：用 Haiku 子代理做提取，再用更强模型做综合。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/using_sub_agents.ipynb)）
- **Giving Claude a crop tool for better image analysis**：给 Claude 一个裁剪工具，让它放大局部区域进行更细的图像分析。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/multimodal/crop_tool.ipynb)）

## 相关补充

- [tool_use/vision_with_tools.ipynb](https://github.com/anthropics/claude-cookbooks/blob/main/tool_use/vision_with_tools.ipynb)
- [misc/pdf_upload_summarization.ipynb](https://github.com/anthropics/claude-cookbooks/blob/main/misc/pdf_upload_summarization.ipynb)
