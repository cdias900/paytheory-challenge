import { Fragment } from 'react';

import { Footer, SectionTitle } from 'components';
import { usePayment } from 'context/paymentContext';

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

export const ContentLeft = () => {
  const { items, totalPrice, hasPaymentSucceded } = usePayment();

  return (
    <Container>
      <MerchantNameText>[Merchant Name]</MerchantNameText>
      <PayText>Pay [Merchant Name]</PayText>
      <AmountTitle>
        $ {totalPrice} <AmountCurrency>USD</AmountCurrency>
      </AmountTitle>
      <SectionTitle>Order Summary</SectionTitle>
      <SummaryContainer $success={hasPaymentSucceded}>
        {items.map(item => (
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
