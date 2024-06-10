import React from 'react';
import uttarakhand from '/uttrakhand.webp';
import national from '/national.png';
import google from "/google.png";
import msme from "/msme.jpeg";
import startup from "/startup.png";
import razorpay from "/razorpay.png";
import viator from "/viator.png";
import makemytrip from "/makemytrip.jpg";
import aws from "/aws.png";

function FooterTop() {
    return (
        <div className='my-8 w-full'>
            <div>
                <h1 className="text-center text-[32px] text-yellow-500 font-bold tracking-wider leading-8">Where Happiness Finds a Voice</h1>
            </div>
            <div className='mt-6'>
                <h3 className="text-center text-[22px] text-[#333333] font-semibold leading-8">A Tapestry of Happy Memories, Woven by You</h3>
            </div>
            <div className='box flex flex-col sm:flex-row justify-evenly mt-6 flex-wrap'>
                <div className='flex-1'>
                    <h2 className="text-2xl text-center font-semibold text-red-500">Our Rating &amp; Recognitions</h2>
                    <div className='flex justify-evenly gap-x-10 mt-8 sm:mt-4'>
                        <div>
                            <img src={uttarakhand} alt="Uttarakhand Approved" width="120" height="60" />
                        </div>
                        <div>
                            <img src={google} alt="Google 5star Ratings" width="90" height="60" />
                        </div>
                    </div>
                    <div className='flex mt-4 justify-center'>
                        <img src={national} alt="Uttarakhand Approved" width="80" height="60" className="items-center" />
                    </div>
                    <div className='flex justify-center gap-x-10 mt-4'>
                        <div>
                            <img src={msme} alt="Uttarakhand Approved" width="90" height="60" />
                        </div>
                        <div>
                            <img src={startup} alt="Google 5star Ratings" width="160" height="100" className="mt-4" />
                        </div>
                    </div>
                </div>
                <div className='w-[3px] bg-yellow-500 sm:block hidden'></div>
                <div className='flex-1'>
                    <h2 className="text-2xl font-semibold text-center text-red-500">Partners With</h2>
                    <div className='flex justify-around gap-x-10 mt-2 sm:mt-4'>
                        <div>
                            <img src={razorpay} alt="Uttarakhand Approved" width="120" height="60" />
                        </div>
                        <div>
                            <img src={viator} alt="Google 5star Ratings" width="90" height="60" className="mt-6" />
                        </div>
                    </div>
                    <div className='flex justify-center gap-x-10'>
                        <div>
                            <img src={makemytrip} alt="Uttarakhand Approved" width="150" height="60" />
                        </div>
                        <div>
                            <img src={aws} alt="Google 5star Ratings" width="120" height="100" className="mt-4" />
                        </div>
                    </div>
                </div>
                <div className='flex-1'>
                    <a href="https://www.instagram.com/parad_iseuttarakhand/">
                        <video width="460" height="440" controls preload className="h-[30vh] sm:w-[80vw] sm:mt-4">
                            <source src="/video1.mp4" type="video/mp4" />
                            <track src="/video.mp4" kind="subtitles" srclang="en" label="English" />
                            Your browser does not support the video tag.
                        </video>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default FooterTop;
