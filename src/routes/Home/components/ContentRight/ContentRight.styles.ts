import styled from 'styled-components';

import { Input } from 'components/Input';

type ContainerProps = {
  $success?: boolean;
};

export const Container = styled.section<ContainerProps>`
  flex: 1;
  margin: 24px 0;
  border: 1px solid ${({ $success }) => ($success ? '#32D583' : '#ced9e6')};
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
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  &:disabled {
    cursor: progress;
  }

  &:hover:not(:disabled) {
    filter: brightness(115%);
  }

  &:active:not(:disabled),
  &:focus:not(:disabled) {
    filter: brightness(90%);
  }
`;

export const PaymentSuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 100%;
`;

export const PaymentSuccessText = styled.span`
  font-size: 24px;
  font-weight: 300;
  line-height: 24px;
  color: #1b1b1b;
  text-align: center;
  margin: 4px 0;
`;

export const PaymentSuccessDescription = styled.span`
  font-size: 16px;
  font-weight: 300;
  line-height: 20px;
  color: #1b1b1b;
  text-align: center;
`;
