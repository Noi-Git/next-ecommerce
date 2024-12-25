'use client'

import Image from 'next/image'
import React, { useState } from 'react'

const images = [
  {
    id: 1,
    url: 'https://images.pexels.com/photos/264787/pexels-photo-264787.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 2,
    url: 'https://images.pexels.com/photos/1073567/pexels-photo-1073567.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 3,
    url: 'https://images.pexels.com/photos/33393/caudata-strelitzia-bird-of-paradise-flower-strelitzia-orchids.jpg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    id: 4,
    url: 'https://images.pexels.com/photos/674475/pexels-photo-674475.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
]
const ProductImages = () => {
  const [index, setIndex] = useState(0)
  return (
    <div>
      {/* BIG IMAGE */}
      <div className='h-[500px] relative'>
        <Image
          src={images[index].url}
          alt=''
          fill
          sizes='50vw'
          className='object-cover rounded-md'
        />
      </div>
      {/* SMALL IMAGE */}
      <div className='flex justify-between gap-4 mt-8'>
        {images.map((img, i) => (
          <div
            className='w-1/4 h-32 relative gap-4 mt-8 cursor-pointer'
            key={img.id}
            onClick={() => setIndex(i)}
          >
            <Image
              src={img.url}
              alt=''
              fill
              sizes='30vw'
              className='object-cover rounded-md'
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages
