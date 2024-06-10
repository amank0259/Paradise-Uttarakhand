import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner1 from '/chardham_banner.webp';
import Banner2 from '/chardham_banner2.webp';
import Aos from 'aos';
import "aos/dist/aos.css";

function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const banners = [
        {
            id: 1,
            imageUrl: Banner1,
            altText: 'Chardham yatra',
        },
        {
            id: 2,
            imageUrl: Banner2,
            altText: 'Dodham yatra',
        },
    ];

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div data-aos="fade-right" data-aos-duration='300' data-aos-delay="100" className="banner-carousel md:py-4 md:px-10 rounded-xl overflow-hidden">
            <Slider {...settings}>
                {banners.map((banner, index) => (
                    <div key={index}>
                        <img className='rounded cursor-pointer' src={banner.imageUrl} alt={banner.altText} />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Banner;