export type Order = {
    id: number,
    date: string,
    products: Product[]
  }
  
  export type Product = {
    productId: number,
    quantity: number
  }
  
  export type ProductInfo = {
    id: number,
    name: string
  }

  export type Orders = Order[]