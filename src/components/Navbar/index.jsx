// hooks
import { useState } from "react";
// react router dom
import { NavLink } from "react-router-dom";
// images
import Logo from "../../images/logo.png";
import burger from "../../images/burger.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faPhoneVolume,
  faX,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [toggle, SetToggle] = useState(false);

  return (
    <div className="mx-auto flex my-7 items-center justify-between max-w-[1200px] w-full px-3">
      <div className="flex items-center ml-2 gap-3 ">
        <img
          onClick={() => SetToggle(toggle ? false : true)}
          src={burger}
          className="sm:hidden"
          alt=""
        />
        <img
          className=" w-[120px] xs:w-[130px] sm:w-[183px]"
          src={Logo}
          alt=""
        />
      </div>
      <ul
        className={` absolute -translate-y-full left-0 top-0 w-[100%] py-5  z-[10] justify-center transition duration-700 items-center gap-10 text-[22px] text-white bg-slate-400 flex  flex-col sm:translate-y-[0] sm:gap-5 md:gap-0 sm:bg-transparent sm:text-[#000] sm:relative sm:w-auto sm:flex-row ${
          toggle ? "toggle" : ""
        }`}
      >
        <li
          className="absolute top-3 right-5 sm:hidden"
          onClick={() => SetToggle(toggle ? false : true)}
        >
          <FontAwesomeIcon icon={faX}  />
        </li>
        <li className="md:ml-10">
          <NavLink className="sm:text-[17px] font-medium font-inter" to={"/"}>
            Home
          </NavLink>
        </li>
        <li className="md:ml-10">
          <NavLink className="sm:text-[17px] font-medium font-inter" to={"faq"}>
            Faq
          </NavLink>
        </li>
        <li className="md:ml-10">
          <NavLink
            className="sm:text-[17px] font-medium font-inter"
            to={"delivery"}
          >
            Delivery
          </NavLink>
        </li>
        <li className="md:ml-10">
          <NavLink
            className="sm:text-[17px] font-medium font-inter"
            to={"contacts"}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-5">
        <a href="tel:591 902 883" className="flex items-center gap-2">
          <FontAwesomeIcon icon={faPhoneVolume} />
          <span className="hidden xs:block">591 902 883</span>
        </a>
        <select className="outline-none font-montserrat font-semibold cursor-pointer">
          <option value="en">EN</option>
          <option value="ru">RU</option>
          <option value="uz">Uz</option>
          <option value="kz">Kz</option>
        </select>
        <label className="cursor-pointer flex items-center bg-yellow py-1 px-[9px] rounded-2xl gap-3 hover:bg-green duration-300 select-none">
          <FontAwesomeIcon
            className="text-white -mx-1 "
            icon={faCircleUser}
            size="lg"
          />
          <span className=" hidden xs:block font-montserrat font-semibold text-[15px] text-white ">
            Sign In
          </span>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
