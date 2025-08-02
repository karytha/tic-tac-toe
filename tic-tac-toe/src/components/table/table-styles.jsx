import { styled } from "styled-components";

export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
`;

export const TableItem = styled.div`
  width: 100px;
  height: 100px;
  color: ${(props) => props.color || 'black'};
  font-weight: bold;
  font-size: 96px;
  background-color:  ${(props) => props.background};
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
  &:active {
    background-color: #c0c0c0;
  }
`;