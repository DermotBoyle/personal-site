import Link from "next/link";
import { NAV_PAGES } from "../../constants";

export const Navbar = () => {
    return (
        <nav className='w-[75vw] mx-auto pt-4 hidden md:block shadow-inner bg-black items-center font-mono text-lg lg:flex justify-end'>
            {NAV_PAGES.map((page, i) => <Link className="text-whuite ml-12 first:ml-0" key={i} href={page.path}><p>{page.name}</p></Link>)}
        </nav>
    );
};