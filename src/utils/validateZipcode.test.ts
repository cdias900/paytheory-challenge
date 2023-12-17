import { validateZipcode } from './validateZipcode';

describe('Validate Zipcode', () => {
  it('should return false when there is no zipcode', () => {
    const result = validateZipcode();
    expect(result).toBeFalsy();
  });

  it('should return true when zipcode is valid', () => {
    const result5Digits = validateZipcode('12345');
    expect(result5Digits).toBeTruthy();
    const result9Digits = validateZipcode('12345-6789');
    expect(result9Digits).toBeTruthy();
  });

  it('should return false when zipcode is invalid', () => {
    const result5Digits = validateZipcode('1234');
    expect(result5Digits).toBeFalsy();
    const result9Digits = validateZipcode('12345-67');
    expect(result9Digits).toBeFalsy();
  });
});
