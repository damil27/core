"use client"
import { useQuery } from "@tanstack/react-query";
import axios from "axios"
import Spinner from "./spinner";
import Link from "next/link"

const Fetching = () => {

    const {isLoading, data,isError, error} = useQuery({
        queryKey: ["product"],
        queryFn: () => {
            const response = axios.get< Product[] >("http://localhost:3088/products");
            return response;
        }
    })
    console.log(data?.data)
    if (isLoading) return <Spinner />
    if (isError) return <div>{error.message}</div>
    return (
      <>
        {data &&
          data.data.map((p: Product) => (
            <div key={p.id}>
              <Link href={`/products/${p.id}`}>{p.name}</Link>
            </div>
          ))}
      </>
    );
}

export default Fetching;