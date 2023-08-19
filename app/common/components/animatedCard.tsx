import { useFadeInButtonBorder } from "@/app/hooks/animation/useFadeInButtonBorder";

export const AnimatedCard = (props: any) => {

	useFadeInButtonBorder()

	return(
			<button className="h-[35vh] mb-24 mt-12 w-[80vw] md:w-[50vw] rounded-md relative flex justify-center overflow-hidden show-shadow-on-scroll items-center">
				<div className="bg-gray-50 show-on-btn-bd-w-l absolute left-0 bottom-0" />
				<div className="bg-gray-50 show-on-btn-bd-w-r absolute right-0 top-0" />
				<div className="bg-gray-50 show-on-btn-bd-h-t absolute left-0 top-0" />
				<div className="bg-gray-50 show-on-btn-bd-h-b absolute right-0 bottom-0" />
				{props.children}
			</button>
		)};