import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo/logo.png";
import WALogo from "@/assets/logo/whatsapp-logo.png";

export const Header = () => {
  return (
    <header className="flex flex-col w-full">
      <div className="bg-slate-900/90 flex items-center justify-end px-10 py-2 gap-4 h-12">
        <p className="text-white text-[18px]">
          ¿Dudas o consultas? Contactanos:{" "}
          <a href="tel:+541122334455" className="text-yellow-400">1122334455</a>
        </p>
        <a href="https://api.whatsapp.com/send/?phone=541122334455" className="flex gap-2 text-white bg-green-600 px-6 py-1 rounded-md">
          <Image alt="wa-logo" src={WALogo} width={22} height={20} />
          Whatsappeanos
        </a>
      </div>

      <nav className="flex w-full bg-transparent justify-between items-center px-6 py-4 z-20">
        <Image alt="logo-img" src={Logo} height={60} width={60} />
        <ul className="flex items-center justify-around text-white w-50 gap-8">
            <li><a href="#" className="hover:text-yellow-400">Inicio</a></li>
            <li className="cursor-pointer relative">Cursos
                <ul className="absolute top-14 left-0 right-0 bg-slate-800 w-[300px] px-6 py-2 rounded-md shadow-sm flex-col gap-2 hidden">
                    <li className="hover:text-yellow-400">Practicas de Auto - Inicial</li>
                    <li className="hover:text-yellow-400">Practicas de Auto - Intermedio </li>
                    <li className="hover:text-yellow-400">Examen de Manejo</li>
                    <li className="hover:text-yellow-400">Contenido teórico</li>
                </ul>
            </li>
            <li><a href="#" className="hover:text-yellow-400">Reservar</a></li>
            <li><a href="#" className="hover:text-yellow-400">Pagos</a></li>
            <li><a href="#" className="hover:text-yellow-400">Galería</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};
