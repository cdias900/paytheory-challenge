import { useCallback, useEffect } from 'react';

import { Toast } from 'components';
import { sdkStyles } from 'constants/sdkStyles';

import { ContentLeft, ContentRight } from './components';
import { Container } from './Home.styles';

export const Home = () => {
  const setupSDK = useCallback(async () => {
    await window.paytheory.payTheoryFields({
      apiKey: process.env.REACT_APP_PAYTHEORY_API_KEY,
      styles: sdkStyles,
    });
  }, []);

  useEffect(() => {
    setupSDK();
  }, [setupSDK]);

  return (
    <Container>
      <Toast />
      <ContentLeft />
      <ContentRight />
    </Container>
  );
};
