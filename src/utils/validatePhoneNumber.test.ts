import { validatePhoneNumber } from './validatePhoneNumber';

describe('Validate Phone Number', () => {
  it('should return true when there is no phone number', () => {
    const result = validatePhoneNumber();
    expect(result).toBeTruthy();
  });

  it('should return true when phone number is valid', () => {
    const result = validatePhoneNumber('(848) 845-8456');
    expect(result).toBeTruthy();
  });

  it('should return false when phone number is invalid', () => {
    const result = validatePhoneNumber('(123) 123-4567');
    expect(result).toBeFalsy();
  });
});
