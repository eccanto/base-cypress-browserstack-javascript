module.exports = {
    env: {
        browser: true,
        node: true,
        es2021: true
    },
    parser: 'babel-eslint',
    extends: [
        'plugin:jsonc/recommended-with-jsonc'
    ],
    parserOptions: {
        ecmaVersion: 2021
    },
    overrides: [
        {
            files: ['*.json', '*.json5', '*.jsonc'],
            parser: 'jsonc-eslint-parser',
        },
    ],
    rules: {
        semi: ['error', 'always'],
        indent: ['error', 4],
        'jsonc/indent': ['error', 2, {}],
        'space-before-function-paren': [
            'error',
            {
                anonymous: 'always',
                named: 'never',
                asyncArrow: 'always'
            }
        ]
    }
};

