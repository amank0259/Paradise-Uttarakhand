import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/logo_invert.png';
import { FaTimes, FaBars } from 'react-icons/fa';

function Navbar() {
    const [nav, setNav] = useState(false);
    const menu = [
        {
            id: 1,
            name: "Home",
            path: '/',
            isActive: true
        },
        {
            id: 2,
            name: "Destinations",
            path: '/destinations'
        },
        {
            id: 3,
            name: "Tour",
            path: '/tour'
        },
        {
            id: 4,
            name: "About Us",
            path: '/about'
        },
        {
            id: 5,
            name: "Contact",
            path: '/contact'
        },
    ];
    return (
        <>
            <div className=' text-black bg-zinc-500 h-20 flex shadow-md items-center justify-between md:px-32 lg:48 px-10 w-full border-b border-zinc-700 border-opacity-75'>
                <Link to="/"><img className='rounded-xl cursor-pointer' src={logo} width={95} alt="paradise_uttarakhand logo" /></Link>
                <ul className='md:flex sm:gap-10 gap-4 hidden text-xl font-semibold'>
                    {menu.map((item, index) => (
                        <li key={index}><Link className={`hover:border-b-4 hover:text-yellow-500 hover:border-yellow-500 duration-200 cursor-pointer hover:scale-150`} to={item.path}>{item.name}</Link></li>
                    ))}
                </ul>

                <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-300 md:hidden'>
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>

                {nav && (
                    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-slate-800 to-slate-900 text-gray-300 z-50'>
                        <Link to="/"><img className='rounded-2xl' src={logo} height={40} width={220} alt="paradise_uttarakhand logo" /></Link>
                        {menu.map((item, index) => (
                            <li key={index} className='px-4 cursor-pointer capitalize py-6 text-4xl'><Link onClick={() => {
                                setNav(!nav)
                            }} to={item.path} smooth duration={500}>{item.name}</Link></li>
                        ))}
                    </ul>
                )}
            </div >
        </>
    );
}

export default Navbar;
