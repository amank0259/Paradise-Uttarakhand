import React from 'react';
import TopDestinationCard from './TopDestinationCard';
import badrinath from '/badrinath.jpg';
import kedarnath from '/kedarnath.jpg';
import auli from '/Auli.jpg';
import gangotri from '/gangotri.jpg';
import mussoorie from '/mussoorie.jpg';
import chopta from '/chopta.jpg';

function TopDestinations() {
    // add the all data into a single string
    const dataString = `Badrinath|${badrinath}|Kedarnath|${kedarnath}|Auli|${auli}|Gangotri|${gangotri}|Mussoorie|${mussoorie}|Chopta|${chopta}`;

    return (
        <div className='px-10 md:px-48 lg:px-64 py-4 md:py-8 text-3xl sm:text-4xl md:text-6xl font-semibold sm:font-semibold text-yellow-500'>
            <h1>Top Destinations --</h1>
            {/* Passing the concatenated string as a single prop */}
            <TopDestinationCard data={dataString} />
        </div>
    )
}

export default TopDestinations;
