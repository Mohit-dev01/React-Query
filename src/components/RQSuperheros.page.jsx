import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useAddSuperHeroData } from "../hooks/useSuperHerosData";

export const RQSuperherospage = () => {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = () => {
    console.log("hwlo");
  };
  const onError = () => {
    console.log("bye");
  };
  const { isLoading, data } = useQuery({
    queryKey: ["super-heros"],
    queryFn: () => {
      return axios.get("http://localhost:3000/superheros");
    },
    onSuccess,
    onError,
  });

  const {mutate} = useAddSuperHeroData()
  const handleAddHeroClick = () => {
    console.log({ name, alterEgo });
    const hero = {name, alterEgo}
    mutate(hero)
  };
  //   console.log(tao)
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      RQSuperherospage
      <div>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button onClick={handleAddHeroClick}>Add Hero </button>
      </div>
      <button>Fetch Heros</button>
      {data.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
    </>
  );
};
