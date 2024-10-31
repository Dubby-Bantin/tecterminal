import bgImage from "../../assets/images/image-1.png";
import photo from "../../assets/images/Rectangle 187.png";
import Footer from "../home/components/Footer";
import photo3 from "../../assets/images/Rectangle 186.png";

const Services = () => {
  return (
    <section>
      <div className="relative w-full h-[30rem] bg-slate-400 mb-10">
        <img
          src={bgImage}
          alt="Background"
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
        <p className="absolute top-36 left-8 lg:left-14 text-white w-1/2">
          To create the infrastructure that will deliver content to the right
          place at the right time. • Systems integrated and security to protect
          the integrity and privacy of shared content across networks • High-end
          and mid-range enterprise server installation and configuration • Small
          business and start-up computing needs and Data Center Infrastructures
        </p>
      </div>
      <div className="p-5">
        <h1 className="font-semibold text-3xl lg:text-4xl lg:leading-[4rem] mb-6 text-center lg:text-left sm:ml-16">
          TECH INDUSTRY OUTLOOk
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-around lg:flex-wrap-reverse gap-6">
        <img
          src={photo}
          alt="Founder Portrait"
          className="lg:w-1/3 w-full object-cover rounded-md h-[30rem]"
        />
        <div className="lg:w-1/2 flex flex-col gap-5 px-5 text-justify text-xl">
          <p>
            •Africa is one of the emerging tech landscape in the digital
            transforming era.
          </p>
          <p>
            •The region highlights the existence of roughly 200 African
            innovation hubs, 3,500 new tech-related ventures, and US $1 billion
            in venture capital (VC) to a pan-African movement of start-up
            entrepreneurs.
          </p>
          <p>
            •Revenue in Africa’s eCommerce market is expected to show an annual
            growth rate (2021-2025) of 13.27% resulting in market volume of US
            $40,758 million by 2025. Africa has the fastest-growing rate of
            mobile penetration, with 44% of the population owning a device in
            2018, and unique mobile subscribers expected to reach 634 million by
            2025.
          </p>
          <p>
            •Almost every booming industry in technology and data driven. Hence,
            there is an immense demand for technology skilled professional
            across the region.
          </p>
        </div>
      </div>

      <div>
        <p className="text-4xl font-semibold text-center py-5 pt-10">
          EVERY SECTOR & SERVICES <br />{" "}
          <span className="text-blue-700">REQUIRE IT PROFESSIONALS </span>
        </p>
        <p className="font-semibold text-xl text-center">
          As stated by the TopDev survey, in 2024, below are <br /> the 12 key
          focused IT sector and services
        </p>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 text-center mb-5 py-10 shadow-md px-10 my-10 w-[80rem] shadow-blue-300 rounded-md">
          <img
            src={photo3}
            alt="Vision Illustration"
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
