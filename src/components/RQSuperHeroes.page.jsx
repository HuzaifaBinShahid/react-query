import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeroes = () => {
  return axios.get("http://localhost:4000/superheroes");
};

const RQSuperHeroes = () => {
  const { isLoading, data, isError, error } = useQuery(
    "superheroes",
    fetchSuperHeroes
  );

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <div>
      <h2>RQ Super Heroes List</h2>
      {data?.data.map((hero) => {
        console.log(hero);
        return <div key={hero.name}> {hero.name} </div>;
      })}
    </div>
  );
};

export default RQSuperHeroes;
