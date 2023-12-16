import { FunctionComponent, SVGProps } from 'react';

export type CardType =
  | 'visa'
  | 'mastercard'
  | 'american-express'
  | 'diners-club'
  | 'discover'
  | 'jcb'
  | 'unionpay'
  | 'maestro'
  | 'mir'
  | 'elo'
  | 'hiper'
  | 'hipercard';

export type CardIconsType = {
  [key in CardType]: FunctionComponent<SVGProps<SVGSVGElement>> | null;
};
