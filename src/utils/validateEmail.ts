export const validateEmail = (value?: string) => {
  if (!value) {
    return false;
  }

  const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(value);
};
