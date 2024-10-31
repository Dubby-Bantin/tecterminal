// Contact Component
import { FaCircleQuestion } from "react-icons/fa6";
import bgImage from "../../assets/images/image-1.png";
import Footer from "../home/components/Footer";
import ContactForm from "./components/ContactForm";
import SupportBox from "./components/SupportBox";
import { RiQuestionnaireFill } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section>
      <div className="relative w-full h-[70vh] lg:h-[55vh] bg-slate-400 mb-96">
        <img
          src={bgImage}
          alt="Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0C2EFA] to-[#0A0C2E26]"></div>
        <h1 className="absolute top-14 left-8 lg:left-14 font-bold text-white text-3xl lg:text-5xl lg:leading-[4rem]">
          CONTACT US
        </h1>
        <div className="flex items-center justify-center mt-16 lg:mt-0">
          <ContactForm />
        </div>
      </div>

      <div className="text-center py-16">
        <h1 className="font-semibold text-3xl">
          WE ARE HERE FOR YOUR 24/7 SUPPORT
        </h1>
        <div className="flex flex-wrap justify-center gap-10 py-10">
          <SupportBox
            title="Help Centre"
            body="Access detailed guides, tutorials, and help articles in 20+ languages to solve issues quickly."
            cta="Go to Help Centre"
            Icon={FaCircleQuestion}
          />
          <SupportBox
            title="Live Support"
            body="Our team is available 24/7 via live chat and email. Get a fast response anytime."
            cta="Get Support"
            Icon={RiQuestionnaireFill}
          />
          <SupportBox
            title="Hire a Techterminal Expert"
            body="Need help setting up a Techterminal website? Hire a Techterminal Pro for custom setup."
            cta="Hire a Techterminal Expert"
            Icon={FaUserAlt}
          />
        </div>
      </div>

      <Footer />
    </section>
  );
};

export default Contact;