import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsSlice = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: ({limit,skip}) => `products?limit=${limit || 194}&skip=${skip || 0}`,  
        })
    })
}
);


export const {useGetProductsQuery} = productsSlice; 
