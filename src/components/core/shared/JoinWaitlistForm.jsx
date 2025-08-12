import { useState } from 'react';
import WaitlistEmailRegistrationForm from './WaitlistEmailRegistrationForm';
import WaitlistWhatsAppOptInForm from './WaitlistWhatsAppOptInForm';
import WaitlistRegistrationSuccessView from './WaitlistRegistrationSuccessView';

const JoinWaitlistForm = ({ onDone }) => {
  const [currentView, setCurrentView] = useState('email-registration');
  const [subscriberId, setSubscriberId] = useState(null);

  const handleEmailRegistrationSuccess = (registrationData) => {
    setSubscriberId(registrationData.subscriberId);
    setCurrentView('whatsapp-opt-in');
  };

  const handleWhatsAppOptInSuccess = () => {
    setCurrentView('registration-complete');
  };

  const handleSkipWhatsAppOptIn = () => {
    setCurrentView('registration-complete');
  };

  return (
    <div>
      {currentView === 'email-registration' && (
        <WaitlistEmailRegistrationForm onRegistrationSuccess={handleEmailRegistrationSuccess} />
      )}
      {currentView === 'whatsapp-opt-in' && (
        <WaitlistWhatsAppOptInForm
          subscriberId={subscriberId}
          onPhoneNumberAdded={handleWhatsAppOptInSuccess}
          onSkipWhatsApp={handleSkipWhatsAppOptIn}
        />
      )}
      {currentView === 'registration-complete' && <WaitlistRegistrationSuccessView onCloseModal={onDone} />}
    </div>
  );
};

export default JoinWaitlistForm;
