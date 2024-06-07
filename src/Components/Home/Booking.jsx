import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import chardham from '/chardham.png'
import Button from '../UI/Button';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from '../UI/ScrollReveal';

function Booking() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    const navigate = useNavigate();
    const handleEnquiryOnClick = () => {
        navigate('/contact');
    }

    return (
        <>
            <ScrollReveal variant='fromUp' delay={0.3} >
                <div className='px-10 md:px-48 lg:px-64 py-4 md:py-8 flex items-center flex-col'>
                    <h3 className='text-center font-semibold md:text-2xl'>Booking Open Now</h3>
                    <h3 className='text-center font-semibold uppercase tracking-tighter bg-gradient-to-r from-blue-100 via-yellow-100 to-green-100 text-xl md:text-3xl inline-block px-4 py-1 mt-2 rounded'>{`Chardham Yatra ${currentYear}`}</h3>
                </div>
            </ScrollReveal>
            <div className='px-10 md:px-48 lg:px-64 py-4 md:py-8 flex flex-col md:flex-row items-center justify-center'>
                <ScrollReveal variant='fromLeft' delay={0.3} >
                    <div className='left md:w-[80%] sm:text-center flex ftems-center flex-col'>
                        <h1 className='font-semibold text-xl md:text-2xl text-center py-1'>Chardham Yatra from Haridwar and Delhi</h1>
                        <p className='text-justify'>Chardham Yatra is one of the most sacred Hindu pilgrimages, consisting of four temples called  Kedarnath, Badrinath, Gangotri and Yamunotri in Uttarakhand. According to Hindu mythology, once, a Chardham journey just doesn’t remove all your sins, will make the way to heaven clear for your soul. The holy salvation that you will attend will help you throughout your lifetime. The eternal beauty of this place will fascinate you.
                        </p>
                        <p className='indent-8 text-justify'>According to Hindu mythology, Char Dham Yatra is a symbolic journey to attain salvation. The origin of word “Char Dham” came from the Hindi Dictionary with the two words Char & Dham together meaning four destinations. Gangotri, Yamunotri, Badrinath, and Kedarnath are the four holy places that tourists visit during their tour.</p>
                        <p className='indent-8 text-justify'>Get the most comprehensive and all-in-one Chardham Yatra package from the approved and trusted travel agent in Haridwar. Paradise Uttarakhand is one of the top premium travel companies in Uttarakhand offering pilgrimage tour packages for years and is known for reliability and commitment towards tourists. We offer best Chardham Yatra packages that suit your budget and comfort.
                        </p>
                        <p className='indent-8 text-justify'>
                            We promise you the best reliability, utmost satisfaction, and also affordable rates for all the services that you take from us. We have the best tourism services in store and we are always looking to provide you with the best and the most reliable tourism services to make your Char Dham Yatra a professional and reliable Tourism Package for you.
                        </p>
                    </div>
                </ScrollReveal>
                <ScrollReveal variant='fromRight' delay={0.3}>
                    <div className='right border border-zinc-500 p-4 flex items-center flex-col gap-4 justify-center'>
                        <LazyLoadImage src={chardham} alt='chardham image' />
                        <Button onClick={handleEnquiryOnClick} text='Enquiry Now' />
                    </div>
                </ScrollReveal>
            </div >
        </>
    )
}

export default Booking