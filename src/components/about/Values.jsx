
const Values = () => {
  const values = [
    {
      Icon: "https://www.outsourceglobal.com/about/icons/integrity.svg",
      title: "Integrity",
      body: "With a strong moral compass, our colleagues and customers can expect complete honesty and transparency at all times.",
    },
    {
      Icon: "https://www.outsourceglobal.com/about/icons/integrity.svg",
      title: "High Standards",
      body: "Our ethos is built on a superb work ethic. We bring our best self to work every day.",
    },
    {
      Icon: "https://www.outsourceglobal.com/about/icons/tape.svg",
      title: "Measurable Impact",
      body: "We obsess over serving our customers and aim to create partnerships that expediates growth.",
    },
    {
      Icon: "https://www.outsourceglobal.com/about/icons/increase.svg",
      title: "Constant Improvement",
      body: "We value and encourage personal growth and we are aggressive towards meeting our goals.",
    },
  ];
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col justify-center items-center gap-3 w-full">
          <h1 className="font-semibold text-3xl text-primary-orange md:text-4xl tracking-wider">
            Our Core Values
          </h1>
          <div className="bg-darkBlue rounded-sm w-20 h-2" />
        </div>
        <div className="gap-10 grid grid-cols-1 md:grid-cols-2 px-8 md:px-20 py-8 md:py-20 w-full">
          {values.map(({ Icon, title, body }, i) => (
            <div
              className="flex flex-col gap-5 shadow-md p-10 rounded-md"
              key={i}
            >
              <img src={Icon} alt="" height={30} width={30} />
              <p className="text-darkBlue text-xl">{title}</p>
              <small>{body}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
