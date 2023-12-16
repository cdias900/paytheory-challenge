import { InputHTMLAttributes } from 'react';

import { StyledInput } from './Input.styles';

export const Input = ({
  type = 'text',
  ...rest
}: InputHTMLAttributes<HTMLInputElement>) => {
  return <StyledInput type={type} {...rest} />;
};
