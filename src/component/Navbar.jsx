import React from 'react'
import logo from '../assets/logo.png'
import { ShoppingCart } from 'lucide-react';
import cart from '../assets/cart_icon.png'
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <>
      <div className=" sticky top-0 z-50 navbar shadow-sm bg-transparent flex items-center justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow bg-black text-white scroll-smooth">
        <li><Link to="/">Shop</Link></li>
  <li><Link to="/Men">Men</Link></li>
  <li><Link to="/Women">Women</Link></li> {/* Replace '/women' with correct route */}
  <li><Link to="/Kid">Kid</Link></li>
   <li><Link to="/Contact">ContactUs</Link></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl" href="#Home">
            <img src={logo} alt="Logo" className="w-10 h-10" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-black">Shopper</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-7">
      <li><Link to="/">Shop</Link></li>
  <li><Link to="/Men">Men</Link></li>
  <li><Link to="/Women">Women</Link></li> {/* Replace '/women' with correct route */}
  <li><Link to="/Kid">Kid</Link></li>

   <li><Link to="/Contact">ContactUs</Link></li>
          </ul>
        </div>
        <div className="navbar-end gap-10 mr-5">
          <button className='btn btn-primary'>  <li><Link to="/login">Login</Link></li></button>

          <ShoppingCart className="w-6 h-6 text-gray-700" />
        </div>
      </div>
    </>
  );
};
