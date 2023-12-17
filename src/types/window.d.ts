export declare global {
  export interface Window {
    paytheory: {
      SURCHARGE: 'merchant_fee';
      SERVICE_FEE: 'service_fee';
      INTERCHANGE: 'merchant_fee';
      MERCHANT_FEE: 'merchant_fee';
      ALL: 'ALL';
      NOT_CASH: 'NOT_CASH';
      NOT_CARD: 'NOT_CARD';
      NOT_ACH: 'NOT_ACH';
      ONLY_CASH: 'ONLY_CASH';
      ONLY_CARD: 'ONLY_CARD';
      ONLY_ACH: 'ONLY_ACH';
      PAY: 'PAY';
      BOOK: 'BOOK';
      DONATE: 'DONATE';
      CHECKOUT: 'CHECKOUT';
      WHITE: 'white';
      GREY: 'grey';
      BLACK: 'black';
      PURPLE: 'purple';
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any;
    };
  }
}
