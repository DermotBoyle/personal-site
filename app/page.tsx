import HamburgerIcon from './assets/svg/hamburger'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24">
      <div className='md:hidden'>
        <HamburgerIcon />
      </div>
    </main>
  )
}
