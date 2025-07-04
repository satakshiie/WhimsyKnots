import React from "react";
import { FiMenu, FiHeart, FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import navbarlogo from "../assets/navbarlogo.png";

const Navbar = () => {
  return (
    <nav className="w-full px-7 py-4 bg-white flex items-center justify-between shadow-md z-50 relative">
      

      <div className="flex items-center gap-6">
        <FiMenu className="text-2xl cursor-pointer" />

        <div className="hidden md:flex gap-6 font-[Playfair] text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline text-yarnGreen" : "hover:underline"
            }
          >
            home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline text-yarnGreen" : "hover:underline"
            }
          >
            about
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline text-yarnGreen" : "hover:underline"
            }
          >
            contact
          </NavLink>
        </div>
      </div>


      <div className="absolute left-1/2 top-0 transform -translate-x-1/2 translate-y-[20%] w-25 h-22 bg-white rounded-full shadow-lg flex items-center justify-center z-20">
        <img
          src={navbarlogo}
          alt="Whimsy Knots logo"
          className="w-20 h-20 object-contain rounded-full"
        />
      </div>


      <div className="hidden md:flex gap-6 font-[Playfair] text-lg items-center">
        <NavLink
          to="/shop"
          className={({ isActive }) =>
            isActive ? "underline text-yarnGreen" : "hover:underline"
          }
        >
          shop
        </NavLink>
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "underline text-yarnGreen" : "hover:underline"
          }
        >
          login
        </NavLink>
        <NavLink
          to="/signup"
          className={({ isActive }) =>
            isActive ? "underline text-yarnGreen" : "hover:underline"
          }
        >
          signup
        </NavLink>
        <div className="hidden md:flex items-center gap-3 ml-4">
     <FiHeart className="text-2xl cursor-pointer hover:text-yarnGreen transition" />
     <FiShoppingCart className="text-2xl cursor-pointer hover:text-yarnGreen transition" />
     </div> 
      </div>


      <div className="md:hidden flex items-center gap-4 ml-auto">
        <FiHeart className="text-xl" />
        <FiShoppingCart className="text-xl" />
      </div>
    </nav>
  );
};

export default Navbar;