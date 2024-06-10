import React, { useRef, useEffect, useState } from 'react';
import reviewData from './reviewdata.js';
import { FaStar } from 'react-icons/fa';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Aos from 'aos';
import "aos/dist/aos.css";

const StarRating = ({ rate }) => {
    return (
        <div className="flex">
            {[...Array(5)].map((_, index) => (
                <FaStar
                    key={index}
                    className={`h-5 w-5 ${index < rate ? 'text-yellow-500' : 'text-gray-300'}`}
                />
            ))}
        </div>
    );
};

const ReviewAndRating = () => {
    const scrollContainerRef = useRef(null);
    const [reviews, setReviews] = useState([...reviewData, ...reviewData]);

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
                if (scrollLeft + clientWidth >= scrollWidth - 5) {
                    setReviews(prevReviews => [...prevReviews, ...reviewData]);
                }
            }
        };

        const scrollContainer = scrollContainerRef.current;
        scrollContainer.addEventListener('scroll', handleScroll);

        return () => {
            scrollContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = (direction) => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current;
            const scrollAmount = clientWidth * 0.5;
            scrollContainerRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="relative py-8">
            <button
                onClick={() => handleScroll('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-yellow-500 hover:scale-125 rounded-full p-2 shadow-md"
            >
                <FaArrowLeft />
            </button>
            <button
                onClick={() => handleScroll('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-yellow-500 hover:scale-125 rounded-full p-2 shadow-md"
            >
                <FaArrowRight />
            </button>
            <div ref={scrollContainerRef} className="flex space-x-8 overflow-x-auto scrollbar-hide">
                {reviews.map((review, index) => (
                    <div data-aos="zoom-in" data-aos-offset="200" data-aos-duration='500' data-aos-delay="100" key={index} className="bg-slate-200 shadow-md rounded-lg p-4 min-w-[300px]">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-gray-300 flex-shrink-0">
                                <img src="" alt="" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold">{review.name}</h3>
                                <StarRating rate={review.rate} />
                            </div>
                        </div>
                        <p className="mt-4 text-sm">{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewAndRating;
