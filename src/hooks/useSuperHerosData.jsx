import { useMutation } from "@tanstack/react-query";
import axios from "axios";

const addSuperHero = (hero) => {
    return axios.post("http://localhost:4000/superheros",hero)
}

export const useAddSuperHeroData = () =>{
    return useMutation(addSuperHero)
}