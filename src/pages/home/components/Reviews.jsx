import React from 'react';
import user_1 from "../../../assets/images/user-1.jpg";
import user_2 from "../../../assets/images/user-2.jpg";
import { FaArrowLeft, FaArrowRight, FaCircle, FaWebflow } from 'react-icons/fa6';
import { IoStar } from 'react-icons/io5';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            name: "Louis Evra",
            title: "CEO, ABC Company",
            statement: "Our experience with Tecterminal has been exceptional. They delivered high quality IT solutions on time and within budget.",
            image: user_1
        },
        {
            id: 2,
            name: "John Doe",
            title: "CTO, XYZ Company",
            statement: "I highly recommend Tecterminal for their exceptional IT solutions and outstanding customer support.",
            image: user_2
        }
    ];

    return (
        <section className='lg:px-10 px-6 py-12'>
            <h2 className='text-3xl font-bold lg:block hidden'>Customer <br /> Testimonials</h2>
            <h2 className='text-2xl font-bold lg:hidden block'>Customer Testimonials</h2>

            <span className='text-gray-500 mt-4 block'>Read what our clients have to say about us</span>

            <div className="flex mt-8 gap-12">
                {reviews.map((review, index) => (
                    <div 
                        className={`flex flex-col gap-2 ${
                            index === 0 ? 'block lg:flex' : 'hidden lg:flex'
                        }`} 
                        key={review.id}
                    >
                        <div className="flex text-[#ffae17] gap-1">
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                            <IoStar />
                        </div>

                        <p className='font-bold'>{review.statement}</p>

                        <div className="flex items-center py-4">
                            <div className="flex items-center gap-2 border-r-[1.5px] border-[#000000b0] pr-4">
                                <img src={review.image} alt="reviewer" className='w-[65px] h-[65px] rounded-full object-cover object-top' />
                                <div className="flex flex-col">
                                    <span className='font-semibold'>{review.name}</span>
                                    <span className='text-sm text-gray-500'>{review.title}</span>
                                </div>
                            </div>

                            <div className="flex pl-4 items-center gap-1 font-semibold">
                                <FaWebflow />
                                <span>Webflow</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex mt-6 items-center justify-between">
                <div className="flex text-primaryBlue2 text-[.5rem] gap-1">
                    <FaCircle className="text-primaryBlue" />
                    <FaCircle />
                    <FaCircle />
                    <FaCircle />
                </div>

                <div className="flex gap-3">
                    <div className="flex cursor-pointer border-primaryBlue border-[1.5px] text-primaryBlue w-[30px] h-[30px] text-sm rounded-full justify-center items-center">
                        <FaArrowLeft />
                    </div>

                    <div className="flex cursor-pointer border-primaryBlue border-[1.5px] text-primaryBlue w-[30px] h-[30px] text-sm rounded-full justify-center items-center">
                        <FaArrowRight />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;
