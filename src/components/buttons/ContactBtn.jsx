import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const ContactBtn = ({style}) => {
  return (
    <Link className={`flex items-center text-primaryBlue gap-1 ${style}`}>
        <span>Contact us</span>
        <MdKeyboardArrowRight className='mt-[.15rem]'/>
    </Link>
  )
}

export default ContactBtn