import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '考研英语作文研发库',
  description: '考研英语作文教学资料蒸馏、验证与教材研发站点',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '教材样章', link: '/essay/overview' },
      { text: '知识审核', link: '/knowledge/review-board' },
      { text: '研发规范', link: '/guide/workflow' },
      { text: '版本记录', link: '/guide/changelog' }
    ],
    sidebar: {
      '/essay/': [
        { text: '大作文总览', link: '/essay/overview' },
        { text: '五类模板总表', link: '/essay/template-pack' },
        { text: '2010-2026真题一览', link: '/essay/real-essays-2010-2026' },
        { text: '图画作文', link: '/essay/picture' },
        { text: '图表作文', link: '/essay/chart' },
        { text: '图画加图表作文', link: '/essay/picture-chart' },
        { text: '材料作文', link: '/essay/material' },
        { text: '双图表作文', link: '/essay/double-chart' }
      ],
      '/knowledge/': [
        { text: '审核看板', link: '/knowledge/review-board' },
        { text: '知识条目', link: '/knowledge/entries/essay-types-001' }
      ],
      '/guide/': [
        { text: '工作流程', link: '/guide/workflow' },
        { text: '审核状态', link: '/guide/review-status' },
        { text: '版权与权限', link: '/guide/copyright' },
        { text: 'Codex 完整指令', link: '/guide/codex-prompt' },
        { text: '版本记录', link: '/guide/changelog' }
      ]
    },
    socialLinks: [],
    footer: {
      message: '内部研发站点 · 发布前必须完成版权审查',
      copyright: '两位作者共同维护'
    },
    search: { provider: 'local' }
  }
})
