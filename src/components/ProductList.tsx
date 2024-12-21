import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {
  featuredProductsContainer,
  featuredProductsFirstImage,
  featuredProductsImageWrapper,
  featuredProductsItem,
  featuredProductsSecondImage,
} from './Styles/ProductList'

const ProductList = () => {
  return (
    <div className={featuredProductsContainer}>
      {/* When clicked -- will open a individual product page */}
      <Link href='/test' className={featuredProductsItem}>
        <div className={featuredProductsImageWrapper}>
          <Image
            src='https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt=''
            fill
            sizes='25vw'
            className={featuredProductsFirstImage}
          />
          {/* Add second image of hover-over */}
          <Image
            src='https://images.pexels.com/photos/945453/pexels-photo-945453.jpeg?auto=compress&cs=tinysrgb&w=800'
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
        <button className='rounded-2xl ring-1 ring-salmon-color w-max text-salmon-color py-2 px-4 text-xs hover:bg-salmon-color hover:text-white'>
          Add to Cart
        </button>
      </Link>
    </div>
  )
}

export default ProductList
