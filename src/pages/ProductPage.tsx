import ProductComponent from '@/components/ProductComponent';
import { useGetProductsQuery } from './api/productsSlice';
import { PaginationComponent } from '@/components/PaginationComponent';
import { useSelector } from 'react-redux';
import LoadingPage from './LoadingPage';

const ProductsPage = () => {
    const limitAndSkipData: any = useSelector<{ paginationReducer: { limit: number, skip: number } }>(state => state.paginationReducer);
    const { data: products ,isFetching } = useGetProductsQuery<any>({ limit: limitAndSkipData.limit, skip: limitAndSkipData.skip });
     
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


    return (
        <>
            {
                products && products.products.length !== 0 && isFetching !== true ? <>
                    <div className='flex flex-wrap justify-center'>
                        {products.products.map((product: any, index: number) => {
                            return <ProductComponent key={index} data={product} />
                        })}
                    </div>
                </> : <LoadingPage />
            }
            <div className='my-6 flex justify-center'>
                <button onClick={scrollToTop}><PaginationComponent /> </button>
            </div>
        </>
    )
}

export default ProductsPage
