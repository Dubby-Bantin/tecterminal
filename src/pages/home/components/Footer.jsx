import React from 'react'
import logo from "../../../assets/images/black-logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    const quickLinks_1 = ["Link One", "Link Two", "Link Three", "Link Four", "Link Five"];
    const quickLinks_2 = ["Link Six", "Link Seven", "Link Eight", "Link Nine", "Link ten"];

    return (
        <footer className='lg:px-10 px-6 py-12'>
            <div className="flex justify-between lg:flex-row flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <img src={logo} alt="logo" className='w-[155px]'/>
                    <div className="flex flex-col">
                        <span className='font-semibold text-lg'>Address:</span>
                        <span>Level 1, 12 Sample St, Sydney NSW 2000</span>
                    </div>

                    <div className="flex flex-col">
                        <span className='font-semibold text-lg'>Contact:</span>
                        <Link to="tel:+2349129131925" className='underline'>1800 123 4567</Link>
                        <Link to="malito:info@relume.io" className='underline'>info@relume.io</Link>
                    </div>

                    <div className="flex gap-3 text-xl">
                        <FaFacebook />
                        <FaInstagram />
                        <FaXTwitter />
                        <FaLinkedin />
                        <FaYoutube />
                    </div>
                </div>

                <div className="flex gap-6 flex-col lg:flex-row">
                    <div className="flex flex-col gap-3 font-medium">
                        {quickLinks_1.map(link => (
                            <Link key={link}>{link}</Link>
                        ))}
                    </div>

                    <div className="flex flex-col gap-3 font-medium">
                        {quickLinks_2.map(link => (
                            <Link key={link}>{link}</Link>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t-[1.5px] border-t-[#00000035] mt-12 py-4 flex justify-between text-sm">
                <p>© 2024 Relume. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer