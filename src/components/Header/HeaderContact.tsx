import Image from "next/image";
import WALogo from "@/assets/logo/whatsapp-logo.png";

const HeaderContact = () => {
  return (
    <header className="bg-blue-800/90 flex flex-col items-center justify-center md:flex-row md:h-12 md:justify-end px-10 py-2 gap-4 h-40 w-full z-40 relative">
    <p className="text-violet-100 text-[18px] text-center">
      ¿Dudas o consultas? Contactanos:
    </p>
    <a href="tel:+541122334455" className="text-orange-500 align-middle">
      1122334455
    </a>
    <a
      href="https://api.whatsapp.com/send/?phone=541122334455"
      className="flex gap-2 text-violet-100 bg-green-600 px-6 py-1 rounded-md"
    >
      <Image alt="wa-logo" src={WALogo} width={22} height={20} />
      Whatsappeanos
    </a>
  </header>

  )
}

export default HeaderContact