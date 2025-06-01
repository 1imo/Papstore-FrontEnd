// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client'

import Image from 'next/image'
import photo1Picture from '@/public/pictures/photo1.jpg'
import photo2Picture from '@/public/pictures/photo2.jpg'
import photo3Picture from '@/public/pictures/photo3.jpg'
import photo4Picture from '@/public/pictures/photo4.jpg'
import photo5Picture from '@/public/pictures/photo5.jpg'
import photo6Picture from '@/public/pictures/photo4.jpg'
import photo7Picture from '@/public/pictures/photo7.jpg'
import photo8Picture from '@/public/pictures/photo8.jpg'
import Button from '@/components/Button'
import CarouselText from '@/components/carouselText'
import Icon from '@/components/Icon'

export default function Home() {
  return (
    <>
      <section
        className='snap-always snap-start relative w-full min-h-[100vh] text-white'
        data-bg='dark'
      >
        <div className='absolute top-0 bottom-0 left-0 right-0 z-10 flex flex-col p-16 max-xl:px-0 max-xl:pt-16 max-xl:pb-7'>
          <div className='flex flex-1 gap-32 max-xl:gap-24 flex-col justify-center items-center max-xl:items-start max-xl:px-6'>
            <div className='flex gap-4 max-xl:gap-8 flex-col justify-center items-center max-xl:items-start text-center max-xl:text-left -translate-y-1/2'>
              <h1 className='text-[100px] max-xl:hidden'>Time for new flooring?</h1>
              <h2 className='text-[25px] max-xl:text-[20px] font-semibold mt-8'>We've got you covered.</h2>
            </div>
            <div className='flex gap-8 justify-center items-stretch'>
              <Button
                href='/#select'
                invert={true}
              >Selection</Button>
            </div>
          </div>
          <div className='overflow-x-auto'>
            <div className='overflow-x-auto flex gap-12 max-xl:gap-8 justify-center max-xl:justify-start items-center max-xl:px-6'>
              <div className='flex gap-4 max-xl:gap-6 justify-center items-center select-none'>
                <Icon
                  name='checkCircle'
                  size={24}
                  color='#F0F0F0'
                />
                <p className='text-[20px] max-xl:text-[15px] font-semibold text-nowrap'>5-Star Rated on Google</p>
              </div>
              <div className='flex gap-4 max-xl:gap-6 justify-center items-center select-none'>
                <Icon
                  name='checkCircle'
                  size={24}
                  color='#F0F0F0'
                />
                <p className='text-[20px] max-xl:text-[15px] font-semibold text-nowrap'>Fast & Discreet Service</p>
              </div>
              <div className='flex gap-4 max-xl:gap-6 justify-center items-center select-none'>
                <Icon
                  name='checkCircle'
                  size={24}
                  color='#F0F0F0'
                />
                <p className='text-[20px] max-xl:text-[15px] font-semibold text-nowrap'>Climate Conscious</p>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute top-0 bottom-0 left-0 right-0 after:content-[] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-[#2E2E2E]/30 select-none pointer-events-none'>
          <Image
            className='w-full h-full object-cover'
            alt=''
            width={2048}
            height={1152}
            src={photo1Picture.src}
          />
        </div>
      </section>
      <section
        className='snap-always snap-start relative flex gap-8 max-xl:gap-6 flex-col w-full min-h-[calc(100vh-32px)] px-[256px] max-xl:px-6 pt-32 max-xl:pt-[96px] pb-8 max-xl:pb-[168px] bg-white text-black fill-black'
        data-bg='light'
      >
        <div className='flex max-xl:flex-col flex-1 gap-8 max-xl:gap-6'>
          <div className='relative flex-1 text-white select-none max-xl:aspect-[3/2] max-xl:w-full'>
            <div className='absolute top-0 bottom-0 left-0 right-0 z-10 flex items-end px-8 max-xl:px-4 py-4 max-xl:py-2'>
              <p className='text-[50px] max-xl:text-[40px]'>Wood</p>
            </div>
            <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
              <Image
                className='w-full h-full object-cover'
                alt=''
                width={2048}
                height={1152}
                src={photo2Picture.src}
              />
            </div>
          </div>
          <div className='relative flex-1 text-white select-none max-xl:aspect-[3/2] max-xl:w-full'>
            <div className='absolute top-0 bottom-0 left-0 right-0 z-10 flex items-end px-8 max-xl:px-4 py-4 max-xl:py-2'>
              <p className='text-[50px] max-xl:text-[40px]'>Carpet</p>
            </div>
            <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
              <Image
                className='w-full h-full object-cover'
                alt=''
                width={2048}
                height={1152}
                src={photo3Picture.src}
              />
            </div>
          </div>
        </div>
        <div className='flex max-xl:flex-col flex-1 gap-8 max-xl:gap-6'>
          <div className='relative flex-1 text-white select-none max-xl:aspect-[3/2] max-xl:w-full'>
            <div className='absolute top-0 bottom-0 left-0 right-0 z-10 flex items-end px-8 max-xl:px-4 py-4 max-xl:py-2'>
              <p className='text-[50px] max-xl:text-[40px]'>Luxury Tiles & Vinyl</p>
            </div>
            <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
              <Image
                className='w-full h-full object-cover'
                alt=''
                width={2048}
                height={1152}
                src={photo4Picture.src}
              />
            </div>
          </div>
          <div className='relative flex-1 text-white select-none max-xl:aspect-[3/2] max-xl:w-full'>
            <div className='absolute top-0 bottom-0 left-0 right-0 z-10 flex items-end px-8 max-xl:px-4 py-4 max-xl:py-2'>
              <p className='text-[50px] max-xl:text-[40px]'>Laminate</p>
            </div>
            <div className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center'>
              <Image
                className='w-full h-full object-cover'
                alt=''
                width={2048}
                height={1152}
                src={photo5Picture.src}
              />
            </div>
          </div>
        </div>
      </section>
      <section
        id='select'
        className='snap-always snap-start relative grid grid-cols-12 gap-4 w-full min-h-[100vh] px-[256px] max-xl:px-6 pt-32 max-xl:pt-[96px] max-xl:pb-[256px] bg-white text-black fill-black'
        data-bg='light'
      >
        <div className='col-span-6 max-xl:col-span-12 flex flex-col gap-8 justify-start'>
          <h1 className='text-[#005533] text-[100px] max-xl:text-[50px]'>Select</h1>
          <p className='text-[#616161] text-[20px]'>At Papstore, we believe flooring isn't just a surface - it's the foundation of your space. That's why we take a personal approach.<br /><br />You'll be matched with your own dedicated flooring advisor, who'll help you make the right choice with confidence.<br /><br />Start by taking our quick quiz - we'll use your answers to understand your needs, and follow up with tailored advice.<br /><br />Already seen something you like elsewhere?<br /><br />Send it to us. We'll either match the price or recommend a near-identical alternative that offers better value — all without the guesswork.</p>
          <div className='flex gap-8 items-stretch mt-16'>
            <Button href='/quiz'>Start Now</Button>
            <Button href='/help-center' filled={false}>Need Help?</Button>
          </div>
        </div>
        <div className='col-span-2' />
        <div className='col-span-4 max-xl:hidden h-[calc(100vh-160px)] overflow-hidden'>
          <div className='w-full aspect-[9/16] relative'>
            <Image
              className='w-full h-full object-cover'
              alt=''
              width={1362}
              height={2044}
              src={photo6Picture.src}
            />
          </div>
        </div>
      </section>
      <div className='snap-always snap-start w-full h-screen bg-zinc-100 hidden max-xl:block select-none'>
        <Image
          className='w-full h-full object-cover'
          alt=''
          width={1362}
          height={2044}
          src={photo6Picture.src}
        />
      </div>
      <section
        className='snap-always snap-start relative flex gap-16 flex-col items-center w-full min-h-[100vh] pt-32 max-xl:pt-[96px] max-xl:pb-[256px] bg-white text-black fill-black'
        data-bg='light'
      >
        <CarouselText label='Sample Service' />
        <div className='flex gap-32 flex-col items-center max-xl:items-start px-[256px] max-xl:px-6'>
          <p className='max-w-149.5 text-[20px] text-main'>Work with your personal advisor to narrow down the perfect options — then we'll send your top picks straight to your door, free of charge.<br /><br />Delivered next day, so you have time to see and feel what's right in your own space.</p>
          <div className='flex gap-8 justify-center max-xl:justify-start items-center max-xl:w-full'>
            <Button
              href='/quiz'
            >Start Now</Button>
            <Button
              href='/help-center'
              filled={false}
            >Need Help?</Button>
          </div>
        </div>
      </section>
      <section
        id='deliver'
        className='snap-always snap-start relative grid grid-cols-12 gap-4 w-full min-h-[100vh] px-[256px] max-xl:px-6 pt-32 max-xl:pt-[96px] max-xl:pb-[256px] bg-white text-black fill-black'
        data-bg='light'
      >
        <div className='col-span-6 max-xl:col-span-12 flex flex-col gap-8 justify-start'>
          <h1 className='text-[#005533] text-[100px] max-xl:text-[50px]'>Deliver</h1>
          <p className='text-[#616161] text-[20px]'>From hand-picked samples to flooring for your entire property, we make delivery simple, reliable, and stress-free.<br /><br />Whether you're refreshing a single room or renovating a whole home, we handle every order with care.<br /><br />Expect next-day dispatch, tracked couriers, and a 98% on-time delivery rate - because dependable service isn't a luxury, it's what you deserve.</p>
          <div className='flex gap-8 items-stretch mt-16'>
            <Button href='/quiz'>Start Now</Button>
            <Button href='/help-center' filled={false}>Need Help?</Button>
          </div>
        </div>
        <div className='col-span-2' />
        <div className='col-span-4 max-xl:hidden h-[calc(100vh-160px)] overflow-hidden'>
          <div className='w-full aspect-[9/16] relative'>
            <Image
              className='w-full h-full object-cover'
              alt=''
              width={1362}
              height={2044}
              src={photo7Picture.src}
            />
          </div>
        </div>
      </section>
      <div className='snap-always snap-start w-full h-screen bg-zinc-100 hidden max-xl:block select-none'>
        <Image
          className='w-full h-full object-cover'
          alt=''
          width={1362}
          height={2044}
          src={photo7Picture.src}
        />
      </div>
      <section
        className='snap-always snap-start relative flex gap-16 flex-col items-center w-full min-h-[100vh] pt-32 max-xl:pt-[96px] max-xl:pb-[256px] bg-white text-black fill-black'
        data-bg='light'
      >
        <CarouselText label='0% Finance' />
        <div className='flex gap-32 flex-col items-center max-xl:items-start px-[256px] max-xl:px-6'>
          <p className='max-w-149.5 text-[20px] text-main'>We offer simple, interest-free finance to help spread the cost of your flooring.<br /><br />No hidden fees, no hard sell — just flexible payments that work for you.<br /><br />Ask your advisor about 0% options when you're ready.</p>
          <div className='flex gap-8 justify-center max-xl:justify-start items-center max-xl:w-full'>
            <Button
              href='/quiz'
            >Start Now</Button>
            <Button
              href='/help-center'
              filled={false}
            >Need Help?</Button>
          </div>
        </div>
      </section>
      <section
        id='install'
        className='snap-always snap-start relative grid grid-cols-12 gap-4 w-full min-h-[100vh] px-[256px] max-xl:px-6 pt-32 max-xl:pt-[96px] max-xl:pb-[256px] bg-white text-black fill-black'
        data-bg='light'
      >
        <div className='col-span-6 max-xl:col-span-12 flex flex-col gap-8 justify-start'>
          <h1 className='text-[#005533] text-[100px] max-xl:text-[50px]'>Install</h1>
          <p className='text-[#616161] text-[20px]'>Once you've chosen your floor, our specialist fitters take care of the rest - with care, precision, and minimal disruption.<br /><br />Our team works quietly and cleanly, ensuring everything is laid to last. It's all part of the service.<br /><br />Every installation is backed by a warranty⁺, so you can feel confident in both product and craftsmanship.<br /><br />Prefer to exclude  installation? Just let your advisor know when the time comes.<br /><br />⁺Warranty terms and conditions apply.</p>
          <div className='flex gap-8 items-stretch mt-16'>
            <Button href='/quiz'>Start Now</Button>
            <Button href='/help-center' filled={false}>Need Help?</Button>
          </div>
        </div>
        <div className='col-span-2' />
        <div className='col-span-4 max-xl:hidden h-[calc(100vh-160px)] overflow-hidden'>
          <div className='w-full aspect-[9/16] relative'>
            <Image
              className='w-full h-full object-cover'
              alt=''
              width={1362}
              height={2044}
              src={photo8Picture.src}
            />
          </div>
        </div>
      </section>
      <div className='snap-always snap-start w-full h-screen bg-zinc-100 hidden max-xl:block select-none'>
        <Image
          className='w-full h-full object-cover'
          alt=''
          width={1362}
          height={2044}
          src={photo8Picture.src}
        />
      </div>
    </>
  )
}
