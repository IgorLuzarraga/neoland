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

export const changeColor = () => {
    //document.body.classList.toggle('dark-mode')
    console.log(document.body.style.background)
    if(document.body.style.backgroundColor === "rgb(189, 219, 255)") {
        document.body.style.backgroundColor = "#000"
        document.body.style.color = "#fff"
    } else {
        document.body.style.backgroundColor = "#BDDBFF"
        document.body.style.color = "#000"
    }
}