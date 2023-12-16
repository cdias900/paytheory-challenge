import {
  AddressInputs,
  Checkbox,
  FormGroup,
  SectionTitle,
  Select,
  TermsOfService,
} from 'components';
import { getCardType } from 'utils/cardType';

import {
  CardCVVInput,
  CardExpInput,
  CardNameInput,
  CardNumberInput,
  Container,
  EmailInput,
  FirstNameInput,
  InputRow,
  LastNameInput,
  PayButton,
  PhoneNumberInput,
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
            <CardNumberInput
              value={formData.cardNumber}
              onChange={e => onUpdateFormData('cardNumber', e.target.value)}
              error={formErrors.cardNumber}
              cardType={getCardType(formData.cardNumber)}
            />
            <CardExpInput
              value={formData.cardExp}
              onChange={e => onUpdateFormData('cardExp', e.target.value)}
              error={formErrors.cardExp}
            />
            <CardCVVInput
              value={formData.cardCVV}
              onChange={e => onUpdateFormData('cardCVV', e.target.value)}
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
        <PayButton>Pay $100.00 USD</PayButton>
      </form>
      <TermsOfService />
    </Container>
  );
};
