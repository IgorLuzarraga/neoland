const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]

const getMovieCategories = (movies) => {
    const categories = []

    for(const movie of movies) {
        movie.categories.forEach(category => {
            if (!categories.includes(category)) {
                categories.push(category)
            } 
        })
    }

    return categories
}

console.log(getMovieCategories(movies))

// ---------- Second method ---------------------

const getMovieCategories2 = (movies) => 
    movies.flatMap(movie => movie.categories)
          .reduce(removeDuplicatesHelper, [])
  
const removeDuplicatesHelper = (acc, current) => {
    if(acc.includes(current)) return acc
    acc.push(current) 
    return acc
}

console.log(getMovieCategories2(movies))
