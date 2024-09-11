import Link from "next/link";
import ProductStructureData from "./structureData/ProductStructureData";

export interface productInterface {
    id: number,
    title: string,
    description: string,
    category: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    tags: string[],
    images: string[],
    thumbnail: string,
    brand: string,
}

export type {productInterface as productInterfaceType};


const ProductComponent = ({ data, path, isInPage }: any) => {
    const productData: productInterface = data;

    return (
        <>
           <ProductStructureData productData={productData}/>
          {
            isInPage !== true ?    <Link  className='w-[20%] h-[30rem] min-w-96 m-4 border-[0.01rem] rounded-md' href={`product/${path}` }>
            <div className="w-full h-[75%] bg-gray-100 p-6">
                        <img className='w-full h-full object-cover' src={productData.thumbnail} alt={''} />
                    </div>
                    <div className="h-[25%] p-2 flex flex-col justify-between">
                        <h1 className='text-base'>{productData.title}</h1>
                        <p className="text-gray-500 line-clamp-3 overflow-ellipsis">{productData.description}</p>
                        <p className="text-base">${productData.price}</p>
                    </div>
            </Link> : 
              <div className="flex justify-center">
                 <div  className='w-[20%] h-[30rem] min-w-96 m-4 border-[0.01rem] rounded-md'>
               <div className="w-full h-[75%] bg-gray-100 p-6">
                           <img className='w-full h-full object-cover' src={productData.thumbnail} alt={''} />
                       </div>
                       <div className="h-[25%] p-2 flex flex-col justify-between">
                           <h1 className='text-base'>{productData.title}</h1>
                           <p className="text-gray-500 line-clamp-3 overflow-ellipsis">{productData.description}</p>
                           <p className="text-base">${productData.price}</p>
                       </div>
               </div>
              </div>
          }

        </>
    )
}

export default ProductComponent
