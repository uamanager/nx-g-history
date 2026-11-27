import cypress from 'eslint-plugin-cypress/flat';
import baseConfig from '../../eslint.config.mjs';

const eslintConfig = [
  cypress.configs['recommended'],
  ...baseConfig,
  {
    // Override or add rules here
    rules: {},
  },
];

export default eslintConfig;
