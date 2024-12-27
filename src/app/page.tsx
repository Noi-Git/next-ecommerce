'use client'
import CategoryList from '@/components/CategoryList'
import ProductList from '@/components/ProductList'
import Slider from '@/components/Slider'
import { WixClientContext } from '@/context/wixContext'
import { useContext } from 'react'

const HomePage = () => {
  // USE REACT HOOK TO GET FROM WixClientContext() - need to change the component to the client side when using hook
  const wixContext = useContext(WixClientContext)

  // FETCH DATA
  const getProduct = async () => {
    const res = await wixContext.products.queryProducts().find()
  }

  return (
    <div className=''>
      <Slider />
      <div className='mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
        <h1 className='text-2xl'>Featured Products</h1>
        <ProductList />
      </div>
      <div className='mt-24'>
        <h1 className='text-2xl mb-12 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className='mt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64'>
        <h1 className='text-2xl'>New Products</h1>
        <ProductList />
      </div>
    </div>
  )
}

export default HomePage
