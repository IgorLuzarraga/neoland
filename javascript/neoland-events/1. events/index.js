// 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
// evento click que ejecute un console log con la información del evento del click

const handleClick = (event) => {
  console.log("Event type:", event.type)
  console.log("Event target:", event.target)
}

const eventOnclickBtn = () => {
    const btn = document.createElement("button")
    btn.innerHTML = "Click Me"
    btn.id = "btnToClick"

    btn.onclick = handleClick

    document.body.appendChild(btn);
}


// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const handleFocus = (event) => 
  console.log("Input value:", event.target.value)

const eventOnfocusInput = () => {
  const input = document.querySelector(".focus")
  input.onfocus = handleFocus
}

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const handleInput = (event) => 
  console.log("Input value:", event.target.value)

const eventOninput = () => {
  const input = document.querySelector(".value")
  input.oninput = handleInput
}