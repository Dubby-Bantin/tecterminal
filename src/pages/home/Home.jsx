// import React from "react";
// import Navbar from "../../components/Navbar";
import bgImage from "../../assets/images/image-1.png";
// import ExploreBtn from "../../components/buttons/ExploreBtn";
// import LearnMoreBtn from "././../components/buttons/LearnMoreBtn";
import { FaCube, FaGear } from "react-icons/fa6";
import dots from "../../assets/images/dotted_circle.jpg";
// import image_2 from "../../assets/images/image-2.png";
import image_3 from "../../assets/images/image-3.png";
import image_4 from "../../assets/images/image-4.png";
import ContactBtn from "../../components/buttons/ContactBtn";
import Solutions from "./components/Solutions";
import PastData from "./components/PastData";
import Clients from "./Clients";
// import Reviews from "./components/Reviews";
// import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import photo2 from "../../assets/images/Rectangle 185.png";
import photo3 from "../../assets/images/Rectangle 186.png";
const Home = () => {
  return (
    <>
      <section className="lg:h-[88.5vh] h-[70vh] bg-slate-400 relative">
        <img src={bgImage} alt="bg" className="h-full w-full object-cover" />
        <div
          className="absolute h-full w-full top-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10, 12, 46, 0.98) 41.06%, rgba(10, 12, 46, 0.15) 100%)",
          }}
        ></div>

        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="flex flex-col gap-4 absolute top-0 text-white h-full justify-center lg:px-10 px-6"
        >
          <h1 className="font-bold lg:text-6xl text-3xl lg:w-[60%] lg:leading-[4rem]">
            Welcome to Tecterminal, Your IT Solutions{" "}
            <span className="text-primaryYellow">Partner</span>
          </h1>
          <p className="lg:w-[40%] w-[80%] leading-[1.5rem] text-gray-300 lg:text-base text-sm">
            At Tecterminal, we provide comprehensive IT services to help
            businesses thrive in the digital age. Our expert team is dedicated
            to delivering innovative solutions that drive growth and enhance
            efficiency.
          </p>
          {/* <div className="flex lg:gap-4 gap-3">
            <ExploreBtn />
            <LearnMoreBtn />
          </div> */}
        </div>
      </section>
      {/* Commitment Section */}
      <section>
        <div
          className="lg:h-[6rem] h-[4rem] bg-repeat bg-contain"
          style={{ backgroundImage: `url(${dots})` }}
        ></div>
        <div className="flex lg:px-10 px-6 pb-16 lg:gap-6 gap-4 flex-wrap lg:flex-nowrap">
          <div className="lg:w-[50%] w-[100%]">
            <span className="text-primaryBlue font-semibold">Innovate</span>
            <h2 className="lg:text-5xl text-3xl font-bold lg:mt-6 mt-2">
              Commitment to Quality and Security
            </h2>
          </div>

          <div
            className="lg:w-[50%] w-[100%]"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <p className="text-primaryGray">
              At Tecterminal, we prioritize quality and security in delivering
              innovative IT solutions to our clients. With our expertise and
              cutting-edge technology, we ensure that your business is protected
              and empowered to thrive in the digital age.
            </p>
            <div className="flex my-8 gap-4 flex-wrap lg:flex-nowrap">
              <div className="" data-aos="fade-up" data-aos-duration="500">
                <div className="w-[38px] h-[38px] bg-primaryBlue2 text-primaryBlue text-xl flex items-center justify-center rounded-lg">
                  <FaGear />
                </div>
                <h3 className="font-semibold mt-2 text-lg">
                  Quality Solutions
                </h3>
                <p className="text-primaryGray mt-2">
                  Our commitment to quality is reflected in our range of
                  innovative IT solutions.
                </p>
              </div>

              <div
                className=""
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                <div className="w-[38px] h-[38px] bg-primaryBlue2 text-primaryBlue text-xl flex items-center justify-center rounded-lg">
                  <FaGear />
                </div>
                <h3 className="font-semibold mt-2 text-lg">Expert Team</h3>
                <p className="text-primaryGray mt-2">
                  Our team of experts is dedicated to providing top-notch IT
                  solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              {/* <LearnMoreBtn /> */}
              <ContactBtn />
            </div>
          </div>
        </div>
      </section>

      {/* Big Image section */}
      {/* Mission Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 text-center mb-5 py-10">
        <div className="lg:w-1/2">
          <h1 className="font-semibold text-3xl lg:leading-[4rem]">MISSION</h1>
          <p className="px-4 lg:px-0">
            Provide the citizens with IT Training Solutions in the contemporary
            Information and Communication Technologies at “value for money”
            prices so that Nigeria progresses rapidly to emerge at par with the
            developed economies of the world.
          </p>
        </div>
        <img
          src={photo2}
          alt="Mission Illustration"
          className="w-1/2 lg:w-auto object-cover rounded-md"
        />
      </div>

      {/* Vision Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 text-center mb-5 py-10">
        <img
          src={photo3}
          alt="Vision Illustration"
          className="w-1/2 lg:w-auto object-cover rounded-md"
        />
        <div className="lg:w-1/2">
          <h1 className="font-semibold text-3xl lg:leading-[4rem]">VISION</h1>
          <p className="px-4 lg:px-0">
            To be the preferred brand for IT Training Solutions and services and
            provide “value for money” to the customers.
          </p>
        </div>
      </div>

      {/* Infrastructure Section */}
      <section id="solutions">
        <img
          src={image_3}
          alt="image_3"
          className="lg:h-[10rem] h-[4rem] object-cover w-full lg:opacity-10 opacity-20 object-top"
        />
        <div
          className="text-center lg:px-[15rem] px-6 bg-[#ffffffe3] lg:rounded-[100%] lg:-mt-16 -mt-4"
          data-aos="fade-up"
        >
          <span className="text-lg text-primaryBlue font-semibold">
            Transforming IT Solutions
          </span>
          <h2 className="lg:text-5xl text-3xl font-bold lg:my-4 my-2">
            Enhance Your IT Infrastructure with Tecterminal
          </h2>
          <p className="text-gray-500">
            At Tecterminal, we offer a comprehensive range of IT services to
            help businesses optimize their operations, improve security, and
            drive growth. Our team of experts is dedicated to delivering
            innovative solutions that align with your unique needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-12 lg:px-10 px-6 my-6 lg:mt-0 mt-12 text-center items-center justify-items-center gap-6 lg:gap-0">
          <div className="lg:col-span-3 col-span-12 flex flex-col lg:gap-8 gap-6">
            <div
              className="flex flex-col gap-2 justify-center items-center"
              data-aos="flip-up"
            >
              <FaCube />
              <h3 className="font-semibold text-lg">
                IT Infrastructure & Security Management
              </h3>
              <p className="text-gray-500">
                Ensure the stability and security of your IT systems with our
                comprehensive management solutions.
              </p>
            </div>

            <div
              className="flex flex-col gap-2 justify-center items-center"
              data-aos="flip-up"
            >
              <FaCube />
              <h3 className="font-semibold text-lg">Web Solutions</h3>
              <p className="text-gray-500">
                Create a strong online presence with our cutting-edge web
                development and design services.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 col-span-12 lg:block hidden">
            <img src={image_4} alt="image-4" className="w-full" />
          </div>

          <div className="lg:col-span-3 col-span-12 flex flex-col lg:gap-8 gap-6">
            <div
              className="flex flex-col gap-2 justify-center items-center"
              data-aos="flip-up"
            >
              <FaCube />
              <h3 className="font-semibold text-lg">
                Business Ready Solutions
              </h3>
              <p className="text-gray-500">
                Streamline your business processes and boost efficiency with our
                tailored solutions.
              </p>
            </div>

            <div
              className="flex flex-col gap-2 justify-center items-center"
              data-aos="flip-up"
            >
              <FaCube />
              <h3 className="font-semibold text-lg">Corporate Training</h3>
              <p className="text-gray-500">
                Equip your team with the skills they need to thrive in the
                digital age.
              </p>
            </div>
          </div>
        </div>

        <img src={image_4} alt="image-4" className="w-full lg:hidden" />
      </section>

      <Solutions />
      <PastData />
      <Clients />
      {/* <Reviews /> */}
      {/* <Subscription /> */}
      <Footer />
    </>
  );
};

export default Home;
