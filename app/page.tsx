'use client'
import dynamic from "next/dynamic"

const CalendlyPopUp = dynamic(() => import("./common/components/Calendly"), { ssr: false, }); // No ssr

export default function Home() {
  return (
    <main className="flex flex-col items-center px-24">
      <section className="md:w-[45vw] w-[80vw] mt-24 mb-24 relative">
        <p className="text-xl text-secondary z-1">
          Hi, my name is
        </p>
        <h3 className="text-4xl mt-4 font-semibold z-1">
          Dermot Boyle.
        </h3>
        <h3 className="text-4xl mt-4 text-secondary">
          I'm a <b className='text-orange-accent'>mobile and web software engineer</b> from Derry, Ireland.
        </h3>
        <p className="mt-6 text-secondary">For me, it's all about crafting top-notch products that fit perfectly for <b className="text-white">start-ups,</b> <b className="text-white">small businesses,</b> and <b className="text-white">enterprises.</b> I bring a ton of value as a team player, making sure every project is a real game-changer.
        </p>
        <p className="mt-4 text-secondary">
          Currently, I'm working on an exciting hybrid mobile and web application project at <b className='text-orange-accent underline underline-offset-4 hover:cursor-pointer'><a rel="noreferrer noopener" target="_blank" href="https://www.weaver.build/">Weaver.</a></b>
        </p>
        <div className="hidden md:block shadow-2xl shadow-black absolute opacity-30 rounded-full top-[-2vh] right-[-20vw] w-[40vw] h-[40vw] bg-center bg-[url('/images/Dermot_Logo.png')] z-[-1]" />
      </section>
      <CalendlyPopUp />
    </main>
  )
}
