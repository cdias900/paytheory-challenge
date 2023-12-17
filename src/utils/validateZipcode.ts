export const validateZipcode = (value?: string) => {
  if (!value) {
    return false;
  }

  const re = /^\d{5}(?:-\d{4})?$/;
  return re.test(value);
};
