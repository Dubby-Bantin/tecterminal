// import React from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import image_6 from "../../../assets/images/image-6.png";
// import LearnMoreBtn from '../../../components/buttons/LearnMoreBtn';
import ContactBtn from '../../../components/buttons/ContactBtn';

const PastData = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,   // Trigger the animation only once
    threshold: 0.3,      // The animation will start when 30% of the section is visible
  });

  return (
    <section ref={ref} className="relative min-h-[90vh] h-auto w-full" style={{ backgroundImage: `url(${image_6})`, backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="flex flex-col justify-center lg:gap-[6rem] gap-12 w-full h-full bg-[#05051d88] text-white lg:px-10 px-6 py-16">
        <div className="flex gap-6 flex-wrap lg:flex-nowrap">
          <div className="lg:w-[50%] w-full">
            <span className='text-lg font-semibold lg:text-white text-primaryYellow'>Innovative</span>
            <h2 className='font-bold lg:text-5xl text-3xl lg:leading-[4rem] mt-2'>Experience the Power of IT Solutions</h2>
          </div>

          <div className="lg:w-[50%] w-full">
            <p className='text-gray-300'>Tecterminal is a leading Information Technology Services and Consultancy firm in Nigeria, providing innovative IT solutions to various sectors. With a focus on quality, on-time delivery, and competitive pricing, we are committed to enhancing customer relationships and showcasing our technical expertise.</p>
            <div className="flex mt-6 gap-4">
              {/* <LearnMoreBtn style="text-white border-white"/> */}
              <ContactBtn style="text-white"/>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-nowrap flex-wrap lg:gap-0 gap-6">
          <div className="border-l-[1.5px] border-gray-400 flex flex-col lg:gap-4 gap-0 w-full pl-6">
            <span className='font-bold lg:text-5xl text-3xl'>
              {inView && <CountUp end={99} duration={1} suffix="%" />}
            </span>
            <span className='text-gray-200'>Client Satisfaction Guaranteed</span>
          </div>

          <div className="border-l-[1.5px] border-gray-400 flex flex-col lg:gap-4 gap-0 w-full pl-6">
            <span className='font-bold lg:text-5xl text-3xl'>
              {inView && <CountUp end={120} duration={1} suffix="+" />}
            </span>
            <span className='text-gray-200'>Expert IT Solutions</span>
          </div>

          <div className="border-l-[1.5px] border-gray-400 flex flex-col lg:gap-4 gap-0 w-full pl-6">
            <span className='font-bold lg:text-5xl text-3xl'>
              {inView && <CountUp end={100} duration={1} suffix="+" />}
            </span>
            <span className='text-gray-200'>Innovative IT Services</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastData;
