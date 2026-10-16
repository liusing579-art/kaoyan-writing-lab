# 知识审核看板

## 状态说明

| 状态 | 含义 | 能否直接用于教材 |
| --- | --- | --- |
| `draft` | 已提出，证据或测试不足 | 否 |
| `reviewing` | 有来源和初步分析，等待审核或更多测试 | 可作为内部样章，不可宣称已验证 |
| `verified` | 来源明确、真题测试通过、双作者同意 | 可以 |
| `archived` | 历史方案，不再作为现行建议 | 否 |

## 当前条目

| ID | 条目 | 状态 | 证据等级 | 下一步 |
| --- | --- | --- | --- | --- |
| `ESSAY-TYPES-001` | 五类题型底层任务 | <span class="status-reviewing">reviewing</span> | partially-validated | 五类题型拆分复核 |
| `TEMPLATE-PICTURE-001` | 图画作文迁移模板 | <span class="status-reviewing">reviewing</span> | partially-validated | 补充负面和对比成文测试 |
| `TEMPLATE-CHART-001` | 图表动态静态模板 | <span class="status-reviewing">reviewing</span> | source-backed | 补充完整图表测试 |
| `TEMPLATE-PICTURE-CHART-001` | 图画加图表整合模板 | <span class="status-reviewing">reviewing</span> | partially-validated | 复核两个整合变体 |
| `TEMPLATE-MATERIAL-001` | 材料作文观点提炼模板 | <span class="status-draft">draft</span> | inferred | 建立材料题测试集 |
| `TEMPLATE-DOUBLE-CHART-001` | 双图表组合识别与迁移模板 | <span class="status-reviewing">reviewing</span> | source-backed | 用双图表真题测试四种组合入口 |
| `REAL-ESSAYS-2010-2026-001` | 2010–2026 英语一作文真题年度索引 | <span class="status-reviewing">reviewing</span> | source-backed | 双作者复核主题标签；完成代表题模板测试 |
| `ARGUMENT-BANK-001` | 第二段主题论证模块与表达句型库 | <span class="status-reviewing">reviewing</span> | source-backed | 双作者复核表达自然度；完成限时成文测试 |

## 审核规则

只有当条目同时满足以下条件，才可以改成 `verified`：

1. `source_refs` 可追溯；
2. 至少一个相关真题或测试案例结果为 `pass`；
3. 没有未解决的关键冲突；
4. 两位作者在 PR 中明确同意。
