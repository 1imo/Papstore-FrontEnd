'use client'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { manrope } from '@/utils/fonts'
import './globals.scss'
import AppHeader, { AppHeaderNavLink } from '@/widgets/AppHeader'
import AppFooter from '@/widgets/AppFooter'
import { useEffect } from 'react'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      document.documentElement.classList.add('is-safari');
    }
  }, []);

  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={[manrope.className, 'scroll-smooth snap-y snap-mandatory w-full max-w-full min-h-screen bg-white text-black fill-black antialiased'].filter((n) => n).join(' ')}
      >
        <AppHeader>
          <AppHeaderNavLink
            label='Select'
            href='/#select'
          />
          <AppHeaderNavLink
            label='Deliver'
            href='/#deliver'
          />
          <AppHeaderNavLink
            label='Install'
            href='/#install'
          />
        </AppHeader>
        <div className='scroll-smooth snap-y snap-mandatory w-full max-w-full h-screen overflow-y-scroll'>
          {children}
          <AppFooter />
        </div>
      </body>
    </html>
  )
}
