import { useQuery } from "react-query"
import axios from "axios"

const fetchSuperHeroes = () =>{
   return axios.get('http://localhost:4000/superheroes')
}

export const useSuperHeroesData = (onSuccess,onError) =>{
    return useQuery('superhero', fetchSuperHeroes, {
        onSuccess,
        onError,
        // enabled,
        // refetchOnMount: false,
        // refetchOnWindowFocus: false,
        // select: (data) =>{
        //     const superHeroNames = data.data.map((hero) => hero.name)
        //     return superHeroNames;
        // }
    })
}