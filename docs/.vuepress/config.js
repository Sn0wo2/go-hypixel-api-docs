import { defineUserConfig } from 'vuepress';
import { defaultTheme } from '@vuepress/theme-default';
import { viteBundler } from '@vuepress/bundler-vite';

export default defineUserConfig({
  base: '/go-hypixel-api-docs/',
  locales: {
    '/': {
      lang: 'en-US',
      title: 'go-hypixel-api docs project',
      description: 'hypixel api golang wrapper',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'go-hypixel-api 文档项目',
      description: 'hypixel api 的 Golang 封装',
    },
  },

  theme: defaultTheme({
    locales: {
      '/': {
        selectLanguageName: 'English',
        navbar: [
          { text: 'Home', link: '/' },
          { text: 'Get Started', link: '/get-started.html' },
        ],
      },
      '/zh/': {
        selectLanguageName: '简体中文',
        navbar: [
          { text: '首页', link: '/zh/' },
          { text: '快速开始', link: '/zh/get-started.html' },
          { text: 'GitHub', link: 'https://github.com/Sn0wo2/go-hypixel-api' },
        ],
      },
    },
  }),

  bundler: viteBundler(),

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ],
});
