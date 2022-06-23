import React from "react";
import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";

const NavBar = () => {
  return (
    <>
      <div class="navbar">
        <div class="container flex">
          <h1 class="logo">CODERJOOK.</h1>
          <Navigation />
          <MobileNavigation />
        </div>
      </div>
    </>
  );
};

export default NavBar;
