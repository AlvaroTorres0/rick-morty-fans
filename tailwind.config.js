/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      "winter",
      "sunset",
      {
        winter: {
          ...require("daisyui/src/theming/themes")["winter"],
          ".primary-text-color": {
            color: "#333232",
          },
          ".secondary-text-color": {
            color: "#494949",
          },
          ".tertiary-text-color": {
            color: "#646464",
          },
          ".quaternary-text-color": {
            color: "#8E8E8E",
          },

          ".primary-color-50": {
            background: "#f2faeb",
          },
          ".primary-color-100": {
            background: "#e2f3d4",
          },
          ".primary-color-200": {
            background: "#c7e8ae",
          },
          ".primary-color-300": {
            background: "#a3d87e",
          },
          ".primary-color-400": {
            background: "#80c552",
          },
          ".primary-color-500": {
            background: "#63ab37",
          },
          ".primary-color-600": {
            background: "#4b8828",
          },
          ".primary-color-700": {
            background: "#3b6823",
          },
          ".primary-color-800": {
            background: "#315420",
          },
          ".primary-color-900": {
            background: "#2c481f",
          },
          ".primary-color-950": {
            background: "#14270c",
          },
        },
      },
      {
        sunset: {
          ...require("daisyui/src/theming/themes")["sunset"],
          ".primary-text-color": {
            color: "#FEFEFE",
          },
          ".secondary-text-color": {
            color: "#EAEAEA",
          },
          ".tertiary-text-color": {
            color: "#CCCCCC",
          },
          ".quaternary-text-color": {
            color: "#BBBBBB",
          },

          ".primary-color-50": {
            background: "#14270c",
          },
          ".primary-color-100": {
            background: "#2c481f",
          },
          ".primary-color-200": {
            background: "#315420",
          },
          ".primary-color-300": {
            background: "#3b6823",
          },
          ".primary-color-400": {
            background: "#4b8828",
          },
          ".primary-color-500": {
            background: "#63ab37",
          },
          ".primary-color-600": {
            background: "#80c552",
          },
          ".primary-color-700": {
            background: "#a3d87e",
          },
          ".primary-color-800": {
            background: "#c7e8ae",
          },
          ".primary-color-900": {
            background: "#e2f3d4",
          },
          ".primary-color-950": {
            background: "#f2faeb",
          },
        },
      },
    ], // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "sunset", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
}

