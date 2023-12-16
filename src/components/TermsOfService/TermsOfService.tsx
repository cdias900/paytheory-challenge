import {
  TermsAndServicesLink,
  TermsAndServicesText,
} from './TermsOfService.styles';

export const TermsOfService = () => {
  return (
    <TermsAndServicesText>
      By submitting this payment you agree to the{' '}
      <TermsAndServicesLink href="https://www.paytheory.com/privacy-policy">
        privacy policy
      </TermsAndServicesLink>
      ,{' '}
      <TermsAndServicesLink href="https://www.paytheory.com/refund-and-return-policy">
        refund policy
      </TermsAndServicesLink>
      , and{' '}
      <TermsAndServicesLink href="https://www.paytheory.com/merchant-terms-of-service">
        terms of service
      </TermsAndServicesLink>
      .
    </TermsAndServicesText>
  );
};
