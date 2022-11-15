import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios';

const fetchSuperHeroes =  () => {
  return axios.get('http://localhost:4002/superheroes')
}

function RQSuperHeroespage() {
  
  const onSuccess = (data) => {
    console.log("Perform side effect", data)
  }

  const onError = (error) => {
    console.log("Perform side effect", error)
  }
  const {data, isLoading, isError, error , isFetching, refetch} = useQuery("super-heroes", fetchSuperHeroes,
  {
    enabled: false,
     onSuccess,
      onError,
  }
  )


  console.log( {isLoading , isFetching})
  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }
  
  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
    <h2>RQSuperHeroespage</h2>
    <button onClick={refetch}>Fetch Heroes</button>
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