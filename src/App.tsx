import { useCallback, useEffect } from 'react';

import { Home } from 'routes/index';

import { sdkStyles } from 'constants/sdkStyles';
import { PaymentProvider } from 'context/paymentContext';

export const App = () => {
  const setupSDK = useCallback(async () => {
    await window.paytheory.payTheoryFields({
      apiKey: process.env.REACT_APP_PAYTHEORY_API_KEY,
      styles: sdkStyles,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setupSDK();
    }, 200);

    return () => clearTimeout(timer);
  }, [setupSDK]);

  return (
    <PaymentProvider>
      <Home />
    </PaymentProvider>
  );
};
