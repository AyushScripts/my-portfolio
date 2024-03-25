import React from "react";
import SocialLinks from "./SocialLinks";
import Link from "next/link";

const ContactMe = () => {
  return (
<div className="flex justify-center mt-40">
  <div className="w-full md:w-[80%] lg:w-[60%] border-2 border-purple-500 rounded-2xl inline-block py-6 px-10">
    <div className="flex flex-col gap-5 text-center my-8">
      <h1 className="text-[#333333] dark:text-white text-3xl lg:text-5xl font-serif">
        Let's connect!
      </h1>
      <p className="text-[#817d7d] dark:text-[#adb7be] text-lg md:text-xl">
        I am open to exciting opportunities. So if you have one, I am just a
        message away!
      </p>
      <a
        className="text-base md:text-lg mx-auto text-white dark:text-[black] font-semibold bg-purple-400/90 hover:bg-purple-400 transition-all ease-in px-4 py-3 mt-4 rounded-lg"
        href="mailto:ayushtheking117@gmail.com"
      >
        Shoot Me a Message!
      </a>

      <div className="mx-auto mt-4">
        <SocialLinks></SocialLinks>
      </div>
    </div>
  </div>
</div>

  );
};

export default ContactMe;
