import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import About from './About';
import menu from '/photos/menu.png';
import close from '/photos/close.png';
import logo from '/photos/confident.png'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState('');

  const navLink = [
    {
      id: '1',
      title: 'About',
      route: 'about' // Updated route to use the id
    },
    {
      id: '2',
      title: 'Work',
      route: 'projectapp'
    },
    {
      id: '3',
      title: 'Contact',
      route: 'contact' // Updated route to use the id
    }
  ];

  const handleScroll = (id) => {
    const element = document.getElementById(id); // Use document.getElementById
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }

  return (
    <div className=''>
      <nav className='w-full h-20 flex flex-row bg-gray-500 top-0 mx-auto px-6 lg:px-32 fixed z-20 py-4'>
        <Link to="/">
          <img src={logo} alt="" className='w-32 md:w-36 pt-3'
            onClick={() => {
              setActive("");
              window.scrollTo(0, 0); // Use window.scrollTo
            }}
          />
        </Link>

        <ul className='hidden lg:flex flex-row gap-20 fixed right-60 py-4 text-offwhite font-semibold text-lg'>
          {navLink.map((link) => (
            <li key={link.id} className={`${active === link.title ? "text-offwhite" : "text-white"} hover:text-white cursor-pointer`}
              onClick={() => {
                setToggle(false);
                setActive(link.title);
                handleScroll(link.route); // Call handleScroll with route/id
              }}
            ><Link to={`#${link.route}`}>{link.title}</Link></li>
          ))}
        </ul>

        <div className='flex flex-1 justify-end items-center lg:hidden'>
          <img className='w-10' src={toggle ? close : menu} alt="menu" onClick={() => setToggle(!toggle)} />

          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 bg-gradient-to-r from-gray-700 to-blue-purple-800 absolute top-20 z-10 mx-4 text-lg rounded-xl font-semibold right-0 min-w-20`}>
            <ul>
              {navLink.map((link) => (
                <li key={link.id} className={`${active === link.title ? "text-white" : "text-offwhite"}`} onClick={() => {
                  setToggle(false);
                  setActive(link.title);
                  handleScroll(link.route); // Call handleScroll with route/id
                }}>
                  <Link to={`#${link.route}`}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
