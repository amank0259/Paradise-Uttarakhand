import React from 'react'
import { useNavigate } from 'react-router-dom';
import { LazyLoadImage } from "react-lazy-load-image-component";


function TopDestinationCard({ data }) {
    const [badrinathName, badrinathImg, kedarnathName, kedarnathImg, auliName, auliImg, gangotriName, gangotriImg, mussoorieName, mussoorieImg, choptaName, choptaImg] = data.split('|');
    const navigate = useNavigate();

    return (
        <div>
            {/* Image Gallery */}
            <div className="py-2 flex-col w-full md:flex-row lg:pt-10">
                <div className="-m-1 flex flex-col md:flex-row w-full flex-wrap md:-m-2">
                    <div className="flex md:w-1/2 flex-wrap">
                        <div onClick={() => navigate('/tour')} className="w-full sm:w-1/2 p-1 md:p-2 relative h-[40vh]">
                            <LazyLoadImage
                                alt={badrinathName}
                                className="block h-full w-full rounded-lg object-cover object-center duration-300 shadow-md hover:shadow-md hover:shadow-yellow-500 cursor-pointer"
                                src={badrinathImg} />
                            <span className='text-lg absolute top-6 right-6 bg-yellow-500 text-white duration-300  hover:text-yellow-500 hover:bg-white cursor-pointer rounded py-1 px-2'>{badrinathName}</span>
                        </div>
                        <div onClick={() => navigate('/tour')} className="w-full sm:w-1/2 p-1 md:p-2 relative h-[40vh]">
                            <LazyLoadImage
                                alt={kedarnathName}
                                className="block h-full w-full rounded-lg object-cover object-center duration-300 shadow-md hover:shadow-md hover:shadow-yellow-500 cursor-pointer"
                                src={kedarnathImg} />
                            <span className='text-lg absolute top-6 right-6 bg-yellow-500 duration-300 text-white hover:text-yellow-500 hover:bg-white cursor-pointer rounded py-1 px-2'>{kedarnathName}</span>
                        </div>
                        <div onClick={() => navigate('/tour')} className="w-full relative p-1 md:p-2">
                            <LazyLoadImage
                                alt={auliName}
                                className="block h-full w-full rounded-lg object-cover object-center duration-300 shadow-md hover:shadow-md hover:shadow-yellow-500 cursor-pointer"
                                src={auliImg} />
                            <span className='text-lg absolute top-6 right-6 bg-yellow-500 text-white duration-300 hover:text-yellow-500 hover:bg-white cursor-pointer rounded py-1 px-2' >{auliName}</span>
                        </div>
                    </div>
                    <div className="flex md:w-1/2 flex-wrap">
                        <div onClick={() => navigate('/tour')} className="w-full p-1 relative md:p-2">
                            <LazyLoadImage
                                alt={gangotriName}
                                className="block h-full w-full rounded-lg object-cover object-center duration-300 shadow-md hover:shadow-md hover:shadow-yellow-500 cursor-pointer"
                                src={gangotriImg} />
                            <span className='text-lg absolute top-6 right-6 bg-yellow-500 text-white duration-300 hover:text-yellow-500 hover:bg-white cursor-pointer rounded py-1 px-2'>{gangotriName}</span>
                        </div>
                        <div onClick={() => navigate('/tour')} className="w-full sm:w-1/2 p-1 md:p-2 relative h-[40vh]">
                            <LazyLoadImage
                                alt={mussoorieName}
                                className="block h-full w-full rounded-lg object-cover object-center duration-300 shadow-md hover:shadow-md hover:shadow-yellow-500 cursor-pointer"
                                src={mussoorieImg} />
                            <span className='text-lg absolute top-6 right-6 bg-yellow-500 text-white duration-300 hover:text-yellow-500 hover:bg-white cursor-pointer rounded py-1 px-2'>{mussoorieName}</span>
                        </div>
                        <div onClick={() => navigate('/tour')} className="w-full sm:w-1/2 p-1 md:p-2 relative h-[40vh]">
                            <LazyLoadImage
                                alt={choptaName}
                                className="block h-full w-full rounded-lg object-cover object-center duration-300 shadow-md hover:shadow-md hover:shadow-yellow-500 cursor-pointer"
                                src={choptaImg} />
                            <span className='text-lg absolute top-6 right-6 bg-yellow-500 text-white duration-300 hover:text-yellow-500 hover:bg-white cursor-pointer rounded py-1 px-2'>{choptaName}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopDestinationCard