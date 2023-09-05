import { PopupWidget } from "react-calendly";

export default function Home() {

	const getElementById = document.getElementById("calendly")

  return (
    <div>
      {getElementById !== null && <PopupWidget 
			rootElement={getElementById}
			text="Book a call with me :)"
			textColor="#ffffff"
			color="#00a2ff"
			url="https://calendly.com/dermotboyled" />}
    </div>
  )
}
