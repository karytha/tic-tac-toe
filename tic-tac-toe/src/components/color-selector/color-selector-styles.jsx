import styled from 'styled-components';

export const ColorSelectorContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  padding: 5px;
  
  @media (max-width: 768px) {
    gap: 8px;
    padding: 4px;
  }
  
  @media (max-width: 480px) {
    gap: 6px;
    padding: 3px;
  }
`;

export const ColorSelectorInput = styled.input`
   display: flex;
     flex-direction: column;
     gap: 10px;
     border: 1px solid #000;
     border-radius: 5px;
     height: 30px;
     
     @media (max-width: 768px) {
       height: 25px;
       gap: 8px;
     }
     
     @media (max-width: 480px) {
       height: 22px;
       gap: 6px;
     }
`;

export const ColorSelectorLabel = styled.label`
  font-size: 12px;
  font-weight: bold;
  color: #000;
  
  @media (max-width: 768px) {
    font-size: 11px;
  }
  
  @media (max-width: 480px) {
    font-size: 10px;
  }
`;