import { CardInput, Container, ErrorIcon, ErrorText } from './SdkInput.styles';
import { SdkInputProps } from './SdkInput.types';

export const SdkInput = ({ id, style, error, noErrorIcon }: SdkInputProps) => {
  return (
    <Container style={style}>
      <CardInput $error={!!error} id={id} />
      {!!error && (
        <>
          <ErrorText>{error}</ErrorText>
          {!noErrorIcon && <ErrorIcon />}
        </>
      )}
    </Container>
  );
};
