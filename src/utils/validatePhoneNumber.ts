import { PhoneNumberUtil } from 'google-libphonenumber';

export const validatePhoneNumber = (value?: string) => {
  if (!value) {
    return true;
  }

  const phoneUtil = PhoneNumberUtil.getInstance();

  const parsedPhone = phoneUtil.parse(value, 'US');

  return phoneUtil.isValidNumberForRegion(parsedPhone, 'US');
};
