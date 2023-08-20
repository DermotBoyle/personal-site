import Link from "next/link";
import { NAV_PAGES } from "../../constants";

export const Navbar = () => {
    return (
        <nav className='w-5/6 hidden md:block shadow-inner bg-white items-center font-mono text-lg lg:flex justify-end'>
            {NAV_PAGES.map((page, i) => <Link className="text-black [&>*:not(:first-child)]:ml-10" key={i} href={page.path}>{page.name}</Link>)}
        </nav>
    );
};