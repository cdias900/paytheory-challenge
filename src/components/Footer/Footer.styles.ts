import styled from 'styled-components';

export const FooterContainer = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
`;

export const DisclaimerText = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  margin-top: 4px;
`;

export const DisclaimerLink = styled.a.attrs({
  href: 'https://google.com',
  target: '_blank',
})`
  text-decoration: none;
  color: #8f00b2;
  margin-left: 4px;
`;
