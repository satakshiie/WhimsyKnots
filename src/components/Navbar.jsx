import React, { useState } from "react";
import { FiMenu, FiHeart, FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import navbarlogo from "../assets/navbarlogo.png";

const Navbar = () => {

const [isMenuOpen, setIsMenuOpen]= useState(false);
  return (
    <nav className="w-full px-7 py-4 bg-white flex items-center justify-between shadow-md z-50 relative">
      

      <div className="flex items-center gap-6">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
     <FiMenu className="text-2xl cursor-pointer" />
     </button>

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

      {isMenuOpen && (
  <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-[100] transition-transform duration-300 ease-in-out p-6 flex flex-col gap-4">
    <button className="self-end text-2xl" onClick={() => setIsMenuOpen(false)}>×</button>
    
    <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="text-lg font-playfair">Home</NavLink>
    <hr className="my-1" />
    <NavLink to="/about" onClick={() => setIsMenuOpen(false)} className="text-lg font-playfair">About</NavLink>
    <hr className="my-0" />
    <NavLink to="/contact" onClick={() => setIsMenuOpen(false)} className="text-lg font-playfair">Contact</NavLink>
    <hr className="my-0" />
    <p className="text-sm font-semibold text-gray-500">Product Categories</p>
    <NavLink to="/category/yarn" onClick={() => setIsMenuOpen(false)} className="text-md">Yarn</NavLink>
    <NavLink to="/category/kits" onClick={() => setIsMenuOpen(false)} className="text-md">Crochet Kits</NavLink>
    <NavLink to="/category/bags" onClick={() => setIsMenuOpen(false)} className="text-md">Handmade Bags</NavLink>
  </div>
)}
    </nav>
  );
};

export default Navbar;