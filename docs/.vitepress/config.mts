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
      { text: 'LLM', link: '/llm/roadmap' }
    ],

    sidebar: [
      {
        text: 'LLM实践',
        items: [
          // { text: 'roadmap', link: '/llm/roadmap' },
          { text: '部署本地私有LLM服务', link: '/llm/build_local_llm_service' },
        ]
      }
    ],

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
