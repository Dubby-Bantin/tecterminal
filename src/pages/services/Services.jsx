import bgImage from "../../assets/images/image-1.png";
// import photo from "../../assets/images/Rectangle 187.png";
import Footer from "../home/components/Footer";
import photo3 from "../../assets/images/Rectangle 186.png";
import { MdOutlinePhonelinkSetup, MdOutlineShowChart } from "react-icons/md";
import photo4 from "../../assets/images/33801-2048x2048.jpg";
import photo5 from "../../assets/images/2650106-2048x1269.jpg";
import photo6 from "../../assets/images/38451-2048x2048.jpg";
import photo7 from "../../assets/images/kisspng-closed-circuit-television-ip-camera-wireless-secur-centaur-3d-5b4b59d2d5ede6.9710647715316648508763.png";
import photo8 from "../../assets/images/3315-2048x1241.jpg";
import photo9 from "../../assets/images/19265-2048x1484.jpg";
import photo10 from "../../assets/images/18941-2048x1541.jpg";
import photo11 from "../../assets/images/Capture6-e1600421594258.jpg";
import photo12 from "../../assets/images/5514-2048x1280.jpg";
import { BsBarChartLine } from "react-icons/bs";
import { FaChalkboardUser, FaFolderOpen, FaLock } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";
import { GiBookmark } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";
import { IoBugSharp } from "react-icons/io5";
import { PiDeviceRotateThin, PiFileMagnifyingGlassThin } from "react-icons/pi";
import { CiBasketball } from "react-icons/ci";
import { LiaKeySolid, LiaToolsSolid } from "react-icons/lia";
const Services = () => {
  return (
    <section>
      <div className="relative w-full h-[30rem] bg-slate-400 mb-10">
        <img
          src={bgImage}
          alt="Background image representing services"
          className="h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10, 12, 46, 0.98) 41.06%, rgba(10, 12, 46, 0.3) 100%)",
          }}
        ></div>
        <h1 className="absolute top-14 left-8 lg:left-14 font-bold text-white text-3xl lg:text-5xl lg:leading-[4rem]">
          Services
        </h1>
        <p className="absolute top-36 left-8 lg:left-14 text-white lg:w-1/2">
          To create the infrastructure that will deliver content to the right
          place at the right time. • Systems integrated and security to protect
          the integrity and privacy of shared content across networks • High-end
          and mid-range enterprise server installation and configuration • Small
          business and start-up computing needs and Data Center Infrastructures
        </p>
      </div>
      <div className="flex sm:flex-row flex-col items-center justify-center">
        <div className="p-5 sm:ml-16 sm:mb-20 sm:text-left text-center">
          <h1 className="font-semibold text-3xl lg:text-4xl lg:leading-[4rem] mb-6 text-center lg:text-left text-primaryBlue">
            Enterprise Infrastructure
          </h1>
          <div className="w-28 border border-primaryBlue mb-2"></div>
          <p className="text-sm mb-5">
            To create the infrastructure that will deliver content to the right
            place at the right time and budget
          </p>
          <ul className="list-disc text-gray-700 text-sm grid gap-2 mb-10">
            <li>
              Systems integrated and security to protect the integrity and
              privacy of shared content across network
            </li>
            <li>
              High-end and mid range enterprise server installation and
              configuration
            </li>
            <li>Small business and start-up computing need</li>
          </ul>
          <div className="flex sm:flex-row flex-col items-center">
            <div className="flex flex-col items-center w-96 text-center">
              <MdOutlineShowChart className="text-2xl mb-3" />
              <p className="text-primaryBlue text-xl mb-3">
                Network Infrastructure
              </p>
              <p className="text-gray-700 text-sm">
                CPMS builds networks that meet clients’ demand for the structure
                of extra components which are not strictly necessary to
                functions in case of failure in other components.
              </p>
            </div>
            <div className="flex flex-col items-center w-96 text-center">
              <MdOutlinePhonelinkSetup className="text-2xl mb-3" />
              <p className="text-primaryBlue text-xl mb-3">
                Wireless and Mobile Connectivity
              </p>
              <p className="text-gray-700 text-sm">
                Business is no longer stationary, and therefore enabling
                wireless access to business resources on/off site has become
                extremely important part of business requirement.
              </p>
            </div>
          </div>
        </div>
        <img src={photo4} alt="" className="h-[30rem]" />
      </div>

      <div className="bg-primaryBlue/10 p-5 py-20 mb-10">
        <div className="flex sm:flex-row flex-col sm:text-left text-center items-center justify-center gap-40">
          <div>
            <img src={photo5} alt="" className="h-[15rem]" />
          </div>
          <div className="">
            <h1 className="font-semibold text-3xl lg:text-4xl lg:leading-[4rem] mb-6 text-center lg:text-left text-primaryBlue">
              Enterprise Infrastructure
            </h1>
            <div className="w-28 border border-primaryBlue mb-2"></div>
            <p className="text-sm mb-5">
              We have competency in the deployment and management of the
              following solutions
            </p>
            <ul className="list-disc text-gray-700 text-sm grid gap-2 mb-10">
              <li className="">Corporate PBX</li>
              <li className="">
                Email Collaboration (Microsoft Exchange Mail and Open Source
                Mail e.g. Scalix)
              </li>
              <li className="">VOIP (Voice Over IP Telephony)</li>
              <li className="">Portal Servers and Services</li>
              <li className="">Video Conferencing System</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="p-5 mb-10 flex items-start justify-center gap-40 ">
        <div className="w-[70rem] flex sm:flex-row flex-col items-center">
          <div className="relative -top-16">
            <h1 className="font-semibold text-3xl lg:text-4xl lg:leading-[4rem] mb-6 text-center lg:text-left text-primaryBlue">
              Data Center Solution
            </h1>
            <div className="w-28 border border-primaryBlue mb-2"></div>
            <p className="text-gray-700 text-sm">
              Data Center Infrastructures are physical or virtual infrastructure
              used by enterprises to house computer, server and networking
              systems and other vectors acting in different directions which are
              together equivalent for company’s information technology (IT)
              needs, which typically involve storing, processing and serving
              large amount of mission-critical data to clients in a
              client/server construction
            </p>
          </div>
          <img src={photo6} alt="" className="h-[30rem]" />
        </div>
      </div>
      <div className="p-5 py-20 mb-10 flex justify-center gap-40 bg-primaryBlue/10">
        <div className="w-[70rem] flex items-start sm:flex-row flex-col justify-center gap-20">
          <img src={photo7} alt="" className="h-[15rem]" />
          <div className="relative -top-25">
            <h1 className="font-semibold text-3xl lg:text-4xl lg:leading-[4rem] mb-6 text-center lg:text-left text-primaryBlue">
              IP Surveillance
            </h1>
            <div className="w-28 border border-primaryBlue mb-2"></div>
            <div className="text-gray-700 text-sm grid gap-5">
              <p>
                The digital network video surveillance system provides a host of
                benefits and advanced purposes that cannot be provided by an
                analogue video surveillance system.
              </p>
              <p>
                Center Point Multi Solutions provides a complete solution of IP
                cameras, easy to access, secure storage and is a strong and
                healthy network switching. We shall provide switches that offer
                what is needed for a robust network.
              </p>
              <p>
                In addition, our IP Surveillance solution is fully resilient to
                and secured from hacking.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 mb-10 flex items-start justify-center gap-40 ">
        <div className="w-[70rem] flex sm:flex-row flex-col items-center">
          <div className="relative">
            <h1 className="font-semibold text-3xl lg:text-4xl lg:leading-[4rem] mb-6 text-center lg:text-left text-primaryBlue">
              Cloud Computing
            </h1>
            <div className="w-28 border border-primaryBlue mb-2"></div>
            <p className="text-gray-700 text-sm">
              Cloud Computing is a general term for any activity that involves
              delivering hosted services over the internet. These services are
              roadly divided into three categories: Infrastructure-as-a-service
              (IaaS), Platform-as-a-Service (PaaS) and Software-as-a-Service
              (SaaS).
            </p>
            <p className="text-gray-700 text-sm">
              Cloud computing enables companies to consume computer resources as
              a utility just like electricity rather than having to build and
              maintain computing infrastructures in-house. It provides
              sufficient cost effective IT resources as cost on demand IT based
              on the actual usage of the customer.
            </p>
          </div>
          <img src={photo8} alt="" className="h-[20rem] object-cover" />
        </div>
      </div>
      <div className="p-5 mb-40 flex items-start justify-center gap-40">
        <div className="w-[75rem] flex sm:flex-row flex-col items-center gap-10">
          <div className="relative">
            <h1 className="font-semibold text-3xl lg:text-4xl lg:leading-[4rem] mb-6 text-center lg:text-left text-primaryBlue">
              Business Ready Solutions
            </h1>
            <div className="w-28 border border-primaryBlue mb-5"></div>

            <div className="grid grid-cols-3 gap-20">
              <div className="flex flex-col justify-center items-center text-center text-lg font-medium">
                <BsBarChartLine className="text-4xl mb-7 text-primaryBlue" />
                E-Commerce Solutions
              </div>
              <div className="flex flex-col justify-center items-center text-center text-lg font-medium">
                <FaFolderOpen className="text-4xl mb-7 text-primaryBlue" />
                ERP Solutions
              </div>
              <div className="flex flex-col justify-center items-center text-center text-lg font-medium">
                <FaChalkboardUser className="text-4xl mb-7 text-primaryBlue" />
                Management Software
              </div>
              <div className="flex flex-col justify-center items-center text-center text-lg font-medium">
                <GoPerson className="text-4xl mb-7 text-primaryBlue" />
                CRM Solutions
              </div>
              <div className="flex flex-col justify-center items-center text-center text-lg font-medium">
                <GiBookmark className="text-4xl mb-7 text-primaryBlue" />
                Content Management System
              </div>
              <div className="flex flex-col justify-center items-center text-center text-lg font-medium">
                <FaPeopleCarry className="text-4xl mb-7 text-primaryBlue" />
                Corporate Training Solutions
              </div>
            </div>
          </div>
          <img src={photo9} alt="" className="h-[20rem]" />
        </div>
      </div>
      <div className="p-5 mb-40 flex items-start justify-center gap-40 bg-primaryBlue/10">
        <div className="w-[75rem] flex sm:flex-row flex-col items-center gap-10">
          <img src={photo10} alt="" className="h-[20rem]" />
          <div className="relative">
            <h1 className="font-semibold text-3xl lg:text-4xl lg:leading-[4rem] mb-6 text-center lg:text-left text-primaryBlue">
              Business Ready Solutions
            </h1>
            <div className="w-28 border border-primaryBlue mb-5"></div>

            <div className="grid grid-cols-3 gap-20 ">
              <div className="flex flex-col justify-center items-center text-center text-lg font-medium">
                <LiaToolsSolid className="text-4xl mb-7 text-primaryBlue" />
                Server Management, Monitoring and Security
              </div>
              <div className="flex flex-col justify-center items-center text-center text-lg font-medium">
                <FaLock className="text-4xl mb-7 text-primaryBlue" />
                Firewall Security Solution
              </div>
              <div className="flex flex-col justify-center items-center text-center text-lg font-medium">
                <LiaKeySolid className="text-4xl mb-7 text-primaryBlue" />
                Penetration Testing
              </div>
              <div className="flex flex-col justify-center items-center text-center text-lg font-medium">
                <CiBasketball className="text-4xl mb-7 text-primaryBlue" />
                Web Service Assessment
              </div>
              <div className="flex flex-col justify-center items-center text-center text-lg font-medium">
                <PiFileMagnifyingGlassThin className="text-4xl mb-7 text-primaryBlue" />
                Source Code Audit
              </div>
              <div className="flex flex-col justify-center items-center text-center text-lg font-medium">
                <PiDeviceRotateThin className="text-4xl mb-7 text-primaryBlue" />
                Security Architecture Review
              </div>
              <div className="flex flex-col justify-center items-center text-center text-lg font-medium">
                <IoBugSharp className="text-4xl mb-7 text-primaryBlue" />
                Vulnerability Assessment
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 py-20 mb-10 flex justify-center gap-40">
        <div className="w-[70rem] flex sm:flex-row flex-col  sm:items-start justify-center gap-20">
          <div className="relative -top-25">
            <h1 className="font-semibold text-3xl lg:text-4xl lg:leading-[4rem] mb-6 text-center lg:text-left text-primaryBlue">
              IT Power Solutions
            </h1>
            <div className="w-28 border border-primaryBlue mb-2"></div>
            <div className="text-gray-700 text-sm grid gap-5">
              <p>
                A reliable uninterrupted power supply is non-negotiable for IT
                infrastructure. We understand that time is paramount, especially
                when it comes to eliminating downtime and maximizing the life of
                your backup power solution.
              </p>
              <p>
                Our IT power solution shall be tailored to fit your company’s
                unique requirements and infrastructure. We take proactive
                approach from selection and implementation to maintenance and
                upkeep
              </p>
            </div>
          </div>
          <img src={photo11} alt="" className="h-[15rem] object-cover" />
        </div>
      </div>
      <div className="p-5 py-20 mb-10 flex justify-center gap-40 bg-primaryBlue/20">
        <div className="w-[70rem] flex sm:flex-row flex-col sm:items-start justify-center gap-20">
          <img src={photo12} alt="" className="h-[15rem]" />
          <div className="relative -top-25">
            <h1 className="font-semibold text-3xl lg:text-4xl lg:leading-[4rem] mb-6 text-center lg:text-left text-primaryBlue">
              Corporate Training
            </h1>
            <div className="w-28 border border-primaryBlue mb-2"></div>
            <div className="text-gray-700 text-sm">
              <p>
                Any solution provided becomes obsolete if it doesn’t impact your
                primary objective – YOUR BUSINESS OUTCOMES. To mention a few,
                whether it’s maximizing the productivity of your employees or
                improving the quality and capabilities of company personnel, all
                our interventions have one common DNA i.e. impacting business
                outcome. Over the years, Center Point Multi Solutions Limited
                has championed the art of impacting business of global clients
                across multiple sectors through its customized IT security
                training programs. Our corporate training programs provide
                holistic solutions related to networking and security and we are
                committed to a philosophy of excellence.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-3">
        <p className="text-4xl font-semibold text-center py-5 pt-10 sm:text-[2rem] text-[1.5rem]">
          EVERY SECTOR & SERVICES <br />
          <span className="text-blue-700">REQUIRE IT PROFESSIONALS</span>
        </p>
        <p className="font-semibold text-xl text-center">
          As stated by the TopDev survey, in 2024, below are <br />
          the 12 key focused IT sectors and services
        </p>
      </div>

      <div className="flex justify-center sm:px-0 px-5">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 text-center mb-5 py-10 shadow-md px-10 my-10 w-[80rem] shadow-blue-300 rounded-md">
          <img
            src={photo3}
            alt="Image illustrating IT training solutions"
            className="w-1/2 lg:w-auto object-cover rounded-md"
          />
          <p className="text-lg font-bold">
            To be the preferred brand for IT Training Solutions and services and
            provide “value for money” to the customers.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Services;
