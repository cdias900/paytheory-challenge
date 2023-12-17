import { usePayment } from 'context/paymentContext';

import { Container, ErrorLabel, ErrorMessage } from './Toast.styles';

export const Toast = () => {
  const { errorMessage } = usePayment();

  if (!errorMessage) {
    return null;
  }

  return (
    <Container>
      <ErrorLabel>Error</ErrorLabel>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </Container>
  );
};
