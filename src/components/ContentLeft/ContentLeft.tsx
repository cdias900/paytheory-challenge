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

export const ContentLeft = () => {
  return (
    <Container>
      <MerchantNameText>[Merchant Name]</MerchantNameText>
      <PayText>Pay [Merchant Name]</PayText>
      <AmountTitle>
        $ 100.00 <AmountCurrency>USD</AmountCurrency>
      </AmountTitle>
      <SectionTitle>Order Summary</SectionTitle>
      <SummaryContainer>
        <SummaryRow>
          <SummaryItem>Item Name</SummaryItem>
          <SummaryItem>$100.00 USD</SummaryItem>
        </SummaryRow>
        <Separator />
        <SummaryRow>
          <SummaryItem bold>Total</SummaryItem>
          <SummaryItem bold>$100.00 USD</SummaryItem>
        </SummaryRow>
      </SummaryContainer>
    </Container>
  );
};
