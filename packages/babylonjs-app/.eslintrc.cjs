module.exports = {
    "root": true,
    "env": {
        "browser": true,
        "es2021": true
    },
    "overrides": [
    ],
    parser: '@typescript-eslint/parser',
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        project: ['./tsconfig.json',],
    },
    plugins: [
        '@typescript-eslint',
        'jsdoc',
        'tsdoc',
        'prettier',
        'etc',
    ],
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:jsdoc/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        // Typescript
        '@typescript-eslint/explicit-function-return-type': ['error'],
        'no-underscore-dangle': 'off',
        'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
        // Airbnb naming convention settings with added filter for `_id` variable and selector for
        // enum member
        '@typescript-eslint/naming-convention': [
            'error',
            // Allow camelCase variables (23.2), PascalCase variables (23.8), and UPPER_CASE variables
            // (23.10)
            {
                selector: 'variable',
                format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
                filter: {
                    regex: '_id',
                    match: false,
                },
            },
            // Allow camelCase functions (23.2), and PascalCase functions (23.8)
            {
                selector: 'function',
                format: ['camelCase', 'PascalCase'],
            },
            // Airbnb recommends PascalCase for classes (23.3), and although Airbnb does not make
            // TypeScript recommendations, we are assuming this rule would similarly apply to anything
            // "type like", including interfaces, type aliases, and enums
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
            {
                selector: 'enumMember',
                format: ['UPPER_CASE'],
            },
        ],
        // JS doc
        'jsdoc/require-description': 1,
        'jsdoc/require-description-complete-sentence': 1,
        'jsdoc/require-hyphen-before-param-description': 1,
        'jsdoc/require-param-type': 0,
        'jsdoc/require-returns-type': 0,
        'jsdoc/require-throws': 1,
        'jsdoc/require-jsdoc': [
            'warn',
            {
                require: {
                    ArrowFunctionExpression: false,
                    ClassDeclaration: true,
                    ClassExpression: false,
                    FunctionDeclaration: true,
                    FunctionExpression: false,
                    MethodDefinition: true,
                },
                checkSetters: false,
            },
        ],
        'jsdoc/require-returns': [
            'warn',
            {
                checkGetters: false,
            },
        ],
        'jsdoc/valid-types': 0,
        // TS doc
        'tsdoc/syntax': 'warn',
        // Etc
        'etc/no-commented-out-code': 'warn',

        // Jsx
        'jsx-a11y/label-has-associated-control': [
            'error',
            {
                required: {
                    some: ['nesting', 'id'],
                },
            },
        ],

        // Overall code style
        'max-len': [
            'error',
            {
                code: 99,
                comments: 99,
                tabWidth: 2,
            },
        ],
        // disallow certain syntax forms
        // https://eslint.org/docs/rules/no-restricted-syntax
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message: `for..in loops iterate over the entire prototype chain, which is virtually never
        what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.`,
            },
            {
                selector: 'LabeledStatement',
                message: `Labels are a form of GOTO; using them makes code confusing and hard to maintain
        and understand.`,
            },
            {
                selector: 'WithStatement',
                message: `with statement is disallowed in strict mode because it makes code impossible to
        predict and optimize.`,
            },
        ],
    },
}
