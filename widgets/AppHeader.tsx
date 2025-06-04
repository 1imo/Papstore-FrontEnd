// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client'

import Link from 'next/link'
import Logotype from '@/public/pictures/logotype.svg'
import Image from 'next/image'
import AppMenu from './AppMenu'
import { useEffect, useState } from 'react'
import AlignCenterIcon from '@/public/icons/x28/align-center.svg'

function useBackgroundColor() {
  const [background, setBackground] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .map((e) => ({
            target: e.target,
            top: e.boundingClientRect.top,
            visibleHeight: Math.max(
              0,
              Math.min(window.innerHeight, e.boundingClientRect.bottom) -
              Math.max(0, e.boundingClientRect.top)
            ),
          }))
          .sort((a, b) => a.top - b.top)[0]

        if (visible) {
          const attr = visible.target.getAttribute('data-bg')
          setBackground(attr === 'dark' || attr === 'light' ? attr : 'dark')
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1.0],
      }
    )

    const elements = document.querySelectorAll('[data-bg]')
    elements.forEach((el) => observer.observe(el))

    const intervalId = setInterval(() => {
      const visible = Array.from(elements)
        .map((el) => ({
          el,
          rect: el.getBoundingClientRect(),
        }))
        .filter(({ rect }) => rect.top < window.innerHeight && rect.bottom > 0)
        .map(({ el, rect }) => ({
          target: el,
          top: rect.top,
          visibleHeight: Math.max(
            0,
            Math.min(window.innerHeight, rect.bottom) - Math.max(0, rect.top)
          ),
        }))
        .sort((a, b) => a.top - b.top)[0]

      if (visible) {
        const attr = visible.target.getAttribute('data-bg')
        setBackground(attr === 'dark' || attr === 'light' ? attr : 'dark')
      }
    }, 1000)

    return () => {
      observer.disconnect()
      clearInterval(intervalId)
    }
  }, [])

  return background
}

function LogotypeButton({ menuState }) {
  const backgroundColor = useBackgroundColor()

  return (
    <Link
      className='flex justify-center items-center select-none'
      href='/'
      onDragStart={(event) => event.preventDefault()}
    >
      <Logotype className={[
        'h-13 transition-colors duration-300',
        backgroundColor === 'light' || menuState
          ? 'fill-black'
          : backgroundColor === 'dark' && 'fill-white',
      ].filter((n) => n).join(' ')} />
    </Link>
  )
}

function MenuButton({ setMenuState, menuState }) {
  const backgroundColor = useBackgroundColor()

  return (
    <AppMenu setMenuState={setMenuState}>
      <button
        className='flex justify-center items-center cursor-pointer select-none'
        onDragStart={(event) => event.preventDefault()}
      >
        <span className='text-center text-[16px] font-semibold max-xl:hidden'>{menuState ? 'Close' : 'Menu'}</span>
        <AlignCenterIcon className={[
          'h-6 transition-colors duration-300 hidden max-xl:block',
          backgroundColor === 'light' || menuState
            ? 'fill-[#2E2E2E]'
            : backgroundColor === 'dark' && 'fill-white',
        ].filter((n) => n).join(' ')} />
      </button>
    </AppMenu>
  )
}

export function AppHeaderNavLink({ label, href }) {
  return (
    <Link
      className='relative flex justify-center items-center px-6 transition-colors select-none not-last:after:content-["-"] after:absolute after:left-full after:-translate-x-1/2 after:w-2 after:text-[#005533] after:text-center after:text-[16px] after:font-medium'
      href={href}
      onDragStart={(event) => event.preventDefault()}
    >
      <span className='text-center text-[16px] font-medium'>{label}</span>
    </Link>
  )
}

export default function AppHeader({ children }) {
  const backgroundColor = useBackgroundColor()
  const [menuState, setMenuState] = useState(false)

  return (
    <div className={[
      'fixed top-0 left-0 right-0 z-30 flex flex-col justify-center items-center px-51 max-xl:px-5 transition-colors duration-300',
      backgroundColor === 'light' || menuState
        ? 'text-black'
        : backgroundColor === 'dark' && 'text-white',
    ].filter((n) => n).join(' ')}>
      <header className='relative flex justify-between items-stretch max-w-[1920px] w-full h-26 max-xl:h-19'>
        <div className='absolute top-0 bottom-0 z-10 left-1/2 -translate-x-1/2 flex justify-center items-stretch max-xl:hidden'>
          {children}
        </div>
        <div className='flex justify-center items-stretch'>
          <LogotypeButton
            menuState={menuState}
          />
        </div>
        <div className='flex justify-center items-stretch'>
          <MenuButton
            menuState={menuState}
            setMenuState={setMenuState}
          />
        </div>
      </header>
    </div>
  )
}
