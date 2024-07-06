// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt(
  // Your custom configs here
  {
    rules: {
      "vue/html-self-closing": [
        "off",
        {
          html: {
            void: "never",
            normal: "never",
            component: "never",
          },
          svg: "never",
          math: "never",
        },
      ],
    },
  }
);
