import { Modal, ModalContent, ModalHeader, ModalBody, Button } from '@heroui/react';
import { useRouter } from 'next/navigation';

const ExitModal = ({ isOpen, onOpenChange }) => {
  const router = useRouter();

  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
      <ModalContent>
        <ModalHeader className="px-8 pt-6 pb-2">Leave assessment?</ModalHeader>
        <ModalBody className="px-8 pb-6 opacity-80">
          <p className="text-base">
            Your current progress will be lost if you exit now. Are you sure you want to leave?
          </p>
          <div className="mt-2 flex justify-start gap-3">
            <Button variant="solid" color="success" onPress={onOpenChange} className="text-base" radius="full">
              Stay
            </Button>
            <Button
              variant="bordered"
              color="danger"
              onPress={() => router.push('/ambassadors')}
              className="text-base"
              radius="full"
            >
              Exit anyway
            </Button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ExitModal;
