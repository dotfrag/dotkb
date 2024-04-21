const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["JetBrains Mono", ...defaultTheme.fontFamily.mono],
        sans: ["Titillium Web", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "#cdd6f4",
            "h1,h2,h3,h4,h5,h6": {
              color: "#cdd6f4",
            },
            a: {
              color: "#89b4fa",
            },
            code: {
              backgroundColor: theme("colors.ctp-surface0.DEFAULT"),
              borderRadius: theme("borderRadius.DEFAULT"),
              color: theme("colors.ctp-mauve.DEFAULT"),
              padding: theme("padding.1"),
            },
            "code::before": {
              content: '""',
            },
            "code::after": {
              content: '""',
            },
          },
        },
      }),
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      prefix: "ctp",
      defaultFlavour: "mocha",
    }),
    require("@tailwindcss/typography"),
    ({ addBase, addComponents, theme }) => {
      // addBase({
      //   html: {
      //     fontSize: "18px",
      //   },
      // });
      addComponents({
        ".container": {
          maxWidth: theme("maxWidth.4xl"),
          marginLeft: theme("margin.auto"),
          marginRight: theme("margin.auto"),
          paddingLeft: theme("padding.4"),
          paddingRight: theme("padding.4"),
        },
      });
    },
  ],
};
