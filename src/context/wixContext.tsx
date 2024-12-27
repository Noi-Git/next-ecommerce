'use client'

import { createClient, OAuthStrategy } from '@wix/sdk'
import { products, collections } from '@wix/stores'
import Cookies from 'js-cookie'
import { createContext, ReactNode } from 'react'

// CHECK COOKIES
const refreshToken = JSON.parse(Cookies.get('refreshToken') || '{}')

const wixClient = createClient({
  modules: {
    products,
    collections,
    // currentCart
  },
  auth: OAuthStrategy({
    clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
    tokens: {
      accessToken: {
        value: '',
        expiresAt: 0,
      },
      refreshToken,
    },
  }),
})

// CREATE TYPE
export type WixClient = typeof wixClient

export const WixClientContext = createContext<WixClient>(wixClient)

// EXPORT THE PROVIDER - SO WE CAN USE THE CLIENT
export const WixClientContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  return (
    <WixClientContext.Provider value={wixClient}>
      {children}
    </WixClientContext.Provider>
  )
}
