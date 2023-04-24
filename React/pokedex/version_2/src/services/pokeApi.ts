/* eslint-disable prettier/prettier */
// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import type { PokemonFromServer } from '../types/pokemonTypes' 

// Define a service using a base URL and expected endpoints
export const pokemonApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<PokemonFromServer, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
  reducerPath: 'pokemonApi',
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery } = pokemonApi
