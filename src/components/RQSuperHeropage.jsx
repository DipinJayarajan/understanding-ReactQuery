import React from 'react'
import { useParams } from 'react-router-dom'
import { useSuperHeroeData } from '../hooks/useSuperHeroData'

export const RQSuperHeroPage = () => {

  const { heroId } =  useParams()
  const { isLoading , isError, data, error } =  useSuperHeroeData(heroId)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return(
    <div>
    {data?.data.map } - {data?.data.alterEgo} 
    </div>
  ) 
  
}
