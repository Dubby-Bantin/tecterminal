import React from 'react'
import logo from "../assets/images/logo.png";
import ExploreBtn from './buttons/ExploreBtn';
import { Link } from 'react-router-dom';

const Navbar = () => {

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
        },
        {
            label: "More",
            route: "business-solutions",
            subRoutes:[]
        },
    ]

    return (
        <header className='bg-[#0A0C2E] flex justify-between px-10 py-4 items-center top-0 sticky z-50'>
            <img src={logo} alt="logo" className='w-[120px] h-full'/>

            <nav className='flex items-center gap-6 text-sm'>
                {routes.map(route => (
                    <Link to={route.route} key={route.label} className='text-gray-100'>
                        {route.label}
                    </Link>
                ))}

                <ExploreBtn/>
            </nav>
        </header>
    )
}

export default Navbar