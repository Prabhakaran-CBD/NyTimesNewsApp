import react, { useState } from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import Nylogo from "../../images/nytimesLogo.svg";

//component
const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

const Navbar = () => {
  //this state is used to set whether mobile navigation bar is opened or not
  const [ToggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="w-full flex md:justify-center justify-between items-center p-4 ">
      <div className="md-flex-[0.5] flex-initial justify-center items-center ">
        <img src={Nylogo} alt="Nylogo" className=" white-glassmorphism" />
      </div>
    </div>
  );
};

export default Navbar;
