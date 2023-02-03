/**
 * * Not using `Lodash` because `3.` in lodash is not numeric but we want to classify it as numeric.
 * @param value Some string to check is numeric
 */
export const isNumeric = (value: string): boolean => /^\d*\.?\d*$/.test(value)

/**
 * * Not using `Lodash` because the string of `6` in lodash is not integer but we want classify it as integer.
 * @param value Some string to check is integer
 */
export const isInteger = (value: string): boolean => /^(([0-9]*))$/.test(value)
