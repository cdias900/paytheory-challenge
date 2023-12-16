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
`;

// TODO: Fix inputs width
export const InputRow = styled.div`
  flex-grow: 1;
  gap: 12px;
  /* display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-columns: 1fr; */
  display: flex;
  flex-direction: row;
`;

export const FirstNameInput = styled(Input).attrs({
  placeholder: 'First Name',
  required: true,
})``;

export const LastNameInput = styled(Input).attrs({
  placeholder: 'Last Name',
  required: true,
})``;

export const EmailInput = styled(Input).attrs({
  placeholder: 'Email',
  type: 'email',
  required: true,
})``;

export const PhoneNumberInput = styled(Input).attrs({
  placeholder: 'Phone Number (optional)',
})``;

export const CardNameInput = styled(Input).attrs({
  placeholder: 'Name on Card',
  required: true,
})``;

export const CardNumberInput = styled(Input).attrs({
  placeholder: 'Card Number',
  required: true,
})``;

export const CardExpInput = styled(Input).attrs({
  placeholder: 'MM/YY',
  required: true,
})``;

export const CardCVVInput = styled(Input).attrs({
  placeholder: 'CVV',
  required: true,
})``;

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
