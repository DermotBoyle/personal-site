import { SideMenuContext } from "@/app/providers/sidemenu"
import Link from "next/link"
import { useContext, useEffect } from "react"
import { NAV_PAGES } from "../../constants"

const SideMenu = () => {

	const { setIsOpen, isOpen } = useContext(SideMenuContext)

	 useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'unset'
		}
	}, [isOpen])

	return <div className={`z-10 py-12 flex-col justify-around text-center w-[75vw] fixed top-0 right-0 h-screen bg-black ease-in-out duration-300 transform overscroll-none ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
		{NAV_PAGES.map((page, i) => {
			return <Link href={page.path} onClick={() => setIsOpen(false)} key={i} className="block text-white h-16 first:mt-8 hover:cursor-pointer">{page.name}</Link>
		})}
	</div>

}


export default SideMenu