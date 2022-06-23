import React, { useState } from "react";
import Navlinks from "./Navlinks";
import "../styles.css";
import { HiMenu } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";

const MobileNavigation = () => {
  const [open, setOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
    console.log("hamburgermenu", open);
  };

  const closeMobileMenu = () => {
    setOpen(false);
  };

  const hamburgerIcon = (
    <HiMenu className="hamburger" onClick={handleToggleMenu} />
  );

  const closeIcon = (
    <CgCloseO className="hamburger" onClick={handleToggleMenu} />
  );

  return (
    <>
      <nav className="mobilenavigation">
        {open ? closeIcon : hamburgerIcon}
        {open && <Navlinks isOpen={true} closeMobileMenu={closeMobileMenu} />}
      </nav>
    </>
  );
};

export default MobileNavigation;
