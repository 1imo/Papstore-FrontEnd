// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

'use client'

import Button from '@/components/Button'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import dynamic from 'next/dynamic'

const ReactConfetti = dynamic(() => import('react-confetti'), {
  ssr: false
})

const questions = [
  {
    title: 'Which Rooms Need Doing?',
    options: ['Living Room', 'Bedroom', 'Bathroom', 'Hallway', 'Staircase', 'Conservatory', 'Basement', 'Not Sure']
  },
  {
    title: 'Which Floors Types Do You Prefer?',
    options: ['Hardwood', 'Carpet', 'Tile', 'Laminate', 'Vinyl', 'Concrete', 'Not Sure']
  },
  {
    title: 'What Matters Most for Your Floor?',
    options: ['Durability', 'Comfort', 'Style', 'Easy Maintenance', 'Cost', 'Not Sure']
  },
  {
    title: 'Who Uses This Space?',
    options: ['Family', 'Children', 'Pets', 'Elderly', 'Guests', 'Not Sure']
  },
  {
    title: "What's Your Style?",
    options: ['Modern', 'Traditional', 'Minimalist', 'Rustic', 'Contemporary', 'Not Sure']
  }
]

export default function Quiz() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string[]>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [showContent, setShowContent] = useState(false)
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Set body and html height to 100%
    document.documentElement.style.height = '100%'
    document.body.style.height = '100%'
    document.body.style.overflow = 'auto'

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      // Clean up styles
      document.documentElement.style.height = ''
      document.body.style.height = ''
      document.body.style.overflow = ''
    }
  }, [])

  const handleOptionClick = (option: string) => {
    setAnswers(prev => {
      const currentAnswers = prev[currentStep] || []
      const newAnswers = currentAnswers.includes(option)
        ? currentAnswers.filter(item => item !== option)
        : [...currentAnswers, option]

      return {
        ...prev,
        [currentStep]: newAnswers
      }
    })
  }

  const handleBack = () => {
    if (currentStep === 0) {
      router.back()
    } else {
      setCurrentStep(prev => prev - 1)
      window.scrollTo(0, 0)
    }
  }

  const handleContinue = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1)
      window.scrollTo(0, 0)
    } else {
      handleFinish()
    }
  }

  const getRecommendedFloors = () => {
    // Get the floor preferences from the second question
    const floorPreferences = answers[1] || []
    // Get the style preferences from the last question
    const stylePreferences = answers[4] || []

    // Remove "Not Sure" from the options
    const validFloors = floorPreferences.filter(floor => floor !== 'Not Sure')
    const validStyles = stylePreferences.filter(style => style !== 'Not Sure')

    // If no valid preferences, return default recommendations
    if (validFloors.length === 0) {
      return ['Hardwood', 'Laminate', 'Vinyl']
    }

    // Return up to 3 floor types, prioritizing the user's preferences
    return validFloors.slice(0, 3)
  }

  const handleFinish = async () => {
    try {
      setIsSubmitting(true)

      const formattedAnswers = questions.map((question, index) => ({
        question: question.title,
        answers: answers[index] || []
      }))

      const response = await fetch('/api/quiz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          answers: formattedAnswers
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit quiz')
      }

      setShowConfetti(true)
      // Show content after confetti burst
      setTimeout(() => {
        setShowContent(true)
      }, 1000)
    } catch (error) {
      console.error('Error submitting quiz:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const progress = ((currentStep + 1) / questions.length) * 100

  const getFloorDescription = (floorType: string): string => {
    const descriptions: Record<string, string> = {
      'Hardwood': 'Classic and timeless, hardwood floors bring natural warmth and elegance to any space. Perfect for creating a sophisticated atmosphere while maintaining durability.',
      'Carpet': 'Soft and comfortable underfoot, carpet provides excellent insulation and sound absorption. Ideal for creating cozy, welcoming spaces in bedrooms and living areas.',
      'Tile': 'Versatile and water-resistant, tile flooring is perfect for high-traffic areas and wet spaces. Available in countless styles to match any design aesthetic.',
      'Laminate': 'Affordable and durable, laminate flooring offers the look of natural materials with easy maintenance. Great for busy households and high-traffic areas.',
      'Vinyl': 'Waterproof and resilient, vinyl flooring combines practicality with style. Perfect for areas that need both durability and design flexibility.',
      'Concrete': 'Modern and industrial, concrete floors offer unmatched durability and a unique aesthetic. Perfect for contemporary spaces seeking a bold statement.'
    }
    return descriptions[floorType] || 'A great choice for your space, offering both style and functionality.'
  }

  return (
    <div className='relative w-full h-full overflow-y-auto'>
      {showConfetti && (
        <div className='fixed inset-0 w-screen h-screen pointer-events-none z-0'>
          <ReactConfetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={500}
            gravity={0.2}
            initialVelocityY={-50}
            initialVelocityX={0}
            tweenDuration={50}
            confettiSource={{
              x: windowSize.width / 2,
              y: windowSize.height / 2,
              w: 1,
              h: 1
            }}
            colors={[
              '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4',
              '#FFEEAD', '#D4A5A5', '#9B59B6', '#3498DB',
              '#E74C3C', '#2ECC71', '#F1C40F', '#1ABC9C'
            ]}
            run={showConfetti}
          />
        </div>
      )}
      {showConfetti ? (
        <div className='relative w-full h-full bg-white z-10'>
          <div className='flex flex-col min-h-screen px-[151px] max-xl:px-5 p-13 max-xl:pt-13 max-xl:pb-6'>
            <div className='flex gap-26 max-xl:gap-13 flex-col items-center'>
              <div className='flex gap-13 max-xl:gap-6 flex-col items-center w-full'>
                <div className='flex items-stretch w-[calc(100vw-410px)] max-xl:w-[calc(100vw-38px)] h-5 max-xl:h-3'>
                  <div className='w-full bg-[#005533] rounded-full' />
                </div>
                <div className={`flex gap-6 flex-col items-center text-center max-xl:text-left transition-all duration-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                  <p className='text-[#005533] text-[80px] max-xl:text-[40px]'>Congrats!</p>
                  <p className='text-[#939393] text-[18px] max-xl:text-[16px]'>The best floor types for you are:</p>
                </div>
              </div>
              <div className={`flex flex-col gap-10 w-full max-w-[640px] transition-all duration-500 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {getRecommendedFloors().map((floor) => (
                  <div key={floor} className='flex flex-col gap-3'>
                    <h3 className='text-[#005533] text-[40px] max-xl:text-[24px] font-semibold'>{floor}</h3>
                    <p className='text-[#939393] text-[16px] max-xl:text-[13px]'>
                      {getFloorDescription(floor)}
                    </p>
                    <Link
                      href='#'
                      className='text-[#005533] text-[16px] max-xl:text-[13px] hover:underline'
                    >
                      Read more
                    </Link>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex gap-6 justify-center items-center mt-13 px-[205px] max-xl:px-[102px]'>
              <button
                onClick={() => {
                  setShowConfetti(false)
                  setShowContent(false)
                  setCurrentStep(0)
                  setAnswers({})
                }}
                className='flex justify-center items-center px-6 py-2 bg-[#F0F0F0] rounded-full cursor-pointer'
              >
                <span className='text-[16px] text-center'>Retake</span>
              </button>
              <button
                onClick={() => router.push('/contact')}
                className='flex justify-center items-center px-6 py-2 bg-[#005533] text-white rounded-full cursor-pointer'
              >
                <span className='text-[16px] text-center font-semibold'>Questions?</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className='flex flex-col min-h-screen px-[151px] max-xl:px-5 p-13 max-xl:pt-13 max-xl:pb-6'>
          <div className='flex gap-26 max-xl:gap-13 flex-col justify-center items-center'>
            <div className='flex gap-13 max-xl:gap-6 flex-col justify-center items-center w-full'>
              <div className='flex items-stretch w-[calc(100vw-410px)] max-xl:w-[calc(100vw-38px)] h-5 max-xl:h-3'>
                <div
                  className='bg-[#005533] rounded-full transition-all duration-500 ease-in-out'
                  style={{ width: `${progress}%` }}
                />
                <div className='flex-1 bg-[#F0F0F0] rounded-full' />
              </div>
              <div className='flex gap-6 flex-col justify-center items-center text-center max-xl:text-left'>
                <p className='text-[#005533] text-[80px] max-xl:text-[40px]'>{questions[currentStep].title}</p>
                <p className='text-[#939393] text-[18px] max-xl:text-[16px]'>Select at least one option and input further details here if required</p>
              </div>
            </div>
            <div className='flex flex-wrap gap-x-4 gap-y-8 justify-center max-xl:justify-start items-center w-full max-w-[640px] max-xl:mb-16'>
              {questions[currentStep].options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleOptionClick(option)}
                  className={`flex justify-center items-center px-6 py-2 rounded-full cursor-pointer transition-all duration-300 ${(answers[currentStep] || []).includes(option)
                    ? 'bg-[#005533] text-white'
                    : 'bg-[#F0F0F0]'
                    }`}
                >
                  <span className={`text-[16px] text-center ${(answers[currentStep] || []).includes(option) ? 'font-semibold' : ''}`}>
                    {option}
                  </span>
                </button>
              ))}
            </div>
          </div>
          <div className='xl:fixed xl:bottom-0 xl:left-0 xl:right-0 bg-white px-[151px] max-xl:px-5 py-6'>
            <div className='flex gap-13 max-xl:gap-10 flex-col'>
              <p className='text-[#939393] text-[16px] max-xl:text-[13px] text-center'>
                Click to speak and enter further information <Link className='text-[#005533]' href='#'>here</Link>
              </p>
              <div className='flex gap-[32px] justify-center items-center'>
                <button
                  onClick={handleBack}
                  className='flex justify-center items-center px-6 py-2 bg-[#F0F0F0] rounded-full cursor-pointer'
                >
                  <span className='text-[16px] text-center'>Back</span>
                </button>
                <button
                  onClick={() => {
                    if (currentStep < questions.length - 1) {
                      handleContinue()
                    } else {
                      handleFinish()
                    }
                  }}
                  disabled={!answers[currentStep]?.length || isSubmitting}
                  className={`flex justify-center items-center px-6 py-2 rounded-full cursor-pointer ${!answers[currentStep]?.length || isSubmitting ? 'bg-[#E0E0E0] cursor-not-allowed' : 'bg-[#005533] text-white'
                    }`}
                >
                  <span className='text-[16px] text-center font-semibold'>
                    {currentStep === questions.length - 1 ? (isSubmitting ? 'Submitting...' : 'Finish') : 'Continue'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
