import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaArrowRightLong, FaCircleQuestion } from "react-icons/fa6";
import { RiQuestionnaireFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const SupportBox = ({ Icon, title, body, cta }) => (
  <div className="shadow-sm h-[20rem] w-[23rem] p-5 flex flex-col justify-around bg-slate-800 rounded-lg text-white">
    <Icon className="text-2xl" />
    <h1 className="font-bold text-lg">{title}</h1>
    <p>{body}</p>
    <Link className={`flex items-center text-primaryBlue gap-1`}>
      <span>{cta}</span>
      <FaArrowRightLong className="mt-[.15rem]" />
    </Link>
  </div>
);

export default SupportBox;
