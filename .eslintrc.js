const warn = process.env.NODE_ENV === "development" ? "warn" : "error";

module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "react-hooks"
    ],
    "rules": {
        "react/prop-types": "off",
        "no-loop-func": "error",
        "no-unused-vars": "off",
        "react/no-danger": "error",
        "no-console": warn,
        "block-spacing": "error",
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "@typescript-eslint/no-unused-vars": "error",
        "no-throw-literal": "error",
        "@typescript-eslint/no-explicit-any": warn,
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": warn,
        "indent": [
            "error",
            4,
            {
                "SwitchCase": 1
            }
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double",
            {
                "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-restricted-imports": ["error", {
            paths: [
                {
                    name: "material-ui/core",
                    importNames: ["Typography", "Avatar"]
                }
            ],
            patterns: ["@material-ui/core/*"]
        }],
        "arrow-body-style": ["error", "always"]
    }
};