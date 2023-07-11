'use client'
import Link from 'next/link'
import { useFadeInSlideIn } from '../hooks/animation/useFadeInSlideIn'
import { AnimatedCard } from '../common/components/animatedCard'
import { useFadeInButtonBorder } from '../hooks/animation/useFadeInButtonBorder'
import DecorativeTriangle from '../common/components/decorativeTriangle'

const DocumentsPage = () => {
  useFadeInSlideIn()
  useFadeInButtonBorder()

  return (
    <main className='flex min-h-screen flex-col items-center justify-between px-24'>
      <nav className='w-5/6 shadow-inner bg-white items-center font-mono text-lg lg:flex'>
        <Link className='text-black' href={'/'}>
          Home
        </Link>
        <Link href={'/Blog'} className='text-black ml-10'>
          Blog
        </Link>
      </nav>

      <section>
        {Array(10)
          .fill(0)
          .map((_, i) => (
            <AnimatedCard>
              <div
                key={i}
                className='flex flex-col first-of-type:mt-12 items-center justify-center show-on-scroll'
              />
              <div>
                <h5 className='absolute top-4 left-4 text-slate-300 show-text-delay'>
                  Name of the project
                </h5>
                <p className='absolute top-12 left-4 ml-0 max-w-[75%] text-left show-text-delay'>
                  {' '}
                  A brief discription here about what the product is. No more
                  than two senetences will be siffucice
                </p>
                <div>
                <a className='absolute bottom-4 right-4 show-text-delay flex mr-0'>
                  Find out more
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke-width='1.5'
                      stroke='currentColor'
                      className='w-6 h-6 show-text-delay m-0 ml-2'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
                      />
                    </svg>
                </a>
                </div >
              </div>
              <DecorativeTriangle />
            </AnimatedCard>
          ))}
      </section>
    </main>
  )
}

export default DocumentsPage
