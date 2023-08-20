import HamburgerIcon from '@/app/assets/svg/hamburger'
import Image from 'next/image'


const TravelMadridPage = () => {

    return (
        <main className='flex min-h-screen flex-col items-center px-24'>

            <section className='min-w-[70vw] md:pt-14 pt-24 font-semibold'>
                <h1 className='text-2xl'>Travel Madrid</h1>
                <div className='my-6 w-[75vw] h-0.5 border-t-0 bg-white' />
            </section>

            <section className='flex w-[70vw] md:pt-6 pt-14'>
                <div className='w-[50%] mb-24'>
                    <div className='flex mb-8'>
                        <div className='w-24'>
                            <h3 className='text-xl font-bold'>Tech</h3>
                        </div>
                        <div>
                            <p>Swift</p>
                            <p>UIKit</p>
                            <p>MapKit</p>
                            <p>CoreLocation</p>
                            <p>CoreData</p>
                            <p>SwiftUI</p>
                        </div>
                    </div>

                    <div className='flex mb-8'>
                        <div className='w-24'>
                            <h3 className='text-xl font-bold'>Year</h3>
                        </div>
                        <div className='flex'>
                            <p className='self-end'>2023</p>
                        </div>
                    </div>

                    <div className='flex'>
                        <div className='w-24'>
                            <h3 className='text-xl font-bold'>Status</h3>
                        </div>
                        <div className='flex'>
                            <p className='self-end'>In progress</p>
                        </div>
                    </div>
                </div>

                <div className='w-[50%]'>
                    <h3 className='text-xl font-bold'>Description</h3>
                    <p className='mt-4'>Travel Madrid is a native iOS travel app that allows users to plan their journeys using public transport.</p>
                    <p className='mt-4'>The app uses MapKit to display the map and CoreLocation to get the user's location. The app also uses CoreData to store the user's favourite locations.</p>
                    <p className='mt-4'>Real-time data is supplied by the EMT open api (official transport of Madrid live data)</p>
                </div>
            </section>

            <div className='w-[70vw]'>
                <h3 className='text-xl font-bold'>Previews</h3>
            </div>
            <section className='min-w-[50%] grid md:grid-cols-3 md:gap-8 sm:grid-cols-1'>
                <div className='w-[18rem] h-[35rem] relative'>
                    <Image src='/images/iosPreviewOne.png' alt='Travel Madrid' fill />
                </div>
                <div className='w-[18rem] h-[35rem] relative'>
                    <Image src='/images/iosPreviewTwo.png' alt='Travel Madrid' fill />
                </div>
                <div className='w-[18rem] h-[35rem] relative'>
                    <Image src='/images/iosPreviewThree.png' alt='Travel Madrid' fill />
                </div>
            </section>

            <section className='w-[70vw] md:pt-6 pt-14'>
                <h3 className='text-xl font-bold mb-2'>Design</h3>
                <p>Travel Madrid's UI was built mainly with SwiftUI and UIKit. The design system is still a work in progress.</p>
            </section>

            <section className='w-[70vw] md:pt-6 pt-14'>
                <h3 className='text-xl font-bold mb-2'>Extra info</h3>
                <p>The main logo and images used in the app are generated using the Midjourney AI app. The idea is to have a beautiful and interesting image for each of the main neighbourhoods of Madrd.</p>
            </section>

            <section className='w-[70vw] md:pt-6 pt-14'>
                <h3 className='text-xl font-bold mb-2'>Links</h3>
                <p>Link to github</p>
            </section>

            <div className='md:hidden'>
                <HamburgerIcon />
            </div>
        </main>
    )
}

export default TravelMadridPage
