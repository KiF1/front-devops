import { ReactNode } from 'react'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

import { cookies } from 'next/headers'

import { Blur, Hero, Profile, SignIn, Stripes } from '@/components'

import './globals.css'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'NLW Spacetime',
  description:
    'Uma cápsula do tempo construída com React, Next.js 13, TailwindCSS e TypeScript durante a NLW Spacetime da Rocketseat.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const isAuthenticated = cookies().get('token')?.value

  return (
    <html lang="pt-BR">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        <main className="grid min-h-screen grid-cols-2 ">
          <div className="relative flex flex-col items-start justify-start overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
            <Blur />

            <Stripes />

            {isAuthenticated ? <Profile /> : <SignIn />}

            <Hero />
          </div>

          <div className="flex max-h-screen flex-col overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  )
}
