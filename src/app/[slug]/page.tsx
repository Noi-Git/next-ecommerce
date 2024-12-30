import Add from '@/components/Add'
import CustomizeProducts from '@/components/CustomizeProducts'
import ProductImages from '@/components/ProductImages'
import { wixClientServer } from '@/lib/wixClientServer'
import { notFound } from 'next/navigation'
import React from 'react'

const SinglePage = async ({ params }: { params: { slug: string } }) => {
  // console.log('🚀 ~ SinglePage ~ params:', params)

  //Fetch single page data
  const wixClient = await wixClientServer()
  const products = await wixClient.products
    .queryProducts()
    .eq('slug', params.slug)
    .find()
  // console.log('🚀 ~ SinglePage ~ products:', products)

  if (!products.items[0]) {
    return notFound()
  }

  const product = products.items[0]
  console.log('🚀 ~ SinglePage ~ product:', product)
  // console.log('🚀 ~ SinglePage ~ product.price:', product.price)
  // console.log('🚀 ~ SinglePage ~ product.variant:', product.variants)
  console.log(
    '🚀 ~ SinglePage ~ product.productOptions:',
    product.productOptions
  )

  return (
    <div className='px-5 md:px-8 lg:px-16 xl:32 2xl:px-64 relative flex flex-col lg:flex-row gap-16'>
      {/* IMAGE */}
      <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
        <ProductImages items={product.media?.items} />
      </div>
      {/* TEXT */}
      <div className='w-full lg:w-1/2 flex flex-col gap-6'>
        <h1 className='text-4xl font-medium'>{product.name}</h1>
        <p className='text-gray-500'>{product.description}</p>
        <div className='h-[2px] bg-gray-100' />
        {product.price?.price === product.price?.discountedPrice ? (
          <h2 className='font-medium text-2xl'>
            $ {product.price?.discountedPrice}
          </h2>
        ) : (
          <div className='flex items-center gap-4'>
            <h3 className='text-xl text-gray-500 line-through'>
              $ {product.price?.price}
            </h3>
          </div>
        )}

        <div className='h-[2px] bg-gray-100' />
        {product._id && product.variants && product.productOptions && (
          <CustomizeProducts
            productId={product._id}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        )}

        <Add />
        <div className='h-[2px] bg-gray-100' />
        {product.additionalInfoSections?.map((section: any) => (
          <div className='text-sm' key={section.title}>
            <h4 className='font-medium mb-4 uppercase'>{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SinglePage
