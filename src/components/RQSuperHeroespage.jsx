import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSuperHeroesData , useAddSuperHeroData } from '../hooks/useSuperHeroesData'

function RQSuperHeroespage() {

  const [ name, setName ] = useState('');
  const [ alterEgo, setAlterEgo ] = useState('');
  
  const onSuccess = (data) => {
    console.log("Perform side effect", data)
  }

  const onError = (error) => {
    console.log("Perform side effect", error)
  }

  const {data, isLoading, isError, error , isFetching, refetch} = useSuperHeroesData(onSuccess, onError);
//mutation
   const { mutate: addHero } =  useAddSuperHeroData()

  const handleAddHeroClick = () => {
    console.log({name, alterEgo})
    const hero = {name, alterEgo}
    addHero(hero)
  }

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }
  
  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <>
    <h2>RQSuperHeroespage</h2>
    <div>
      <input 
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <input 
      type="text"
      value={alterEgo}
      onChange={(e) => setAlterEgo(e.target.value)}
      />
      <button onClick={handleAddHeroClick}>Add Heroes</button>
    </div>
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