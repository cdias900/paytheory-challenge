import { InputHTMLAttributes } from 'react';
import InputMask from 'react-input-mask';

import {
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
  onChange,
  style,
  ...rest
}: InputHTMLAttributes<HTMLInputElement> & InputProps) => {
  return (
    <InputContainer style={style}>
      <InputMask
        mask={mask}
        value={value}
        onChange={onChange}
        maskPlaceholder={null}>
        <StyledInput type={type} $error={!!error} {...rest} />
      </InputMask>
      {!!error && (
        <>
          <ErrorText>{error}</ErrorText>
          <ErrorIcon />
        </>
      )}
    </InputContainer>
  );
};
