export const pipe = (value, ...funcs) =>
    funcs.reduce((accValue, func) => func(accValue), value)
