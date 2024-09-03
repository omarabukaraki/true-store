import ProductComponent from '@/components/ProductComponent';
import { useGetProductsQuery } from './api/productsSlice';
import { PaginationComponent } from '@/components/PaginationComponent';
import { useSelector } from 'react-redux';

const ProductsPage = () => {
    const limitAndSkipData:any = useSelector<{paginationReducer:{limit:number,skip:number}}>(state=>state.paginationReducer);
    const { data: products } = useGetProductsQuery({limit:limitAndSkipData.limit,skip:limitAndSkipData.skip});


    console.log({limit:limitAndSkipData.limit,skip:limitAndSkipData.skip});
    
    interface productInterface {
        id: number,
        title: string,
        description: string,
        category: string,
        price: number,
        discountPercentage: number,
        rating: number,
        stock: number,
        tags: string[],
        images: string[]
    }

    return (
       <>
        <div className='flex flex-wrap justify-center'>
            {products?.products.map((product: productInterface) => {
                return <ProductComponent data={product} />
            })}
        </div>
        <div className='my-6'>
            <PaginationComponent/>
        </div>
       </>
    )
}

export default ProductsPage
