/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

export default function About() {
  const [isDrop, setIsDrop] = useState(false);

  const handleDropdown = () => setIsDrop(!isDrop);

  return (
    <section className="mt-10 flex w-full max-w-7xl py-16 px-10 items-center gap-12">
      <img
        src="https://res.cloudinary.com/dymyb2f2i/image/upload/v1707275529/driving-school/jnjbyql0zqn6ixalsopo.png"
        alt="about-img"
      />

      <div className="self-start flex flex-col gap-4">
        <h2 className="text-3xl ">
          Bienvenida a Autoescuela{" "}
          <span className="text-pink-600">Motivando Conductoras</span>. Un
          espacio seguro para mujeres hecho X mujeres que desean aprender a
          manejar y obtener su licencia de conducir por primera vez
        </h2>

        <h3 className="text-xl text-pink-600">Disponibilidad Zonal:</h3>

        {/* Contenedor de acordions */}
        <div className="flex flex-col gap-4">

          {/* acordion1 */}
          <div className="flex flex-col gap-4 bg-violet-100 py-4 px-8">
            
              <button onClick={handleDropdown} className="w-full flex items-center gap-4 text-xl">
                {isDrop ? <FaMinus size={12}/> : <FaPlus size={12}/>}
                Capital Federal
              </button>
              
            

            {isDrop && (
              <ul className="text-md list-disc ml-12 text-gray-600">
                <li>Balvanera</li>
                <li>Liniers</li>
                <li>Villa Luro</li>
                <li>Flores</li>
              </ul>
            )}
          </div>

          {/* acordion 2 */}
          <div className="flex flex-col gap-4 bg-violet-100 py-4 px-8">
            
              <button onClick={handleDropdown} className="w-full flex items-center gap-4 text-xl">
                {isDrop ? <FaMinus size={12}/> : <FaPlus size={12}/>}
                Zona Oeste
              </button>
              
            

            {isDrop && (
              <ul className="text-md list-disc ml-12 text-gray-600">
                <li>Merlo</li>
                <li>Moron</li>
                <li>Hurlingham Luro</li>
                <li>Ciudadela</li>
                <li>Ramos Mejia</li>
              </ul>
            )}
          </div>

          {/* acordion 3 */}
          <div className="flex flex-col gap-4 bg-violet-100 py-4 px-8">
            
              <button onClick={handleDropdown} className="w-full flex items-center gap-4 text-xl">
                {isDrop ? <FaMinus size={12}/> : <FaPlus size={12}/>}
                Zona Norte
              </button>
              
            

            {isDrop && (
              <ul className="text-md list-disc ml-12 text-gray-600">
                <li>San Isidro</li>
                <li>Vicente Lopez</li>
                <li>El Palomar</li>
                <li>Tigre</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
