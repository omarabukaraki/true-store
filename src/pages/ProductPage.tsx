import ProductComponent from '@/components/ProductComponent';
import { useGetProductsQuery } from './api/productsSlice';
import { PaginationComponent } from '@/components/PaginationComponent';
import { useSelector } from 'react-redux';
import LoadingPage from './LoadingPage';
import OrganizationStrData from '@/components/structureData/OrganizationStrData';
import Head from 'next/head';



const ProductsPage = () => {
    const limitAndSkipData: any = useSelector<{ paginationReducer: { limit: number, skip: number } }>(state => state.paginationReducer);
    const { data: products, isFetching } = useGetProductsQuery<any>({ limit: limitAndSkipData.limit, skip: limitAndSkipData.skip });

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Head>
                <title>Home Page</title>
                <meta charSet='UTF-8'/>
                <meta name='description' content='Discover a wide range of high-quality products at competitive prices. Shop electronics, apparel, home goods, and more on our products website.'/>
                <meta name="keywords" content="products, shopping, electronics, apparel, home goods, online store"/>
                <meta name="author" content="true store"/>
                <meta property="og:true store" content="Home Page - products"/>
                <meta property="og:description" content="Explore top-quality products across various categories including electronics, fashion, and home essentials. Enjoy exclusive deals and fast shipping!"/>
                <meta property="og:url" content="https://true-store-xi.vercel.app"/>
                <meta property="og:type" content="website"/>
            </Head>
            <OrganizationStrData />
            {
                products && products.products.length !== 0 && isFetching !== true ? <>
                    <div className='flex flex-wrap justify-center'>
                        {products.products.map((product: any, index: number) => {
                            return <ProductComponent key={index} data={product} path={index} />
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

