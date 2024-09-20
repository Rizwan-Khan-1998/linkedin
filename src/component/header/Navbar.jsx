/* eslint-disable react/prop-types */
import SearchBar from "./SearchBar";
import Logo from './Logo'
import NavLinks from "./NavLinks";







function Navbar() {
  return (
    <div className="flex container  min-h-14 m-auto items-center ">
      <Logo />
      <SearchBar />
      <NavLinks />
    </div>
  );
}

export default Navbar;
