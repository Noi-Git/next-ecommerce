import Link from 'next/link'
import { navLogo } from './Styles/NavStyle'
import Image from 'next/image'
import {
  navFooterBottomRight,
  navFooterBottomSection,
  navFooterButton,
  navFooterCenterContents,
  navFooterCenterContentsDesc,
  navFooterCenterContentsTitle,
  navFooterContainer,
  navFooterTopCenter,
  navFooterTopContainer,
  navFooterTopLeft,
  navFooterTopRight,
  navFooterTopRightTitle,
} from './Styles/FooterStyle'

const Footer = () => {
  return (
    <div className={navFooterContainer}>
      {/* TOP */}
      <div className={navFooterTopContainer}>
        {/* LEFT */}
        <div className={navFooterTopLeft}>
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
        <div className={navFooterTopCenter}>
          {/* ==== COMPANY ==== */}
          <div className={navFooterCenterContents}>
            <h1 className={navFooterCenterContentsTitle}>COMPANY</h1>
            <div className={navFooterCenterContentsDesc}>
              <Link href=''>About Us</Link>
              <Link href=''>Careers</Link>
              <Link href=''>Affiliates</Link>
              <Link href=''>Blog</Link>
              <Link href=''>Contact Us</Link>
            </div>
          </div>
          {/* ==== SHOP ==== */}
          <div className={navFooterCenterContents}>
            <h1 className={navFooterCenterContentsTitle}>COMPANY</h1>
            <div className={navFooterCenterContentsDesc}>
              <Link href=''>New Arrivals</Link>
              <Link href=''>Accessories</Link>
              <Link href=''>Men</Link>
              <Link href=''>Women</Link>
              <Link href=''>All Products</Link>
            </div>
          </div>
          {/* ==== CUSTOMER SERVICE */}
          <div className={navFooterCenterContents}>
            <h1 className={navFooterCenterContentsTitle}>COMPANY</h1>
            <div className={navFooterCenterContentsDesc}>
              <Link href=''>Customer Service</Link>
              <Link href=''>My Account</Link>
              <Link href=''>Find a Store</Link>
              <Link href=''>Legal & Privacy</Link>
              <Link href=''>Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className={navFooterTopRight}>
          <h1 className={navFooterTopRightTitle}>SUBSCRIBE</h1>
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
            <button className={navFooterButton}>JOIN</button>
          </div>
          <span className='font-semibold'>Secure Payments</span>
          <div className='flex justify-between'>
            <Image src='/discover.png' alt='' width={40} height={20} />
            <Image src='/skrill.png' alt='' width={40} height={20} />
            <Image src='/paypal.png' alt='' width={40} height={20} />
            <Image src='/mastercard.png' alt='' width={40} height={20} />
            <Image src='/visa.png' alt='' width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className={navFooterBottomSection}>
        <div>@ 2024 Noi Shop</div>
        <div className={navFooterBottomRight}>
          <div>
            <span className='text-gray-500 mr-4'>Language</span>
            <span className='font-medium'>United States | English</span>
          </div>
          <div>
            <span className='text-gray-500 mr-4'>Currency</span>
            <span className='font-medium'>$ USD</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
