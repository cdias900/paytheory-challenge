import { object, string } from 'yup';

import { FormDataType } from 'types/FormData';

export const formDataInitialState: FormDataType = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zipcode: '',
  cardName: '',
  cardNumber: '',
  cardExp: '',
  cardCVV: '',
  billingAddress1: '',
  billingAddress2: '',
  billingCity: '',
  billingState: '',
  billingZipcode: '',
};

export const getFormDataSchema = (hasBillingAddress: boolean) =>
  object({
    firstName: string().required('Please enter your first name'),
    lastName: string().required('Please enter your last name'),
    email: string()
      .email('Invalid email')
      .required('Please enter your email address'),
    phoneNumber: string().optional(),

    address1: string().required('Please enter your address'),
    address2: string().optional(),
    city: string().required('Please enter your city'),
    state: string().required('Please enter your state'),
    zipcode: string().required('Please enter your zipcode'),

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
          billingZipcode: string().required('Please enter your zipcode'),
        }
      : {}),
  });
