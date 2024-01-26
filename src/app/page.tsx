/* eslint-disable @next/next/no-img-element */
"use client";
import { FaCaretLeft, FaCaretRight } from "react-icons/fa";
import { heroList } from "@/data/hero-list-courses";

export default function Home() {
  return (
    <>
      <main>
        <section className="w-full flex flex-col h-screen max-h-fit py-5">
          <div className="flex flex-col w-full py-5 px-10 sm:px-20 items-center sm:items-start justify-between h-3/4 z-10 max-h-fit gap-6">
            <h1 className="sm:mt-4 text-4xl sm:text-5xl font-semibold text-violet-100 border-b border-violet-300 pb-2 w-full lg:w-1/2 text-left sm:text-left md:text-left animate__animated animate__fadeInRight">
              Te enseñamos a manejar a{" "}
              <span className="text-pink-500">Domicilio</span>
            </h1>

            <ul className="w-full flex flex-col gap-6 text-violet-100 font-normal text-xl items:center sm:items-start">
              {heroList.map((item) => (
                <li key={item.id} className="flex gap-2 justify-between sm:items-center animate__animated animate__bounceInUp animate__delay_1s">
                  <FaCaretRight

                    className="text-pink-500"
                    size={26}
                  />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>

            <button className="border-2 rounded-sm py-3 px-12 text-xl border-pink-500 text-pink-600 font-bold bg-violet-100/50 hover:bg-pink-500/40 hover:text-pink-100 animate__animated animate__fadeInUp animate__delay_2s">
              Contactanos
            </button>
          </div>
          <img
            src="https://res.cloudinary.com/dymyb2f2i/image/upload/v1706224831/driving-school/hero-img-03_lfbyqp.jpg"
            alt="bg-img"
            className="w-full bg-cover bg-bottom sm:bg-center h-screen absolute top-0 left-0 object-cover z-0"
          />
        </section>

        <section>
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            dolore!
          </h2>

          <button>falopa</button>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime,
            fuga eos ad assumenda eaque incidunt ducimus voluptate delectus quia
            provident minima nihil temporibus itaque earum mollitia. Cum rem
            delectus quae.
          </p>
        </section>
      </main>
    </>
  );
}
