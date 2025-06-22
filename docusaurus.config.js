// @ts-check
// Docusaurus v2 配置文件

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  deploymentBranch: "gh-pages",
  title: 'Yuml',
  tagline: '一门基于 YAML 的声明式 UI 与数据交互语言',
  favicon: 'img/logo1.png',

  // ✅ 修改为你部署文档的最终访问链接（还是放在主页仓库）
  url: 'https://xYuan20d.github.io',
  baseUrl: '/', // 不变，因为你还是用 GitHub Pages 主域名部署

  // ✅ 不变，部署目标是这个仓库
  organizationName: 'xYuan20d',
  projectName: 'xYuan20d.github.io',  // 注意：这里是部署目标仓库，而不是源码仓库

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

          // ✅ 这里改为你的源码地址
          editUrl: 'https://github.com/xYuan20d/Yuml/edit/main/',

          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
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
          // ✅ 同样改为源码地址
          href: 'https://github.com/xYuan20d/Yuml',
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
              // ✅ 改为源码仓库
              label: 'GitHub',
              href: 'https://github.com/xYuan20d/Yuml',
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