import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Fuzzy work station",
  description: "学海无涯~",
  base: "/Docs/",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'LLM', link: '/llm/roadmap' },
      { text: 'RUST', link: '/rust/overview' }
    ],

    sidebar: {
      '/llm/': [
        {
          text: 'deepseek-R1',
          items: [
            { text: 'R1技术报告解析', link: '/llm/deepseek-R1' },
          ]
        },
        {
          text: 'LLM实践',
          items: [
            // { text: 'roadmap', link: '/llm/roadmap' },
            { text: '部署本地私有LLM服务', link: '/llm/build_local_llm_service' },
          ]
        }
      ],
      '/rust/': [
        {
          text: '从JS过渡',
          items: [
            { text: 'RUST核心工具', link: '/rust/overview' },
            { text: 'RUST基础语法', link: '/rust/basicRules' },
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FuzzyCZX/Docs' }
    ],
    lastUpdated: {
      text: '更新时间',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short'
      }
    }
  },
  lastUpdated: true
})
