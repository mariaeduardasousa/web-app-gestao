import { Link } from "react-router-dom";

const Navlinks = ({ isOpen, closeMobileMenu }) => {
  return (
    <>
      <ul>
        <li onClick={() => isOpen && closeMobileMenu()}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => isOpen && closeMobileMenu()}>
          <Link to="/about">About</Link>
        </li>
        <li onClick={() => isOpen && closeMobileMenu()}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default Navlinks;
