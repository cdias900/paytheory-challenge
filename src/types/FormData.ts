export type FormDataKeysType =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'phoneNumber'
  | 'address1'
  | 'address2'
  | 'city'
  | 'state'
  | 'zipcode'
  | 'cardName'
  | 'cardNumber'
  | 'cardExp'
  | 'cardCVV'
  | 'billingAddress1'
  | 'billingAddress2'
  | 'billingCity'
  | 'billingState'
  | 'billingZipcode';

export type FormDataType = {
  [key in FormDataKeysType]: string;
};
