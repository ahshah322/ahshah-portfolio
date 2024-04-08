import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { logo, logoDark, logoLight } from "../../assets/index"
import { navLinksdata } from '../../constants';
import useThemeSwitcher from '../../hooks/useThemeSwitcher';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [activeTheme, setTheme] = useThemeSwitcher()

  return (
    <div className="sticky top-0 z-50 border-b-gray-300 border-b-[1px] dark:border-b-gray-600">
      <div className="container mx-auto h-16 backdrop-blur-md bg-bodyColor-light bg-opacity-80 dark:bg-opacity-80 dark:bg-bodyColor-dark flex justify-between items-center font-titleFont">
        <div className="sm:shrink-0">
          {activeTheme === 'dark' ? (
            <img
              src={logoDark}
              className="h-16"
              alt="Dark Logo"
            />
          ) : (
            <img
              src={logoLight}
              className="h-16"
              alt="Dark Logo"
            />
          )}
        </div>
        <div>
          <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-sm font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={_id}
              >
                <Link
                  activeClass="active-tab"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {title}
                </Link>
              </li>
            ))}
            <li>
              {/* Theme switcher large screen */}
              <div
                onClick={() => setTheme(activeTheme)}
                aria-label="Theme Switcher"
                className="ml-8 bg-primary-light bg-[#E5E5E5] dark:bg-black dark:bg-opacity-25 p-3 shadow-sm rounded-xl cursor-pointer"
              >
                {activeTheme === 'dark' ? (
                  <FiMoon className="text-gray-400 hover:text-gray-800 text-xl" />
                ) : (
                  <FiSun className="text-gray-400 hover:text-gray-100 text-xl" />
                )}
              </div>
            </li>
          </ul>
          <span
            onClick={() => setShowMenu(!showMenu)}
            className="text-xl mdl:hidden bg-[#E5E5E5] dark:bg-black dark:bg-opacity-25 w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
          >
            <FiMenu />
          </span>
          {showMenu && (
            <div className="w-[100%] absolute top-0 left-0 h-screen backdrop-blur-md bg-bodyColor-light bg-opacity-95 dark:bg-opacity-95 dark:bg-bodyColor-dark scrollbar-hide border-r-gray-300 border-r-[1px] dark:border-1-gray-600">
              <div className="flex flex-col gap-8 relative">
                <div className="container">
                  {/* <img className="w-32" src={logo} alt="logo" /> */}
                  {activeTheme === 'dark' ? (
                    <img
                      src={logoDark}
                      className="h-16"
                      alt="Dark Logo"
                    />
                  ) : (
                    <img
                      src={logoLight}
                      className="h-16"
                      alt="Dark Logo"
                    />
                  )}
                </div>
                <ul className="flex flex-col gap-4 px-8 py-2">
                  {navLinksdata.map((item) => (
                    <li
                      key={item._id}
                      className="text-sm font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                    >
                      <Link
                        onClick={() => setShowMenu(false)}
                        activeClass="active"
                        to={item.link}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                  <li className="inline-flex items-center my-4">
                    <div
                      onClick={() => setTheme(activeTheme)}
                      aria-label="Theme Switcher"
                      className="bg-primary-light bg-[#E5E5E5] dark:bg-black dark:bg-opacity-25 p-3 shadow-sm rounded-xl cursor-pointer"
                    >
                      {activeTheme === 'dark' ? (
                        <FiMoon className="text-gray-400 hover:text-gray-800 text-xl" />
                      ) : (
                        <FiSun className="text-gray-400 hover:text-gray-100 text-xl" />
                      )}
                    </div>
                  </li>
                </ul>
                {/* <div className="flex flex-col gap-4">
                  <h2 className="text-base uppercase font-titleFont mb-4">
                    Find me in
                  </h2>
                  <div className="flex gap-4">
                    <span className="bannerIcon">
                      <FaFacebookF />
                    </span>
                    <span className="bannerIcon">
                      <FaTwitter />
                    </span>
                    <span className="bannerIcon">
                      <FaLinkedinIn />
                    </span>
                  </div>
                </div> */}
                <span
                  onClick={() => setShowMenu(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                >
                  <MdClose />
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar