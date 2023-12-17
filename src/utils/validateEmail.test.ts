import { validateEmail } from './validateEmail';

describe('Validate Email', () => {
  it('should return false when there is no email', () => {
    const result = validateEmail();
    expect(result).toBeFalsy();
  });

  it('should return true when email is valid', () => {
    const result = validateEmail('test@example.com');
    expect(result).toBeTruthy();
  });

  it('should return false when email is invalid', () => {
    const result = validateEmail('test@example');
    expect(result).toBeFalsy();
  });
});
