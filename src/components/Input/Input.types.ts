import { CardType } from 'types/Card';

export type InputProps = {
  mask?: string | (string | RegExp)[];
  error?: string;
  cardType?: CardType;
};
