import creditCardType from 'credit-card-type';

import { CardType } from 'types/Card';

export const getCardType = (cardNumber?: string): CardType => {
  if (cardNumber) {
    const card = creditCardType(cardNumber.replace(/ /g, ''));

    if (card.length) {
      const cardType = card[0].type;
      return cardType as CardType;
    }
  }

  return 'mastercard';
};
