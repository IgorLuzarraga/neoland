export const pipe = (value, ...args) => args.reduce((acc, func) => func(acc), value)
