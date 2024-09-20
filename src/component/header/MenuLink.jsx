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
            className="nav-link m-auto"
          />
          <h1>{title}</h1>
        </>)
      }}
    </NavLink>
  );
}

export default MenuLink;
