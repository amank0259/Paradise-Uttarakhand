import React from 'react'

function Button({ text, onClick, className }) {
    return (
        <>
            <button onClick={onClick} className={`md:px-6 md:py-3 px-4 py-2 duration-200 bg-yellow-500 rounded-md text-white text-md md:text-xl hover:bg-yellow-600 cursor-pointer ${className}`}>{text}</button>
        </>
    )
}

export default Button