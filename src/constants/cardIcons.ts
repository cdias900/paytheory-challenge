import { ReactComponent as MastercardIcon } from 'assets/card-icons/mastercard.svg';
import { ReactComponent as VisaIcon } from 'assets/card-icons/visa.svg';

import { CardIconsType } from 'types/Card';

// TODO: Add other icons
export const cardIcons: CardIconsType = {
  mastercard: MastercardIcon,
  visa: VisaIcon,
  'american-express': null,
  'diners-club': null,
  discover: null,
  elo: null,
  hiper: null,
  hipercard: null,
  jcb: null,
  maestro: null,
  mir: null,
  unionpay: null,
};
