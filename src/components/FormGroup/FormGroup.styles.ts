import styled from 'styled-components';

export const Container = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin: 0 0 32px 0;
  border: none;
  padding: 0;
`;

export const GroupTitle = styled.legend`
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  color: #1b1b1b;
  margin-bottom: 4px;
  padding: 0;
`;

export const GroupInputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
