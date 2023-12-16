import styled from 'styled-components';

import { Input } from 'components/Input';

export const Address1Input = styled(Input).attrs({
  placeholder: 'Address Line 1',
  required: true,
})``;

export const Address2Input = styled(Input).attrs({
  placeholder: 'Address Line 2 (optional)',
})``;

export const CityInput = styled(Input).attrs({
  placeholder: 'City',
  required: true,
})``;

export const StateInput = styled(Input).attrs({
  placeholder: 'State',
  required: true,
  maxLength: 2,
})``;

export const ZipcodeInput = styled(Input).attrs({
  placeholder: 'Zipcode',
  required: true,
})``;
