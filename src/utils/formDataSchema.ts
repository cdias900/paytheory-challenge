import { object, string } from 'yup';

import { validateEmail } from './validateEmail';
import { validatePhoneNumber } from './validatePhoneNumber';
import { ValidateZipcode } from './validateZipcode';

const zipcodeSchema = string()
  .required('Please enter your zipcode')
  .test('is-valid-zipcode', 'Invalid zipcode', value => ValidateZipcode(value));

export const getFormDataSchema = (hasBillingAddress: boolean) =>
  object({
    firstName: string().required('Please enter your first name'),
    lastName: string().required('Please enter your last name'),
    email: string()
      .required('Please enter your email address')
      .test('is-valid-email', 'Invalid email', value => validateEmail(value)),
    phoneNumber: string()
      .optional()
      .test('is-valid-phone-number', 'Invalid phone number', value =>
        validatePhoneNumber(value),
      ),

    address1: string().required('Please enter your address'),
    address2: string().optional(),
    city: string().required('Please enter your city'),
    state: string().required('Please enter your state'),
    zipcode: zipcodeSchema,

    cardName: string().required(
      'Please enter your name as displayed in your card',
    ),
    cardNumber: string().required('Please enter your card number'),
    cardExp: string().required('Please enter your card expiration date'),
    cardCVV: string().required('Please enter your card CVV'),

    ...(hasBillingAddress
      ? {
          billingAddress1: string().required(
            'Please enter your billing address',
          ),
          billingAddress2: string().optional(),
          billingCity: string().required('Please enter your city'),
          billingState: string().required('Please enter your state'),
          billingZipcode: zipcodeSchema,
        }
      : {}),
  });
