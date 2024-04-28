const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Design System Rd",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Getting Started",
        link: "/guide/",
      },
      {
        text: "Design Tokens",
        link: "/design-tokens/",
      },
      {
        text: "Components",
        link: "/components/",
      },
      {
        text: "Templates",
        link: "/templates/",
      },
    ],
    sidebar: {
      // "/guide/": [
      //   {
      //     title: "Guide",
      //     collapsable: true,
      //     children: [
      //       "",
      //       "using-vue",
      //       "vuepress/plugin-back-to-top",
      //       "@vuepress/plugin-medium-zoom",
      //     ],
      //   },
      // ],
      "/guide/": "auto",
      "/design-tokens/": "auto",
      "/components/": "auto",
      "/templates/": "auto",
    },
  },
};
