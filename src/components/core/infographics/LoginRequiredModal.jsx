import Modal from '@/components/global/Modal.jsx';
import Link from 'next/link';
import PropTypes from 'prop-types';

const LoginRequiredAlert = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="sm">
      <p className="mt-1 text-center">Join Statisense to continue</p>
      <div className="mt-5 flex flex-col gap-3 items-center space-x-2 justify-center">
        <Link
          href={'https://app.statisense.co/login/'}
          target="_blank"
          className="text-center w-full bg-primary-800 hover:bg-primary-700 text-white px-4 py-3 rounded-full transition duration-100 "
        >
          Login
        </Link>
        <Link
          href={'https://app.statisense.co/register/'}
          target="_blank"
          className="text-center w-full border border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-4 py-3 rounded-full transition duration-100 "
        >
          Sign Up
        </Link>
      </div>
    </Modal>
  );
};

LoginRequiredAlert.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default LoginRequiredAlert;

