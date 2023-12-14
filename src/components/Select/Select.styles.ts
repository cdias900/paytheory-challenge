import styled from 'styled-components';

export const SelectContainer = styled.div`
  padding: 2px;
  gap: 2px;
  border: 1px solid #ced9e6;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

type SelectOptionType = {
  selected?: boolean;
};

export const SelectOption = styled.span<SelectOptionType>`
  flex-grow: 1;
  font-family: 'halyard-text', sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: ${({ selected }) => (selected ? '#ffffff' : '#94999E')};
  background-color: ${({ selected }) => (selected ? '#420050' : '#ffffff')};
  text-align: center;
  border-radius: 8px;
  padding: 5px 0;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    filter: brightness(115%);
  }

  &:active {
    filter: brightness(90%);
  }
`;
