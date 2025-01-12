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
import Pagination from './Pagination'

const PRODUCT_PER_PAGE = 8

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

  // this are filters
  const productQuery = wixClient.products
    .queryProducts()
    .startsWith('name', searchParams?.name || '')
    .eq('collectionIds', categoryId)
    .hasSome('productType', [searchParams?.type || 'physical', 'digital'])
    .gt('priceData.price', searchParams?.min || 0)
    .lt('priceData.price', searchParams?.max || 9999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(
      searchParams?.page
        ? parseInt(searchParams?.page) * (limit || PRODUCT_PER_PAGE)
        : 0
    )

  if (searchParams?.sort) {
    const [sortType, sortBy] = searchParams.sort?.split(' ')
    // console.log('🚀 ~ productQuery.ascending:', productQuery.ascending(sortBy))

    if (sortType === 'asc') {
      productQuery.ascending(sortBy)
    }
    if (sortType === 'desc') {
      productQuery.descending(sortBy)
    }
  }

  //.find() send a promise
  const res = await productQuery.find()
  console.log('🚀 ~ res:', res)

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
      <Pagination
        currentPage={res.currentPage || 0}
        hasPrev={res.hasPrev()}
        hasNext={res.hasNext()}
      />
    </div>
  )
}

export default ProductList
