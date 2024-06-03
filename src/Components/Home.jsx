import React from 'react';
import cover from '/cover1.jpg'
import TopDestinations from './TopDestinations';
import Banner from './Banner';

function Home() {
    return (
        <>
            {/* Background image */}
            <div style={{
                background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${cover})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }} className='w-full h-[80vh] flex flex-col justify-end items-start p-10'>
            </div>
            {/* background image content */}
            <div className='w-[90%] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[0%] flex flex-col items-center justify-center'>
                <h3 className='lg:text-3xl md:text-2xl text-xl font-semibold text-white'>Find Your Uttarakhand Special Tours Today</h3>
                <h1 className='lg:text-5xl md:text-3xl text-2xl text-white font-semibold'>with PARADISE UTTARAKHAND</h1>
                <button className='md:px-6 md:py-3 px-4 py-2 duration-200 bg-yellow-500 rounded-md text-white text-md md:text-xl m-4 hover:bg-yellow-600'>View TOURS</button>
            </div>
            {/* About Paradise Uttarakhand
            <div className='Home_about flex flex-col items-center justify-center bg-zinc-200'>
                <h1 className='text-2xl md:text-3xl py-3 mx-auto px-10'>Welcome to <span className='text-yellow-600 font-semibold'>Paradise Uttarakhand</span>
                </h1>
                <p className='px-10 md:px-48 py-2 leading-6 tracking-wide text-lg'><span className='font-semibold'> Paradise Uttarakhand </span> is a premier travel company based in the scenic state of Uttarakhand, India. <span className='font-semibold'> Founded by Gaurav Joshi</span>, our company specializes in providing a wide range of travel services, including <span className='font-semibold'> char dham yatra packages </span> and <span className='font-semibold'> taxi services in Uttarakhand</span>.
                    <br />
                    Our company was established with a vision to offer exceptional travel experiences to our clients. We believe that travel should be an immersive and transformative experience that allows you to explore new destinations, learn about different cultures, and create memories that last a lifetime. With this in mind, we have curated a range of travel packages that cater to different interests and preferences.</p>

                <p className='px-10 md:px-48 py-2 leading-6 tracking-wide text-lg md:block hidden'>Uttarakhand is north indian state of India. Previously part of Uttarpradesh. In year 2000 it became the 27the state of India. Uttarakhand state has 13 districts and divided in two divisions known as Garhwal and Kumaoun. Garhwali and Kumaouni is also two major local languages in Uttarakhand areas after Hindi. It has population of more than 10 mln and area of more than 50,000 square kms. Tourism and Agriculture is biggest industries in Uttarakhand. Dehradun is capital of Uttarakhand state and also major Airport in the state. Religious Tourism is biggest tourism in the state with many ancient hindu temples are located in the state. Haridwar, Mussoorie, Nainital, Chardham, Corbett, Rishikesh etc are some of the leading tourist destinations among the 50 + other destinations for tourist. Uttarakhand has some of the highest mountains peak of Indian Himalayas and famous rivers like Yamuna and Ganga starts here.</p>
            </div> */}


            {/* Banner Component */}
            <div>
                <Banner />
            </div>

            {/* Top Destinations Card */}
            <div>
                <TopDestinations />
            </div>
        </>
    );
}

export default Home;
