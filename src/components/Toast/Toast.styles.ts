import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 16px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #fff4ef;
  padding: 6px 10px;
  gap: 12px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ErrorLabel = styled.span`
  border-radius: 2px;
  padding: 2px 6px;
  background-color: #a90a00;
  border: 1px solid #ffece3;
  font-size: 14px;
  font-weight: 300;
  line-height: 18px;
  color: #ffffff;
`;

export const ErrorMessage = styled.span`
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  color: #424649;
`;
