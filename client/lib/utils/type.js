const typeOf = (data) =>
  Object.prototype.toString.call(data).slice(8, -1).toLowerCase();

const isNumber = (data) => typeOf(data) === 'number';
const isString = (data) => typeOf(data) === 'string';
const isArray = (data) => typeOf(data) === 'array';
const isObject = (data) => typeOf(data) === 'object';
const isSymbol = (data) => typeOf(data) === 'symbol';
const isNull = (data) => typeOf(data) === 'null';
const isUndefined = (data) => typeOf(data) === 'undefined';
const isBigInt = (data) => typeOf(data) === 'bigint';
const isFunction = (data) => typeOf(data) === 'function';
const isMath = (data) => typeOf(data) === 'math';
