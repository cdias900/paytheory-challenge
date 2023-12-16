import styled from 'styled-components';

import { Input } from 'components/Input';

export const InputRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export const Address1Input = styled(Input).attrs({
  placeholder: 'Address Line 1',
})``;

export const Address2Input = styled(Input).attrs({
  placeholder: 'Address Line 2 (optional)',
})``;

export const CityInput = styled(Input).attrs({
  placeholder: 'City',
})`
  flex: unset;
  width: 50%;
`;

export const StateInput = styled(Input).attrs({
  placeholder: 'State',
})`
  flex: unset;
  width: calc(25% - 12px);
`;

export const ZipcodeInput = styled(Input).attrs({
  placeholder: 'Zipcode',
})`
  flex: unset;
  width: calc(25% - 12px);
`;
