import React from 'react'
import { useQueries } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes =  (heroId) => {
    return axios.get(`http://localhost:4005/superheroes/${heroId}`)
}

export const DynamicParallelpage = ( {heroIds} ) => {
    const queryResults =  useQueries(
        heroIds.map(id => {
            return{
                queryKey: ['super-heroes', id],
                queryFn: () => fetchSuperHeroes(id),
            }
        })
    )
    console.log({queryResults})
  return <div>DynamicParallelpage</div>
  
}
