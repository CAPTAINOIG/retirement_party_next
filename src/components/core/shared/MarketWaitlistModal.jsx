import CustomModal from '@/components/global/CustomModal';
import { Card } from '@heroui/react';
import { motion } from 'motion/react';
import WaitlistForm from './WaitlistForm';
import CountryFlag from '@/components/global/CountryFlag';

const MarketWaitlistModal = ({ isOpen, onClose }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <CustomModal isOpen={isOpen} onClose={handleClose} width={1200}>
      <Card className="grid items-center gap-10 rounded-3xl px-10 py-12 lg:grid-cols-[2fr_1.2fr] lg:px-28 lg:py-20">
        <div className="order-1 lg:order-none">
          <h1 className="bg-linear-to-r from-green-600 to-blue-800 bg-clip-text text-[3.4rem] !leading-none font-bold tracking-tight text-transparent md:text-[6rem]">
            Market Intelligence
          </h1>
          <p className="mt-4 text-lg opacity-70 md:max-w-[70%] md:text-xl">
            Join our waitlist to be among the first to experience comprehensive market intelligence that drives
            strategic decisions.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 90 }}
            viewport={{ amount: 'some', margin: '10%' }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            {[
              { code: 'NG', name: 'Nigeria' },
              { code: 'EG', name: 'Egypt' },
              { code: 'ZA', name: 'South Africa' },
            ].map((country) => {
              return (
                <div
                  key={country.code}
                  className="dark:bg-default-100 dark:hover:bg-default-200 flex cursor-pointer items-center space-x-3 rounded-full bg-slate-200 px-3 py-2 pr-6 transition-all duration-300 hover:bg-slate-300"
                >
                  <CountryFlag code={country.code} className="h-12 w-12" />
                  <p>{country.name}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
        <div className="py-6">
          <WaitlistForm onDone={onClose} />
        </div>
      </Card>
    </CustomModal>
  );
};

export default MarketWaitlistModal;
