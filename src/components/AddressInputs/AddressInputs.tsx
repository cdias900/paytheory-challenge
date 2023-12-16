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
      />
      <Address2Input
        value={formData[address2Key]}
        onChange={e => onUpdateFormData(address2Key, e.target.value)}
      />
      <InputRow>
        <CityInput
          value={formData[cityKey]}
          onChange={e => onUpdateFormData(cityKey, e.target.value)}
        />
        <StateInput
          value={formData[stateKey]}
          onChange={e => onUpdateFormData(stateKey, e.target.value)}
        />
        <ZipcodeInput
          value={formData[zipcodeKey]}
          onChange={e => onUpdateFormData(zipcodeKey, e.target.value)}
        />
      </InputRow>
    </>
  );
};
