import { FaDownload } from "react-icons/fa";

const Content = () => {
  return (
    <section className="w-full h-screen flex flex-col gap-10 bg-violet-100 pb-12">
      {/* top title */}
      <div className="bg-pink-600/70 px-5 sm:px-10 py-2 flex flex-col gap">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold uppercase text-violet-100 animate__animated animate__fadeInLeftBig">
          Contenido teorico
        </h2>
        <h3 className="text-xl text-violet-200 font-semibold animate__animated animate__fadeInLeft animation__delay-1s">
          Apuntes teóricos para rendir el examen.
        </h3>
      </div>
      

      {/* MAIN TITLE & ICON */}
      <div className="self-center flex flex-col sm:flex-row items-center justify-center gap-3 rounded-lg shadow-md px-8 py-3 bg-pink-500 max-w-[700px] mx-5 sm:mx-10">
        <FaDownload className="text-2xl sm:text-3xl text-violet-100"/>
        <h2 className="text-center text-xl sm:text-2xl md:text-3xl font-semibold text-violet-100 uppercase">Descarga nuestro material</h2>
      </div>
    </section>
  );
};
export default Content;
