  export type Planet = {
    id: number,
    name: string,
    image: string
  }

  export type Planets = Planet[]

  export type Character = {
    id: number,
    name: string,
    description: string,
    avatar: string,
    idPlanet: number
  }

  export type Characters = Character[]