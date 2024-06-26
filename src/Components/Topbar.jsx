import React from 'react';
import { MdPhoneInTalk } from "react-icons/md";
import { MdMail } from "react-icons/md";


function Topbar() {
    return (
        <div className='hidden bg-zinc-900 px-10 md:px-64 h-10 text-white md:flex items-center justify-between gap-10 w-full'>
            <p className='hover:underline decoration-wavy'><a href="tel:+917417013033"><MdPhoneInTalk className='inline-block' /> 7417013033</a></p>
            <p className='hover:underline decoration-wavy'><a href="mailto:Info@paradiseuttarakhand.com"><MdMail className='inline-block' /> Info@paradiseuttarakhand.com</a></p>
        </div>
    )
}

export default Topbar