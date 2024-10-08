import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHero = ({queryKey}) =>{
    const heroId = queryKey[1]
    return axios.get(`http://localhost:4000/superheroes/${heroId}`)
}

const useSuperHeroData = (heroId) => {
    
  return useQuery(["superhero", heroId], fetchSuperHero);
};

export default useSuperHeroData;
