// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client'

import Link from 'next/link'
import React from 'react'

export default function Button({
  children,
  href,
  invert = false,
  filled = true,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
  ...rest
}: {
  children: React.ReactNode
  href?: string
  invert?: boolean
  filled?: boolean
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  [key: string]: any
}) {
  const baseClass = [
    'flex justify-center items-center select-none',
    filled
      ? [
        'px-6 py-2 rounded-full',
        invert ? 'bg-white text-[#005533]' : 'bg-[#005533] text-white',
      ].filter(Boolean).join(' ')
      : [invert ? 'text-white' : 'text-[#005533]'].filter(Boolean).join(' '),
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const spanClass = [
    'text-[16px] text-center',
    filled && 'font-semibold',
  ]
    .filter(Boolean)
    .join(' ')

  if (href) {
    return (
      <Link href={href} className={baseClass} {...rest}>
        <span className={spanClass}>{children}</span>
      </Link>
    )
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={baseClass}
      disabled={disabled}
      {...rest}
    >
      <span className={spanClass}>{children}</span>
    </button>
  )
}
