import { Header } from "@/components/Header/Header";

export default function Home() {
  return (
    <>
     <Header/>
     <main>
      <section className="w-full flex flex-col bg-hero-img">
        <h1 className="text-5xl font-bold text-yellow-500">Te enseñamos a manejar a Domicilio</h1>
      </section>
     </main>
    </>
  )
}
