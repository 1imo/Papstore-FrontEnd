// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client'

import Link from 'next/link'

export default function Button({
  children,
  href,
  invert=false,
  filled=true,
}: {
  children: string
  href: string
  invert: boolean
  filled: boolean
}) {
  return (
    <Link
      className={[
        'flex justify-center items-center select-none',
        filled
        ? [
          'px-8 py-3 font-semibold rounded-full',
          invert
          ? 'bg-white text-[#005533]'
          : 'bg-[#005533] text-white',
        ].filter((n) => n).join(' ')
        : [
          invert
          ? 'text-white'
          : 'text-[#005533]',
        ].filter((n) => n).join(' '),
      ].filter((n) => n).join(' ')}
      href={href}
    >
      <span className={[
        'text-[20px] text-center',
        filled && 'font-semibold',
      ].filter((n) => n).join(' ')}>{children}</span>
    </Link>
  )
}
