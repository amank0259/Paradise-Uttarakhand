import React from 'react';
import PopularTourCard from './PopularTourCard';
import rishikesh from '/rishikesh.jpg';
import ScrollReveal from '../UI/ScrollReveal';
import nainital from '/nainital.jpg';
import auli from '/auli2.jpg';
import chardham from '/kedarnath2.jpg';
import dodham from '/dodham.jpg';
import kedarnath from '/kedarnath3.jpg'

function PopularTour() {

    const data = [
        {
            id: 0,
            name: 'Nainital with Jim Corbet from Delhi',
            Img: nainital,
            details: '4 days & 3 nights',
            price: '₹19,500',
            link: 'nainital'
        },
        {
            id: 1,
            name: 'Delhi to Haridwar, Rishikesh & Mussoorie',
            Img: rishikesh,
            details: '4 days & 3 nights',
            price: '₹19,500',
            link: 'mussoorie'
        },
        {
            id: 2,
            name: 'Auli Nainital Corbet Mussoorie',
            Img: auli,
            details: '7 days & 6 nights',
            price: '₹35,500',
            link: 'auli'
        },
        {
            id: 3,
            name: 'Chardham Yatra from Haridwar',
            Img: chardham,
            details: '10 days & 9 nights',
            price: '₹38,300',
            link: 'chardham'
        },
        {
            id: 4,
            name: 'Do dham Yatra from Haridwar',
            Img: dodham,
            details: '6 days & 5 nights',
            price: '₹32,500',
            link: 'dodham'
        },
        {
            id: 5,
            name: 'Kedarnath Yatra from Haridwar',
            Img: kedarnath,
            details: '5 days & 4 nights',
            price: '₹24,500',
            link: 'kedarnath'
        },

    ]

    return (
        <>
            <div className='px-10 md:px-48 lg:px-64 py-4 md:py-8'>
                <ScrollReveal variant='fromUp' delay={0.3}>
                    <h1 className='text-3xl sm:text-4xl md:text-6xl font-semibold sm:font-semibold text-yellow-500'>Most Popular Tour --</h1>
                </ScrollReveal>
                <ScrollReveal variant='fromLeft' delay={0.3} >
                    <PopularTourCard data={data} />
                </ScrollReveal>
            </div>
        </>
    )
}

export default PopularTour