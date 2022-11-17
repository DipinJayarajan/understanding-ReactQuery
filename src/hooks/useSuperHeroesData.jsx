import React from 'react';
import { useQuery , useMutation, useQueryClient} from 'react-query'
import axios from 'axios';

const fetchSuperHeroes =  () => {
    return axios.get('http://localhost:4005/superheroes')
  }
//mutation
 const addSuperHero = (hero) => {
   return axios.post('http://localhost:4005/superheroes', hero)
 }

 const useSuperHeroesData = (onSuccess, onError) => {

   return useQuery("super-heroes", fetchSuperHeroes,
  {
    onSuccess,
    onError,
    refetchOnWindowFocus : false,
    // select: (data) => {
    //   const SuperHeroesNames = data.data.map((hero) => hero.name)
    //     return SuperHeroesNames
      
    // },

  }
  )
    
}  
//mutation
 const useAddSuperHeroData = () => {
  const queryClient = useQueryClient()
  return useMutation(addSuperHero, {
    //data refers to the entire response for the post request
    onSuccess: (data) => {
      // queryClient.invalidateQueries("super-heroes")
    queryClient.setQueryData("super-heroes",(oldQueryData) => {
      return {
        ...oldQueryData,
        data: [...oldQueryData.data, data.data]
      }
    } )
    }
  })
}

export {useSuperHeroesData, useAddSuperHeroData}





























