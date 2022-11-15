import { useState, useEffect } from 'react'
import axios from 'axios'

function SuperHeroespage() {

  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {
    axios.get('http://localhost:4002/superheroes').then(res => {
      setData(res.data)
      setIsLoading(false)
    }).catch(error => {
      setError(error.message)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }
  
  return (
    <>
      <h2>Super Heroes Page</h2>
      {data.map((hero, index) => {
        return <div key={index}>{hero.name}</div>
      })}
    </>
  )
}

export default SuperHeroespage