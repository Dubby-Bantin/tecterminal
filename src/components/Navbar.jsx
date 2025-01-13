// import React from "react";
import logo from "../assets/images/Asset 24.svg";
// import ExploreBtn from "./buttons/ExploreBtn";
import MobileNavbar from "./MobileNavbar";
import { Link } from "react-router-dom";

const Navbar = () => {
  const routes = [
    {
      label: "About",
      route: "about",
    },
    {
      label: "Contact",
      route: "contact",
    },
    {
      label: "Services",
      route: "services",
    },
    {
        label: "Education",
        route: "education",
        subRoutes:[]
    },
  ];

  return (
    <>
      <header className="top-0 z-50 sticky lg:flex justify-between items-center hidden bg-[#0A0C2E] px-10 py-4">
        <Link to="/">
          <img src={logo} alt="logo" className="w-[175px] h-full" />
        </Link>

        <nav className="flex items-center gap-6 text-sm">
          {routes.map((route) => (
            <Link
              key={route.label}
              to={route.route}
              // href={route.route}
              smooth={true}
              // offset={10}
              // duration={500}
              className="text-gray-100 cursor-pointer"
            >
              {route.label}
            </Link>
          ))}

          {/* <ExploreBtn /> */}
        </nav>
      </header>

      <MobileNavbar />
    </>
  );
};

export default Navbar;
