'use client'
import Link from 'next/link'
import { useFadeInSlideIn } from '../hooks/animation/useFadeInSlideIn'
import { AnimatedCard } from '../common/components/animatedCard'
import { useFadeInButtonBorder } from '../hooks/animation/useFadeInButtonBorder'
import DecorativeTriangle from '../common/components/decorativeTriangle'
import getProjectBriefs from '../dataLayer/projectBrief'

const DocumentsPage = () => {
  useFadeInSlideIn()
  useFadeInButtonBorder()


  const staticProjectData = getProjectBriefs()

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between px-24 py-12`}>

      <section>
        {staticProjectData &&
          staticProjectData.map((mappedItem, i) => (
            <AnimatedCard>
              <div
                key={i}
                className='flex flex-col first-of-type:mt-12 items-center justify-center show-on-scroll'
              />
              <div>
                <div className='absolute top-4 left-4'>
                  <p className='text-left text-[1.5rem] text-slate-300 show-text-delay'>
                    {mappedItem.title}
                  </p>
                  <p className='text-left show-text-delay'>
                    {mappedItem.information}
                  </p>
                  <div className='text-xs mt-2 text-left text-slate-300 show-text-delay'>
                    {mappedItem.techUsed.map((tech, i) => (
                      <span key={i}>
                        {tech + (i < tech.length - 1 ? ', ' : '')}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <Link href={mappedItem.link ?? '/'} className='absolute bottom-4 right-4 show-text-delay hover:underline flex mr-0'>
                    Find out more
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='w-6 h-6 show-text-delay m-0 ml-2'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
              <DecorativeTriangle />
            </AnimatedCard>
          ))}
      </section>
    </main>
  )
}

export default DocumentsPage
