"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full h-20 shadow-xl z-[100]">
      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <h1 className="text-2xl font-bold">David Hill-Gray</h1>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">Home</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/about">About</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/experience">Experience</Link>
            </li>
            {/* <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/contact">Contact</Link>
            </li> */}
          </ul>
          {/* Mobile Menu Icon */}
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden cursor-pointer pl-24"
          >
            {/* Hamburger icon or close icon based on isOpen state */}
            {isOpen ? "X" : "☰"}
          </div>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      <div
        className={
          isOpen
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70"
            : ""
        }
      >
        <div
          className={
            isOpen
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          {/* Mobile Menu Links */}
          <ul className="py-4 flex flex-col">
            <li className="py-4 text-sm">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="py-4 text-sm">
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="py-4 text-sm">
              <Link href="/experience" onClick={() => setIsOpen(false)}>
                Experience
              </Link>
            </li>
            {/* <li className="py-4 text-sm">
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
