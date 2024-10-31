// import React from 'react'
import logo from "../../../assets/images/Asset 22.svg";
import { FaFacebook, FaInstagram,  FaLocationDot,   } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { LuInstagram } from 'react-icons/lu';

const Footer = () => {
    const quickLinks_1 = [
        // {
        //     title: "APTECH ENUGU",
        //     link: "https://www.instagram.com/aptechenugucenter/",
        //     address: "50 Zik Ave, Achara, Enugu 400105, Enugu",
        //     location: "https://maps.app.goo.gl/L2yKARvYFTVBKX3F6"
        // }, 

        {
            title: "APTECH KUBWA",
            link: "https://www.instagram.com/aptechkubwa/",
            address: "48W4+HF7 Cok Best Mall, Kubwa, 901101, Federal Capital Territory",
            location: "https://maps.app.goo.gl/R7BmW9WP7xXRPE5p7"
        },

        // {
        //     title: "APTECH OWERRI",
        //     link: "https://www.instagram.com/aptech.owerri/",
        //     address: "57 Okigwe Rd, opposite government secondary school, Owerri 460222",
        //     location: "https://maps.app.goo.gl/feLnHoUqCj4TYXgJ8"
        // },

        {
            title: "APTECH ONITSHA",
            link: "https://www.instagram.com/aptechonitsha/",
            address: "EKWERE EKWU STREET OFF COURT ROAD, BY CPS ONITSHA",
            location: "https://maps.app.goo.gl/e4JhtcPmhWGV7o7z7"
        },

        // {
        //     title: "APTECH UMUAHIA",
        //     link: "https://www.instagram.com/aptechumuahia/",
        //     address: "2 Umuwaya Rd, Umuahia, 440236, Abia",
        //     location: "https://maps.app.goo.gl/PzkLg4HYgzzuwDS89"
        // },
    ];
    // const quickLinks_2 = ["Link Six", "Link Seven", "Link Eight", "Link Nine", "Link ten"];

    return (
        <footer className='lg:px-10 px-6 py-12'>
            <div className="flex justify-between lg:flex-row flex-col gap-6">
                <div className="flex flex-col gap-6">
                    <img src={logo} alt="logo" className='w-[155px]'/>
                    <div className="flex flex-col">
                        <span className='font-semibold text-lg'>Address:</span>
                        <span className='lg:w-[70%]'>ASTA Gallery Plaza, Plot 1185 Cadastral Zone B06 Mabushi District, Abuja - Nigeria.</span>
                    </div>

                    <div className="flex flex-col">
                        <span className='font-semibold text-lg'>Contact:</span>
                        <div className="flex gap-1 items-center">
                            <Link to="tel:+2348033384978" className='underline'>0803 338 4978</Link>,
                            <Link to="tel:+2349038624006" className='underline'>0903 862 4006</Link>
                        </div>
                        <Link to="malito:info@tecterminal.com" className='underline'>info@tecterminal.com</Link>
                    </div>

                    <div className="flex gap-3 text-xl">
                        <FaFacebook />
                        <FaInstagram />
                        {/* <FaXTwitter />
                        <FaLinkedin />
                        <FaYoutube /> */}
                    </div>
                </div>

                <div className="flex flex-col gap-3 font-medium">
                    {quickLinks_1.map(link => (
                        <div className="" key={link.title}>
                            <p className='text-lg font-semibold'>{link.title}</p>
                            <div className="flex gap-1 text-gray-500 underline mt-1">
                                <FaLocationDot className='mt-[.25rem] text-gray-400'/>
                                <Link to={link.location} key={link.title}>{link.address}</Link>
                            </div>

                            <div className="flex gap-1 text-gray-500 underline">
                                <LuInstagram className='mt-[.25rem] text-gray-400'/>
                                <Link to={link.link} key={link.title}>Instagram</Link>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className="border-t-[1.5px] border-t-[#00000035] mt-12 py-4 flex justify-between text-sm">
                <p>© 2024 Tecterminal. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer