/* eslint-disable @next/next/no-img-element */
import { FaCalendar, FaClock } from 'react-icons/fa'

const CarInitial = () => {
  return (
    <section className="w-full flex flex-col gap-4 bg-violet-100">
      {/* top title */}
      <div className="bg-violet-300/70 px-10 py-6 flex flex-col gap">
        <h2 className="text-3xl sm:text-4xl font-bold uppercase text-pink-600">
          Practicas de Auto:
        </h2>
        <h3 className="text-xl text-violet-500 font-semibold">Nivel - Inicial</h3>
      </div>

      {/* top main - content */}
      <div className="self-center max-w-7xl flex flex-col items-center gap-8 py-5 px-10">
        {/* Top img & text */}
        <div className="-mt-16 flex items-center gap-6 flex-col lg:flex-row py-10">
          <img
            src="https://res.cloudinary.com/dymyb2f2i/image/upload/v1708290265/driving-school/zoi7ilcsk5wgmnlqnin9.png"
            alt="car-course-img"
            className="w-[500px] object-fill object-center"
          />
          <p className="text-xl text-violet-700">
            Brindamos cursos de manejo a domicilio, dentro de de Capital Federal
            y Gran Buenos Aires. Los cursos se brindan en tránsito real o pista,
            dependiendo de la zona en dónde la alumna decida tomar la clase. Las
            clases duran 1hr y el servicio es puerta a puerta.
          </p>
        </div>

        {/* sub title - and paragraph */}
        <h2 className="text-4xl font-semibold text-pink-600 text-center">
          ¿Que aprenderas en este <span className="text-blue-700">Nivel?</span>
        </h2>
        <p className="text-xl text-center">
          Aprenderas a dar tus primeros pasos en la conducción. Desde como
          soltar correctamente el embrague del vehiculo, caja de cambios, uso
          del freno de mano, regulación de aceleración, etc. Comprenderas que
          cosas son esenciales desde 0 para una correcta conducción y dar ese
          salto a convertirte en conductora.
        </p>

        {/* second sub title */}
        <div className="mt-10 flex flex-col gap-6">
          <h2 className="text-4xl font-semibold text-violet-500 text-center">
            ¿Cual es la disponibilidad{" "}
            <span className="text-pink-600">horaria?</span>
          </h2>

          {/* cards hour - container */}
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {/* card 01 */}
            <div className='flex flex-col items-center justify-center gap-3 max-w-60 rounded-md border px-3 py-2 border-pink-400 h-52'>
              <FaCalendar className='text-3xl text-pink-600'/>
              <h3 className='text-2xl font-semibold text-pink-600'>Todo el Año</h3>
              <span className='text-md text-center text-gray-500'>Todos los días de la semana, inclusive sábados, domingos y feriados.</span>
            </div>

            {/* card 02 */}
            <div className='flex flex-col items-center justify-center gap-3 max-w-60 rounded-md border px-3 py-2 border-pink-400 h-52'>
              <FaClock className='text-3xl text-pink-600'/>
              <h3 className='text-2xl font-semibold text-pink-600'>Horarios</h3>
              <span className='text-md text-center text-gray-500'>Todos los días desde las 9:00 hasta las 19:00hs.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CarInitial;
