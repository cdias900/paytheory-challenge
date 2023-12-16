import { PaymentMethodType } from 'types/PaymentMethod';

export type SelectProps = {
  paymentMethod: PaymentMethodType;
  onUpdatePaymentMethod: (method: PaymentMethodType) => void;
};
