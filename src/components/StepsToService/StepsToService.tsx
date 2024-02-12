const StepsToService = () => {
  return (
    <section className="w-full flex flex-col items-center gap-12 py-10">
      <div className="bg-violet-200 w-full py-6 px-8 flex flex-col gap-4 justify-center">
        <h2 className="text-center text-4xl sm:text-5xl text-gray-700">
          ¿Como obtengo acceso a las{" "}
          <span className="text-pink-600">clases de manejo?</span>
        </h2>
        <p className="text-center text-gray-500">
          Motivando conductoras te ofrece la posibilidad de contratar las clases
          con servicio puerta a puerta, siguiendo los siguientes pasos.
        </p>
      </div>

      {/* cards - container */}
      <div className="w-full max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 ">

        {/* card 01 */}
        <div className="flex flex-col py-4 relative px-6 rounded-md border-2 border-dotted border-violet-300 bg-violet-100 gap-4 shadow-md
        ">
            <h2 className="text-5xl font-bold text-pink-500 self-end">1</h2>
            <h3 className="text-2xl text-gray-700">Contactate con nosotros.</h3>
            <p className="text-gray-500">Comunicate con nosotros por E-mail, teléfono o <a href="https://api.whatsapp.com/send/?phone=541122334455" className="bg-green-600 text-violet-100 py-1 px-2 rounded-md">Whatsapp</a>, para poder coordinar el tipo de curso y disponibilidad horaria.</p>
        </div>

        {/* card 02 */}
        <div className="flex flex-col py-4 px-6 rounded-md border-2 border-violet-300 border-dotted bg-violet-100 gap-4 shadow-md">
            <h2 className="text-5xl font-bold text-violet-300 self-end">2</h2>
            <h3 className="text-2xl text-gray-700">Pasamos a buscarte a tu domicilio.</h3>
            <p className="text-gray-500">La instructora seleccionada te visitará a tu domicilio en el horario y día acordado para comenzar la clase de manejo.</p>
        </div>

        {/* card 03 */}
        <div className="flex flex-col py-4 px-6 rounded-md border-2 border-violet-300 border-dotted bg-violet-100 gap-4 shadow-lg justify-items-center lg:justify-items-auto">
            <h2 className="text-5xl font-bold text-violet-300 self-end">3</h2>
            <h3 className="text-2xl text-gray-700">Elegí cuando será tu siguiente clase</h3>
            <p className="text-gray-500">Luego de completar tu primer clase, coordiná con tu instructora cuando será tu próxima clase.</p>
        </div>
      </div>
    </section>
  );
};
export default StepsToService;
