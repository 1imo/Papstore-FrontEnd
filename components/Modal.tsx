// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

import { useEffect } from 'react'
import ReactDOM from 'react-dom'

export default function Modal({
  children,
  showModal,
  setShowModal,
}: {
  children: React.ReactNode
  showModal: boolean
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>
}) {
  useEffect(() => {
    document.body.style.overflowY = showModal ? 'hidden' : 'auto'
  }, [showModal])

  if (showModal) return ReactDOM.createPortal(
    <div className='fixed top-0 bottom-0 left-0 right-0 z-20 flex justify-center items-center'>
      {children}
      <div
        className='absolute top-0 bottom-0 left-0 right-0 -z-10 cursor-pointer'
        onClick={() => setShowModal(false)}
      />
    </div>,
    document.body
  )
}
