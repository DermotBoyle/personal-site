import { SideMenuContext } from "@/app/providers/sidemenu"
import Link from "next/link"
import { useContext } from "react"

const NAV_PAGES = [
	{ name: 'Home', path: '/' },
	{ name: 'Projects', path: '/projects' },
	{ name: 'About', path: '/about' },
]


const SideMenu = () => {

	const { setIsOpen } = useContext(SideMenuContext)

	return <div className="SIDEMENU h z-10 py-12 flex-col justify-around text-center absolute top-0 right-0 h-[100%] w-[75vw] bg-black">
		{NAV_PAGES.map((page, i) => {
			return <Link href={page.path} onClick={() => setIsOpen(false)} key={i} className="block text-white h-16 first:mt-8 hover:cursor-pointer">{page.name}</Link>
		})}
	</div>

}


export default SideMenu