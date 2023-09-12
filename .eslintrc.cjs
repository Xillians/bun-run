/**
 * @type {import('eslint').Linter.Config}
 **/

module.exports = {
  extends: ['@bjerk/eslint-config'],
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
};
