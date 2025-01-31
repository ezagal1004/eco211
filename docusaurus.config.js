// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '📈 ECO 211',
  favicon: 'img/economics_logo.svg',

  url: 'https://eco211.erickzagal.com',
  baseUrl: '/',

  organizationName: 'ezagal1004',
  projectName: 'eco211',
  trailingSlash: false,

  deploymentBranch: "gh-pages",

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],
  markdown: {
    mermaid: true,
  },

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'ECO 211',
      logo: {
        alt: 'Macroeconomics',
        src: 'img/economics_logo.svg',
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark', // 🌙 Change 'light' to 'dark' for default dark mode
      respectPrefersColorScheme: true, // 🌐 Auto-detect system theme
      disableSwitch: false, // 🔄 Set to true to remove theme toggle
    },
  },
};

export default config;