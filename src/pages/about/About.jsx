import bgImage from "../../assets/images/image-1.png";
import photo from "../../assets/images/Rectangle 184.png";

import Footer from "../home/components/Footer";

const About = () => {
  return (
    <section>
      {/* Header Section with Background Image */}
      <div className="relative w-full h-[20rem] bg-slate-400 mb-10">
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
          ABOUT US
        </h1>
      </div>

      <hr />

      {/* Welcome Section */}
      <div className="p-5">
        <h1 className="font-semibold text-3xl lg:text-5xl lg:leading-[4rem] mb-6 text-center lg:text-left sm:ml-16">
          WELCOME TO MASTER STUDY
        </h1>

        {/* Main Content Section */}
        <div className="flex flex-col lg:flex-row lg:justify-around lg:flex-wrap-reverse gap-6">
          <div className="lg:w-1/2 flex flex-col gap-5 px-5 text-justify">
            <p>
              For Nnedinma Obioha, community development is not just a passion
              but a calling. She disclosed that empowering Nigerian youths
              through IT training and education is a dedication for her and a
              lifestyle for the nation’s growth and development.
            </p>
            <p>
              &quot;I believe that community development is the key to unlocking
              the potential of our youths. By providing them with the skills and
              resources they need to succeed, we can help them become positive
              change-makers in their communities,&quot; Obioha, who leads
              CentrePoint Multisolutions, said.
            </p>
            <p>
              She noted that her commitment to community development has also
              led to the establishment of charitable grants, scholarships, and
              IT workshops aimed at empowering youths.
            </p>
            <p>
              Obioha, who began her tech sojourn in the United Kingdom, where
              she earned certifications in IT and worked in accounting and
              entrepreneurship, disclosed that her journey in tech was not easy,
              but it was driven by a passion to make a difference.
            </p>
            <p>
              &quot;I believe that technology has the power to transform lives
              and communities, and I want to be at the forefront of that
              transformation,&quot; she said. However, it was her return to
              Nigeria that marked the genesis of her impact. After taking over
              her mother’s computer training institution, Obioha expanded its
              reach and impact, establishing training centers across West
              Africa.
            </p>
            <p>
              &quot;I wanted to bridge the skills gap in West Africa by
              providing comprehensive IT training that meets the demands of a
              rapidly evolving industry. I believe that technology has the power
              to unlock economic opportunities and transform lives.&quot;
            </p>
            <p>
              She noted that her focus lies on initiatives that support
              underprivileged communities and foster social change through
              technology. Her commitment to empowering Nigerian communities
              through IT training and education continues to be a testament to
              the transformation of lives and communities through community
              development.
            </p>
            <p>
              &quot;My goal is to empower Nigerian youth and bridge the skills
              gap in our community. I believe that technology has the power to
              transform lives and communities, and I want to be at the forefront
              of that transformation.
            </p>
            <p>
              &quot;I want to use technology to make a positive impact in my
              community. I believe that everyone deserves access to the
              opportunities and resources that technology provides, regardless
              of their background or circumstances,&quot; Obioha explained.
            </p>
          </div>
          <img
            src={photo}
            alt="Founder Portrait"
            className="lg:w-1/3 w-full object-cover rounded-md"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </section>
  );
};

export default About;
