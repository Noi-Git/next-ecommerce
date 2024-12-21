'use client'

import { useEffect, useState } from 'react'
import {
  images,
  sliceContainer,
  sliderButton,
  sliderDesc,
  sliderImage,
  sliderMain,
  sliderNavigation,
  sliderNavigationActive,
  sliderText,
  sliderTitle,
  sliderWrapper,
} from './Styles/Slider'
import Link from 'next/link'
import Image from 'next/image'

const slides = [
  {
    id: 1,
    title: 'Summer Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-yellow-50 to-pink-50',
  },
  {
    id: 2,
    title: 'Winter Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1021693/pexels-photo-1021693.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-pink-50 to-blue-50',
  },
  {
    id: 3,
    title: 'Spring Sale Collections',
    description: 'Sale! Up to 50% off!',
    img: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=800',
    url: '/',
    bg: 'bg-gradient-to-r from-blue-50 to-yellow-50',
  },
]
const Slider = () => {
  const [current, setCurrent] = useState(0)

  //enable the setInterval during development
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  //   }, 3000)

  //   // need to clearInterval every time using the setInterval
  //   return () => clearInterval(interval)
  // })

  return (
    <div className={sliderMain}>
      <div
        className={sliderWrapper}
        style={{ transform: `translateX(-${current * 100}vw)` }}
      >
        {slides.map((slide) => (
          <div
            className={`${slide.bg} w-screen h-full flex flex-col gap-16 xl:flex-row`}
            key={slide.id}
          >
            {/* TEXT CONTAINER */}
            <div className={sliderText}>
              <h2 className={sliderDesc}>{slide.description}</h2>
              <h1 className={sliderTitle}>{slide.title}</h1>
              <Link href={slide.url}>
                <button className={sliderButton}>SHOP NOW</button>
              </Link>
            </div>
            {/* IMAGE CONTAINER */}
            <div className={sliderImage}>
              <Image
                src={slide.img}
                alt=''
                fill
                sizes='100%'
                className={images}
              />
            </div>
          </div>
        ))}
      </div>
      <div className={sliderNavigation}>
        {slides.map((slide, index) => (
          <div
            className={`w-3 h-3 rounded-full ring-1 ring-gray-600 cursor-pointer flex items-center justify-center ${
              current === index ? 'scale-150' : ''
            }`}
            key={slide.id}
            onClick={() => setCurrent(index)}
          >
            {/* When the slice is active -- create a small circle inside the the one above */}
            {current === index && (
              <div className={sliderNavigationActive}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slider
