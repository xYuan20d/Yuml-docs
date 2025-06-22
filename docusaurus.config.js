// @ts-check
// Docusaurus v2 配置文件

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Yuml',
  tagline: '一门基于 YAML 的声明式 UI 与数据交互语言',
  favicon: 'img/logo1.png',

  url: 'https://xYuan20d.github.io',  // ✅ 只写主域名
  baseUrl: '/',                       // ✅ 根路径：部署到 xYuan20d.github.io 本身

  organizationName: 'xYuan20d',       // ✅ GitHub 用户名
  projectName: 'xYuan20d.github.io',  // ✅ 仓库名必须是这个（用户主页仓库）

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/xYuan20d/xYuan20d.github.io/edit/main/', // 编辑按钮跳转
          routeBasePath: 'docs', // 默认路径是 docs，首页可以是 /docs/intro
        },
        blog: false, // 不启用博客模块
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/yuml-cover.jpg',
      navbar: {
        title: 'Yuml',
        logo: {
          alt: 'Yuml Logo',
          src: '/img/logo1.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          {
            href: 'https://github.com/xYuan20d/xYuan20d.github.io',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: '快速开始',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/xYuan20d/xYuan20d.github.io',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} YuanYuan. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;