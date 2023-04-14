// De nuevo vamos a usar JSON SERVER para simular nuestra 
// api en local. Ejecuta ``json-server --watch exercise-3.json`` 
// y obtendremos de la url `http://localhost:3000` los datos 
// del ejercicio.

// En este caso tenemos 2 endpoints, o lo que es lo mismo, 
// dos urls a las que llamar para recibir los datos.

// El endpoint `http://localhost:3000/orders` nos devolverá 
// una lista de pedidos de la tienda Mari & Juan y el 
// endpoint `http://localhost:3000/products` que nos 
// devuelve una lista de productos.

// La intención es pintar todos los pedidos ordenados 
// por fecha (ultimos pedidos al principio) y en los que 
// pongamos tanto los productos que contiene el pedido 
// como la cantidad pedida de cada uno de los productos.

// Si os fijáis, en el endpoint de los pedidos no tenemos 
// la información del producto, si no su id y cantidad 
// pedida. Para obtener el nombre de los productos 
// tendremos que hacer peticiones al endpoint de productos 
// pasando el id del producto, por 
// ejemplo ``http://localhost:3000/products/2``. De esta 
// forma podremos obtener ya toda la información y pintarla 
// en el html.

const showProducHeader = (product) => {
  const div = document.createElement('div')
  const pId = document.createElement('p')
  const pQuantity = document.createElement('p')

  pId.textContent = `Product id: ${product.productId}`
  pQuantity.textContent = `Product quantity: ${product.quantity}`

  div.appendChild(pId)
  div.appendChild(pQuantity)

  document.body.appendChild(div)
}

const showProductInfo = (product) => {
  const pInfo = document.createElement('p')

  pInfo.textContent = `Product name: ${product.name}`

  document.body.appendChild(pInfo)
}

const showOrderInfo = (order) => {
    const div = document.createElement('div')
    const pDate = document.createElement('p')
    const pId = document.createElement('p')

    pDate.textContent = `Order date: ${order.date}`
    pId.textContent = `Order Id: ${order.id}`

    div.appendChild(pDate)
    div.appendChild(pId)

    document.body.appendChild(div)
}

const showOrderSeparator = () => {
  const hr = document.createElement('hr')

  hr.style.height = '8px'
  hr.style.background='black'
  hr.style.border = '3px solid black'

  document.body.appendChild(hr)
}

const showProductSeparator = () => {
  const hr = document.createElement('hr')

  hr.style.height = '1px'
  hr.style.background='black'
  hr.style.border = '1px solid black'

  document.body.appendChild(hr)
}

const showOrderInfoSeparator = () => {
  const hr = document.createElement('hr')

  hr.style.height = '2px'
  hr.style.background='black'
  hr.style.border = '1px solid black'

  document.body.appendChild(hr)
}

const sortOrdersByDate = (orders) => 
  orders.sort((a, b) => {
        const date1 = new Date(a.date)
        const date2 = new Date(b.date)
        return (date2 - date1)
      })

const showOrdersInDOM = async () => {
  try {
    const response = await fetch(`http://localhost:3000/orders`);
    const orders = await response.json();

    const ordersSorted = sortOrdersByDate(orders)

    for (let i = 0; i < ordersSorted.length; i++) {
      showOrderInfo(ordersSorted[i])
      showOrderInfoSeparator()

      let products = ordersSorted[i].products

      for (let j = 0; j < products.length; j++) {
        const productId = products[j].productId

        // use the product id to fetch additional data
        const producttResponse = await fetch(`http://localhost:3000/products/${productId}`);
        const productInfo = await producttResponse.json();
        
        showProducHeader(products[j])
  
        showProductInfo(productInfo)

        showProductSeparator()
      }

      showOrderSeparator()
    }
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

