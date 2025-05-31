// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client'

import Image from 'next/image'
import photo4Picture from '@/public/pictures/photo4.jpg'
import Button from '@/components/Button'
import CarouselText from '@/components/carouselText'
import Icon from '@/components/Icon'

export default function Home() {
  return (
    <>
      <section
        className='snap-always snap-start relative flex gap-16 max-xl:gap-8 flex-col w-full min-h-screen px-[189px] max-xl:px-6 pt-40 max-xl:pt-26 pb-25.5'
        data-bg='light'
      >
        <Image
          className='w-full max-xl:h-153.5 object-cover'
          width={2952}
          height={1968}
          alt=''
          src={photo4Picture.src}
        />
        <div className='flex flex-col gap-8'>
          <p className='text-[#005533] text-[100px] max-xl:text-[50px]'>Which Floor Is For You?</p>
          <div className='flex max-xl:flex-col justify-between gap-16'>
            <div className='sticky max-xl:static top-40 max-xl:top-26 flex flex-col gap-16 size-fit'>
              <div className='flex flex-col gap-4'>
                <p className='text-[#616161] text-[20px]'>Hardwood</p>
                <p className='text-[#616161] text-[20px]'>Carpet</p>
                <p className='text-[#616161] text-[20px]'>Laminate</p>
                <p className='text-[#616161] text-[20px]'>Luxury Vinyl Tile</p>
              </div>
              <div className='flex'>
                <Button href='/quiz'>Take the Quiz</Button>
              </div>
            </div>
            <div className='flex flex-col flex-1 max-w-267.5'>
              <p className='text-[#616161] text-[20px]'>Flooring isn’t just a surface — it’s the foundation of how your space feels and functions. Whether you’re designing a calm retreat, a busy family home, or something in between, the right floor will elevate it.<br /><br />At Papstore, we believe in helping you choose with confidence. Here's a straightforward guide to four of the most popular flooring types: hardwood, carpet, laminate, and Luxury Vinyl Tile.<br /><br />Hardwood: Timeless and Characterful<br />Best for: Living rooms, hallways, dining spaces<br />Less ideal for: Bathrooms, utility rooms<br /><br />Hardwood is a natural choice for a reason. It’s elegant, long-lasting, and full of warmth and texture. With the right care, it can last for decades — and even grow more beautiful with age.<br /><br />Worth knowing:</p>
              <ul className='list-disc ml-6 text-[#616161] text-[20px]'>
                <li>Sensitive to moisture and temperature changes</li>
                <li>Can be sanded and refinished over time</li>
                <li>Typically a higher initial investment</li>
              </ul>
              <br />
              <p className='text-[#616161] text-[20px]'>Carpet: Soft, Warm, and Quiet<br />Best for: Bedrooms, lounges, studies<br />Less ideal for: Kitchens, bathrooms<br /><br />If comfort is your priority, carpet is hard to beat. It adds softness underfoot and helps insulate both sound and warmth — perfect for creating calm, cosy spaces.<br /><br />Worth knowing:</p>
              <ul className='list-disc ml-6 text-[#616161] text-[20px]'>
                <li>Easier to stain than hard surfaces</li>
                <li>Available in a wide range of tones and textures</li>
                <li>Requires regular vacuuming and occasional deep cleaning</li>
              </ul>
              <br />
              <p className='text-[#616161] text-[20px]'>Laminate: Practical and Easygoing<br />Best for: Kitchens, hallways, family rooms<br />Less ideal for: Very wet areas without proper sealing<br /><br />Laminate flooring offers the look of wood or stone, with less maintenance and a lower price tag. It’s a great option for busy homes where durability and value matter.<br /><br />Worth knowing:</p>
              <ul className='list-disc ml-6 text-[#616161] text-[20px]'>
                <li>Scratch-resistant and easy to clean</li>
                <li>Can be affected by standing water if not sealed</li>
                <li>Quick and straightforward to install</li>
              </ul>
              <br />
              <p className='text-[#616161] text-[20px]'>LVT (Luxury Vinyl Tile): Versatile and Resilient<br />Best for: Kitchens, bathrooms, utility rooms — or anywhere<br />Less ideal for: It suits almost any space with the right design<br /><br />LVT combines practicality with premium looks. It’s highly water-resistant, quiet underfoot, and comes in a huge range of finishes — from wood to stone effects.<br /><br />Worth knowing:</p>
              <ul className='list-disc ml-6 text-[#616161] text-[20px]'>
                <li>Excellent for homes with pets or children</li>
                <li>Warmer and softer than ceramic or wood</li>
                <li>Often compatible with underfloor heating</li>
              </ul>
              <br />
              <p className='text-[#616161] text-[20px]'>Still Unsure?<br /><br />The right floor depends on how you live — not just how things look. That’s why we match you with a dedicated advisor to guide you through options, help you visualise the finish, and even send samples to your door for free.<br /><br />Take the quiz to get started.We’ll use your answers to understand your needs and follow up with tailored recommendations.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
