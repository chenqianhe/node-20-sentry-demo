import colors from "tailwindcss/colors";
import { skeleton } from "@skeletonlabs/tw-plugin";
import { join } from "path";
const plugin = require("tailwindcss/plugin");

export const myCustomTheme = {
    name: "my-custom-theme",
    properties: {
        // =~= Theme Properties =~=
        "--theme-font-family-base": `Inter, sans-serif`,
        "--theme-font-family-heading": `Inter, sans-serif`,
        "--theme-font-color-base": "0 0 0",
        "--theme-font-color-dark": "255 255 255",
        "--theme-rounded-base": "8px",
        "--theme-rounded-container": "8px",
        "--theme-border-base": "1px",
        // =~= Theme On-X Colors =~=
        "--on-primary": "255 255 255",
        "--on-secondary": "0 0 0",
        "--on-tertiary": "255 255 255",
        "--on-success": "0 0 0",
        "--on-warning": "0 0 0",
        "--on-error": "255 255 255",
        "--on-surface": "0 0 0",
        // =~= Theme Colors  =~=
        // primary | #0071eb
        "--color-primary-50": "217 234 252", // #d9eafc
        "--color-primary-100": "204 227 251", // #cce3fb
        "--color-primary-200": "191 220 250", // #bfdcfa
        "--color-primary-300": "153 198 247", // #99c6f7
        "--color-primary-400": "77 156 241", // #4d9cf1
        "--color-primary-500": "0 113 235", // #0071eb
        "--color-primary-600": "0 102 212", // #0066d4
        "--color-primary-700": "0 85 176", // #0055b0
        "--color-primary-800": "0 68 141", // #00448d
        "--color-primary-900": "0 55 115", // #003773
        // secondary | #10b981
        "--color-secondary-50": "219 245 236", // #dbf5ec
        "--color-secondary-100": "207 241 230", // #cff1e6
        "--color-secondary-200": "195 238 224", // #c3eee0
        "--color-secondary-300": "159 227 205", // #9fe3cd
        "--color-secondary-400": "88 206 167", // #58cea7
        "--color-secondary-500": "16 185 129", // #10b981
        "--color-secondary-600": "14 167 116", // #0ea774
        "--color-secondary-700": "12 139 97", // #0c8b61
        "--color-secondary-800": "10 111 77", // #0a6f4d
        "--color-secondary-900": "8 91 63", // #085b3f
        // tertiary | #6b7280
        "--color-tertiary-50": "233 234 236", // #e9eaec
        "--color-tertiary-100": "225 227 230", // #e1e3e6
        "--color-tertiary-200": "218 220 223", // #dadcdf
        "--color-tertiary-300": "196 199 204", // #c4c7cc
        "--color-tertiary-400": "151 156 166", // #979ca6
        "--color-tertiary-500": "107 114 128", // #6b7280
        "--color-tertiary-600": "96 103 115", // #606773
        "--color-tertiary-700": "80 86 96", // #505660
        "--color-tertiary-800": "64 68 77", // #40444d
        "--color-tertiary-900": "52 56 63", // #34383f
        // success | #7fd638
        "--color-success-50": "236 249 225", // #ecf9e1
        "--color-success-100": "229 247 215", // #e5f7d7
        "--color-success-200": "223 245 205", // #dff5cd
        "--color-success-300": "204 239 175", // #ccefaf
        "--color-success-400": "165 226 116", // #a5e274
        "--color-success-500": "127 214 56", // #7fd638
        "--color-success-600": "114 193 50", // #72c132
        "--color-success-700": "95 161 42", // #5fa12a
        "--color-success-800": "76 128 34", // #4c8022
        "--color-success-900": "62 105 27", // #3e691b
        // warning | #EAB308
        "--color-warning-50": "252 244 218", // #fcf4da
        "--color-warning-100": "251 240 206", // #fbf0ce
        "--color-warning-200": "250 236 193", // #faecc1
        "--color-warning-300": "247 225 156", // #f7e19c
        "--color-warning-400": "240 202 82", // #f0ca52
        "--color-warning-500": "234 179 8", // #EAB308
        "--color-warning-600": "211 161 7", // #d3a107
        "--color-warning-700": "176 134 6", // #b08606
        "--color-warning-800": "140 107 5", // #8c6b05
        "--color-warning-900": "115 88 4", // #735804
        // error | #e52424
        "--color-error-50": "251 222 222", // #fbdede
        "--color-error-100": "250 211 211", // #fad3d3
        "--color-error-200": "249 200 200", // #f9c8c8
        "--color-error-300": "245 167 167", // #f5a7a7
        "--color-error-400": "237 102 102", // #ed6666
        "--color-error-500": "229 36 36", // #e52424
        "--color-error-600": "206 32 32", // #ce2020
        "--color-error-700": "172 27 27", // #ac1b1b
        "--color-error-800": "137 22 22", // #891616
        "--color-error-900": "112 18 18", // #701212
        // surface | #808f96
        "--color-surface-50": "236 238 239", // #eceeef
        "--color-surface-100": "230 233 234", // #e6e9ea
        "--color-surface-200": "223 227 229", // #dfe3e5
        "--color-surface-300": "204 210 213", // #ccd2d5
        "--color-surface-400": "166 177 182", // #a6b1b6
        "--color-surface-500": "128 143 150", // #808f96
        "--color-surface-600": "115 129 135", // #738187
        "--color-surface-700": "96 107 113", // #606b71
        "--color-surface-800": "77 86 90", // #4d565a
        "--color-surface-900": "63 70 74", // #3f464a
    },
};

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{html,js,svelte,ts}", join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")],
    darkMode: "class",
    theme: {
        colors: {
            slate: colors.slate,
            emerald: colors.emerald,
            sky: colors.sky,
            white: colors.white,
            black: colors.black,
            gray: colors.gray,
            red: colors.red,
            pink: colors.pink,
            blue: colors.blue,
            green: colors.green,
            yellow: colors.yellow,
            transparent: colors.transparent,
            orange: colors.orange,
        },
        fontFamily: {},
        extend: {
            keyframes: {
                wiggle: {
                    "0%, 100%": { transform: "rotate(0deg)" },
                    "33%": { transform: "rotate(-4deg)" },
                    "67%": { transform: "rotate(4deg)" },
                    "5%, 95%": { transform: "scale(1.05); background-color: #f44336;" },
                },
                appear: {
                    "0%": { opacity: 0 },
                    "100%": { opacity: 1 },
                },
                disappear: {
                    "0%": { opacity: 1 },
                    "100%": { opacity: 0 },
                },
                "slide-in": {
                    "0%": {
                        transform: "translateX(-100%)",
                    },
                    "100%": {
                        transform: "translateX(0%)",
                    },
                },
                "slide-out": {
                    "0%": {
                        transform: "translateX(0%)",
                    },
                    "100%": {
                        transform: "translateX(-100%)",
                    },
                },
                swell: {
                    "0%, 100%": {
                        transform: "scale(1)",
                    },
                    "50%": {
                        transform: "scale(1.1)",
                    },
                },
                "swell-sm": {
                    "0%, 100%": {
                        transform: "scale(1)",
                    },
                    "50%": {
                        transform: "scale(1.05)",
                    },
                },
                "swell-xs": {
                    "0%, 100%": {
                        transform: "scale(1)",
                    },
                    "50%": {
                        transform: "scale(1.02)",
                    },
                },
                "pulse-dissolve": {
                    "0%": {
                        transform: "scale(1)",
                        opacity: 1,
                    },
                    "100%": {
                        transform: "scale(2)",
                        opacity: 0,
                    },
                },
                "warn-wiggle": {
                    "0%, 100%": {
                        transform: "translateX(0%)",
                    },
                    "33%": {
                        transform: "translateX(-0.5rem)",
                    },
                    "66%": {
                        transform: "translateX(0.5rem)",
                    },
                },
            },
            animation: {
                wiggle: "wiggle 0.5s ease-in-out",
                appear: "appear 0.2s ease-in-out",
                disappear: "disappear 0.2s ease-in-out",
                "slide-in": "slide-in 0.2s ease-out",
                "slide-out": "slide-out 0.2s ease-in",
                swell: "swell 0.8s infinite ease-in-out",
                "swell-sm": "swell-sm 0.8s infinite ease-in-out",
                "swell-xs": "swell-xs 0.8s infinite ease-in-out",
                "pulse-dissolve": "pulse-dissolve 0.8s ease-in",
                "warn-wiggle": "warn-wiggle 0.3s ease-in-out",
            },
            spacing: {
                128: "32rem",
                144: "36rem",
                160: "40rem",
                176: "44rem",
                192: "48rem",
                lg: "64rem",
                xl: "80rem",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
            },
            translate: {
                "1/8": "12.5%", // 12.5% is 1/8th of 100%
            },
            inset: {
                "1/8": "12.5%", // 12.5% is 1/8th of 100%
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        skeleton({
            themes: { custom: [myCustomTheme] },
        }),
        plugin(function ({ addUtilities, addBase }) {
            addBase({
                ".modal": {
                    "max-height": "calc(100vh - 2rem)",
                    "overflow-y": "auto",
                    "@apply bg-white rounded-token p-4 shadow-md": {},
                },
                ".menu": {
                    "@apply rounded-token p-4 bg-slate-50 dark:bg-slate-900 space-y-2": {},
                },
                ".menu-item": {
                    "@apply rounded-token px-4 py-2 cursor-pointer hover:variant-filled-surface active:variant-filled-surface active:scale-105 transition-all":
                        {},
                },
            });
            addUtilities({
                ".material-symbol": {
                    "font-family": '"Material Symbols Outlined", "PT Sans Narrow", "serif"',
                    "font-weight": "normal",
                    "font-style": "normal",
                    "line-height": 1,
                    "letter-spacing": "normal",
                    "text-transform": "none",
                    display: "inline-block",
                    "white-space": "nowrap",
                    "word-wrap": "normal",
                    direction: "ltr",
                },
                ".p-th-content-page": {
                    "@apply max-sm:p-4 p-8": {},
                },
                ".popup": {
                    "z-index": "20",
                    "@apply shadow-lg": {},
                },
                ".tooltip-top": {
                    "&:before, & > [data-tooltip]:before": {
                        bottom: "calc(100% - 8px)",
                        top: "unset",
                        "@apply border-t-gray-800 dark:border-t-gray-200 border-b-transparent border-l-transparent border-r-transparent":
                            {},
                    },
                    "&:after, & > [data-tooltip]:after": {
                        bottom: "calc(100% + 11px)",
                        top: "unset",
                    },
                },
                ".tooltip-bottom": {
                    "&:before, & > [data-tooltip]:before": {
                        bottom: "unset",
                        top: "calc(100% - 8px)",
                        "@apply border-b-gray-800 dark:border-b-gray-200 border-t-transparent border-l-transparent border-r-transparent":
                            {},
                    },
                    "&:after, & > [data-tooltip]:after": {
                        bottom: "unset",
                        top: "calc(100% + 11px)",
                    },
                },
                ".tooltip-left": {
                    "&:before, & > [data-tooltip]:before": {
                        bottom: "50%",
                        left: "unset",
                        transform: "translateY(50%)",
                        right: "calc(100% - 7px)",
                        "@apply border-l-gray-800 dark:border-l-gray-200 border-t-transparent border-b-transparent border-r-transparent":
                            {},
                    },
                    "&:after, & > [data-tooltip]:after": {
                        bottom: "50%",
                        left: "unset",
                        transform: "translateY(50%)",
                        right: "calc(100% + 11px)",
                    },
                },
                ".tooltip-right": {
                    "&:before, & > [data-tooltip]:before": {
                        bottom: "50%",
                        left: "calc(100% - 7px)",
                        transform: "translateY(50%)",
                        "@apply border-r-gray-800 dark:border-r-gray-200 border-t-transparent border-b-transparent border-l-transparent":
                            {},
                    },
                    "&:after, & > [data-tooltip]:after": {
                        bottom: "50%",
                        left: "calc(100% + 11px)",
                        transform: "translateY(50%)",
                    },
                },
            });
        }),
    ],
};
