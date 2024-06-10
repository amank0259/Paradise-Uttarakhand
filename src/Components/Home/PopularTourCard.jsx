import React, { useEffect } from 'react'
import { MdDateRange } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import Aos from 'aos';
import "aos/dist/aos.css";
import { LazyLoadImage } from 'react-lazy-load-image-component';


function PopularTourCard({ data }) {
    const navigate = useNavigate();

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className='w-full'>
            <h3 data-aos="fade-down" data-aos-offset="200" data-aos-duration='500' data-aos-delay="100" className='text-center py-4 font-semibold md:text-2xl'>Explore By Fixed Departures
            </h3>
            <div className='h-full flex flex-wrap md:gap-6 justify-between'>
                {data.map((item, index) => (
                    <div data-aos="fade-up" data-aos-offset="200" data-aos-duration='500' data-aos-delay="100" key={index} onClick={() => navigate(`Tour/${item.link}`)} className='h-[45vh] sm:w-[100%] md:w-[48%] lg:w-[30%] rounded-xl cursor-pointer duration-300 shadow-md hover:shadow-md border hover:shadow-yellow-500'>
                        <LazyLoadImage className='w-[430px] h-[310px] rounded-t-lg' src={item.Img} alt="" />
                        <h3 className='font-semibold px-4 pt-2'>{item.name}</h3>
                        <p className='w-[90%] text-justify px-4 flex items-center gap-2'><MdDateRange /> {item.details}</p>
                        <p className='text-yellow-500 font-semibold px-4'>{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default PopularTourCard;