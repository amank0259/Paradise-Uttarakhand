import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import pic1 from '/customer_pic1.png';
import pic2 from '/customer_pic2.png';
import pic3 from '/customer_pic03.png';
import pic4 from '/customer_pic4n.png';
import pic5 from '/customer_pic5.png';
import ScrollReveal from '../UI/ScrollReveal';
import ReviewAndRating from './ReviewAndRating';

function Review() {
    return (
        <div className='px-10 md:px-48 lg:px-64 py-4 md:py-8'>
            <div className='flex flex-col md:flex-row gap-10'>
                <div className='left w-full md:w-1/2'>
                    <ScrollReveal variant='fromLeft' delay={0.3}>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold sm:font-semibold text-yellow-500'>CUSTOMER'S SHARED PHOTOS</h1>
                        <h3 className='text-start py-4 font-semibold md:text-2xl'>OUR TOUR GALLERY ---</h3>
                        <p>
                            Paradise Uttarakhand is passionately committed to Total Quality Travel, with continual delivery of value-added services. We uphold the highest ethical standards and believe in creating new benchmarks in the industry. We Built The Organization With Everything We Have. In The First Few Groups, Trekkers And Travelers Almost Brought Out Machine Guns, Giving Us Harsh Feedback. But Deep Inside, They Truly Appreciated The Concept Of Paradise Uttarakhand.
                        </p>
                    </ScrollReveal>
                </div>
                <div className='right w-full md:w-1/2'>
                    <ScrollReveal variant='fromRight' delay={0.3}>
                        <LazyLoadImage src={pic1} alt='customer_pic' />
                    </ScrollReveal>
                </div>
            </div>
            <div className='grid grid-cols-2 gap-4 py-4 md:grid-cols-4'>
                <ScrollReveal variant='fromLeft' delay={0.3}>
                    <img src={pic2} alt="Photo 2" className="w-full md:h-[340px] h-[230px] object-cover" />
                </ScrollReveal>
                <ScrollReveal variant='fromRight' delay={0.3}>
                    <img src={pic3} alt="Photo 3" className="w-full md:h-[340px] h-[230px] object-cover" />
                </ScrollReveal>
                <ScrollReveal variant='fromLeft' delay={0.3}>
                    <img src={pic4} alt="Photo 4" className="w-full md:h-[340px] h-[230px] object-center" />
                </ScrollReveal>
                <ScrollReveal variant='fromRight' delay={0.3}>
                    <img src={pic5} alt="Photo 5" className="w-full md:h-[340px] h-[230px] object-cover" />
                </ScrollReveal>
            </div>
            <ReviewAndRating />
        </div>

    )
}

export default Review