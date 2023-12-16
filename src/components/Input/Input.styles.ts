import styled from 'styled-components';

import { ReactComponent as AlertCircle } from 'assets/alert-circle.svg';

type InputProps = {
  $error: boolean;
};

export const StyledInput = styled.input<InputProps>`
  border-radius: 8px;
  outline: none;
  border: 1px solid ${({ $error }) => ($error ? '#FFECE3' : '#ced9e6')};
  background-color: ${({ $error }) => ($error ? '#FFFAFA' : '#fbfdff')};
  padding: 4px 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  color: #1b1b1b;

  &::placeholder {
    color: #94999e;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ErrorText = styled.span`
  margin-top: 2px;
  margin-left: 8px;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
  color: #ff3e1b;
`;

export const ErrorIcon = styled(AlertCircle)`
  width: 16px;
  height: 16px;
  position: absolute;
  right: 8px;
  top: 6px;
`;

export const CardIconContainer = styled.div`
  width: 28px;
  height: 20px;
  position: absolute;
  right: 8px;
  top: 4px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #94999e;
  background-color: #ffffff;
  box-sizing: border-box;

  & svg {
    width: 18px;
    height: 11px;
  }
`;
