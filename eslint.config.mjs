import globals from 'globals';
import pluginJs from '@eslint/js';

const type = {
  isString: true,
  isObject: true,
  isArray: true,
  isNumber: true,
  isSymbol: true,
  isUndefined: true,
  isBigInt: true,
  isFunction: true,
  isMath: true,
};

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...type,
        getNode: true,
        getNodes: true,
        attr: true,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
