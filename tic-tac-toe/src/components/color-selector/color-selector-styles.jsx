import styled from 'styled-components';

export const ColorSelectorContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding: 5px;
`;

export const ColorSelectorInput = styled.input`
   display: flex;
     flex-direction: column;
     gap: 10px;
     border: 1px solid #000;
     border-radius: 5px;
     height: 30px;
`;

export const ColorSelectorLabel = styled.label`
  font-size: 12px;
  font-weight: bold;
  color: #000;`