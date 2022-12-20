module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  rules: {
    'no-console': 0,
    'vue/comment-directive': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/no-reserved-component-names': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/no-mutating-props': 'off',
    'vue/no-v-text-v-html-on-component': 'off',
    'prefer-regex-literals': 'off'
  },
  ignorePatterns: ['cypress/']
}
