// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client'

import CheckCircle24Icon from '@/public/icons/x24/check-circle.svg'
import Info24Icon from '@/public/icons/x24/info.svg'
import Mic24Icon from '@/public/icons/x24/mic.svg'
import Send24Icon from '@/public/icons/x24/send.svg'

import AlignCenter28Icon from '@/public/icons/x28/align-center.svg'

import Play64Icon from '@/public/icons/x64/play.svg'

export default function Icon({
  name,
  size=24,
  color='#000000',
  className='',
}: {
  name: string
  size: number
  color: string
  className: string
}) {
  switch (name) {
    case 'checkCircle': switch (size) {
      case 24: return <CheckCircle24Icon
        className={className}
        style={{
          fill: color,
          minWidth: 24,
          minHeight: 24,
          width: 24,
          height: 24,
        }}
      />
      default: return <CheckCircle24Icon
        className={className}
        style={{
          fill: color,
          minWidth: size,
          minHeight: size,
          width: size,
          height: size,
        }}
      />
    }
    case 'info': switch (size) {
      case 24: return <Info24Icon
        className={className}
        style={{
          fill: color,
          minWidth: 24,
          minHeight: 24,
          width: 24,
          height: 24,
        }}
      />
      default: return <Info24Icon
        className={className}
        style={{
          fill: color,
          minWidth: size,
          minHeight: size,
          width: size,
          height: size,
        }}
      />
    }
    case 'mic': switch (size) {
      case 24: return <Mic24Icon
        className={className}
        style={{
          fill: color,
          minWidth: 24,
          minHeight: 24,
          width: 24,
          height: 24,
        }}
      />
      default: return <Mic24Icon
        className={className}
        style={{
          fill: color,
          minWidth: size,
          minHeight: size,
          width: size,
          height: size,
        }}
      />
    }
    case 'send': switch (size) {
      case 24: return <Send24Icon
        className={className}
        style={{
          fill: color,
          minWidth: 24,
          minHeight: 24,
          width: 24,
          height: 24,
        }}
      />
      default: return <Send24Icon
        className={className}
        style={{
          fill: color,
          minWidth: size,
          minHeight: size,
          width: size,
          height: size,
        }}
      />
    }
    case 'alignCenter': switch (size) {
      case 28: return <AlignCenter28Icon
        className={className}
        style={{
          fill: color,
          minWidth: 28,
          minHeight: 28,
          width: 28,
          height: 28,
        }}
      />
      default: return <AlignCenter28Icon
        className={className}
        style={{
          fill: color,
          minWidth: size,
          minHeight: size,
          width: size,
          height: size,
        }}
      />
    }
    case 'play': switch (size) {
      case 64: return <Play64Icon
        className={className}
        style={{
          fill: color,
          minWidth: 64,
          minHeight: 64,
          width: 64,
          height: 64,
        }}
      />
      default: return <Play64Icon
        className={className}
        style={{
          fill: color,
          minWidth: size,
          minHeight: size,
          width: size,
          height: size,
        }}
      />
    }
  }
}
