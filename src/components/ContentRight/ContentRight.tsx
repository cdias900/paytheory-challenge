import { SectionTitle } from 'components/SectionTitle';
import { Select } from 'components/Select';

import { Container } from './ContentRight.styles';

export const ContentRight = () => {
  return (
    <Container>
      <SectionTitle>Select Payment Method</SectionTitle>
      <Select />
    </Container>
  );
};
