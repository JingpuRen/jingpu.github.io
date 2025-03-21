import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// @ts-ignore
const config: Config = {
  title: 'Jingpu\'s Website',
  tagline: 'Technology is interesting and endless, join me as we explore!',
  favicon: 'img/duolaAmeng.jpg',

  // Set the production url of your site here
  url: 'https://jingpu.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'jingpuren.github.io', // Usually your repo name.
  organizationName: 'JingpuRen', // Usually your GitHub org/user name.
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
    localeConfigs: {
      'zh-Hans': {
        label: '中文',
        htmlLang: 'zh-CN',
      },
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },

        // 开启博客的代码
        /*
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
         */

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/duolaAmeng.jpg',
    navbar: {
      title: 'Jingpu\'s Website',
      logo: {
        alt: 'My Site Logo',
        src: 'img/duolaAmeng.jpg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'javaSidebar',
          position: 'left',
          label: 'Java',
        },
        {
          type: 'docSidebar',
          sidebarId: 'goSidebar',
          position: 'left',
          label: 'Golang',
        },
        {
          type: 'docSidebar',
          sidebarId: 'deploySidebar',
          position: 'right',
          label: '部署',
        },
        {
          type: 'docSidebar',
          sidebarId: 'leetcodeSidebar',
          position: 'left',
          label: 'Leetcode',
        },
        // {to: '/golang', label: 'Golang', position: 'left'},
        {
          type: 'localeDropdown', position: 'right',
        },
        {
          href: 'https://github.com/JingpuRen',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Java',
              to: '/docs/java/java-start',
            },
            {
              label: 'Golang',
              to: 'docs/golang/go-start',
            },
            {
              label: 'Leetcode',
              to: 'docs/leetcode/leetcode-start',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/JingpuRen',
            },
            {
              label:"Gitee",
              href: 'https://gitee.com/JingpuRen'
            },
            {
              label: 'Bilibili',
              href: 'https://space.bilibili.com/1222800409?spm_id_from=333.1007.0.0',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Jingpu\'s Website, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
