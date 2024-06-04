"use client";

import { useProductData } from "@/app/components/Hooks/ProductData";



const DetailsPage = ({id}:any) => {
  const { isLoading, data, isError, error } = useProductData(id);
const res = data?.data;
  console.log(res);
    return (
      <div>
        <div>
                {res && <div>
                    <h1 className="text-2xl text-pink-300">{res.name}</h1>
                    <div>
                        Description : {res.description}
                    </div>
                    <div>
                        Price : {res.price}
                    </div>
                    <div>
                        Categories : {res.category}
                    </div>
                    <div>
                        Stock : {res.stock}
                    </div>
                    <div>
                        Rating : {res.rating}
                    </div>
                </div>
                
                }
        </div>
      </div>
    );
};

export default DetailsPage;
