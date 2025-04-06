import type { Config } from 'tailwindcss'
import { heroui } from "@heroui/react"

const config: Config = {
  content: [
    './src/**/*.tsx',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [
    //nextui({
     /// addCommonColors: true,
    //}),
    heroui({
      "themes": {
        "light": {
          "colors": {
            "default": {
              "50": "#fafafa",
              "100": "#f2f2f3",
              "200": "#ebebec",
              "300": "#e3e3e6",
              "400": "#dcdcdf",
              "500": "#d4d4d8",
              "600": "#afafb2",
              "700": "#8a8a8c",
              "800": "#656567",
              "900": "#404041",
              "foreground": "#000",
              "DEFAULT": "#d4d4d8"
            },
            "primary": {
              "50": "#e6fddf",
              "100": "#c2fab3",
              "200": "#9ff686",
              "300": "#7bf359",
              "400": "#58f02d",
              "500": "#34ed00",
              "600": "#2bc400",
              "700": "#229a00",
              "800": "#197100",
              "900": "#104700",
              "foreground": "#000",
              "DEFAULT": "#34ed00"
            },
            "secondary": {
              "50": "#eee4f8",
              "100": "#d7bfef",
              "200": "#bf99e5",
              "300": "#a773db",
              "400": "#904ed2",
              "500": "#7828c8",
              "600": "#6321a5",
              "700": "#4e1a82",
              "800": "#39135f",
              "900": "#240c3c",
              "foreground": "#fff",
              "DEFAULT": "#7828c8"
            },
            "success": {
              "50": "#e2f8ec",
              "100": "#b9efd1",
              "200": "#91e5b5",
              "300": "#68dc9a",
              "400": "#40d27f",
              "500": "#17c964",
              "600": "#13a653",
              "700": "#0f8341",
              "800": "#0b5f30",
              "900": "#073c1e",
              "foreground": "#000",
              "DEFAULT": "#17c964"
            },
            "warning": {
              "50": "#fef4e4",
              "100": "#fce4bd",
              "200": "#fad497",
              "300": "#f9c571",
              "400": "#f7b54a",
              "500": "#f5a524",
              "600": "#ca881e",
              "700": "#9f6b17",
              "800": "#744e11",
              "900": "#4a320b",
              "foreground": "#000",
              "DEFAULT": "#f5a524"
            },
            "danger": {
              "50": "#ffdfea",
              "100": "#ffb3cd",
              "200": "#ff86b0",
              "300": "#ff5993",
              "400": "#ff2d76",
              "500": "#ff0059",
              "600": "#d20049",
              "700": "#a6003a",
              "800": "#79002a",
              "900": "#4d001b",
              "foreground": "#000",
              "DEFAULT": "#ff0059"
            },
            "background": "#ffffff",
            "foreground": "#000000",
            "content1": {
              "DEFAULT": "#ffffff",
              "foreground": "#000"
            },
            "content2": {
              "DEFAULT": "#f4f4f5",
              "foreground": "#000"
            },
            "content3": {
              "DEFAULT": "#e4e4e7",
              "foreground": "#000"
            },
            "content4": {
              "DEFAULT": "#d4d4d8",
              "foreground": "#000"
            },
            "focus": "#34ed00",
            "overlay": "#000000"
          }
        },
        "dark": {
          "colors": {
            "default": {
              "50": "#0d0d0e",
              "100": "#19191c",
              "200": "#26262a",
              "300": "#323238",
              "400": "#3f3f46",
              "500": "#65656b",
              "600": "#8c8c90",
              "700": "#b2b2b5",
              "800": "#d9d9da",
              "900": "#ffffff",
              "foreground": "#fff",
              "DEFAULT": "#3f3f46"
            },
            "primary": {
              "50": "#104700",
              "100": "#197100",
              "200": "#229a00",
              "300": "#2bc400",
              "400": "#34ed00",
              "500": "#58f02d",
              "600": "#7bf359",
              "700": "#9ff686",
              "800": "#c2fab3",
              "900": "#e6fddf",
              "foreground": "#000",
              "DEFAULT": "#34ed00"
            },
            "secondary": {
              "50": "#240c3c",
              "100": "#39135f",
              "200": "#4e1a82",
              "300": "#6321a5",
              "400": "#7828c8",
              "500": "#904ed2",
              "600": "#a773db",
              "700": "#bf99e5",
              "800": "#d7bfef",
              "900": "#eee4f8",
              "foreground": "#fff",
              "DEFAULT": "#7828c8"
            },
            "success": {
              "50": "#073c1e",
              "100": "#0b5f30",
              "200": "#0f8341",
              "300": "#13a653",
              "400": "#17c964",
              "500": "#40d27f",
              "600": "#68dc9a",
              "700": "#91e5b5",
              "800": "#b9efd1",
              "900": "#e2f8ec",
              "foreground": "#000",
              "DEFAULT": "#17c964"
            },
            "warning": {
              "50": "#4a320b",
              "100": "#744e11",
              "200": "#9f6b17",
              "300": "#ca881e",
              "400": "#f5a524",
              "500": "#f7b54a",
              "600": "#f9c571",
              "700": "#fad497",
              "800": "#fce4bd",
              "900": "#fef4e4",
              "foreground": "#000",
              "DEFAULT": "#f5a524"
            },
            "danger": {
              "50": "#4d001b",
              "100": "#79002a",
              "200": "#a6003a",
              "300": "#d20049",
              "400": "#ff0059",
              "500": "#ff2d76",
              "600": "#ff5993",
              "700": "#ff86b0",
              "800": "#ffb3cd",
              "900": "#ffdfea",
              "foreground": "#000",
              "DEFAULT": "#ff0059"
            },
            "background": "#000000",
            "foreground": "#ffffff",
            "content1": {
              "DEFAULT": "#18181b",
              "foreground": "#fff"
            },
            "content2": {
              "DEFAULT": "#27272a",
              "foreground": "#fff"
            },
            "content3": {
              "DEFAULT": "#3f3f46",
              "foreground": "#fff"
            },
            "content4": {
              "DEFAULT": "#52525b",
              "foreground": "#fff"
            },
            "focus": "#34ed00",
            "overlay": "#ffffff"
          }
        }
      },
      "layout": {
        "disabledOpacity": "0.5"
      }
    })
  ],
}

export default config
