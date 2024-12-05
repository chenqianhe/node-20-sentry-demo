module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:svelte/recommended",
        "plugin:compat/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
    ],
    plugins: ["compat"],
    overrides: [
        {
            env: {
                node: true,
            },
            files: [".eslintrc.{js,cjs}"],
            parserOptions: {
                sourceType: "script",
                tsconfigRootDir: __dirname,
            },
        },
        {
            files: ["*.svelte"],
            parser: "svelte-eslint-parser",
            parserOptions: {
                parser: {
                    // Specify a parser for each lang.
                    ts: "@typescript-eslint/parser",
                    js: "espree",
                    typescript: "@typescript-eslint/parser",
                },
                project: "tsconfig.json",
                tsconfigRootDir: __dirname,
            },
        },
    ],
    parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: "latest",
        sourceType: "module",
        project: "tsconfig.json",
        extraFileExtensions: [".svelte"],
        tsconfigRootDir: __dirname,
    },
    rules: {
        quotes: ["error", "double", { avoidEscape: true }],
        indent: "off",
        "no-empty-function": "off",
        "@typescript-eslint/no-empty-function": "off",
        "svelte/no-at-html-tags": "off",
        "no-inner-declarations": "off",
        "no-self-assign": "off",
        "@typescript-eslint/no-unused-vars": [1, { argsIgnorePattern: "^_" }],
        eqeqeq: "error",
    },
};
