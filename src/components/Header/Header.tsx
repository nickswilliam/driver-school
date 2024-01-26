"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "@/assets/logo/logo.png";

import { FaBars, FaAngleDown } from "react-icons/fa";


export const Header = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const handleMenu = () => setIsDropDown((prev) => !prev);

  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`transition-all ease-in delay-200 ${
        scrolling ? "bg-pink-700/60 backdrop-blur-sm" : "bg-transparent"
      } flex w-full h-18 justify-between items-center px-8 md:px-20 py-2 z-20 sticky top-0`}
    >
      <Image alt="logo-img" src={Logo} height={60} width={60} />
      {/* Header Navs */}
      <nav>
        <ul className="hidden items-center justify-around text-purple-100 font-bold text-xl w-50 lg:gap-16 lg:flex">
          <li>
            <a href="#" className="hover:text-pink-600">
              Inicio
            </a>
          </li>

          {/* Dropdown - Cursos */}
          <li
            className="cursor-pointer relative align-middle py-2"
            onMouseEnter={handleMenu}
            onMouseLeave={handleMenu}
          >
            {/* text - cursos */}
            <span className="hover:text-pink-600 flex gap-1 items-center py-0">
              Cursos <FaAngleDown />
            </span>

            {/* Dropdown - menu */}

            {isDropDown && (
              <ul className="absolute top-full -left-4 z-30 bg-violet-100 w-[400px] px-8 py-6 rounded-sm shadow-lg flex-col gap-2 mt-0 text-purple-600">
                <li className="hover:text-pink-600">
                  Practicas de Auto - Inicial
                </li>
                <li className="hover:text-pink-600">
                  Practicas de Auto - Intermedio{" "}
                </li>
                <li className="hover:text-pink-600">Examen de Manejo</li>
                <li className="hover:text-pink-600">Contenido teórico</li>
              </ul>
            )}
          </li>
          <li>
            <a href="#" className="hover:text-pink-600">
              Reservar
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              Pagos
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              Galería
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-500">
              Contacto
            </a>
          </li>
        </ul>

        <button className="lg:hidden">
          <FaBars className="text-purple-100" size={26} />
        </button>
      </nav>
    </header>
  );
};
