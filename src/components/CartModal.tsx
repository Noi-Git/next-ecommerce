'use client'

import Image from 'next/image'
import { cartModalCart, cartModalCartImage } from './NavStyle'

const CartModal = () => {
  const cartItems = false
  return (
    <div className={cartModalCart}>
      {!cartItems ? (
        <div className='cartEmpty'>Cart is Empty</div>
      ) : (
        <div className={cartModalCartImage}>
          <Image
            src='https://www.pexels.com/photo/black-corded-headset-205926/'
            alt=''
            width='72'
            height='96'
          />
          <div className='cartModalCartInfo'>
            {/* TOP */}
            <div className='cartModalCartTop'>
              {/* TITLE */}
              <div className='cartModalCartTitleTop'>
                <h3>Product Name</h3>
                <div className='cartModalCartPrice'>$49</div>
              </div>
              {/* DESC */}
              <div className='cartModalCartDesc'>available</div>
            </div>
            {/* BOTTOM */}
          </div>
        </div>
      )}
    </div>
  )
}

export default CartModal
