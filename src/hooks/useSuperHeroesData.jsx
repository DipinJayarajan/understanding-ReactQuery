import React from 'react';
import { useQuery } from 'react-query'
import axios from 'axios';

const fetchSuperHeroes =  () => {
    return axios.get('http://localhost:4003/superheroes')
  }

 const useSuperHeroesData = (onSuccess, onError) => {

   return useQuery("super-heroes", fetchSuperHeroes,
  {
    onSuccess,
    onError,
    // select: (data) => {
    //   const SuperHeroesNames = data.data.map((hero) => hero.name)
    //     return SuperHeroesNames
      
    // },

  }
  )
    
}  

export default useSuperHeroesData;





























