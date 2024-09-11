
import { ProductJsonLd } from 'next-seo';

export interface reviewInterface {
    rating: number,
    comment: string,
    date: string,
    reviewerName: string,
    reviewerEmail: string
}


const ProductStructureData = ({ productData }: any) => {
    return (
        <>
            <ProductJsonLd
                productName={productData.title}
                images={productData.images}
                category={productData.category}
                description={productData.description}
                brand={productData.brand}
                slogan={productData.category}
                productionDate="2015-02-05T08:00:00+08:00"
                reviews={productData.reviews}
                aggregateRating={{
                    ratingValue: productData.rating,
                    reviewCount: productData.stock,
                }}
                offers={productData.reviews.map((review: reviewInterface) => {
                    return {
                        price: productData.discountPercentage,
                        priceCurrency: 'USD',
                        priceValidUntil: review,
                        url: productData.thumbnail,
                        author:'omar abu karaki',
                        seller: {
                            name: review.reviewerName,
                        },
                    }
                })}
                mpn={`${productData.id}`}
            />
        </>
    )
}

export default ProductStructureData
