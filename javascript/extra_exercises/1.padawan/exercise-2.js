// Usa un for para remplazar todas las comidas que no 
// sean veganas con las frutas del array de frutas. 
// Recuerda no usar frutas duplicadas. Finalmente, imprime 
// el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const foodAllVegan = []

// Note: index could be bigger than the last index of 
// fruit array, the result (in this case will be undefined)

foodSchedule.forEach((food, index) => {
    food.isVegan ? foodAllVegan.push(food)
                 : foodAllVegan.push({name: `${fruits[index]}`, isVegan: true})
})

console.log(foodAllVegan)
