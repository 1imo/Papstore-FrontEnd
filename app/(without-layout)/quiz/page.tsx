// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client'

import Button from '@/components/Button'
import Link from 'next/link'

export default function Quiz() {
  return (
    <div className='flex flex-col justify-between w-full min-h-screen px-[189px] max-xl:px-6 p-16 max-xl:pt-16 max-xl:pb-8'>
      <div className='flex gap-33 max-xl:gap-16 flex-col justify-center items-center'>
        <div className='flex gap-16 max-xl:gap-8 flex-col justify-center items-center'>
          <div className='flex items-stretch w-full h-6 max-xl:h-4'>
            <div className='w-[357px] max-xl:w-31.5 bg-[#005533] rounded-full' />
            <div className='flex-1 bg-[#F0F0F0] rounded-full' />
          </div>
          <div className='flex gap-8 flex-col justify-center items-center text-center max-xl:text-left'>
            <p className='text-[#005533] text-[100px] max-xl:text-[50px]'>Which Rooms Need Doing?</p>
            <p className='text-[#939393] text-[22.5px] max-xl:text-[20px]'>Select at least one option and input further details here if required</p>
          </div>
        </div>
        <div className='flex flex-wrap gap-x-4 gap-y-8 justify-center max-xl:justify-start items-center w-full max-w-[800px]'>
          <button className='flex justify-center items-center px-8 py-3 bg-[#F0F0F0] rounded-full cursor-pointer'>
            <span className='text-[20px] text-center'>Living Room</span>
          </button>
          <button className='flex justify-center items-center px-8 py-3 bg-[#F0F0F0] rounded-full cursor-pointer'>
            <span className='text-[20px] text-center'>Bedroom</span>
          </button>
          <button className='flex justify-center items-center px-8 py-3 bg-[#005533] text-white rounded-full cursor-pointer'>
            <span className='text-[20px] text-center font-semibold'>Bathroom</span>
          </button>
          <button className='flex justify-center items-center px-8 py-3 bg-[#F0F0F0] rounded-full cursor-pointer'>
            <span className='text-[20px] text-center'>Hallway</span>
          </button>
          <button className='flex justify-center items-center px-8 py-3 bg-[#F0F0F0] rounded-full cursor-pointer'>
            <span className='text-[20px] text-center'>Staircase</span>
          </button>
          <button className='flex justify-center items-center px-8 py-3 bg-[#F0F0F0] rounded-full cursor-pointer'>
            <span className='text-[20px] text-center'>Conservatory</span>
          </button>
          <button className='flex justify-center items-center px-8 py-3 bg-[#F0F0F0] rounded-full cursor-pointer'>
            <span className='text-[20px] text-center'>Basement</span>
          </button>
          <button className='flex justify-center items-center px-8 py-3 bg-[#F0F0F0] rounded-full cursor-pointer'>
            <span className='text-[20px] text-center'>Need Support</span>
          </button>
        </div>
      </div>
      <div className='flex gap-16 max-xl:gap-10 flex-col'>
        <p className='text-[#939393] text-[20px] max-xl:text-[15px] text-center'>Click to speak and enter further information <Link
          className='text-[#005533]'
          href='#'
        >here</Link></p>
        <div className='flex gap-8 justify-center items-center'>
          <button
            className='flex justify-center items-center px-8 py-3 bg-[#F0F0F0] rounded-full cursor-pointer'
          >
            <span className='text-[20px] text-center'>Back</span>
          </button>
          <button
            className='flex justify-center items-center px-8 py-3 bg-[#005533] text-white rounded-full cursor-pointer'
          >
            <span className='text-[20px] text-center font-semibold'>Continue</span>
          </button>
        </div>
      </div>
    </div>
  )
}
