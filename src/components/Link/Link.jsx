import React from "react";

const Link = ({ route }) => {
  return (
    <li className="text-lg font-semibold tracking-widest text-blue-950 font-serif  hover:text-blue-400 hover:cursor-pointer  py-2  md:py-0 ">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
