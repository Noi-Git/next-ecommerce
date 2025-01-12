import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  featuredProductsButton,
  featuredProductsContainer,
  featuredProductsFirstImage,
  featuredProductsImageWrapper,
  featuredProductsItem,
  featuredProductsSecondImage,
} from './Styles/ProductListStyle'
import { wixClientServer } from '@/lib/wixClientServer'
import { products } from '@wix/stores'
import DOMPurify from 'isomorphic-dompurify'

const PRODUCT_PER_PAGE = 20

const ProductList = async ({
  categoryId,
  limit,
  searchParams,
}: {
  categoryId: string
  limit?: number
  searchParams?: any
}) => {
  const wixClient = await wixClientServer()
  /*
  // add limit for the Feature Product - if no limit shows 20 - the limit comes from parent component
  const res = await wixClient.products
    .queryProducts()
    .limit(limit || 20)
    .find()
    */
  const res = await wixClient.products
    .queryProducts()
    .startsWith('name', searchParams?.name || '')
    .eq('collectionIds', categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find()

  // console.log(res.items[0])

  return (
    <div className={featuredProductsContainer}>
      {res.items.map((product: products.Product) => (
        <Link
          href={'/' + product.slug}
          key={product._id}
          className={featuredProductsItem}
        >
          <div className={featuredProductsImageWrapper}>
            <Image
              src={product.media?.mainMedia?.image?.url || '/product.png'}
              alt=''
              fill
              sizes='25vw'
              className={featuredProductsFirstImage}
            />
            {/* Add second image of hover-over */}
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || '/product.png'}
                alt=''
                fill
                sizes='25vw'
                className={featuredProductsSecondImage}
              />
            )}
          </div>
          <div className='flex justify-between'>
            <span className='font-medium'>{product.name}</span>
            <span className='font-semibold'>${product.priceData?.price}</span>
          </div>
          {product.additionalInfoSections && (
            <div
              className='text-sm text-gray-500'
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  product.additionalInfoSections.find(
                    (section: any) => section.title === 'shortDesc'
                  )?.description || ''
                ),
              }}
            ></div>
          )}
          <button className={featuredProductsButton}>Add to Cart</button>
        </Link>
      ))}
    </div>
  )
}

export default ProductList
