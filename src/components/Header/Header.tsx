"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "@/assets/logo/logo.svg";
import Link from "next/link";

import { FaBars, FaAngleDown } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isDropDown, setIsDropDown] = useState(false);
  const handleMenu = () => setIsDropDown((prev) => !prev);
  const toggleMenu = () => setToggle((prev) => !prev);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    /* const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      setWindowWidth(newWindowWidth);

      if (newWindowWidth > 1024 && toggle) {
        setToggle(false);
      }
    }; */

    window.addEventListener("scroll", handleScroll);
    /* window.addEventListener("resize", handleResize); */
    return () => {
      window.removeEventListener("scroll", handleScroll);
      /* window.removeEventListener("resize", handleResize); */
    };
  }, []);

  return (
    <header
      className={`transition-all ease-in delay-200 ${
        scrolling ? "bg-violet-700/70 backdrop-blur-sm" : "bg-transparent"
      } flex w-full h-16 justify-between items-center px-8 md:px-20 py-2 z-20 sticky top-0`}
    >
      <Image alt="logo-img" src={Logo} height={40} width={40} />
      {/* Header Navs */}
      <nav>
        {/*nav - menu */}
        <ul
          className={`${
            !toggle
              ? "hidden items-center justify-around text-purple-100 font-bold text-xl w-50 lg:gap-16 lg:flex"
              : "flex flex-col items-center justify-around text-center fixed top-0 left-0 bg-violet-100 font-bold rounded-md w-full h-screen text-3xl text-gray-600 gap-5 py-10 px-10 z-20 shadow-lg animate__animated animate__fadeInRight animate__faster"
          } `}
        >
          <li
            className="block lg:hidden text-4xl self-start text-violet-600 hover:text-violet-400 transition-all ease-out delay-150"
            title="Cerrar menu"
            onClick={toggleMenu}
          >
            <AiOutlineClose />
          </li>

          <li>
            <Link href="/" className="hover:text-pink-700">
              Inicio
            </Link>
          </li>

          {/* Dropdown - Cursos */}
          <li
            className="cursor-pointer relative align-middle self-center py-2"
            onMouseEnter={handleMenu}
            onMouseLeave={handleMenu}
          >
            {/* text - cursos */}
            <span className="hover:text-pink-700 flex gap-1 items-center py-0 text-center">
              <Link href="/courses">Cursos</Link>
              <FaAngleDown />
            </span>

            {/* Dropdown - menu */}
            {isDropDown && (
              <ul
                className={`${
                  !toggle
                    ? "absolute top-full -left-4 z-30 bg-violet-100 w-[400px] px-8 py-6 rounded-sm shadow-lg flex-col gap-2 mt-0 text-purple-600"
                    : "mt-2 items-center flex flex-col gap-2 py-4 w-full"
                }`}
              >
                <li className="hover:text-pink-700">
                  <Link href="/courses/car-initial">
                    Practicas de Auto - Inicial
                  </Link>
                </li>
                <li className="hover:text-pink-700">
                  <Link href="/courses/car-medium">
                    Practicas de Auto - Intermedio{" "}
                  </Link>
                </li>
                <li className="hover:text-pink-700">
                  <Link href="/courses/exam">Examen de Manejo</Link>
                </li>
                <li className="hover:text-pink-700">
                  <Link href="/courses/content">Contenido teórico</Link>
                </li>
              </ul>
            )}
            
          </li>
          <li>
            <Link href="/appoint" className="hover:text-pink-700">
              Reservar
            </Link>
          </li>
          <li>
            <Link href="/payments" className="hover:text-pink-700">
              Pagos
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="hover:text-pink-700">
              Galería
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-pink-700">
              Contacto
            </Link>
          </li>
        </ul>

        <button className="lg:hidden" onClick={toggleMenu}>
          <FaBars className="text-purple-100" size={26} />
        </button>
      </nav>
    </header>
  );
};

/* 





*/
