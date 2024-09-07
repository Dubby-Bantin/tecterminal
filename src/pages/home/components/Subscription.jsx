import React from 'react'
import image_7 from "../../../assets/images/image-7.png"
import ExploreBtn from '../../../components/buttons/ExploreBtn'

const Subscription = () => {
  return (
    <section className='h-[90vh] w-full relative flex'>
        <img src={image_7} alt="image_7" className='h-full w-full object-cover'/>
        <div className="absolute w-full h-full bg-[#000000ae] top-0 flex flex-col justify-center gap-6 text-white px-10">
            <h2 className='text-5xl font-bold w-[60%] leading-[3rem]'>Stay Informed with CPMS Newsletter</h2>
            <p className='w-[65%] text-gray-300'>Stay up to date with the latest news and insights from CPMS by subscribing to our newsletter. Enter your email below to sign up and receive regular updates.</p>
            <div>
                <form className='flex gap-2'>
                    <input type="email" required className='py-2 px-4 rounded-md w-[30%]' placeholder='Enter your email'/>
                    <ExploreBtn/>
                </form>
                <small className='mt-2 block text-sm text-gray-300'>By clicking Sign Up, you agree to our Terms and Conditions.</small>
            </div>
        </div>
    </section>
  )
}

export default Subscription