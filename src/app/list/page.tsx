import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import { wixClientServer } from '@/lib/wixClientServer'
import { collections } from '@wix/stores'
import Image from 'next/image'
import React from 'react'

const ListPage = async ({ searchParams }: { searchParams: any }) => {
  console.log('---search params ---', searchParams)
  const wixClient = await wixClientServer()
  const response = await wixClient.collections.getCollectionBySlug(
    searchParams.cat || 'all-products'
  )
  console.log('🚀 ~ ListPage ~ response:', response)

  return (
    <div className='px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 relative'>
      {/* CAMPAIGN */}
      <div className='hidden bg-pink-50 px-4 sm:flex justify-between h-64'>
        <div className='w-2/3 flex flex-col items-center justify-center gap-8'>
          <h1 className='text-2xl md:text-4xl font-semibold leading-[38px] md:leading-[48px] text-gray-700 pt-3'>
            Grab up to 50% off on <br /> Selected Products
          </h1>
          <button className='rounded-3xl bg-salmon-color text-white w-max py-2 md:py-3 px-5 text-sm'>
            Buy Now
          </button>
        </div>
        <div className='relative w-1/3'>
          <Image src='/woman.png' alt='' fill className='object-contain' />
        </div>
      </div>
      {/* FILTER PAGE */}
      <Filter />
      {/* PRODUCTS PAGE */}
      {/* This title will be dynamic -- it is just a placeholder for now */}
      <h1 className='mt-12 font-semibold text-xl'>Choose For You!</h1>
      {/* <ProductList /> */}
    </div>
  )
}

export default ListPage
