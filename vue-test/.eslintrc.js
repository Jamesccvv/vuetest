module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        indent: ['error', 4],
        'no-trailing-spaces': ['error', {skipBlankLines: true}],
        'space-before-function-paren': [2, 'never'],
        'object-curly-spacing': ['error', 'never'],
        'no-useless-escape': 'off',
    }
}
