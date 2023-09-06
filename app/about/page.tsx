import React from 'react'

const AboutPage = () => {
  return (
    <main className='flex flex-col items-center px-24'>
      <section className='md:w-[45vw] w-[80vw] mt-24'>
        <h3 className='text-2xl font-medium'>Core skills</h3>
        <ul className='marker:text-orange-accent pt-4'>
          <li className='list-disc'>Team leader & technical lead</li>
          <li className='list-disc'>Product development - full lifecycle</li>
          <li className='list-disc'>UX/UI consultancy</li>
          <li className='list-disc'>Design system development</li>
          <li className='list-disc'>Serverless architecture design</li>
          <li className='list-disc'>Unit, integration and e2e testing</li>
          <li className='list-disc'>
            Storybook testing and component development
          </li>
        </ul>
      </section>

      <section className='md:w-[45vw] w-[80vw] mt-12 mb-24'>
        <h3 className='text-2xl font-medium'>Work history</h3>
        <ul>
          <li className='grid grid-flow-col items-center pt-12 gap-8'>
            <div>
              <p className='text-sm'>2022 - Now</p>
              <p className='text-xs m-auto text-orange-accent font-medium text-center'>(Contract)</p>
            </div>
            <div className='col-span-2 align-start'>
              <a className='hover:underline underline-offset-2 decoration-2 font-medium' href='https://weaver.build' rel='noopener' target='_blank'>Senior Fullstack engineer <span className='text-orange-accent'>@</span> Weaver</a>
              <p className='text-secondary text-sm'>Remote</p>
              <p className='text-sm'>Technical lead of feature development for mobile and web products in React, NextJS, AWS, Stripe</p>
              <p className='text-sm'>Unit and E2E testing - Storybook, playwright, Jest</p>
            </div>
          </li>

          <li className='grid grid-flow-col gap-8 items-center pt-12'>
            <div>
              <p className='text-sm'>2021 - 2022</p>
              <p className='text-xs m-auto text-orange-accent font-medium text-center'>(Contract)</p>
            </div>
            <div className='col-span-2'>
              <a className='hover:underline underline-offset-2 decoration-2 font-medium' href='https://weaver.build' rel='noopener' target='_blank'>Product engineer <span className='text-orange-accent'>@</span> Spark</a>
              <p className='text-secondary text-sm'>Remote</p>
              <p className='text-sm'>Technical lead on MVP client projects</p>
              <p className='text-sm'>Worked for various enterprise clients such as Hertz car rental</p>
              <p className='text-sm'>React, Typescript, Native iOS, AWS</p>
            </div>
          </li>

          <li className='grid grid-flow-col gap-8 items-center pt-12'>
            <p className='text-sm'>2020 - 2021</p>
            <div className='col-span-2'>
              <a className='hover:underline underline-offset-2 decoration-2 font-medium' href='https://adidas.com' rel='noopener' target='_blank'>Frontend engineer <span className='text-orange-accent'>@</span> adidas</a>
              <p className='text-secondary text-sm'>Zaragoza, Espana</p>
              <p className='text-sm'>Engineer for Brand and Creation team</p>
              <p className='text-sm'>Member of Origo project - custom tooling for shoe designers</p>
              <p className='text-sm'>Member of YARN - Design system development across adidas digital products</p>
              <p className='text-sm'>Unit and Integration testing - Storybook, Jest, React testing library</p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  )
}

export default AboutPage
