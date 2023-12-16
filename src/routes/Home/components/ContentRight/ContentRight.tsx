import { AddressInputs } from 'components/AddressInputs';
import { Checkbox } from 'components/Checkbox';
import { FormGroup } from 'components/FormGroup';
import { SectionTitle } from 'components/SectionTitle';
import { Select } from 'components/Select';
import { TermsOfService } from 'components/TermsOfService';

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
  const { checked, onClickCheckbox, onFormSubmit, formData, onUpdateFormData } =
    useContentRight();

  return (
    <Container>
      <SectionTitle>Select Payment Method</SectionTitle>
      <Select />
      <form onSubmit={onFormSubmit}>
        <FormGroup title="Contact Information">
          <InputRow>
            <FirstNameInput
              value={formData.firstName}
              onChange={e => onUpdateFormData('firstName', e.target.value)}
            />
            <LastNameInput
              value={formData.lastName}
              onChange={e => onUpdateFormData('lastName', e.target.value)}
            />
          </InputRow>
          <EmailInput
            value={formData.email}
            onChange={e => onUpdateFormData('email', e.target.value)}
          />
          <PhoneNumberInput
            value={formData.phoneNumber}
            onChange={e => onUpdateFormData('phoneNumber', e.target.value)}
          />
        </FormGroup>
        <FormGroup title="Home Address">
          <AddressInputs
            formData={formData}
            onUpdateFormData={onUpdateFormData}
          />
        </FormGroup>
        <FormGroup title="Card Information">
          <CardNameInput
            value={formData.cardName}
            onChange={e => onUpdateFormData('cardName', e.target.value)}
          />
          <InputRow>
            <CardNumberInput
              value={formData.cardNumber}
              onChange={e => onUpdateFormData('cardNumber', e.target.value)}
            />
            <CardExpInput
              value={formData.cardExp}
              onChange={e => onUpdateFormData('cardExp', e.target.value)}
            />
            <CardCVVInput
              value={formData.cardCVV}
              onChange={e => onUpdateFormData('cardCVV', e.target.value)}
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
            />
          )}
        </FormGroup>
        <PayButton>Pay $100.00 USD</PayButton>
      </form>
      <TermsOfService />
    </Container>
  );
};
