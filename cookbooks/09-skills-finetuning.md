---
layout: page
title: "09｜Skills、微调与垂直化能力"
---

到了这一步，Claude Cookbooks 里剩下的一些内容就显得更“垂直化”了：它们不是在讲通用能力，而是在讲 **如何把能力包装、定制和产品化**。这一篇主要覆盖三个方向：**Skills、微调、以及特定创作场景下的 prompt 专题**。

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


## 1. Skills：把“能力”打包成可复用资产

- **Introduction to Claude Skills**：介绍 Skills 的概念、安装方式，以及 Excel / PowerPoint / PDF 能力。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/skills/notebooks/01_skills_introduction.ipynb)）
- **Claude Skills for financial applications**：把 Skills 用到财务 dashboard、投资组合分析等场景。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/skills/notebooks/02_skills_financial_applications.ipynb)）
- **Building custom Skills for Claude**：自定义、打包和管理自己的 Skills。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/skills/notebooks/03_skills_custom_development.ipynb)）

如果前面的 notebook 更像“单个 recipe”，那 Skills 这一组更像在回答：  
**如何把 instructions、helper scripts、资源文件和组织知识一起打包成一个更高层的能力单元。**

### 为什么 Skills 值得单独看

因为它和普通 tool 的差别在于：

- 不只是一个 API 接口；
- 还包含可执行代码、资源文件、约定流程；
- 更适合封装组织级知识和长期复用流程。

这意味着 Skills 的目标不是“多一个功能”，而是**把成熟工作流沉淀下来**。

### 这三篇各自负责什么

- **Introduction to Claude Skills**：概念、安装与快速体验；
- **Skills for financial applications**：展示在金融类工作流中的用法；
- **Building custom Skills**：讲怎么自定义、管理和扩展。

如果你想写长期系列，这一组很适合扩成“Claude 能力产品化”专题。

## 2. Fine-Tuning：不是所有问题都该靠 prompt 解决

- **Finetuning Claude 3 Haiku on Bedrock**：在 Amazon Bedrock 上微调 Claude 3 Haiku 的步骤与注意事项。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/finetuning/finetuning_on_bedrock.ipynb)）

Claude Cookbooks 里关于 Fine-Tuning 的内容不多，但它出现本身就很说明问题：  
Anthropic 并不把所有问题都导向“再写更复杂的 prompt”，而是承认有些场景值得走到更深的定制层。

不过从整个仓库的重心来看，你也能读出一个明显倾向：

- 先做 prompt / tool / RAG / workflow；
- 只有在收益足够明确时，再考虑 fine-tuning。

这也很符合大多数团队的实际路线。

## 3. Prompting for frontend aesthetics：一个很有意思的信号

- **Prompting for frontend aesthetics**：讨论如何提示 Claude 产出更有风格感的前端界面，而不是“千篇一律”的 AI 设计。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb)）

这一篇虽然只有一条，但很值得提，因为它代表 Claude Cookbooks 里另一种新的倾向：  
**从“能做功能”进一步走向“能做得更好看、更有审美和品牌感”。**

这说明 Claude 的 cookbook 不再只关心“准确性”，也开始关注：

- 界面风格；
- 设计表达；
- 差异化品味；
- 避免 AI 味太重的输出。

如果你在做前端生成、原型草图、设计协同，这条内容很适合单独扩成系列。

## 4. 这一组内容共同说明了什么

### Claude 的发展已经不只是 API 调用
开始往“能力包”“组织工作流”“专业场景封装”演进。

### 不是所有优化都该靠更长 prompt
有时需要：
- 能力打包（Skills）
- 数据定制（Fine-Tuning）
- 任务专项方法（如前端审美 prompting）

### 从 demo 到资产化
一旦一个模式反复有用，就应该被封装，而不是每次重新写。

## 5. 可以延展成哪些文章

- **Claude Skills 是什么，和 MCP / tools 有什么区别**
- **什么时候该做自定义 Skills，而不是继续堆 prompt**
- **企业内部工作流如何沉淀成 Claude Skills**
- **Fine-Tuning 在 Claude 生态里的合理位置**
- **如何让 Claude 生成更有审美辨识度的前端界面**

## 6. 这篇的核心结论

- Skills 代表的是 Claude 能力的“打包、复用和组织化”；
- Fine-Tuning 代表的是更深层的任务定制；
- 垂直专题（如前端审美 prompting）说明 cookbook 已开始覆盖更具体的生产创作问题。

## 对应原始 notebook

- **Prompting for frontend aesthetics**：讨论如何提示 Claude 产出更有风格感的前端界面，而不是“千篇一律”的 AI 设计。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/coding/prompting_for_frontend_aesthetics.ipynb)）
- **Finetuning Claude 3 Haiku on Bedrock**：在 Amazon Bedrock 上微调 Claude 3 Haiku 的步骤与注意事项。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/finetuning/finetuning_on_bedrock.ipynb)）
- **Introduction to Claude Skills**：介绍 Skills 的概念、安装方式，以及 Excel / PowerPoint / PDF 能力。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/skills/notebooks/01_skills_introduction.ipynb)）
- **Claude Skills for financial applications**：把 Skills 用到财务 dashboard、投资组合分析等场景。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/skills/notebooks/02_skills_financial_applications.ipynb)）
- **Building custom Skills for Claude**：自定义、打包和管理自己的 Skills。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/skills/notebooks/03_skills_custom_development.ipynb)）

## 原始资料

- [skills 目录](https://github.com/anthropics/claude-cookbooks/tree/main/skills)
- [finetuning 目录](https://github.com/anthropics/claude-cookbooks/tree/main/finetuning)
- [coding 目录](https://github.com/anthropics/claude-cookbooks/tree/main/coding)
