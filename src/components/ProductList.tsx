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

const PRODUCT_PER_PAGE = 20

const ProductList = async ({
  categoryId,
  limit,
}: {
  categoryId: string
  limit?: number
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
    .eq('collectionIds', categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find()
  return (
    <div className={featuredProductsContainer}>
      {/* When clicked -- will open a individual product page */}
      <Link href='/test' className={featuredProductsItem}>
        <div className={featuredProductsImageWrapper}>
          <Image
            src='https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt=''
            fill
            sizes='25vw'
            className={featuredProductsFirstImage}
          />
          {/* Add second image of hover-over */}
          <Image
            src='https://images.pexels.com/photos/1073567/pexels-photo-1073567.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt=''
            fill
            sizes='25vw'
            className={featuredProductsSecondImage}
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Product Name</span>
          <span className='font-semibold'>$49</span>
        </div>
        <div className='text-sm text-gray-500'>My description</div>
        <button className={featuredProductsButton}>Add to Cart</button>
      </Link>
      {/* ===== */}
      <Link href='/test' className={featuredProductsItem}>
        <div className={featuredProductsImageWrapper}>
          <Image
            src='https://images.pexels.com/photos/33393/caudata-strelitzia-bird-of-paradise-flower-strelitzia-orchids.jpg?auto=compress&cs=tinysrgb&w=800'
            alt=''
            fill
            sizes='25vw'
            className={featuredProductsFirstImage}
          />
          {/* Add second image of hover-over */}
          <Image
            src='https://images.pexels.com/photos/674475/pexels-photo-674475.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt=''
            fill
            sizes='25vw'
            className={featuredProductsSecondImage}
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Product Name</span>
          <span className='font-semibold'>$49</span>
        </div>
        <div className='text-sm text-gray-500'>My description</div>
        <button className={featuredProductsButton}>Add to Cart</button>
      </Link>
      <Link href='/test' className={featuredProductsItem}>
        <div className={featuredProductsImageWrapper}>
          <Image
            src='https://images.pexels.com/photos/697256/pexels-photo-697256.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt=''
            fill
            sizes='25vw'
            className={featuredProductsFirstImage}
          />
          {/* Add second image of hover-over */}
          <Image
            src='https://images.pexels.com/photos/775779/pexels-photo-775779.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt=''
            fill
            sizes='25vw'
            className={featuredProductsSecondImage}
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Product Name</span>
          <span className='font-semibold'>$49</span>
        </div>
        <div className='text-sm text-gray-500'>My description</div>
        <button className={featuredProductsButton}>Add to Cart</button>
      </Link>
      <Link href='/test' className={featuredProductsItem}>
        <div className={featuredProductsImageWrapper}>
          <Image
            src='https://images.pexels.com/photos/54319/cranesbill-blossom-bloom-blue-54319.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt=''
            fill
            sizes='25vw'
            className={featuredProductsFirstImage}
          />
          {/* Add second image of hover-over */}
          <Image
            src='https://images.pexels.com/photos/56856/hibiscus-blossom-bloom-flower-56856.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt=''
            fill
            sizes='25vw'
            className={featuredProductsSecondImage}
          />
        </div>
        <div className='flex justify-between'>
          <span className='font-medium'>Product Name</span>
          <span className='font-semibold'>$49</span>
        </div>
        <div className='text-sm text-gray-500'>My description</div>
        <button className={featuredProductsButton}>Add to Cart</button>
      </Link>
    </div>
  )
}

export default ProductList
