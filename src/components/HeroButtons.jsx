import React from "react";
import { Link } from "react-scroll";

const Button = () => {
  return (
    // <button className="bg-customOrangeRed text-white font-bold w-fit  px-6 py-6 rounded-full" >
    //   See Bundle offers
    // </button>

<Link to="backupSection" spy={true} offset={-100} smooth={true} duration={500} >
<button className="bg-customOrangeRed text-white font-bold w-fit px-6 py-6 rounded-full">
  See Bundle offers
</button>
</Link>
  );
};

export default Button;