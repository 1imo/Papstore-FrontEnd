// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client'

import Link from 'next/link'
import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, useAnimation } from 'motion/react';

export default function CarouselText({
  label,
}: {
  label: string
}) {
  const baseRef = useRef(null)
  const [baseWidth, setBaseWidth] = useState(0)
  const textRef = useRef(null)
  const [textWidth, setTextWidth] = useState(0)
  const [labelsCountPerWidth, setLabelsCountPerWidth] = useState(0)
  const translateLeft = useAnimation()
  const translateRight = useAnimation()

  useEffect(() => {
    const handleResize = () => {
      if (baseRef.current) setBaseWidth(baseRef.current.offsetWidth)
      if (textRef.current) setTextWidth(textRef.current.offsetWidth)
    }

    const observer = new ResizeObserver(() => handleResize())

    if (baseRef.current) observer.observe(baseRef.current)
    if (textRef.current) observer.observe(textRef.current)

    handleResize()

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => console.log(baseWidth, textWidth), [baseWidth, textWidth])

  useEffect(() => {
    const labelsCount = (Math.floor(baseWidth / textWidth) + 1)
    if (labelsCount) setLabelsCountPerWidth(labelsCount)
  }, [baseWidth, textWidth])

  useEffect(() => {
    async function animateLoop(animation, direction) {
      while (true) {
        await animation.start({
          x: direction === 'left' ? -(textWidth + 64) : direction === 'right' && 0,
          transition: { duration: 20, ease: 'linear' },
        })
        await animation.set({ x: direction === 'left' ? 0 : direction === 'right' && -(textWidth + 64) })
      }
    }
    if (textWidth > 0) {
      animateLoop(translateLeft, 'left')
      animateLoop(translateRight, 'right')
    }
  }, [textWidth, translateRight])

  return (
    <div
      ref={baseRef}
      className='overflow-hidden flex gap-4 max-xl:gap-2 flex-col w-full select-none'
    >
      <motion.div
        className='flex gap-16 max-xl:gap-8 w-full'
        animate={translateRight}
      >
        <span
          ref={textRef}
          className='text-[#005533] text-[100px] max-xl:text-[50px] text-nowrap'
        >{label}</span>
        {
          labelsCountPerWidth > 0 && new Array(labelsCountPerWidth).fill(null).map((_, i) => (
            <span
              key={i}
              className='text-[#005533] text-[100px] max-xl:text-[50px] text-nowrap'
            >{label}</span>
          ))
        }
      </motion.div>
      <motion.div
        className='flex gap-16 max-xl:gap-8 w-full'
        animate={translateLeft}
      >
        {
          labelsCountPerWidth > 0 && new Array(labelsCountPerWidth + 1).fill(null).map((_, i) => (
            <span
              key={i}
              className='text-[#005533] text-[100px] max-xl:text-[50px] text-nowrap'
            >{label}</span>
          ))
        }
      </motion.div>
    </div>
  )
}
