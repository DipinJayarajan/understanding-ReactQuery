import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHero =  ( { queryKey } ) => {
    const heroId = queryKey[1]
    return axios.get(`http://localhost:4003/superheroes/${heroId}`)
  }


export const useSuperHeroeData = (heroId) => {

    return useQuery(["super-heroes", heroId], fetchSuperHero,
   )
}