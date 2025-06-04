// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client'

import Button from '@/components/Button'
import Link from 'next/link'

export default function AppFooter() {
  return (
    <footer
      className='snap-always snap-start relative flex max-xl:flex-col gap-26 flex-col justify-end items-center w-full min-h-[100svh] px-[205px] max-xl:px-5 pt-32 max-xl:pt-[83px] pb-8 max-xl:pb-8 bg-white text-black fill-black'
      data-bg='light'
    >
      <div className='flex max-xl:flex-col gap-19 max-xl:gap-26 max-w-[1920px] w-full'>
        <div className='flex max-xl:flex-col gap-38 justify-between'>
          <div className='flex gap-19 flex-col'>
            <div className='flex max-xl:flex-col gap-38 max-xl:gap-13'>
              <div className='w-88 max-xl:w-full'>
                <p className='text-[16px]'>Papstore Carpets & Flooring is your remote flooring specialist — offering virtual consultations, supply, and fitting services all from the comfort of your home. We bring expert flooring advice and a full product range directly to your screen, making it easier than ever to plan and install your perfect floor.<br /><br />By reducing travel, we not only save you time and money but also help lower our environmental impact. Less time on the road means a greener planet and more value passed on to you.</p>
              </div>
              <div className='flex gap-34 max-xl:gap-[34px]'>
                <div className='flex max-xl:flex-1 gap-6 flex-col'>
                  <Link
                    className='text-[#005533] text-[16px] select-none'
                    href='/sales'
                  >Sales</Link>
                  <Link
                    className='text-[#005533] text-[16px] select-none'
                    href='/support'
                  >Support</Link>
                  <Link
                    className='text-[#005533] text-[16px] select-none'
                    href='/instagram'
                  >Instagram</Link>
                  <Link
                    className='text-[#005533] text-[16px] select-none'
                    href='/facebook'
                  >Facebook</Link>
                  <Link
                    className='text-[#005533] text-[16px] select-none'
                    href='/reviews'
                  >Google Reviews</Link>
                </div>
                <div className='flex max-xl:flex-1 gap-6 flex-col'>
                  <Link
                    className='text-[#005533] text-[16px] select-none'
                    href='/help-center'
                  >Help Center</Link>
                  <Link
                    className='text-[#005533] text-[16px] select-none'
                    href='/guides'
                  >Guides</Link>
                  <Link
                    className='text-[#005533] text-[16px] select-none'
                    href='/about'
                  >About Us</Link>
                </div>
              </div>
            </div>
          </div>
          <button
            className='size-fit text-left text-[16px] select-none cursor-pointer max-xl:hidden'
            onClick={() => window.scrollTo(0, 0)}
          >Go to Top</button>
        </div>
      </div>
      <div className='flex max-xl:flex-col gap-19 flex-col max-w-[1920px] w-full'>
        <div className='flex max-xl:flex-col-reverse gap-38 max-xl:gap-26 items-center'>
          <div className='flex gap-2 flex-col w-88 max-xl:w-full'>
            <p className='text-[#005533] text-[16px] select-none'>Sign Up For Our Newsletter</p>
            <input
              className='py-3 text-[16px] border-b-solid border-b border-b-[#939393] select-none outline-none placeholder:text-[#939393]'
              placeholder='Email'
              type='email'
            />
          </div>
          <div className='flex gap-6 justify-center max-xl:justify-start items-center max-xl:w-full'>
            <Button
              href='#'
            >Start Now</Button>
            <Button
              href='#'
              filled={false}
            >Need Help?</Button>
          </div>
        </div>
      </div>
      <div className='flex max-xl:flex-col gap-6 justify-between items-center max-xl:items-start max-w-[1920px] w-full py-6 max-xl:py-0 border-t-solid max-xl:border-none border-t border-t-[#939393]'>
        <Button
          href='/'
          filled={false}
        >Papstore Carpets & Flooring</Button>
        <div className='flex max-xl:flex-col gap-6 justify-center items-stretch max-xl:items-start'>
          <Button
            href='/terms'
            filled={false}
          >Terms & Conditions</Button>
          <Button
            href='/privacy'
            filled={false}
          >Privacy Policy</Button>
        </div>
      </div>
    </footer>
  )
}
