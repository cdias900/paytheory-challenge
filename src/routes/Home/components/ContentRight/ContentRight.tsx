import { ReactComponent as SuccessIcon } from 'assets/check-circle.svg';

import {
  AddressInputs,
  Checkbox,
  FormGroup,
  Loader,
  SdkInput,
  SectionTitle,
  Select,
  TermsOfService,
} from 'components';
import { usePayment } from 'context/paymentContext';

import {
  CardNameInput,
  Container,
  EmailInput,
  FirstNameInput,
  InputRow,
  LastNameInput,
  PayButton,
  PhoneNumberInput,
  PaymentSuccessText,
  PaymentSuccessContainer,
  PaymentSuccessDescription,
} from './ContentRight.styles';
import { useContentRight } from './hooks';

export const ContentRight = () => {
  const {
    checked,
    onClickCheckbox,
    onFormSubmit,
    formData,
    formErrors,
    onUpdateFormData,
    paymentMethod,
    onUpdatePaymentMethod,
  } = useContentRight();
  const { totalPrice, hasPaymentSucceded, isLoading } = usePayment();

  if (hasPaymentSucceded) {
    return (
      <Container $success>
        <PaymentSuccessContainer>
          <SuccessIcon />
          <PaymentSuccessText>
            Your payment has been submitted.
          </PaymentSuccessText>
          <PaymentSuccessDescription>
            A copy of your receipt has been sent to your email.
          </PaymentSuccessDescription>
        </PaymentSuccessContainer>
      </Container>
    );
  }

  return (
    <Container>
      <SectionTitle>Select Payment Method</SectionTitle>
      <Select
        paymentMethod={paymentMethod}
        onUpdatePaymentMethod={onUpdatePaymentMethod}
      />
      <form onSubmit={onFormSubmit}>
        <FormGroup title="Contact Information">
          <InputRow>
            <FirstNameInput
              value={formData.firstName}
              onChange={e => onUpdateFormData('firstName', e.target.value)}
              error={formErrors.firstName}
            />
            <LastNameInput
              value={formData.lastName}
              onChange={e => onUpdateFormData('lastName', e.target.value)}
              error={formErrors.lastName}
            />
          </InputRow>
          <EmailInput
            value={formData.email}
            onChange={e => onUpdateFormData('email', e.target.value)}
            error={formErrors.email}
          />
          <PhoneNumberInput
            value={formData.phoneNumber}
            onChange={e => onUpdateFormData('phoneNumber', e.target.value)}
            error={formErrors.phoneNumber}
          />
        </FormGroup>
        <FormGroup title="Home Address">
          <AddressInputs
            formData={formData}
            onUpdateFormData={onUpdateFormData}
            formErrors={formErrors}
          />
        </FormGroup>
        <FormGroup title="Card Information">
          <CardNameInput
            value={formData.cardName}
            onChange={e => onUpdateFormData('cardName', e.target.value)}
            error={formErrors.cardName}
          />
          <InputRow>
            <SdkInput
              id="pay-theory-credit-card-number"
              style={{ width: '50%' }}
              error={formErrors.cardNumber}
              noErrorIcon
            />
            <SdkInput
              id="pay-theory-credit-card-exp"
              style={{ width: 'calc(25% - 12px)' }}
              error={formErrors.cardExp}
            />
            <SdkInput
              id="pay-theory-credit-card-cvv"
              style={{ width: 'calc(25% - 12px)' }}
              error={formErrors.cardCVV}
            />
          </InputRow>
        </FormGroup>
        <FormGroup title="Billing Address">
          <Checkbox
            label="Same as Home Address"
            checked={checked}
            onClick={onClickCheckbox}
          />
          {!checked && (
            <AddressInputs
              billing
              formData={formData}
              onUpdateFormData={onUpdateFormData}
              formErrors={formErrors}
            />
          )}
        </FormGroup>
        <PayButton disabled={isLoading}>
          Pay ${totalPrice} USD {isLoading && <Loader />}
        </PayButton>
      </form>
      <TermsOfService />
    </Container>
  );
};
