import { ReactComponent as Logo } from 'assets/logo.svg';

import {
  DisclaimerLink,
  DisclaimerText,
  FooterContainer,
} from './Footer.styles';

export const Footer = () => {
  return (
    <FooterContainer>
      <Logo />
      <DisclaimerText>
        Pay Theory is an inclusive payments provider.
        <DisclaimerLink>Learn more about inclusive payments.</DisclaimerLink>
      </DisclaimerText>
    </FooterContainer>
  );
};
