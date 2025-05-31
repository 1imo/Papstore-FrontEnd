// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client'

import Button from '@/components/Button'
import Link from 'next/link'
import Image from 'next/image'
import Logotype from '@/public/pictures/logotype.svg'
import photo9Picture from '@/public/pictures/photo9.jpg'
import Icon from '@/components/Icon'

export default function Quiz() {
  return (
    <div className='flex flex-col justify-between w-full h-screen p-8'>
      <Link
        className='fixed top-16 left-16 z-30 max-xl:hidden'
        href='/'
      >
        <Logotype className='h-12 fill-white' />
      </Link>
      <div className='relative size-full bg-zinc-100 rounded-[36px] rounded-br-none overflow-hidden'>
        <div className='absolute bottom-0 right-0 z-40 w-110 h-18 bg-white rounded-tl-[36px]'>
          <div className='size-full pt-4 pl-4'>
            <div className='flex gap-4 justify-between items-stretch h-14 px-8 py-3 bg-[#F0F0F0] rounded-full'>
              <input
                className='flex-1 text-[#2E2E2E] text-[17.5px] font-medium outline-none select-none placeholder:text-[#2E2E2E]'
                placeholder='Type to send message'
              />
              <div className='flex gap-4 justify-center items-center'>
                <button className='flex justify-center items-center cursor-pointer'>
                  <Icon
                    name='mic'
                    size={24}
                    color='#2E2E2E'
                  />
                </button>
                <button className='flex justify-center items-center cursor-pointer'>
                  <Icon
                    name='send'
                    size={24}
                    color='#005533'
                  />
                </button>
              </div>
            </div>
          </div>
          <div className='absolute bottom-18 right-0 -z-10 translate-x-1/2 translate-y-1/2 size-18 border-b-solid border-r-solid border-b-[36px] border-r-[36px] border-b-white border-r-white rounded-br-[calc(36px_+_36px)] max-xl:hidden' />
          <div className='absolute bottom-0 right-110 -z-10 translate-x-1/2 translate-y-1/2 size-18 border-b-solid border-r-solid border-b-[36px] border-r-[36px] border-b-white border-r-white rounded-br-[calc(36px_+_36px)] max-xl:hidden' />
        </div>
        <div className='relative size-full'>
          <div className='absolute top-8 left-1/2 -translate-x-1/2 z-30 flex gap-3 items-center w-149 p-4 bg-white rounded-xl select-none'>
            <Icon
              name='info'
              size={24}
              color='#005533'
            />
            <p className='text-[#005533] text-[17.5px] font-medium'>Message Sent!</p>
          </div>
          <button className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex justify-center items-center size-28 bg-white rounded-full cursor-pointer'>
            <Icon
              name='play'
              size={64}
              color='#005533'
              className='translate-x-0.5'
            />
          </button>
          <div className='absolute top-0 bottom-0 left-0 right-0 z-10 flex justify-center items-center select-none'>
            <Image
              className='h-full object-contain'
              alt=''
              width={2007}
              height={3048}
              src={photo9Picture.src}
            />
          </div>
          <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center select-none'>
            <Image
              className='size-full object-cover blur-3xl'
              alt=''
              width={2007}
              height={3048}
              src={photo9Picture.src}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
