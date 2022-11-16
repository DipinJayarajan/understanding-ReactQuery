import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchSuperHeroes =  () => {
    return axios.get('http://localhost:4003/superheroes')
}

const fetchFriends =  () => {
    return axios.get('http://localhost:4003/friends')
}
    
export const ParallelQueriespage = () => {

    const { data: superHeroesData, isError: superHeroesIsError, error: superHeroesError, isLoading: superHeroesIsLoading } = useQuery("super-heroes", fetchSuperHeroes)
    const { data : friendsData , isError: friendsIsError, error : friendsError , isLoading: friendsIsLoading } = useQuery("friends", fetchFriends)

  return <div>ParallelQueriespage</div>
}
