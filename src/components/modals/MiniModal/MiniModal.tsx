/* eslint-disable react-hooks/exhaustive-deps */
import { useToast } from "@chakra-ui/react";
import { useModalContext } from "@/context/ModalContext";
import { useEffect } from "react";

export const MiniModal = () => {
  const { isModal, setIsModal } = useModalContext();
  const toast = useToast();

  useEffect(() => {
      toast({
        title: "Consulta realizada",
        description: "Hemos recibido tu consulta.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      setTimeout(()=>{
        setIsModal(false)
      }, 2900)
    
    
    console.log(isModal, 'mini modal');
  }, []);
  
  
  return <></>;
};
