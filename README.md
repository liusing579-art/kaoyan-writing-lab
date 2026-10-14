# 考研英语作文教学资料研发库

这是一个面向两位共同作者的 Codex + GitHub 教材研发项目。它把原始资料、知识蒸馏、真题验证、教材页面和审核记录分开管理，目标是持续产出可以直接教学和排版的成品内容。

## 快速开始

```powershell
cd .\kaoyan-writing-lab
pnpm install
pnpm validate
pnpm docs:dev
```

打开终端提示的本地地址，即可查看 VitePress 教材站点。

## 目录

```text
data/
  knowledge/entries/       机器可读的知识条目 JSON
  knowledge.schema.json     知识条目字段约束
  source-index.json         原始资料索引，不复制受版权保护的全文
private-materials/          本地受控原始资料，默认不进入 Git
docs/
  essay/                    五类大作文教材样章
  knowledge/                知识库审核视图
  guide/                    工作流程、版权与 Codex 指令
  .vitepress/               VitePress 配置和主题
scripts/                    本地与 CI 校验脚本
.github/                    PR 模板与 GitHub Actions
AGENTS.md                   Codex 和协作者共同遵守的规则
```

## 研发状态

当前样章是基于已核验资料形成的第一版结构化产品，不代表所有原始资料都已完成深度蒸馏。知识条目使用 `draft`、`reviewing`、`verified`、`archived` 标记，只有经过真题核验和两位作者审核的内容才能标为 `verified`。

## 版权边界

原始教材、真题图像和第三方模板保留在资料目录或受控存储中。本仓库只保存来源标识、短摘录、研究笔记和原创蒸馏结果，不把第三方资料全文复制进网站。公开发布前必须执行版权审查。

## 协作入口

- 工作规范：[`AGENTS.md`](./AGENTS.md)
- Codex 完整指令：[`docs/guide/codex-prompt.md`](./docs/guide/codex-prompt.md)
- 审核状态：[`docs/knowledge/review-board.md`](./docs/knowledge/review-board.md)
- 教材样章：[`docs/essay/overview.md`](./docs/essay/overview.md)
- 五类模板总表：[`docs/essay/template-pack.md`](./docs/essay/template-pack.md)
- 2010-2016 真题一览：[`docs/essay/real-essays-2010-2016.md`](./docs/essay/real-essays-2010-2016.md)
