import { useState } from "react"



const SideMenu = () => {

	const [showMenu, setShowMenu] = useState(false)


	return(
		<div className="SIDEMENU h z-10 hidden py-12 flex-col justify-around text-center absolute top-0 right-0 h-[100%] w-[50vw] bg-white">
			{Array(5).fill('-').map(() => {
				return <h3 className="text-black h-24 hover:cursor-pointer">MENU ITEMS</h3>
			})}
		</div>
	)
}

export default SideMenu