// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
const insertDiv = () => {
    let elemDiv = document.createElement('div');
    // elemDiv.style.cssText = "width:100px;height:100px;background:blue";

    // Insert the div
    document.body.appendChild(elemDiv);
}

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const insertDivWithPinside = () => {
    const elemDiv = document.createElement('div');

    const elemP = document.createElement('p')
    const node = document.createTextNode("Hi there!");
    elemP.appendChild(node);

    // Insert the P element inside the Div
    elemDiv.appendChild(elemP);

    // Insert the div
    document.body.appendChild(elemDiv);
}

// 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const insertDivWith6Pinside = () => {
    const elemDiv = document.createElement('div');

    const arr_six_el = [1, 2, 3, 4, 5, 6]

    arr_six_el.map(el => {
        const elemP = document.createElement(`p${el}`)
        const node = document.createTextNode(`Hi there #${el}`);
        elemP.appendChild(node);

        // Insert the P element inside the Div
        elemDiv.appendChild(elemP);

        // Create & insert a line break
        const elemBr = document.createElement(`br`)
        elemDiv.appendChild(elemBr);
    })

    // Insert the div
    document.body.appendChild(elemDiv);
}

// 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const showPWithText_Soy_dinamico = () => {
    const elemP = document.createElement('p')
    const node = document.createTextNode("Soy dinámico")
    elemP.appendChild(node)
    document.body.appendChild(elemP)
}

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const showH2withText_Wubba_ver1 = () => {
    document.querySelector(".fn-insert-here").innerHTML = 'Wubba Lubba dub dub'
}

const showH2withText_Wubba_ver2 = () => {
    const elem = document.querySelector(".fn-insert-here")
    const node = document.createTextNode('Wubba Lubba dub dub')
    elem.appendChild(node)
}


// 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const showAppList = () => {
    // Array of Apps to insert in the ul list.
    const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

    // Create the list
    const elemUl = document.createElement('ul')

    apps.map(app => {
        // Create the li element
        const elemLi = document.createElement('li')

        // Create the Node with the app name that we want to insert in each li element
        const appNode = document.createTextNode(app)

        // Insert the node inside li element
        elemLi.appendChild(appNode)

        // Insert the li element inside the ul list
        elemUl.appendChild(elemLi)
    })

    document.body.appendChild(elemUl)
}

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const eraseAllNodes_ver1 = (selectorName) => {

    // Array with all selectors with name selectorName
    const nodesArr = document.querySelectorAll(selectorName)

    // Erase all selectors
    nodesArr.forEach(node => document.body.removeChild(node))
}


const eraseAllNodes_ver2 = (selectorName) => {

    // Array with all selectors with name selectorName
    const nodesArr = document.querySelectorAll(selectorName)

    // Erase all selectors
    nodesArr.forEach(node => node.remove())
}

// 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
// 	Recuerda que no solo puedes insertar elementos con .appendChild.
const insertPWithTextAfterDiv_ver1 = (text) => {

    // Select all divs
    const divElemArr = document.querySelectorAll('div')

    // Create the p element
    const pElem = document.createElement('p')

    // Create the Node with the text we want to insert inside the p element
    const appNode = document.createTextNode(text)

    // Insert the node with the text inside the p element.
    pElem.appendChild(appNode)

    // Insert tle p element between the first and second divs of the array divElemArr
    divElemArr[1].insertBefore(pElem, null);
}

const insertPWithTextAfterDiv_ver2 = (text) => {

    // Select all divs
    const divElemArr = document.querySelectorAll('div')

    // Create the p element
    const pElem = document.createElement('p')

    // Insert the text in the p element
    pElem.textContent = text

    // Insert tle p element between the first and second divs of the array divElemArr
    divElemArr[1].insertBefore(pElem, null);
}


// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const insertPWithTextInAllElmentsWithClassName = (className, text) => {

    // Select all element with class equal to className
    const elemArr = document.querySelectorAll(className)

    elemArr.forEach(el => {
        const pElem = document.createElement("p");
        pElem.textContent = text

        el.appendChild(pElem)
    })
}

