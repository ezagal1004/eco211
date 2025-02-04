// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '📈 ECO 211',
  tagline: 'Macroeconomics Notes & Practice',
  favicon: 'img/economics_logo.svg',

  url: 'https://eco211.erickzagal.com',
  baseUrl: '/',

  organizationName: 'ezagal1004', // ✅ Your GitHub username
  projectName: 'eco211', // ✅ Your GitHub repo name
  deploymentBranch: "gh-pages", // ✅ Ensures GitHub Pages deployment

  trailingSlash: false,

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
          sidebarPath: require.resolve('./sidebars.js'), // ✅ Corrected path
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'), // ✅ Corrected path
        },
        blog: false, // ✅ Disabled blog (remove if you want a blog)
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
      items: [
        { type: 'docSidebar', sidebarId: 'chaptersSidebar', label: '📖 Notes', position: 'left' },
        { to: '/docs/practice/', label: '❓ Practice Questions', position: 'left' },
      ],
    },

    colorMode: {
      defaultMode: 'dark', // 🌙 Default to dark mode
      respectPrefersColorScheme: true, // 🌐 Auto-detect system theme
      disableSwitch: false, // 🔄 Allows theme toggling
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
