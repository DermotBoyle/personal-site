import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-24 justify-between">
      <div className="bg-white w-5/6 h-12 shadow-inner text-black items-center justify-between font-mono text-lg lg:flex">
        <Link href={'/projects'}>Projects</Link>
      </div>
    </main>
  )
}
