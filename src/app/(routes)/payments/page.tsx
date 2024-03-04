import TitleHeaderOfPage from "@/components/TitleHeaderOfPage/TitleHeaderOfPage";
import PaymentsContainer from "@/pages/Appoint/Appoint";

const Payments = () => {
  return (
    <PaymentsContainer>
      <section className="w-full flex flex-col">
        <TitleHeaderOfPage bgColor="bg-indigo-950" title="Pagos en Linea" />
      </section>
    </PaymentsContainer>
  );
};
export default Payments;
