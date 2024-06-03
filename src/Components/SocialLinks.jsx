import React from 'react';
import { FaInstagram, } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { RiWhatsappFill } from "react-icons/ri";
import { MdPhoneInTalk } from 'react-icons/md';
import { FaFacebook } from "react-icons/fa6";


const SocialLinks = () => {

    const links = [
        {
            id: 1,
            child: (
                <>
                    Whatsapp <RiWhatsappFill size={30} />
                </>
            ),
            href: "https://wa.me/+917417013033",
            style: 'bg-green-500'
        },
        {
            id: 2,
            child: (
                <>
                    Instagram <FaInstagram size={30} />
                </>
            ),
            href: "https://www.instagram.com/parad_iseuttarakhand",
            style: 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
        },
        {
            id: 3,
            child: (
                <>
                    Facebook <FaFacebook size={30} />
                </>
            ),
            href: "https://www.instagram.com/parad_iseuttarakhand",
            style: 'bg-gradient-to-r from-indigo-500 to-blue-500'
        },
        {
            id: 4,
            child: (
                <>
                    Phone <MdPhoneInTalk size={30} />
                </>
            ),
            href: "tel:+917417013033",
            style: 'bg-gradient-to-r from-zinc-800 to-gray-900'
        },
        {
            id: 5,
            child: (
                <>
                    Mail <HiOutlineMail size={30} />
                </>
            ),
            href: "mailto:Info@paradiseuttarakhand.com",
            style: 'bg-blue-800'
        },

    ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed z-50'>
            <ul>
                {links.map(({ id, child, href, style }) => (
                    <li key={id} className={'flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300' + " " + style}>
                        <a href={href} className='flex justify-between items-center w-full text-white'
                            target='_blank'>
                            {child}
                        </a>
                    </li>
                ))};
            </ul>
        </div>
    )
}

export default SocialLinks