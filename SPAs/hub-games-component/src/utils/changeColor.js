const pipe = (value, ...args) => args.reduce((acc, func) => func(acc), value)

const add = x => y => x + y
const subs = x => y => x - y
const multiply = x => y => x * y
const multiplyBy5 = multiply(5)


const randomNum = (min, max) => Math.floor(min + Math.random() * (max - min))

const randomNumFP = (min, max) => 
    pipe( min,
          subs(max),
          multiply(Math.random()),
          add(min),
          Math.floor
    )

export const changeColor = () => 
    //`rgb(${randomNumFP(0, 255)}, ${randomNumFP(0, 255)}, ${randomNum(0, 255)})`
    document.body.classList.toggle('dark-mode');