import { useToast, Button } from '@chakra-ui/react'
import { useModalContext } from '@/context/ModalContext';

export const MiniModal = () => {
    const {isModal, setIsModal} = useModalContext();
    const toast = useToast();
  return <Button
  onClick={() =>
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 3000,
      isClosable: true,
    })
  }
>
  Show Toast
</Button>
};
