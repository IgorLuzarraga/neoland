// Usa un bucle y dos condiciones para imprimir por consola 
// el nombre de los usuarios que sean menor de edad 
// precedidos del texto "Usuarios menores de edad:" y 
// otro que imprima a los usuarios mayores de edad, 
// precedido del texto "Usuarios mayores de edad:".

const users = [
    { name: "Tony", years: 43 },
    { name: "Peter", years: 18 },
    { name: "Natasha", years: 14 },
    { name: "Bruce", years: 32 },
    { name: "Khamala", years: 16 },
  ];

// ------------- Ver 1 ------------------
const showGrownupAndYoungerUsers = (users) => {
    const grownupUsers = []
    const youngerUsers = []

    users.forEach(user => {
        user.years >= 18 
            ? grownupUsers.push(user)
            : youngerUsers.push(user)
    })

    console.log('\nGrown up users: \n')
    grownupUsers.forEach(user => console.log(user.name))

    console.log(`\nYounger users: \n`)
    youngerUsers.forEach(user => console.log(user.name))

}

showGrownupAndYoungerUsers(users)

// ------------- Ver 2 ------------------

const showGrownupUsers = (users) => {
    console.log('\nGrown up users: \n')

    users.filter(user => user.years >= 18)
         .forEach(user => console.log(user.name))
}

const showYoungerUsers = users => {
    console.log(`\nYounger users: \n`)

    users.filter(user => user.years < 18)
         .forEach(user => console.log(user.name))
}

// showGrownupUsers(users)
// showYoungerUsers(users)



