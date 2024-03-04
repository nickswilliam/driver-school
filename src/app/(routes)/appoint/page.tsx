"use client"
import AppointForm from "@/components/AppointForm/AppointForm";
import TitleHeaderOfPage from "@/components/TitleHeaderOfPage/TitleHeaderOfPage";
import AppointContainer from "@/pages/Appoint/Appoint";

const Appoint = () => {
  return (
    <AppointContainer>
      <section className="w-full flex flex-col items-center bg-violet-100 pb-16 gap-10">
        <TitleHeaderOfPage bgColor="bg-pink-700" title="Reservas Online" />

        <h3 className="text-3xl text-center text-pink-700">
          Completá tus datos y una instructora se contactará con vos
        </h3>

        <AppointForm />
      </section>
    </AppointContainer>
  );
};
export default Appoint;
