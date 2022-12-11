module.exports = {
    "env": {
        "browser": true,
        "node": true
    },
    "globals": {
        "angular": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        "camelcase": 2,
        "curly": 2,
        "brace-style": [2, "1tbs"],
        "quotes": [2, "single"],
        "semi": [2, "always"],
        "space-in-brackets": [2, "never"],
        "space-infix-ops": 2,
    }
}
