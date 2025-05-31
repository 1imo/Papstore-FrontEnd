// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client'

import Modal from '@/components/Modal'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import photo4Picture from '@/public/pictures/photo4.jpg'
import Link from 'next/link'

export default function AppMenu({ children, setMenuState }) {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setMenuState(showModal)
  }, [showModal])

  const show = () => {
    setShowModal(true)
  }

  const hide = () => {
    setShowModal(false)
  }

  return (
    <>
      {React.cloneElement(children, { onClick: showModal ? hide : show } as React.HTMLProps<HTMLButtonElement>)}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <div className='fixed top-0 bottom-0 left-0 right-0 flex j bg-white pointer-events-none'>
          <div className='relative flex-1 bg-zinc-100 max-xl:hidden select-none'>
            <Image
              className='absolute top-0 bottom-0 left-0 right-0 w-full h-full object-cover'
              alt=''
              width={1362}
              height={2044}
              src={photo4Picture.src}
            />
          </div>
          <div className='overflow-auto flex flex-1 flex-col gap-16 justify-between pt-38.5 max-xl:pt-26 pb-19.5 max-xl:pb-16 px-32 max-xl:px-6 bg-white pointer-events-auto'>
            <div className='flex flex-col gap-8'>
              <p className='text-[#005533] text-[50px]'>Sourcing</p>
              <div className='flex flex-col gap-4'>
                <Link
                  className='text-[#616161] text-[20px]'
                  href='#'
                >Select</Link>
                <Link
                  className='text-[#616161] text-[20px]'
                  href='#'
                >Deliver</Link>
                <Link
                  className='text-[#616161] text-[20px]'
                  href='#'
                >Install</Link>
              </div>
            </div>
            <div className='flex flex-col gap-8'>
              <p className='text-[#005533] text-[50px]'>Guides</p>
              <div className='flex flex-col gap-4'>
                <Link
                  className='text-[#616161] text-[20px]'
                  href='#'
                >Which is right?</Link>
                <Link
                  className='text-[#616161] text-[20px]'
                  href='#'
                >Carpet</Link>
                <Link
                  className='text-[#616161] text-[20px]'
                  href='#'
                >Hardwood</Link>
                <Link
                  className='text-[#616161] text-[20px]'
                  href='#'
                >Laminate</Link>
                <Link
                  className='text-[#616161] text-[20px]'
                  href='#'
                >Luxury Vinyl Tile</Link>
              </div>
            </div>
            <div className='flex flex-col gap-8'>
              <p className='text-[#005533] text-[50px]'>Help</p>
              <div className='flex flex-col gap-4'>
                <Link
                  className='text-[#616161] text-[20px]'
                  href='#'
                >Help Centre</Link>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
}
