import styled from 'styled-components';

export const Container = styled.section`
  flex: 1;
  margin: 24px 0;
  color: #1b1b1b;
  display: flex;
  flex-direction: column;
  max-width: calc(50% - 32px);
`;

export const MerchantNameText = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
`;

export const PayText = styled.span`
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 4px;
`;

export const AmountTitle = styled.span`
  font-weight: 500;
  font-size: 36px;
  line-height: 40px;
  margin-bottom: 40px;
`;

// TODO: change font to Halyard Display
export const AmountCurrency = styled.span`
  font-weight: 300;
  font-size: 24px;
  line-height: 24px;
`;

export const SummaryContainer = styled.div`
  border: 1px solid #ced9e6;
  border-radius: 24px;
  padding: 16px;
`;

export const SummaryRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

type SummaryItemProps = {
  $bold?: boolean;
};

export const SummaryItem = styled.span<SummaryItemProps>`
  font-weight: ${({ $bold }) => ($bold ? 600 : 300)};
  font-size: 16px;
  line-height: 20px;
`;

export const Separator = styled.div`
  height: 1px;
  width: 100%;
  background-color: #1b1b1b;
  margin: 8px 0;
`;
