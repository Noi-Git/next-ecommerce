import ProductImages from '@/components/ProductImages'
import React from 'react'

const SinglePage = () => {
  return (
    <div className='md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* IMAGE */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages />
      </div>
      {/* TEXT */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-4xl font-medium'>Product Name</h1>
        <p className='text-gray-500'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia iure
          ducimus magnam explicabo, culpa distinctio. Officiis eius, nobis
          reiciendis ex ut excepturi distinctio quo, ratione consectetur
          aliquam, iure architecto perferendis aperiam ab.
        </p>
      </div>
    </div>
  )
}

export default SinglePage
