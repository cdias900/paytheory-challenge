export const validateExpDate = (value?: string) => {
  if (!value) {
    return false;
  }

  const [month, year] = value.split('/');

  if (!month || !year) {
    return false;
  }

  const fullYear = Number(year) + 2000;
  const monthIndex = Number(month) - 1;

  if (
    monthIndex < 0 ||
    monthIndex > 11 ||
    monthIndex < new Date().getMonth() ||
    fullYear < new Date().getFullYear()
  ) {
    return false;
  }

  return true;
};
