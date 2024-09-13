import React from 'react'
import LearnMoreBtn from '../../../components/buttons/LearnMoreBtn'
import ContactBtn from '../../../components/buttons/ContactBtn'
import { FaCube } from 'react-icons/fa6';
import image_5 from "../../../assets/images/image-5.png";

const Solutions = () => {

    const solutions = [
        {
            title: "Quality Solutions",
            description: "We prioritize quality in every aspect of our IT solutions, ensuring that our clients receive the best possible outcomes.",
            delay: 200,
        },
        {
            title: "On-Time Delivery",
            description: "We understand the importance of timely delivery and work diligently to meet our clients' deadlines.",
            delay: 300,
        },
        {
            title: "Global Partnerships",
            description: "Our strong partnerships with global IT leaders like Microsoft, Cisco, and Oracle enable us to provide cutting-edge solutions.",
            delay: 400,
        },
        {
            title: "Customer Satisfaction",
            description: "We are committed to ensuring our clients' satisfaction by delivering exceptional IT services and support.",
            delay: 500,
        }
    ];

    return (
        <section className='' id="business-solutions">
            <div className='lg:px-10 px-6 relative z-10'>
                <div className="flex flex-col gap-3" data-aos="fade-right" data-aos-duration="800">
                    <span className='text-lg text-primaryBlue font-semibold'>Innovative</span>
                    <h2 className='lg:text-4xl text-3xl font-bold'>Experience the Power of Cutting-Edge IT Solutions</h2>
                    <p className='text-gray-500'>At Tecterminal, we offer competitive pricing, on-time delivery, and strong partnerships with global IT leaders to ensure your business stays ahead of the curve. Our innovative solutions empower you to achieve your goals.</p>
                    <div className="flex gap-4">
                        <LearnMoreBtn/>
                        <ContactBtn/>
                    </div>
                </div>

                <div className="flex lg:flex-nowrap flex-wrap mt-10 gap-6">
                    {solutions.map(solution => (
                        <div className="flex flex-col border-[1px] shadow p-8 rounded w-full gap-3 bg-white" key={solution.title} data-aos="flip-up" data-aos-duration="700" data-aos-delay={solution.delay}>
                            <FaCube />
                            <h3 className='text-lg font-semibold'>{solution.title}</h3>
                            <p className='text-gray-500'>{solution.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <img src={image_5} alt="image_5" className='w-full h-[7rem] object-cover opacity-10 -mt-4 '/>
        </section>
    )
}

export default Solutions