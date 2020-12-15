/**
 * isNull
 *
 * @param val
 */
export const isNull = (val: unknown): boolean => val === null;

/**
 * isFunction
 *
 * @param val
 */
export const isFunction = (val: unknown): boolean => typeof val === 'function';

/**
 * isNullOrUndefined
 *
 * @param val
 */
export const isNullOrUndefined = (val: unknown): boolean =>
  typeof val === 'undefined' || val === null;

/**
 * isNumber
 *
 * @param val
 */
export const isNumber = (val: unknown): boolean => typeof val === 'number';

/**
 * isObject
 *
 * @param val
 */
export const isObject = (val: unknown): boolean =>
  typeof val === 'object' && val !== null;

/**
 * isPrimitive
 *
 * @param val
 */
export const isPrimitive = (val: unknown): boolean =>
  (typeof val !== 'object' && typeof val !== 'function') || typeof val === null;

// TODO
// export const isBuffer = (val: object): boolean => !val;
// export const isRegExp = (val: object): boolean => !val;
