import React from 'react';
import PopularTourCard from './PopularTourCard';
import haridwar from '/haridwar.jpg';
import rishikesh from '/rishikesh.jpg';

function PopularTour() {

    const data = [
        {
            id: 0,
            name: 'Nainital with Jim Corbet from Delhi',
            Img: haridwar,
            details: '4 days & 3 nights',
            price: '₹19,500'
        },
        {
            id: 1,
            name: 'Rishikesh',
            Img: rishikesh,
            details: 'lorem12 vkjnso ksjnvion kjsbvon jl, sjvbh hkb ihsbkx .',
            price: '1300'
        },
        {
            id: 0,
            name: 'Haridwar',
            Img: haridwar,
            details: 'lorem12 vkjnso ksjnvion kjsbvon jl, sjvbh hkb ihsbkx .',
            price: '1200'
        },
        {
            id: 0,
            name: 'Haridwar',
            Img: haridwar,
            details: 'lorem12 vkjnso ksjnvion kjsbvon jl, sjvbh hkb ihsbkx .',
            price: '1200'
        },

    ]

    return (
        <>
            <div className='px-10 md:px-48 lg:px-64 py-4 md:py-8'>
                <h1 className='text-3xl sm:text-4xl md:text-6xl font-semibold sm:font-semibold text-yellow-500'>Most Popular Tour --</h1>
                <PopularTourCard data={data} />
            </div>
        </>
    )
}

export default PopularTour