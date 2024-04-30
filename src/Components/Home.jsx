import React from 'react';
import cover from '/cover1.jpg'

function Home() {
    return (
        <>
            <div style={{
                background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${cover})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }} className='w-full h-[100vh] flex flex-col justify-end items-start p-10'>
            </div>
            <div className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[20%] flex flex-col items-center justify-center'>
                <h3 className='lg:text-3xl md:text-2xl text-xl font-semibold text-white'>Find Your Uttarakhand Special Tours Today</h3>
                <h1 className='lg:text-5xl md:text-3xl text-2xl text-white font-semibold'>with PARADISE UTTARAKHAND</h1>
                <button className='md:px-6 md:py-3 px-4 py-2 duration-200 bg-yellow-500 rounded-md text-white text-md md:text-xl m-4 hover:bg-yellow-600'>View TOURS</button>
            </div>
            <div className='Home_about flex flex-col items-center justify-center bg-zinc-200'>
                <h1 className='text-xl md:text-2xl lg:text-3xl py-3'>Welcome to <span className='text-yellow-600 font-semibold'>Paradise Uttarakhand</span>
                </h1>
                <p className='px-10 md:px-48 py-2'>Paradise Uttarakhand is a premier travel company based in the scenic state of Uttarakhand, India. Founded by Gaurav Major, our company specializes in providing a wide range of travel services, including char dham yatra packages and taxi services in Uttarakhand.

                    Our company was established with a vision to offer exceptional travel experiences to our clients. We believe that travel should be an immersive and transformative experience that allows you to explore new destinations, learn about different cultures, and create memories that last a lifetime. With this in mind, we have curated a range of travel packages that cater to different interests and preferences.</p>
            </div>
        </>
    );
}

export default Home;
