/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import '../../index.css';

function MenuLink({ to, image, imageActive, title }) {
  return (
    <NavLink to={to} 
    className={({ isActive }) => `menu-link ${isActive ? "active" : ""}`}>
      {({ isActive }) => {
       return  (<>
          <img
            src={ isActive ? imageActive : image}
            alt={title}
            className="nav-link m-auto w-6 h-6"
          />
          <h1 className="text-xs">{title}</h1>
        </>)
      }}
    </NavLink>
  );
}

export default MenuLink;
