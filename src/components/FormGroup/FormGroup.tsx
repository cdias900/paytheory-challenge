import { Container, GroupInputs, GroupTitle } from './FormGroup.styles';
import { FormGroupProps } from './FormGroup.types';

export const FormGroup = ({ title, children }: FormGroupProps) => {
  return (
    <Container>
      <GroupTitle>{title}</GroupTitle>
      <GroupInputs>{children}</GroupInputs>
    </Container>
  );
};
