import { ReactComponent as Check } from 'assets/check.svg';

import { Box, Container, Label } from './Checkbox.styles';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox = ({ label, checked, onClick }: CheckboxProps) => (
  <Container onClick={onClick}>
    <Box>{checked && <Check />}</Box>
    <Label>{label}</Label>
  </Container>
);
