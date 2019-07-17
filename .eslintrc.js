module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended'],
  // add your custom rules here
  rules: {
    semi: ['error', 'always'],
    indent: ['warn', 2, { SwitchCase: 1 }],
    'vue/singleline-html-element-content-newline': 'off',
    'no-console': 'off',
    'space-before-function-paren': 'off'
  }
};
