"use client"

import { useQuery } from "@tanstack/react-query";
import axios from "axios";



const productEndpoint = async ({ queryKey }:any) => {
  const id = queryKey[1];
  return await  axios.get(`http://localhost:3088/products/${id}`);
};
 

export const useProductData = (id:number) => {
    return useQuery({queryKey: ["product", id], queryFn:productEndpoint});
}