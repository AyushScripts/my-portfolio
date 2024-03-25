import React from "react";
import { TiHeart } from "react-icons/ti";
import { CiCoffeeCup } from "react-icons/ci";

const Footer = () => {
  return (
    <div className="mt-20 mb-5 text-center">
      <h3 className="text-[#131313]/70 dark:text-white">
        Made with{" "}
        <span>
          <a
            className="font-medium dark:font-normal text-purple-700 dark:text-purple-500"
            href="https://react.dev"
          >
            React 
          </a>
        </span>
        {" "}& {" "}
        <span>
          <a
            className="font-medium dark:font-normal text-purple-700 dark:text-purple-500"
            href="https://nextjs.org"
          >
            Next
          </a>
        </span>        
      </h3>
      <p className=" text-[#131313]/50 dark:text-white/50 text-xs md:text-sm">
        Handcrafted by Me <a href="https://en.wikipedia.org/wiki/Coffee"><CiCoffeeCup className="inline-block text-lg text-red-400 dark:text-white" /></a> ©{new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
