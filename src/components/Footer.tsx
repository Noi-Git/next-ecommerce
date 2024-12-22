import Link from 'next/link'
import { navLogo } from './Styles/NavStyle'
import Image from 'next/image'
import { navFooterContainer } from './Styles/Footer'

const Footer = () => {
  return (
    <div className={navFooterContainer}>
      {/* TOP */}
      <div className='flex justify-between gap-24'>
        {/* LEFT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <Link href='/'>
            <div className={navLogo}>NOISHOP</div>
          </Link>
          <p>123 someaddress, VA 23226</p>
          <span className='font-semibold'>hello@noisinnang.com</span>
          <span className='font-semibold'>+1 234 567 8900</span>
          <div className='flex gap-6'>
            <Image src='/facebook.png' alt='' width={16} height={16} />
            <Image src='/instagram.png' alt='' width={16} height={16} />
            <Image src='/youtube.png' alt='' width={16} height={16} />
            <Image src='/pinterest.png' alt='' width={16} height={16} />
            <Image src='/x.png' alt='' width={16} height={16} />
          </div>
        </div>
        {/* CENTER */}
        <div className='hidden lg:flex justify-between w-1/2'></div>
        {/* RIGHT */}
        <div className='w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8'>
          <h1 className='font-medium text-lg'>SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <div className='flex'>
            <input
              type='text'
              placeholder='Email address'
              className='p-4 w-3/4'
            />
            <button className='w-1/4 bg-salmon-color text-white'>JOIN</button>
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className='bottom'></div>
    </div>
  )
}

export default Footer
