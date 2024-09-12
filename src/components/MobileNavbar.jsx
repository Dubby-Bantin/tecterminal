import React, { useEffect, useState } from 'react'
import logo from "../assets/images/Asset 24.svg";
import ExploreBtn from './buttons/ExploreBtn';
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { LiaTimesSolid } from 'react-icons/lia';

const MobileNavbar = () => {

    const [menuActive, setMenuActive] = useState(false);
    const [isFirstRender, setIsFirstRender] = useState(true);

    useEffect(() => {
        if (menuActive) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [menuActive]);

    const routes = [
        {
            label: "IT Solutions",
            route: "solutions"
        },
        {
            label: "Web Services",
            route: "web-services"
        },
        {
            label: "Business Solutions",
            route: "business-solutions"
        }
    ];

    const handleMenuClick = () => {
        setMenuActive(!menuActive);
        setIsFirstRender(false);
    }

    return (
        <div className='lg:hidden block sticky top-0 z-50'>
            <div className="sticky bg-[#0A0C2E] top-0 flex justify-between items-center z-50 px-6 py-5 border-b-[1px] border-[#0d204e]">
                <img src={logo} alt="logo" className='lg:w-[120px] w-[98px]'/>

                {menuActive ? <LiaTimesSolid onClick={handleMenuClick} className='text-white text-xl lg:hidden block'/> : <FaBars onClick={handleMenuClick}  className='text-white text-xl lg:hidden block'/>}
            </div>

            <nav className={`${menuActive ? "flex animateNavbar" : isFirstRender ? "hidden" : "unAnimate"} mt-[2rem] lg:h-auto py-16 px-6 lg:px-none z-20 gap-14 flex lg:flex-row flex-col lg:w-auto w-full  lg:items-center lg:gap-6 text-sm lg:static absolute lg:bg-none bg-[#0A0C2E] left-0 lg:left-none top-0 lg:top-none`}>
                    {routes.map(route => (
                        <Link to={route.route} key={route.label} className='text-gray-100'>
                            {route.label}
                        </Link>
                    ))}

                    <ExploreBtn/>
            </nav>
        </div>
    )
}

export default MobileNavbar