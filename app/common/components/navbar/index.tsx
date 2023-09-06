'use client';
import Link from "next/link";
import { NAV_PAGES } from "../../constants";
import { usePathname } from 'next/navigation'

export const Navbar = () => {

    const currentPath = usePathname()

    return (
        <nav className='w-[75vw] mx-auto pt-4 hidden md:flex shadow-inner bg-black items-center font-mono text-lg justify-end'>
            {NAV_PAGES.map((page, i) => <Link className={`text-white ml-12 first:ml-0 ${page.path === currentPath ? 'underline underline-offset-8 decoration-2' : undefined} relative ${page.path !== currentPath ? 'after:bg-white after:absolute after:h-[2px] after:w-0 after:bottom-0 after:top-7 after:left-0 hover:after:w-full after:transition-all after:duration-300' : undefined}  cursor-pointer`} key={i} href={page.path}><p>{page.name}</p></Link>)}
        </nav>
    );
};