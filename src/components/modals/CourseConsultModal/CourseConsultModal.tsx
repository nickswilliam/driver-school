import { ConsultForm } from "@/components/ConsultForm/ConsultForm";
import { CoursesPrices } from "@/data/car-courses-prices"
import { Dispatch, SetStateAction } from "react";
import {AiOutlineClose} from 'react-icons/ai'


export interface CourseConsultTypes {
    id: number;
    title: string;
    price: number;
    setIsModal: Dispatch<SetStateAction<boolean>>;
}

export const CourseConsultModal = ({id, title, price, setIsModal}: CourseConsultTypes) => {
    return (
    <div className="flex justify-center items-center fixed top-0 left-0 h-screen w-full bg-slate-900/80 text-white z-30 px-5">
        <div className="top-12 bg-violet-50/90 w-full max-w-[650px] rounded-md backdrop-blur-sm flex flex-wrap flex-col items-center py-10 px-8 gap-4">
            <button className="self-end" onClick={()=> setIsModal(false)} title="Cerrar">
                <AiOutlineClose className="text-4xl text-violet-700 hover:text-violet-500 duration-200"/>
            </button>

            <h2 className="text-3xl text-violet-500 font-semibold pb-2 px-4 border-b border-violet-500 -mt-6 mb-8">Completá tus datos</h2>
            <ConsultForm id={id}/>

        </div>
    </div>
  )
}
