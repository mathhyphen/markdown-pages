---
layout: page
title: "02｜基础能力篇：分类、RAG、摘要与 Text-to-SQL"
---

如果你把 Claude Cookbooks 当成一整套课程，那么 `capabilities/` 就是最像“基础课”的部分。这里不追求炫技，而是围绕四类最常见、也最容易真正落地的任务：**分类、RAG、摘要、Text-to-SQL**。

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


## 这组 notebook 的价值

它们共同回答一个问题：**Claude 适合用来解决哪些高频企业任务，以及这些任务应该怎么系统化搭起来？**

相比“随便发个 prompt 看结果”，`capabilities/` 里的 notebook 更像是：

- 明确定义任务；
- 设计输入输出；
- 引入评测；
- 再做优化。

也就是说，它们是从“能用”走向“可复现、可优化”。

## 1. Classification：别把分类理解成小任务

- **Classification with Claude**：用 Claude 做文本/工单分类，示范如何结合 RAG 与推理过程提升分类质量。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/classification/guide.ipynb)）

分类看上去简单，其实是许多业务系统的入口能力，例如：

- 工单分流；
- 邮件标签；
- 风险分类；
- 客诉优先级判断；
- 文档归类。

这一类 notebook 的关键不只是“给标签”，而是教你如何让分类系统变得**更稳、更可解释、更适合复杂业务标签体系**。

### 这里值得借鉴的做法

- 不把分类问题只看成 prompt 一句话；
- 当类别定义复杂时，把外部知识和案例引入分类流程；
- 对分类结果建立评估，而不是只看几个 demo 样例。

## 2. Retrieval Augmented Generation：真正的大头

- **Enhancing RAG with contextual retrieval**：通过给 chunk 补充上下文再做 embedding，提升检索质量。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/contextual-embeddings/guide.ipynb)）
- **Retrieval augmented generation**：从基础 RAG 到评测、summary indexing、reranking 的完整优化路径。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/retrieval_augmented_generation/guide.ipynb)）

如果说这个仓库里哪个主题最接近企业 AI 应用的现实主战场，那一定是 **RAG**。  
Claude Cookbooks 并没有把 RAG 讲成“向量库 + 问答”这么简单，而是把它拆成几层：

1. 先做一个基础 pipeline；
2. 再区分“检索质量”和“最终回答质量”；
3. 再通过 summary indexing、reranking、contextual retrieval 等手段持续优化。

这比很多只讲“怎么接 Pinecone”的教程更有价值，因为它把 **RAG 的瓶颈** 摊开来讲了。

### 为什么 contextual retrieval 值得单独看

很多人做 RAG 时直接把文档切块后 embedding，但这会导致 chunk 脱离上下文。  
`contextual-embeddings` 这一篇强调的是：**在 embedding 之前，先把 chunk 放回上下文里补足语义**。  
这背后的思想非常重要：RAG 的关键不是“有检索”，而是“检索到的片段在被取出来时仍然可理解”。

## 3. Summarization：摘要不是“压缩一下”这么简单

- **Summarization with Claude**：以法律文档为例，系统讲解摘要任务、评测与高级技巧。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/summarization/guide.ipynb)）

很多团队会低估摘要任务，以为“让模型写短一点”就够了。实际进入法律、金融、报告、会议纪要等场景后，摘要会遇到几个常见问题：

- 不同读者需要不同粒度；
- 摘要容易漏关键信息；
- 摘要经常把不确定内容写得过于肯定；
- 很难量化摘要质量。

这篇 notebook 的价值就在于：它把摘要任务从“写作文”升级成“可评测的信息压缩任务”。

## 4. Text-to-SQL：最典型的结构化输出应用

- **Text to SQL with Claude**：把自然语言问题转换成 SQL，并展示如何用 RAG 与自我改进提升效果。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/text_to_sql/guide.ipynb)）

Text-to-SQL 一直是 LLM 应用里很实用的一支，因为它天然连接：

- 业务用户的自然语言问题；
- 数据团队管理的结构化数据库；
- BI / 分析场景里的即时查询需求。

Claude Cookbooks 里的这条线不是只教“把一句话变成 SQL”，而是强调：

- schema 上下文很关键；
- RAG 能帮助补足数据库与业务语义；
- 自我改进 / 反思机制能提升正确率。

## 5. 这一组 notebook 的共同方法论

### 从“做出来”转向“评出来”
这一组内容最大的优点，是不满足于 demo，而是在多处强调 **evaluation**。  
这意味着你不是只看模型“像不像会了”，而是要定义指标、比方案、做迭代。

### 从“单次回答”转向“任务系统”
不论是分类、摘要还是 RAG，真正落地时都要考虑：

- 输入清洗；
- 结构设计；
- 检索与上下文策略；
- 输出验证；
- 错误分析。

Claude Cookbooks 的这些基础能力 notebook，本质上就是在教你如何把任务工程化。

## 6. 我会怎么把它们改写成你自己的文章系列

你完全可以把 `capabilities/` 拆成 4 篇独立专栏：

1. **为什么 RAG 并不只是接个向量库**  
2. **Claude 做复杂分类的几种打法**  
3. **摘要系统如何做评测**  
4. **Text-to-SQL：从 prompt 到可用查询系统**

这种写法比“仓库导读”更适合吸引搜索流量和持续连载。

## 7. 这篇的核心结论

- `capabilities/` 是整座仓库最适合新读者入门的一组 notebook；
- 真正的关键词不是“提示词”，而是 **任务建模 + 评测 + 优化**；
- 如果你想用 Claude 做企业知识系统，这一组几乎是必读。

## 对应原始 notebook

- **Classification with Claude**：用 Claude 做文本/工单分类，示范如何结合 RAG 与推理过程提升分类质量。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/classification/guide.ipynb)）
- **Enhancing RAG with contextual retrieval**：通过给 chunk 补充上下文再做 embedding，提升检索质量。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/contextual-embeddings/guide.ipynb)）
- **Retrieval augmented generation**：从基础 RAG 到评测、summary indexing、reranking 的完整优化路径。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/retrieval_augmented_generation/guide.ipynb)）
- **Summarization with Claude**：以法律文档为例，系统讲解摘要任务、评测与高级技巧。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/summarization/guide.ipynb)）
- **Text to SQL with Claude**：把自然语言问题转换成 SQL，并展示如何用 RAG 与自我改进提升效果。（[原文](https://github.com/anthropics/claude-cookbooks/blob/main/capabilities/text_to_sql/guide.ipynb)）

## 原始资料

- [capabilities 目录](https://github.com/anthropics/claude-cookbooks/tree/main/capabilities)
- [recipes 注册表](https://raw.githubusercontent.com/anthropics/claude-cookbooks/main/registry.yaml)
