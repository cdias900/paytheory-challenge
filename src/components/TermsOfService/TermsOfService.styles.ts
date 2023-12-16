import styled from 'styled-components';

export const TermsAndServicesText = styled.span`
  margin-top: 13px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  align-self: center;
  color: #1b1b1b;
  width: 50%;
`;

export const TermsAndServicesLink = styled.a.attrs({
  target: '_blank',
})`
  text-decoration: none;
  color: #8f00b2;
`;
