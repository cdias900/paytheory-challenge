import { InputRow } from 'routes/Home/components/ContentRight/ContentRight.styles';

import {
  Address1Input,
  Address2Input,
  CityInput,
  StateInput,
  ZipcodeInput,
} from './AddressInputs.styles';
import { AddressInputsProps } from './AddressInputs.types';

export const AddressInputs = ({
  billing,
  formData,
  formErrors,
  onUpdateFormData,
}: AddressInputsProps) => {
  const address1Key = billing ? 'billingAddress1' : 'address1';
  const address2Key = billing ? 'billingAddress2' : 'address2';
  const cityKey = billing ? 'billingCity' : 'city';
  const stateKey = billing ? 'billingState' : 'state';
  const zipcodeKey = billing ? 'billingZipcode' : 'zipcode';

  return (
    <>
      <Address1Input
        value={formData[address1Key]}
        onChange={e => onUpdateFormData(address1Key, e.target.value)}
        error={formErrors[address1Key]}
      />
      <Address2Input
        value={formData[address2Key]}
        onChange={e => onUpdateFormData(address2Key, e.target.value)}
        error={formErrors[address2Key]}
      />
      <InputRow>
        <CityInput
          value={formData[cityKey]}
          onChange={e => onUpdateFormData(cityKey, e.target.value)}
          error={formErrors[cityKey]}
        />
        <StateInput
          value={formData[stateKey]}
          onChange={e => onUpdateFormData(stateKey, e.target.value)}
          error={formErrors[stateKey]}
        />
        <ZipcodeInput
          value={formData[zipcodeKey]}
          onChange={e => onUpdateFormData(zipcodeKey, e.target.value)}
          error={formErrors[zipcodeKey]}
          mask={formData[zipcodeKey].length <= 5 ? '999999999' : '99999-9999'}
        />
      </InputRow>
    </>
  );
};
