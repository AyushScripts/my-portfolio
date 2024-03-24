"use client";

import HeroSection from "./components/HeroSection";
import { IoIosSunny } from "react-icons/io";
import { IoIosMoon } from "react-icons/io";
import React, { useState } from "react";
import Link from "next/link";
import Skills from "./components/Skills";
import ProjectSection from "./components/ProjectSection";
import ContactMe from "./components/ContactMe";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode && "dark"}>
      <main className="flex min-h-screen flex-col dark:bg-[#121212] ">
        {/* Navbar */}
        <nav className="sticky z-10 top-0 w-full dark:bg-[#121212] bg-white">
          <div className="flex flex-wrap items-center justify-between mx-auto p-8 lg:p-12">
            <Link
              href={"/"}
              className="font-serif text-2xl lg:text-4xl  font-semibold text-[#333333] dark:text-white "
            >
              ayush.
            </Link>
            <div className="toggleButton">
              <button className="text-3xl" onClick={toggleDarkMode}>
                {darkMode ? (
                  <IoIosSunny title="Light Mode" className="text-white" />
                ) : (
                  <IoIosMoon title="Dark Mode" />
                )}
              </button>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-12 py-4">
          <HeroSection />
        </div>

        <Skills />
        <div className="container mt-24 mx-auto px-12 py-4">
          <ProjectSection />
          <ContactMe />

          <footer className="mt-20 mb-5 text-center">

            <h3 className="text-[#131313]/70 dark:text-white">
              Made with{" "}
              <span>
                <a className="text-purple-700 dark:text-purple-500" href="https://react.dev">
                  React
                </a>
              </span>
            </h3>
            <p className=" text-[#131313]/50 dark:text-white/50 text-xs md:text-sm">
              Handcrafted by me ©{new Date().getFullYear()}{" "}
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
