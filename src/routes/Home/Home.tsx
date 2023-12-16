import { ContentLeft, ContentRight } from './components';
import { Container } from './Home.styles';

export const Home = () => {
  return (
    <Container>
      <ContentLeft />
      <ContentRight />
    </Container>
  );
};
