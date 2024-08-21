import { useParams } from "react-router-dom";
import useSuperHeroData from "../hooks/useSuperHeroData";

const RQSuperHero = () => {
  const { heroId } = useParams();
  const {isLoading , data, isError , error} = useSuperHeroData(heroId);

  if(isLoading){
    return <div>Loading...</div>
  }

  if(isError){
    return <h2>{error.message}</h2>
  }

  return (
    <div>
        {data?.data.name} - {data?.data.move}
    </div>
  )
};

export default RQSuperHero;
