import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsSlice = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({limit,skip}) => `products?limit=${limit}&skip=${skip}`,  
        })
    })
}
);


export const {useGetProductsQuery} = productsSlice; 
