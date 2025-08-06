import React from 'react';
import { useWindowSize } from 'react-use';
import { motion } from 'motion/react';
import ImmortalCard from '@/components/core/shared/ImmortalCard';
import { Button, useDisclosure } from '@heroui/react';
import JoinWaitlistModal from '@/components/core/shared/JoinWaitlistModal';

const Immortal = () => {
  const { width } = useWindowSize();
  const { isOpen: isWaitListOpen, onOpen: onWaitListOpen, onClose: onWaitListClose } = useDisclosure();

  let textVariant = {};
  if (width < 768) {
    textVariant = {
      hidden: { opacity: 0, x: -20 },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          type: 'spring',
          stiffness: 50,
          duration: 1.5,
        },
      },
    };
  }

  return (
    <div className="relative z-10 w-full overflow-hidden px-4 md:px-0">
      <div className="grid-cols-[3fr_2fr] items-center gap-8 space-y-8 md:grid md:space-y-0">
        <ImmortalCard />
        <div>
          <motion.h1
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            className="max-w-xl text-5xl font-semibold tracking-tighter md:text-7xl"
          >
            Wherever hidden your data is, we will find it
          </motion.h1>
          <p className="mt-6 max-w-lg text-lg tracking-tight">
            With Immortal AI, we are building the rails to aggregate Africa's data, wherever they are.
          </p>
          <Button
            size="lg"
            color="primary"
            className="mt-8 bg-blue-600 px-8 text-base text-white hover:bg-blue-700"
            radius="full"
            onPress={onWaitListOpen}
          >
            Join waitlist
          </Button>
        </div>
      </div>

      <JoinWaitlistModal isOpen={isWaitListOpen} onClose={onWaitListClose} />
    </div>
  );
};

export default Immortal;
