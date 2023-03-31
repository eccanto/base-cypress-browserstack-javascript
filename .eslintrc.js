module.exports = {
  extends: [
    'eslint:recommended',
  ],
  plugins: [
    'cypress',
  ],
  root: true,
  env: {
    es6: true,
    node: true,
    'cypress/globals': true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    semi: ['error', 'never']
  }
}
