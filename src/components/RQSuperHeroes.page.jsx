import React from "react";
import { Link } from "react-router-dom";
import { useSuperHeroesData } from "../hooks/SuperHeroData";

const RQSuperHeroes = () => {
  // const [fetchHeroes, setFetchHeroes] = useState(false);

  const onSuccess = (data) => {
    console.log("Performed Fetching and is success", data);
  };

  const onError = (error) => {
    console.log("Got an error while fetching", error);
  };

  const { isLoading, data, isError, error, isFetching } = useSuperHeroesData(
    onSuccess,
    onError
  );

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  // const onClickHandle = () => {
  //   setFetchHeroes(true);
  // };

  return (
    <>
      <h2>RQ Super Heroes List</h2>
      <button>Fetch Heroes</button>
      {data?.data.map((hero) => {
        console.log(hero);
        return <div key = {hero.id}>
          <Link to = {`/rq-superhero/${hero.id}`}>{hero.name}</Link>
        </div>;
      })}
      {/* {data && data.map((heroName) => <div key={heroName}>{heroName}</div>)} */}
    </>
  );
};

export default RQSuperHeroes;
