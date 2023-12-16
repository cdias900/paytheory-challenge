import { SelectContainer, SelectOption } from './Select.styles';
import { SelectProps } from './Select.types';

export const Select = ({
  paymentMethod,
  onUpdatePaymentMethod,
}: SelectProps) => {
  return (
    <SelectContainer>
      <SelectOption
        selected={paymentMethod === 'card'}
        onClick={() => onUpdatePaymentMethod('card')}>
        Card
      </SelectOption>
      <SelectOption
        selected={paymentMethod === 'ach'}
        onClick={() => onUpdatePaymentMethod('ach')}>
        ACH
      </SelectOption>
    </SelectContainer>
  );
};
