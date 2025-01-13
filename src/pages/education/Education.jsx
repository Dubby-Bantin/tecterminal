import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Educational() {
  const educational = [
    {
      title: "Career Courses",
      amount: 5,
      image:
        "https://media.licdn.com/dms/image/v2/C4E1BAQH_XYPk6BwGqg/company-background_10000/company-background_10000/0/1636989488109/aptechajahcentre_cover?e=2147483647&v=beta&t=AdDWw5SkL8hah_uKTtaec7Nw5854gQZZlw9CdCIj93M",
      courses: [
        {
          name: "Advanced Diploma in Multimedia",
          img: "https://aptech-nigeria.com/wp-content/uploads/2023/05/ADIM-COURSE-OUTLINE-960x760.jpg",
        },
        {
          name: "Aptech Certified Network Specialist",
          img: "https://aptech-nigeria.com/wp-content/uploads/2023/03/acns-960x760.jpg",
        },
        {
          name: "Arena MultiMedia Specialist Course",
          img: "https://aptech-nigeria.com/wp-content/uploads/2023/03/multimedia-1-960x760.jpg",
        },
        {
          name: "Aptech Certified Computer Professional",
          img: "https://aptech-nigeria.com/wp-content/uploads/2023/04/accp-1-960x760.jpg",
        },
        {
          name: "Advanced Diploma in Software Engineering",
          img: "https://media.licdn.com/dms/image/v2/C4E1BAQH_XYPk6BwGqg/company-background_10000/company-background_10000/0/1636989488109/aptechajahcentre_cover?e=2147483647&v=beta&t=AdDWw5SkL8hah_uKTtaec7Nw5854gQZZlw9CdCIj93M",
        },
      ],
    },
    {
      title: "Smart Professional Courses",
      amount: 3,
      image: "https://aptech-nigeria.com/wp-content/uploads/2022/02/CEH-1-960x760.jpg",
      courses: [
        {
          name: "JAPA",
          img: "https://aptech-nigeria.com/wp-content/uploads/2024/03/Aptech-JAPA-Courses-960x760.jpg",
        },
        {
          name: "ACE – STC & Smart Pro",
          img: "https://aptech-nigeria.com/wp-content/uploads/2023/04/accp-1-960x760.jpg",
        },
        {
          name: "Certified Ethical Hacker",
          img: "https://aptech-nigeria.com/wp-content/uploads/2022/02/CEH-1-960x760.jpg",
        },
      ],
    },
    {
      title: "AI & Data Science",
      amount: 1,
      image: "https://aptech-nigeria.com/wp-content/uploads/2023/05/artificial-intelligence-scaled-960x760.jpg",
      courses: [
        {
          name: "AI & Data Science",
          img: "https://aptech-nigeria.com/wp-content/uploads/2023/05/artificial-intelligence-scaled-960x760.jpg",
        },
      ],
    },
    {
      title: "Multimedia Specialist",
      amount: 2,
      image: "https://aptech-nigeria.com/wp-content/uploads/2023/03/multimedia-1-960x760.jpg",
      courses: [
        {
          name: "Advanced Diploma in Multimedia",
          img: "https://aptech-nigeria.com/wp-content/uploads/2023/05/ADIM-COURSE-OUTLINE-960x760.jpg",
        },
        {
          name: "Aptech Certified Network Specialist",
          img: "https://aptech-nigeria.com/wp-content/uploads/2023/03/multimedia-1-960x760.jpg",
        },
      ],
    },
    {
      title: "Networking",
      amount: 1,
      image: "https://aptech-nigeria.com/wp-content/uploads/2023/03/acns-960x760.jpg",
      courses: [
        {
          name: "Aptech Certified Network Specialist",
          img: "https://aptech-nigeria.com/wp-content/uploads/2023/03/acns-960x760.jpg",
        },
      ],
    },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col items-center bg-gradient-to-r from-[#f1fcfd] via-[#ffeded] to-[#e9f6fb]">
        <div className="flex flex-col gap-8 px-5 py-10 md:py-20 w-full md:w-3/4">
          <header>
            <h1 className="font-semibold text-3xl md:text-4xl leading-snug md:leading-tight">
              Our Educational System
            </h1>
            <div className="bg-primary2 mt-2 rounded-md w-24 h-2"></div>
          </header>
          <p className="text-base text-gray-600 leading-relaxed">
            Center Point Network is one of the largest franchises of Aptech
            Computer Education in Nigeria, serving as a training hub with
            centers in various parts of the country. Aptech is a global career
            education company with a presence in over 40 countries across five
            continents, playing a crucial role in helping individuals,
            organizations, and nations adapt to the evolving demands of a
            knowledge-driven world. Founded in 1986, Aptech has trained over 6.8
            million students globally. It is listed on the Bombay Stock Exchange
            (Code: 532475) and the National Stock Exchange (Code: APTECH), with
            headquarters in Mumbai, India.
          </p>
        </div>
      </div>

      {/* Educational Programs */}
      <div className="flex justify-center px-5 py-10">
        <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {educational.map(({ amount, image, title, courses }, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <div className="relative shadow-md rounded-md cursor-pointer group">
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 rounded-t-md transition-opacity duration-300"></div>
                  <img
                    src={image}
                    alt={`${title} Thumbnail`}
                    className="rounded-t-md w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="font-semibold text-primaryBlue">{title}</h2>
                    <p className="text-gray-500 text-sm">{amount} Courses</p>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="rounded-lg w-full md:max-w-5xl h-[560px] overflow-hidden">
                <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-5 overflow-y-auto">
                  {courses.map(({ name, img }, j) => (
                    <div
                      key={j}
                      className="flex flex-col shadow-lg border rounded-md cursor-pointer"
                    >
                      <img
                        src={img}
                        alt={`${name} Thumbnail`}
                        className="rounded-t-md w-full h-40 md:h-36 object-cover"
                      />
                      <p className="p-3 text-sm">{name}</p>
                    </div>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>

      {/* Banner */}
      <div>
        <img
          src="https://aptech-nigeria.com/wp-content/uploads/2023/05/Banner-2048x1229.jpg"
          alt="Promotional Banner"
          className="w-full"
        />
      </div>
    </div>
  );
}
