import React, { useEffect } from 'react';

const HamburgerIcon = () => {

	const [isClicked, setIsClicked] = React.useState(false);

  useEffect(() => {
    const lineA = document.querySelector('.lineA')
    const lineB = document.querySelector('.lineB')

    if(lineA?.classList.contains('origin-center') && lineB?.classList.contains('origin-center')){
      lineA.classList.remove('origin-center', 'delay', '1s', 'rotate-45')
      lineB.classList.remove('origin-center', 'delay', '1s', '-rotate-45')
    } else if(isClicked) {
        lineA?.classList.add('origin-center', 'rotate-45', '2s', 'ease-in-out', 'forwards')
        lineB?.classList.add('origin-center', '-rotate-45', '4s', 'ease-in-out', 'forwards')
      }
  }, [isClicked])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6 text-white absolute top-4 right-4 cursor-pointer"
			onClick={() => setIsClicked(!isClicked)}
    >
    {/* Hamburger lines */}
		<line
      className='lineA'
        x1="3"
        y1={isClicked ? '12' : '6'}
        x2="21"
        y2={isClicked ? '12' : '6'}
      ></line>
      <line
        className={isClicked ? 'hidden' : undefined}
        x1="3"
        y1="12"
        x2="21"
        y2="12"
      ></line>
      <line
      className='lineB'
        x1="3"
        y1={isClicked ? '12' : '18'}
        x2="21"
        y2={isClicked ? '12' : '18'}
      ></line>
    </svg>
  );
};

export default HamburgerIcon;
