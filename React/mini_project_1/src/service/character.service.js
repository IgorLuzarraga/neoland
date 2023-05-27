import { listCharacter } from "../data/data.gallery";

export const getAll = () => listCharacter;

const byId = (id) => (item) => item.id === id
const byName = (name) => (item) => item.name === name

export const getById = (id) =>
  listCharacter.filter(byId(id))

export const getByName = (name) =>
  listCharacter.filter(byName(name))