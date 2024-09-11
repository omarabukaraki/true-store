import ProductComponent from '@/components/ProductComponent'
import React, { useEffect, useState } from 'react'
import { productInterfaceType } from "../../components/ProductComponent"
import { useGetProductsQuery } from '../api/productsSlice'
import { useRouter } from 'next/router'
import LoadingPage from '../LoadingPage'

const Product = () => {
    const { data} = useGetProductsQuery('');
    const { query } = useRouter();
    const { product } = query;
    const [finalData, setFinalData] = useState<productInterfaceType | any>();

    useEffect(() => {
        setFinalData(data?.products.filter((productData: productInterfaceType) => {
            return productData.id === parseInt(product!.toString()) + 1
        }))
    }, [data]);

    
    return (
        <div>
            {
                finalData === undefined ? <LoadingPage/> : <ProductComponent  data={finalData[0]} isInPage={true} />
            }
        </div>
    )
}

export default Product
