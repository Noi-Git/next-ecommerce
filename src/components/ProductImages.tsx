import Image from 'next/image'
import React from 'react'

const ProductImages = () => {
  return (
    <div>
      {/* BIG IMAGE */}
      <div className='h-[500px] replattive'>
        <Image
          src='https://images.pexels.com/photos/54319/cranesbill-blossom-bloom-blue-54319.jpeg?auto=compress&cs=tinysrgb&w=800'
          alt=''
          fill
          sizes='50vw'
          className='object-cover rounded-md'
        />
      </div>
      {/* SMALL IMAGE */}
      <div className=''>
        <div className='w-1/4 h-32 replattive gap-4 mt-8'>
          <Image
            src='https://images.pexels.com/photos/54319/cranesbill-blossom-bloom-blue-54319.jpeg?auto=compress&cs=tinysrgb&w=800'
            alt=''
            fill
            sizes='30vw'
            className='object-cover rounded-md'
          />
        </div>
      </div>
    </div>
  )
}

export default ProductImages
