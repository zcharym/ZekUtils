module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended'
    ],                              //使用推荐的React代码检测规范
    plugins: ['@typescript-eslint'],
    env: {
        browser: true,
        node: true,
    },
    settings: {

    },
    parserOptions: {
        "ecmaVersion": 2019,
        "sourceType": 'module',

    }
}