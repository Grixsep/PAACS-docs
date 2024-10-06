/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "PAACS Documentation",
  tagline: "Documentation for PAACS Software",
  url: "https://paacs.pro",
  baseUrl: "/docs/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/drupal.ico",
  organizationName: "PAACS Software Ltd",
  projectName: "https://gitlab.cern.ch/drupal/paas/drupal-documentation",
  themeConfig: {
    announcementBar: {
        id: 'customisation_block',
        content:
          'These pages are still under construction',
        backgroundColor: '#f3a07a',
        textColor: '#fff',
        isCloseable: false,
      },
    navbar: {
      title: "PAACS Documentation",
      logo: {
        alt: "PAACS Logo",
        src: "img/drupal-logo.svg",
      },
      items: [
        {
          to: "/",
          activeBasePath: "docs",
          label: "Getting Started",
          position: "left",
        },
        {
          to: "/web-governance/",
          activeBasePath: "docs",
          label: "Governance",
          position: "right",
        },
        {
          href: "https://gitlab.cern.ch/drupal/paas/drupal-documentation",
          label: "Git",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "PAACS Logo",
        src: "img/logoV1.png",
        height: "40px",
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "/",
            },
          ],
        },
        {
          title: "Outreach",
          items: [
            {
              label: "Talks & Presentations",
              to: "/publications",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Drupal Forum",
              href: "https://drupal-community.web.cern.ch/",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PAACS Software Ltd.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: ({ docPath }) =>
            `https://gitlab.cern.ch/drupal/paas/drupal-documentation/edit/master/docs/docs/${docPath}`,
          //path: 'docs',
          routeBasePath: "/", // Serve the docs at the site's root
          breadcrumbs: true,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  // from https://github.com/easyops-cn/docusaurus-search-local
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        highlightSearchTermsOnTargetPage: true,
	indexDocs: true, // Default is true, but let's force it
	indexPages: true,

        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],
};
