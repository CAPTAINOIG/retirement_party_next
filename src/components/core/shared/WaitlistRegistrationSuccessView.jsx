import { Button } from '@heroui/react';
import { TbCheck } from 'react-icons/tb';

const WaitlistRegistrationSuccessView = ({ onCloseModal }) => {
  return (
    <div className="flex flex-col items-center py-10 text-center">
      <TbCheck size="100" className="text-green-500" />
      <h3 className="mt-4 text-xl font-semibold">Welcome to the waitlist!</h3>
      <p className="mt-2 text-center text-lg opacity-75">
        You have been successfully added to the Immortal AI waitlist. We'll notify you when we launch!
      </p>
      {!!onCloseModal && (
        <Button
          type="button"
          size="lg"
          className="mt-8 px-6"
          radius="full"
          variant="solid"
          color="primary"
          onPress={onCloseModal}
        >
          Close
        </Button>
      )}
    </div>
  );
};

export default WaitlistRegistrationSuccessView;
