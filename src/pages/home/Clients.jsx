import nti from "../../assets/images/Picture.png";
import coatarm from "../../assets/images/coatarm.png";
import eedc from "../../assets/images/eedc.png";
import sfh from "../../assets/images/sfh.png";
import unicef from "../../assets/images/unicef.png";
import palla from "../../assets/images/palla.png";
import servi from "../../assets/images/apin.png";
import ndc from "../../assets/images/ndc.png";
import flag from "../../assets/images/flag.png";
import nai from "../../assets/images/nai.png";
import picture_3 from "../../assets/images/Picture-3.png";
import picture_4 from "../../assets/images/Picture-4.png";
import picture_5 from "../../assets/images/Picture5.png";
import picture_6 from "../../assets/images/Picture-6.png";
import picture_7 from "../../assets/images/Picture-7.png";
import picture_8 from "../../assets/images/Picture-8.png";
import picture_9 from "../../assets/images/Picture-9.png";
import picture_10 from "../../assets/images/Picture-10.png";
import picture_11 from "../../assets/images/Picture-11.png";
import picture_12 from "../../assets/images/Picture-12.png";
import picture_13 from "../../assets/images/Picture-13.png";
import picture_14 from "../../assets/images/Picture-14.png";
import picture_15 from "../../assets/images/Picture-15.png";
import picture_16 from "../../assets/images/Picture-16.png";
import picture_17 from "../../assets/images/Picture-17.png";
import picture_19 from "../../assets/images/Picture-19.png";

const Clients = () => {
  const clients = [
    nai,
    flag,
    ndc,
    servi,
    palla,
    unicef,
    sfh,
    eedc,
    coatarm,
    picture_3,
    picture_4,
    picture_5,
    picture_6,
    picture_7,
    picture_8,
    picture_9,
    picture_10,
    nti,
    picture_10,
    picture_11,
    picture_12,
    picture_13,
    picture_14,
    picture_15,
    picture_16,
    picture_17,
    picture_19,
  ];
  return (
    <section id="partnership" className="lg:px-10 px-6 py-12 bg-gray-100">
      <p className="text-center font-semibold text-gray-600 mb-6">
        Trusted by top companies worldwide
      </p>

      <div className="flex flex-wrap items-center gap-4 mt-2 justify-center">
        {clients.map((client, index) => (
          <img
            key={index}
            src={client}
            alt="client"
            className="w-[135px] h-[100%]"
          />
        ))}
      </div>
    </section>
  );
};

export default Clients;
