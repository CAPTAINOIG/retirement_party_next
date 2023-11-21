import Modal from '@/components/global/Modal.jsx';
import Link from 'next/link';
import PropTypes from 'prop-types';

const APP_URL = process.env.NEXT_PUBLIC_APP_URL;

const LoginRequiredAlert = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <div className="flex flex-col items-center py-8">
        <h1 className="font-semibold text-xl">You're not logged in</h1>
        <p className="mt-2 text-center max-w-[300px]">
          Click the button below to login or create a new account to continue
        </p>
        <div className="mt-10 flex flex-col gap-3 items-center space-x-2 justify-center">
          <Link
            href={`${APP_URL}/login/`}
            target="_blank"
            className="text-center w-full bg-primary-800 hover:bg-primary-700 text-white px-4 py-3 rounded-full transition duration-100 "
          >
            Login
          </Link>
          <Link
            href={`${APP_URL}/register/`}
            target="_blank"
            className="text-center w-full border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-4 py-3 rounded-full transition duration-100 "
          >
            Create new account
          </Link>
        </div>
      </div>
    </Modal>
  );
};

LoginRequiredAlert.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginRequiredAlert;
