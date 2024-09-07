import React from 'react'
import image_6 from "../../../assets/images/image-6.png"
import LearnMoreBtn from '../../../components/buttons/LearnMoreBtn'
import ContactBtn from '../../../components/buttons/ContactBtn'

const PastData = () => {
  return (
    <section className="relative h-[90vh] w-full">
        <img src={image_6} alt="image-6" className='w-full h-full object-cover'/>
        <div className="flex flex-col justify-center gap-[6rem] w-full h-full absolute top-0 bg-[#05051d88] text-white px-10 py-16">
            <div className="flex gap-6">
                <div className="w-[50%]">
                    <span className='text-lg font-semibold'>Innovative</span>
                    <h2 className='font-bold text-5xl leading-[4rem] mt-2'>Experience the Power of IT Solutions</h2>
                </div>

                <div className="w-[50%]">
                    <p className='text-gray-300'>CPMS is a leading Information Technology Services and Consultancy firm in Nigeria, providing innovative IT solutions to various sectors. With a focus on quality, on-time delivery, and competitive pricing, we are committed to enhancing customer relationships and showcasing our technical expertise.</p>
                    <div className="flex mt-6 gap-4">
                        <LearnMoreBtn style="text-white border-white"/>
                        <ContactBtn style="text-white"/>
                    </div>
                </div>
            </div>

            <div className="flex">
                <div className="border-l-[1.5px] border-gray-400 flex flex-col gap-4 w-full pl-6">
                    <span className='font-bold text-5xl'>99%</span>
                    <span className='text-gray-200'>Client Satisfaction Guaranteed</span>
                </div>

                <div className="border-l-[1.5px] border-gray-400 flex flex-col gap-4 w-full pl-6">
                    <span className='font-bold text-5xl'>120+</span>
                    <span className='text-gray-200'>Expert IT Solutions</span>
                </div>

                <div className="border-l-[1.5px] border-gray-400 flex flex-col gap-4 w-full pl-6">
                    <span className='font-bold text-5xl'>100+</span>
                    <span className='text-gray-200'>Innovative IT Services</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PastData