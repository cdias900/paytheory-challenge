import styled from 'styled-components';

import { Input } from 'components/Input';

export const Container = styled.section`
  flex: 1;
  margin: 24px 0;
  border: 1px solid #ced9e6;
  border-radius: 24px;
  padding: 40px 32px;
  display: flex;
  flex-direction: column;
  max-width: calc(50% - 32px);
`;

export const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const FirstNameInput = styled(Input).attrs({
  placeholder: 'First Name',
})``;

export const LastNameInput = styled(Input).attrs({
  placeholder: 'Last Name',
})``;

export const EmailInput = styled(Input).attrs({
  placeholder: 'Email',
  type: 'email',
})``;

export const PhoneNumberInput = styled(Input).attrs({
  placeholder: 'Phone Number (optional)',
  mask: '(999) 999-9999',
})``;

export const CardNameInput = styled(Input).attrs({
  placeholder: 'Name on Card',
})``;

export const CardNumberInput = styled(Input).attrs({
  placeholder: 'Card Number',
  mask: '9999 9999 9999 9999',
})`
  flex: unset;
  width: 50%;
`;

export const CardExpInput = styled(Input).attrs({
  placeholder: 'MM/YY',
  mask: '99/99',
})`
  flex: unset;
  width: calc(25% - 12px);
`;

export const CardCVVInput = styled(Input).attrs({
  placeholder: 'CVV',
  mask: '9999',
})`
  flex: unset;
  width: calc(25% - 12px);
`;

export const PayButton = styled.button.attrs({
  type: 'submit',
})`
  width: 100%;
  padding: 10px 16px;
  background-color: #420050;
  border-radius: 8px;
  outline: none;
  border: none;
  color: #ffffff;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  gap: 8px;
  cursor: pointer;

  &:hover {
    filter: brightness(115%);
  }

  &:active,
  &:focus {
    filter: brightness(90%);
  }
`;
