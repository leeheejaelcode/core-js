import globals from 'globals';
import pluginJs from '@eslint/js';

const ignore = {
  isString: true,
  isObject: true,
  isArray: true,
  isNumber: true,
  isSymbol: true,
  isUndefined: true,
  isBigInt: true,
  isFunction: true,
  isMath: true,
  insertAfter: true,
  insertBefore: true,
  insertFirst: true,
  insertLast: true,
  addClass: true,
  removeClass: true,
  toggleClass: true,
  getNode: true,
  getNodes: true,
  bindEvent: true,
};

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...ignore,
      },
    },
    rules: {
      'no-unused-vars': 'warn',
    },
  },
];
