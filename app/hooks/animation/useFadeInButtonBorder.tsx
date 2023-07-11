import { type } from "os"
import { useEffect } from "react"

// This hook will fade in the element when it is in the viewport ONCE ONLY
export const useFadeInButtonBorder = () => {
	useEffect(() => {
    // Get all the elements you want to show on scroll
    let targets = [
    ...document.querySelectorAll('.show-on-btn-bd-w-l'), 
    ...document.querySelectorAll('.show-on-btn-bd-w-r'),
    ...document.querySelectorAll('.show-on-btn-bd-h-t'),
    ...document.querySelectorAll('.show-on-btn-bd-h-b')
  ]
    // Set up a new observer
    const observer = new IntersectionObserver(callback)

    // Loop through each of the target
    targets.forEach(function (target) {
      // Hide the element
      if(!target) return
      // Add the element to the watcher
      observer.observe(target)
    })
  }, [])

  // Callback for IntersectionObserver
  const callback = function (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) {
    entries.forEach(entry => {
      // Is the element in the viewport?
      if (entry.isIntersecting) {
        console.log(entry.target)
        // Add the fadeIn class:
        // entry.target.classList.add('motion-safe:animate-fadeIn')
        if(entry.target.classList.contains('show-on-btn-bd-w-l') || entry.target.classList.contains('show-on-btn-bd-w-r')){
          entry.target.classList.add('motion-safe:animate-borderFadeInWidth')
        } else {
          entry.target.classList.add('motion-safe:animate-borderFadeInHeight')
        }

      }
    })
  }
}


// const ParentToChildNodes = () => [
//   [
//     parent: {
//       type: 'div',
//     },
//     children: [
//       type: 'div',
//       type: 'div',
//       type: 'div',
//       type: 'div',
//     ]
//   ]
// ]
  