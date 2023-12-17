import { Toast } from 'components';

import { ContentLeft, ContentRight } from './components';
import { Container } from './Home.styles';

export const Home = () => {
  return (
    <Container>
      <Toast />
      <ContentLeft />
      <ContentRight />
    </Container>
  );
};
