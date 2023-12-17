import { CSSProperties } from 'react';

export type SdkInputProps = {
  id: string;
  style: CSSProperties;
  error?: string;
  noErrorIcon?: boolean;
};
