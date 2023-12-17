import styled from 'styled-components';

import { ReactComponent as AlertCircle } from 'assets/alert-circle.svg';

type CardInputProps = {
  $error: boolean;
};

export const Container = styled.div`
  position: relative;
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
`;

export const CardInput = styled.div<CardInputProps>`
  max-width: 100%;
  height: 32px;
  border-radius: 8px;
  outline: none;
  border: 1px solid ${({ $error }) => ($error ? '#FFECE3' : '#ced9e6')};
  background-color: ${({ $error }) => ($error ? '#FFFAFA' : '#fbfdff')};
  padding: 2px 2px 3px 7px;
  box-sizing: border-box;
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
  top: 8px;
`;
