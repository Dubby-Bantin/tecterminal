import { MailOpen } from "lucide-react";

const JoinUs = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between items-center gap-3 bg-[#051322] md:px-20 py-10 md:py-0 p-5 min-h-[20rem]">
      <div className="w-full md:w-1/2 text-white">
        <h1 className="mb-5 font-semibold text-3xl md:text-5xl">
          Ready to partner <span className="text-primary2">with</span> us?
        </h1>
        <div className="bg-white rounded-sm w-[7rem] h-3" />
      </div>
      <div className="flex flex-col items-start gap-10 w-full md:w-1/2">
        <small className="text-white">
          Grow your business while reducing operational cost and time and
          keeping the core business focus in-house.
        </small>
        <a href="mailto:info@cpnltd.com.ng">
          <button className="flex items-center gap-5 border-input bg-white shadow-sm p-2 border rounded-md">
            {" "}
            <MailOpen />
            Get In Touch
          </button>
        </a>
      </div>
    </div>
  );
};

export default JoinUs;
