import { useState } from 'react';

import { SelectContainer, SelectOption } from './Select.styles';

export const Select = () => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'ach'>('card');

  return (
    <SelectContainer>
      <SelectOption
        selected={paymentMethod === 'card'}
        onClick={() => setPaymentMethod('card')}>
        Card
      </SelectOption>
      <SelectOption
        selected={paymentMethod === 'ach'}
        onClick={() => setPaymentMethod('ach')}>
        ACH
      </SelectOption>
    </SelectContainer>
  );
};
