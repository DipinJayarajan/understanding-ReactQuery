import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios';

const fetchSuperHeroes =  () => {
  return axios.get('http://localhost:4000/superheroes')
}

function RQSuperHeroespage() {

  const {data, isLoading } = useQuery("super-heroes", fetchSuperHeroes)

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  return (
    <>
    <h2>RQSuperHeroespage</h2>
    {
      data?.data.map((hero, index) => {
        return <div key={index}>{hero.name}</div>
      }
      )
    }
    </>
  )
}

export default RQSuperHeroespage