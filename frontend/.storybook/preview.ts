import type { Preview } from "@storybook/react";
import { withThemeByDataAttribute } from "@storybook/addon-themes";
import "../src/index.css";
import "../src/App.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeByDataAttribute({
      defaultTheme: "light",
      themes: {
        light: "light",
        dark: "dark",
      },
      attributeName: "data-mode",
    }),
  ],
  tags: ["autodocs"],
};

export default preview;
