import './style.css'

const COLOR_PALETTE = {
  '#28262C': 'Raisin Black',
  '#998FC7': 'Blue Bell',
  '#D4C2FC': 'Lavender Blue',
  '#F9F5FF': 'Magnolia',
  '#14248A': 'Resolution Blue'
}

const addEventListenerToColorPicker = () => {
    const colorPickerSelect = document.querySelector("#color-picker");
    const h2 = document.querySelector('#color-name')

    colorPickerSelect.addEventListener("change", (event) => {
  
      const newColor = event.target.value; 
      //Almacenamos el código de color
  
      document.body.style.backgroundColor = newColor;
      //Le aplicamos el background color con el código de color seleccionado
    
      const colorName = `${COLOR_PALETTE[newColor]} - Hex code:  ${newColor}`
      h2.innerHTML = COLOR_PALETTE[newColor] ? colorName : '--'
    });
};

const addOptionsToColorPicker = () => {
    const colorPickerSelect = document.querySelector('#color-picker')

    Object.keys(COLOR_PALETTE).forEach((colorKey) => {
        const option = document.createElement('option')
        option.value = colorKey
        option.innerHTML = COLOR_PALETTE[colorKey]

        colorPickerSelect.append(option)
    })
}

addOptionsToColorPicker();
addEventListenerToColorPicker();