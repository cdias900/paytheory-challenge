import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export const Label = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #1b1b1b;
  margin-left: 12px;
`;

export const Box = styled.div`
  width: 20px;
  height: 20px;
  background-color: #e5eef7;
  border-radius: 2px;
  border: 1px solid #94999e;
  display: flex;
  align-items: center;
  justify-content: center;
`;
