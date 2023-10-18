import React, { useState } from "react";
import Link from "../Link/Link";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const routes = [
    { name: "Home", id: 1, path: "/" },
    { name: "About", id: 2, path: "/about" },
    { name: "Services", id: 3, path: "/services" },
    { name: "Portfolio", id: 4, path: "/portfolio" },
    { name: "Contact", id: 5, path: "/contact" },
  ];

  return (
    <>
      <nav className="bg-purple-300 md:bg-white py-2">
        <div className="my-auto ps-2 " onClick={() => setOpen(!open)}>
          <span className="md:hidden mt-2 ">
            {open == true ? (
              <XMarkIcon className="h-6 w-6 text-purple-500 my-auto hover:cursor-pointer " />
            ) : (
              <Bars3BottomRightIcon className="h-6 w-6 text-purple-500 my-auto hover:cursor-pointer" />
            )}
          </span>
        </div>
        <ul className = {`bg-purple-200 mt-0 md:bg-white w-full md:flex gap-10 justify-center px-auto pt-2 ps-4 md:ps-0 md:static absolute duration-700 ${open? 'top-10' : '-top-96'}`}>
          {routes.map((route) =>(
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
