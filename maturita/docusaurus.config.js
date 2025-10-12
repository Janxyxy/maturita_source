// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Maturita",
  tagline: "Maturita-formalita",
  favicon: "maturita/static/img/logo_spsul.png",

  // Set the production url of your site here
  url: "https://spsul-maturita.honza.space/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "Janxyxy", // Your GitHub username.
  projectName: "maturita_source", // Your repo name.

  onBrokenLinks: "throw",

  // Updated for Docusaurus v4 compatibility
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  // Internationalization config for Czech content
  i18n: {
    defaultLocale: "cs",
    locales: ["cs"],
  },

  // Custom head tags for better SEO and performance
  headTags: [
    {
      tagName: "meta",
      attributes: {
        name: "keywords",
        content:
          "maturita, informatika, SPSUL, studijní materiály, počítačové sítě, programování",
      },
    },
    {
      tagName: "meta",
      attributes: {
        property: "og:type",
        content: "website",
      },
    },
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Show last update author and date
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          // Enable breadcrumbs
          breadcrumbs: true,
          // Edit this page links
          editUrl:
            "https://github.com/Janxyxy/maturita_source/tree/main/maturita/",
        },
        blog: false, // Disable blog since this is documentation-focused
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // gtag: {
        //   // Add Google Analytics if you have a tracking ID
        //   trackingID: 'G-XXXXXXXXXX',
        //   anonymizeIP: true,
        // },
        sitemap: {
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
        },
      }),
    ],
  ],

  plugins: [
    // Enable PWA for offline functionality (optional)
    // [
    //   '@docusaurus/plugin-pwa',
    //   {
    //     debug: true,
    //     offlineModeActivationStrategies: ['appInstalled', 'queryString'],
    //     pwaHead: [
    //       {
    //         tagName: 'link',
    //         rel: 'icon',
    //         href: '/img/logo_spsul.png',
    //       },
    //       {
    //         tagName: 'link',
    //         rel: 'manifest',
    //         href: '/manifest.json',
    //       },
    //     ],
    //   },
    // ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Maturita",
        logo: {
          alt: "SPŠUL Logo",
          src: "img/logo_spsul.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Materiály",
          },
          {
            type: "search",
            position: "right",
          },
          {
            href: "https://github.com/Janxyxy/maturita_source",
            label: "GitHub",
            position: "right",
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Obsah",
            items: [
              {
                label: "Úvod",
                to: "/docs/intro",
              },
              {
                label: "Český jazyk",
                to: "/docs/Český jazyk",
              },
              {
                label: "Anglický jazyk",
                to: "/docs/Anglický jazyk",
              },
              {
                label: "Datové sítě",
                to: "/docs/Datové-sítě",
              },
              {
                label: "Počítačové vybavení",
                to: "/docs/Počítačové vybavení",
              },
            ],
          },
          {
            title: "🔗 Užitečné odkazy",
            items: [
              {
                label: "GitHub Repository",
                href: "https://github.com/Janxyxy/maturita_source",
              },
              {
                label: "SPŠUL",
                href: "https://www.spsul.cz/",
              },
            ],
          },
          {
            title: "Kontakt",
            items: [
              {
                label: "Přispěj na GitHub",
                href: "https://github.com/Janxyxy/maturita_source/issues",
              },
              {
                label: "Nahlásit chybu",
                href: "https://github.com/Janxyxy/maturita_source/issues/new",
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Maturitní materiály SPŠUL. Postaveno s ❤️ pomocí Docusaurus.`,
      },
      colorMode: {
        // Default to dark mode on first load
        defaultMode: "dark",
        // Allow users to switch themes
        disableSwitch: false,
        // Don't follow the OS/browser preference so our default applies
        respectPrefersColorScheme: false,
      },
      // Add table of contents configuration
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      // Add docs version banner
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      // Add announcement bar for important updates
      announcementBar: {
        id: "support_us",
        content:
          'Materiály pro maturitu z informatiky na SPŠUL. <a target="_blank" rel="noopener noreferrer" href="https://github.com/Janxyxy/maturita_source">Přispěj na GitHub</a>',
        backgroundColor: "#ce4213",
        textColor: "#ffffff",
        isCloseable: true,
      },
      prism: {
        // Use light and dark Prism themes so code blocks match the site theme
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // Add additional languages for syntax highlighting
        additionalLanguages: [
          "bash",
          "powershell",
          "json",
          "yaml",
          "sql",
          "python",
          "java",
          "csharp",
        ],
        // Show line numbers by default
        showLineNumbers: true,
      },
    }),
};

module.exports = config;
