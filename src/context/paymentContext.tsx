import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';

import { errorMessages } from 'constants/errorMessages';
import { FormDataType } from 'types/FormData';

export type PaymentContextType = {
  items: {
    id: number;
    name: string;
    price: number;
  }[];
  totalPrice: string;
  hasPaymentSucceded: boolean;
  isLoading: boolean;
  errorMessage: string;
  createPayment: (
    data: FormDataType,
    isBillingAddressSameAsPersonal: boolean,
  ) => Promise<void>;
};

const PaymentContext = createContext({} as PaymentContextType);

const ITEMS = [
  {
    id: 1,
    name: 'Item Name',
    price: 100,
  },
];

const TOTAL_PRICE = ITEMS.reduce(
  (previous, current) => previous + current.price,
  0,
);

const PaymentProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [hasPaymentSucceded, setHasPaymentSucceded] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const createPayment = useCallback(
    async (data: FormDataType, isBillingAddressSameAsPersonal: boolean) => {
      setIsLoading(true);
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      setErrorMessage('');

      const amount = Math.ceil(TOTAL_PRICE * 100);

      const address = {
        city: data.city,
        country: 'USA',
        region: data.state,
        line1: data.address1,
        line2: data.address2,
        postal_code: data.zipcode,
      };

      const payorInfo = {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: data.phoneNumber,
        personal_address: address,
      };

      const billingInfo = {
        name: data.cardName,
        address: isBillingAddressSameAsPersonal
          ? address
          : {
              line1: data.billingAddress1,
              line2: data.billingAddress2,
              city: data.billingCity,
              region: data.billingState,
              postal_code: data.billingZipcode,
              country: 'USA',
            },
      };

      const transactingParameters = {
        amount,
        payorInfo,
        billingInfo,
        sendReceipt: true,
        receiptDescription: 'Pay Theory Challenge',
      };

      console.log(transactingParameters);

      const response = await window.paytheory.transact(transactingParameters);

      if (response.type === 'SUCCESS') {
        setHasPaymentSucceded(true);
      }

      if (response.type === 'FAILED') {
        setErrorMessage(
          errorMessages[
            response.body.reason.failure_code as keyof typeof errorMessages
          ],
        );

        timerRef.current = setTimeout(() => setErrorMessage(''), 5000);
      }

      if (response.type === 'ERROR') {
        setErrorMessage(errorMessages.GENERIC_DECLINE);
        timerRef.current = setTimeout(() => setErrorMessage(''), 5000);
      }

      setIsLoading(false);
    },
    [],
  );

  const value = useMemo(
    () => ({
      items: ITEMS,
      totalPrice: TOTAL_PRICE.toFixed(2),
      hasPaymentSucceded,
      isLoading,
      errorMessage,
      createPayment,
    }),
    [createPayment, errorMessage, hasPaymentSucceded, isLoading],
  );

  return (
    <PaymentContext.Provider value={value}>{children}</PaymentContext.Provider>
  );
};

const usePayment = (): PaymentContextType => {
  const context = useContext(PaymentContext);

  if (!context) {
    throw new Error('usePayment must be wrapped within a PaymentContextType');
  }

  return context;
};

export { PaymentProvider, usePayment };
