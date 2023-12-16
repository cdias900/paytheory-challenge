import { Fragment, InputHTMLAttributes } from 'react';
import InputMask from 'react-input-mask';

import { cardIcons } from 'constants/cardIcons';

import {
  CardIconContainer,
  ErrorIcon,
  ErrorText,
  InputContainer,
  StyledInput,
} from './Input.styles';
import { InputProps } from './Input.types';

export const Input = ({
  type = 'text',
  value,
  mask = '',
  error,
  cardType,
  onChange,
  className,
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & InputProps) => {
  const CardIcon = cardType ? cardIcons[cardType] : Fragment;

  return (
    <InputContainer className={className}>
      <InputMask
        mask={mask}
        value={value}
        onChange={onChange}
        maskPlaceholder={null}>
        <StyledInput type={type} $error={!!error} {...rest} />
      </InputMask>
      {!error && !!cardType && (
        <CardIconContainer>{CardIcon && <CardIcon />}</CardIconContainer>
      )}
      {!!error && (
        <>
          <ErrorText>{error}</ErrorText>
          <ErrorIcon />
        </>
      )}
    </InputContainer>
  );
};
