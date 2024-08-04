import React, { useState } from "react";
import { Link } from "react-router-dom";
import { links } from "./Mylinks";
import { FaChevronDown } from "react-icons/fa";
// import PropTypes from 'prop-types';

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="px-3 text-left xl:cursor-pointer group z-[9999]">
            <h1
              className="py-7 flex justify-between items-center 2xl:pr-1 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl 2xl:hidden inline"> <FaChevronDown /> </span>

              <span className="text-xs relative bottom-0 left-2 xl:mt-1 xl:ml-2 xl:block hidden"> <FaChevronDown /> </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:xl:block hover:xl:block z-[9999]">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45 " ></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10 relative">
                    {link.sublinks.map((slink, index) => (
                      <li key={index} className="text-sm text-gray-600 my-2.5">
                        <Link to={slink.link} className="hover:text-inherit">
                          {slink.name}
                        </Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "xl:hidden" : "hidden"} z-[9999]
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slink, index) => (
              <li key={index} className="py-3 pl-14">
                <Link to={slink.link}>{slink.name}</Link>
              </li>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
