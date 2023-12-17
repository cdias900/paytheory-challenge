import { Home } from 'routes/index';

import { PaymentProvider } from 'context/paymentContext';

export const App = () => (
  <PaymentProvider>
    <Home />
  </PaymentProvider>
);
