'use client'

import Image from 'next/image'
import {
  cartModalCart,
  cartModalCartBottom,
  cartModalCartBottomQty,
  cartModalCartBottomRemove,
  cartModalCartDesc,
  cartModalCartImage,
  cartModalCartInfo,
  cartModalCartPrice,
  cartModalCartProductName,
  cartModalCartTitleTop,
  cartModalWrapperTop,
} from './NavStyle'

const CartModal = () => {
  const cartItems = true
  return (
    <div className={cartModalCart}>
      {!cartItems ? (
        <div className='cartEmpty'>Cart is Empty</div>
      ) : (
        <>
          <div className={cartModalWrapperTop}>
            {/* ---ITEM --- */}
            <div className={cartModalCartImage}>
              <Image
                src='https://images.pexels.com/photos/1931143/pexels-photo-1931143.jpeg?auto=compress&cs=tinysrgb&w=800'
                alt=''
                width={72}
                height={96}
              />
              <div className={cartModalCartInfo}>
                {/* TOP */}
                <div className='cartModalCartTop'>
                  {/* TITLE */}
                  <div className={cartModalCartTitleTop}>
                    <h3 className={cartModalCartProductName}>Product Name</h3>
                    <div className={cartModalCartPrice}>$49</div>
                  </div>
                  {/* DESC */}
                  <div className={cartModalCartDesc}>available</div>
                </div>
                {/* BOTTOM */}
                <div className={cartModalCartBottom}>
                  <span className={cartModalCartBottomQty}>Qty. 2</span>
                  <span className={cartModalCartBottomRemove}>Remove</span>
                </div>
              </div>
            </div>
            {/* ---END ITEM --- */}
            {/* ---ITEM --- */}
            <div className={cartModalCartImage}>
              <Image
                src='https://images.pexels.com/photos/1931143/pexels-photo-1931143.jpeg?auto=compress&cs=tinysrgb&w=800'
                alt=''
                width={72}
                height={96}
              />
              <div className={cartModalCartInfo}>
                {/* TOP */}
                <div className='cartModalCartTop'>
                  {/* TITLE */}
                  <div className={cartModalCartTitleTop}>
                    <h3 className={cartModalCartProductName}>Product Name</h3>
                    <div className={cartModalCartPrice}>$49</div>
                  </div>
                  {/* DESC */}
                  <div className={cartModalCartDesc}>available</div>
                </div>
                {/* BOTTOM */}
                <div className={cartModalCartBottom}>
                  <span className={cartModalCartBottomQty}>Qty. 2</span>
                  <span className={cartModalCartBottomRemove}>Remove</span>
                </div>
              </div>
            </div>
            {/* ---END ITEM --- */}
          </div>
          {/* // BOTTOM */}
          <div className='cartModalSummary'></div>
        </>
      )}
    </div>
  )
}

export default CartModal
