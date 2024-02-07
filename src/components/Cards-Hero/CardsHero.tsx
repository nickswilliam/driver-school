import {FaHandsHelping, FaPhone, FaCarSide } from 'react-icons/fa'

export default function CardsHero() {
  return (
    <section className="z-10 -mt-36 max-w-5xl w-full flex items-center justify-center gap-4 py-10">
      <div className="bg-violet-100 shadow-xl py-2 px-4 h-40 w-1/3 flex flex-col items-center justify-center gap-2 hover:bg-pink-400 hover:text-violet-100 cursor-pointer transition-all delay-150">
        <FaHandsHelping className='text-violet-600 text-5xl'/>
        <span className='text-center'>Acompañamiento en cada clase, desde inicial a avanzado.</span>
      </div>

      <div className="bg-violet-100 shadow-xl py-2 px-4 h-40 w-1/3 flex flex-col items-center justify-center gap-2 hover:bg-pink-400 hover:text-violet-100 cursor-pointer transition-all delay-150">
        <FaPhone className='text-violet-600 text-5xl'/>
        <span className='text-center'>Contacto teléfonico en franja horaria extendida.</span>
      </div>

      <div className="bg-violet-100 shadow-xl py-2 px-4 h-40 w-1/3 flex flex-col items-center justify-center gap-2 hover:bg-pink-400 hover:text-violet-100 cursor-pointer transition-all delay-150">
        <FaCarSide className='text-violet-600 text-5xl'/>
        <span className='text-center'>Te ayudamos a sacar tu registro de conducir desde 0.</span>
      </div>
    </section>
  )
}
