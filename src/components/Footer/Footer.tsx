import Image from "next/image";
import Logo from "@/assets/logo/logo.svg";
import { FaPhone, FaWhatsapp, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-800 w-full flex flex-col items-center">
      {/* container */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center p-8 sm:p-12 md:p-16 gap-10">
        {/* left icon container */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image src={Logo} width={60} height={60} alt="logo-footer" />
            <div className="flex flex-col justify-center">
              <h4 className="uppercase font-bold text-md text-pink-400">
                Motivando
              </h4>
              <h5 className="uppercase font-bold text-md text-violet-100">
                Conductoras
              </h5>
            </div>
          </div>

          <p className="text-violet-200">
            Motivando Conductoras es una de las primeras escuelas de conducción
            hecha X mujeres para mujeres.
          </p>
        </div>

        {/* links footer */}
        <div className="flex flex-col sm:items-center gap-4">
          <h4 className="text-lg text-pink-400 uppercase font-bold">
            Links Útiles
          </h4>
          <ul className="flex flex-col sm:flex-row justify-around items-start sm:items-center gap-4 text-violet-100 text-sm">
            <li>
              <a href="#">Reservas</a>
            </li>
            <li>
              <a href="#">Pagos con tarjeta</a>
            </li>
            <li>
              <a href="#">Términos y Condiciones</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4 md:justify-self-end">
          <h4 className="text-lg font-bold text-pink-400 uppercase">
            Contacto
          </h4>

          <div className="flex items-center gap-3">
            <FaPhone className="text-pink-400" />
            <h5 className="text-violet-100">
              <a href="tel:+541122334455">11-2233-4455</a>
            </h5>
          </div>

          <div className="flex items-center gap-3 bg-pink-400 px-2 py-1 rounded-sm">
            <FaWhatsapp className="text-violet-100" />
            <h5 className="text-violet-100">
              <a href="https://api.whatsapp.com/send/?phone=541122334455">
                1122334455
              </a>
            </h5>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <FaMailBulk className="text-pink-400" />
            <h5 className="text-violet-100">
              <a href="mailto:motivandoconductoras@gmail.com">
                motivandoconductoras@gmail.com
              </a>
            </h5>
          </div>
        </div>

        
      </div>

      <div className="w-full bg-gray-800 px-10 py-2 flex justify-center">
        <h6 className="text-violet-300 text-center">© Copyright Motivando Conductoras 2024 - Created by <a href="https://instagram.com/nickswilliam" className="text-pink-300" target="_blank">@nickswilliam</a></h6>
      </div>
    </footer>
  );
};
export default Footer;