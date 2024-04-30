import React from 'react';
import cover from '/cover1.jpg';

function Background() {
    return (
        <div style={{
            background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(${cover})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
        }} className='w-full h-[100vh] flex flex-col justify-end items-start p-10 relative'>
        </div>
    )
}

export default Background