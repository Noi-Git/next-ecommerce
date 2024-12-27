import { createClient, OAuthStrategy } from '@wix/sdk'
import { products, collections } from '@wix/stores'
import { cookies } from 'next/headers'

// CREATE A FUNCTION TO RETURN wixClientServer
export const wixClientServer = async () => {
  let refreshToken
  // USE next/headers cookies TO READ COOKIE
  try {
    //CREATE COOKIES
    const cookieStore = cookies()
    refreshToken = JSON.parse(cookieStore.get('refreshToken')?.value || '{}')
  } catch (error) {}
  // USE THIS FUNCTION TO PATCH DATA
  const wixClient = createClient({
    modules: {
      products,
      collections,
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID!,
      tokens: {
        refreshToken,
        accessToken: {
          value: '',
          expiresAt: 0,
        },
      },
    }),
  })
  return wixClient
}
