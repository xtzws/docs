// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Docs - Isaacal Media',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.isaac.run',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        htmlLang: 'en-US',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Isaacal Media',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'lynxSidebar',
            position: 'left',
            label: 'FinishLynx',
          },
          {
            type: 'docSidebar',
            sidebarId: 'devSidebar',
            position: 'left',
            label: 'Developers',
          },
          {
            type: 'docSidebar',
            sidebarId: 'supportSidebar',
            position: 'left',
            label: 'Tech Support',
          },
          {
            type: 'docSidebar',
            sidebarId: 'mediaSidebar',
            position: 'left',
            label: 'Corporate',
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
                label: 'FinishLynx',
                to: '/lynx/equipment-checklist',
              },
              {
                label: 'Tech Support',
                to: '/support/welcome',
              },
              {
                label: 'Corporate',
                to: '/media/about',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'IFDSA',
                to: 'https://www.isaac.run/terms/ifdsa/',
              },
              {
                label: 'ICSA',
                to: 'https://www.isaac.run/terms/icsa/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Home',
                to: 'https://www.isaac.run',
              },
              {
                label: 'View source',
                href: 'https://git.isaac.run/isaac/docs',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Isaacal Media. <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC BY-SA 4.0</a>. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
