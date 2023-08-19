import Image from 'next/image'
import Link from 'next/link'
import HamburgerIcon from './assets/svg/hamburger'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <nav className="bg-black hidden w-5/6 h-12 shadow-inner text-white items-center font-mono text-lg lg:flex justify-end">
        <div><span>1.</span><Link href={'/home'}>Home</Link></div>
        <div><span className='ml-10'>2.</span><Link href={'/projects'}>Projects</Link></div>
        <div><span className='ml-10'>3.</span><Link href={'/about'}>About</Link></div>
      </nav>
      <div className='md:hidden'>
        <HamburgerIcon />
      </div>
    </main>
  )
}
