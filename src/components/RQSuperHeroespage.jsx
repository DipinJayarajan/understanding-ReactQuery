import React from 'react'
import { Link } from 'react-router-dom'
import useSuperHeroesData from '../hooks/useSuperHeroesData'



function RQSuperHeroespage() {
  
  const onSuccess = (data) => {
    console.log("Perform side effect", data)
  }

  const onError = (error) => {
    console.log("Perform side effect", error)
  }

  const {data, isLoading, isError, error , isFetching, refetch} = useSuperHeroesData(onSuccess, onError);

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
      data?.data.map((hero) => {
        return <div key={hero.id}>
          <Link to={`/rqsuperheroes/${hero.id}`}>{hero.name}</Link>
        </div>
      }
      )
    }
    {/* {data.map((heroName) => {
      return <div key={heroName}>{heroName}</div>
    }) } */}
    </>
  )
}

export default RQSuperHeroespage