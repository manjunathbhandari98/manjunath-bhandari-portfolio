"use client";

import { Github, Linkedin, Mail, Sun } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";

const Navbar = () => {
  const navItems = [
    { name: "About", to: "#about" },
    { name: "Experience", to: "#experience" },
    { name: "Skills", to: "#skills" },
    { name: "Projects", to: "#projects" },
    { name: "Contact", to: "#contact" },
  ];

  const buttons = [
    { link: "", icon: <Mail size={20} /> },
    { link: "", icon: <Github size={20} /> },
    { link: "", icon: <Linkedin size={20} /> },
  ];

  return (
    // ✅ Add relative on wrapper to contain background and z-index
    <header className="relative z-10 w-full">
      {/* ✅ Gradient background stays behind content */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-indigo-900/30 blur-3xl opacity-30 pointer-events-none z-0" />

      {/* ✅ Navbar content */}
      <div className="relative z-10 flex justify-between items-center max-w-7xl mx-auto sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="logo">
          <Logo />
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex gap-8 font-semibold uppercase text-[17px] ">
          {navItems.map((item, index) => (
            <a key={index} href={item.to} className="hover:text-yellow-500 transition">
              {item.name}
            </a>
          ))}
        </nav>

        {/* Social + Theme toggle */}
        <div className="flex gap-6 items-center">
          <div className="buttons flex gap-7">
            {buttons.map((btn, index) => (
              <Link
                key={index}
                href={btn.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-400 transition-colors duration-200"
              >
                {btn.icon}
              </Link>
            ))}
          </div>
          <button className="theme-btn rounded-lg cursor-pointer bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-gray-100 p-1.5">
            <Sun size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
