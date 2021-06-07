import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay maxW="900px" maxH="600px" h="100vh" />
      <ModalContent p={0}>
        <ModalBody>
          <Image src={imgUrl} w="100%" h="100%" />
        </ModalBody>
        <ModalFooter bg="pGray.900" display="flex" justifyContent="flex-start">
          <Link href={imgUrl}>Abrir</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
