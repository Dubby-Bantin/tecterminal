// import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const ContactBtn = ({ style }) => {
  return (
    <Link
      to={"/contact"}
      className={`flex items-center text-primaryBlue gap-1 ${style}`}
    >
      <span>Contact us</span>
      <MdKeyboardArrowRight className="mt-[.15rem]" />
    </Link>
  );
};

ContactBtn.propTypes = {
  styles: PropTypes.string,
};

export default ContactBtn;
