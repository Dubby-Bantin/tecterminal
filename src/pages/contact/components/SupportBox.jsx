import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const SupportBox = ({ Icon, title, body, cta }) => (
  <div className="shadow-sm h-[20rem] w-[90rem] p-5 flex flex-col justify-around bg-slate-800 rounded-lg text-white">
    <Icon className="text-2xl" />
    <h1 className="font-bold text-lg">{title}</h1>
    <p>{body}</p>
    <Link
      to={"https://wa.me/+23408169658898?text=Hello"}
      className={`flex items-center text-primaryBlue gap-1`}
    >
      <span>{cta}</span>
      <FaArrowRightLong className="mt-[.15rem]" />
    </Link>
  </div>
);

SupportBox.propTypes = {
  Icon: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
  cta: PropTypes.string,
};

export default SupportBox;
