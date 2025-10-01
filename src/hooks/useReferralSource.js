import { useEffect, useState } from 'react';

/**
 * Hook to capture and track referral source from URL parameters
 * Checks for common tracking parameters: from, source, utm_source, ref
 */
export const useReferralSource = () => {
  const [referralSource, setReferralSource] = useState(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);

      // Check for various common referral parameters in order of preference
      const source =
        urlParams.get('from') || urlParams.get('source') || urlParams.get('utm_source') || urlParams.get('ref') || null;

      setReferralSource(source);
    }
  }, []);

  return referralSource;
};
