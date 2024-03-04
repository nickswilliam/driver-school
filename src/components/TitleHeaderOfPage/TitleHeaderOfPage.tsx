import { TitleHeaderPageType } from "@/types/types";

const TitleHeaderOfPage = ({ title, bgColor }: TitleHeaderPageType) => {
  return (
    <div
      className={`flex w-full px-10 py-16 items-center justify-start ${bgColor}`}
    >
      <h2 className="text-violet-100 text-4xl font-bold animate__animated animate__fadeInLeft">
        {title}
      </h2>
    </div>
  );
};
export default TitleHeaderOfPage;
