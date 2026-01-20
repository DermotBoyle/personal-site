import { useEffect } from "react"

// This hook will fade in the element when it is in the viewport ONCE ONLY
export const useFadeInSlideIn = () => {
	useEffect(() => {
    // Get all the elements you want to show on scroll
    const targets = [...document.querySelectorAll('.show-on-scroll'), ...document.querySelectorAll('.show-text-delay')]

    // Set up a new observer
    const observer = new IntersectionObserver(callback)

    // Loop through each of the target
    targets.forEach(function (target) {
      // Hide the element
      target.classList.add('opacity-0')

      // Add the element to the watcher
      observer.observe(target)
    })
  }, [])

  // Callback for IntersectionObserver
  const callback = function (
    entries: IntersectionObserverEntry[]
  ) {
    entries.forEach(entry => {
      // Is the element in the viewport?
      if (entry.isIntersecting) {
        if (entry.target.classList.contains('show-text-delay')) {
          entry.target.classList.add('animate-showTextDelay')
        } else {
          entry.target.classList.add('animate-fadeIn')
        }
      }
    })
  }
}