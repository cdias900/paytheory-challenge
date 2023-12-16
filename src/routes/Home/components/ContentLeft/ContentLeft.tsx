import { Fragment } from 'react';

import { Footer } from 'components/Footer';
import { SectionTitle } from 'components/SectionTitle';

import {
  AmountCurrency,
  AmountTitle,
  Container,
  MerchantNameText,
  PayText,
  Separator,
  SummaryContainer,
  SummaryItem,
  SummaryRow,
} from './ContentLeft.styles';

const ITEMS = [
  {
    id: 1,
    name: 'Item Name',
    price: 100,
  },
];

export const ContentLeft = () => {
  const totalPrice = ITEMS.reduce(
    (previous, current) => previous + current.price,
    0,
  ).toFixed(2);

  return (
    <Container>
      <MerchantNameText>[Merchant Name]</MerchantNameText>
      <PayText>Pay [Merchant Name]</PayText>
      <AmountTitle>
        $ {totalPrice} <AmountCurrency>USD</AmountCurrency>
      </AmountTitle>
      <SectionTitle>Order Summary</SectionTitle>
      <SummaryContainer>
        {ITEMS.map(item => (
          <Fragment key={item.id}>
            <SummaryRow>
              <SummaryItem>{item.name}</SummaryItem>
              <SummaryItem>${item.price.toFixed(2)} USD</SummaryItem>
            </SummaryRow>
            <Separator />
          </Fragment>
        ))}
        <SummaryRow>
          <SummaryItem $bold>Total</SummaryItem>
          <SummaryItem $bold>${totalPrice} USD</SummaryItem>
        </SummaryRow>
      </SummaryContainer>
      <Footer />
    </Container>
  );
};
