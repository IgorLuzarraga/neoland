// Segun la siguiente lista, ordena los elementos en base a la 
// propiedad .order.

type Album = {
    name: string,
    gender: string,
    order: number
}

const list: Album[] = [
  { name: "Mc Aitana", gender: "pop", order: 3 },
  { name: "Tote Queen", gender: "rap", order: 2 },
  { name: "Good Bunny", gender: "reggeaton", order: 4 },
  { name: "El sueño de Neo", gender: "pop", order: 1 },
]

const byOrder = (a: Album, b: Album) => 
    a.order > b.order
        ? 1
        : a.order < b.order ? -1 : 0

console.log(list.sort(byOrder))



