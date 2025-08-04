import { styled } from "styled-components";

export const TableContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 10px;
  width: 300px;
  height: 300px;
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
    gap: 6px;
  }
  
  @media (max-width: 360px) {
    width: 180px;
    height: 180px;
    gap: 4px;
  }
`;

export const TableItem = styled.div.withConfig({
  shouldForwardProp: (prop) => !['background', 'color'].includes(prop)  // Evita que o styled-components faça o spread de propriedades que não são suportadas 
})`
  width: 100%;
  height: 100%;
  color: ${(props) => props.color};
  font-weight: bold;
  background-color:  ${(props) => props.background};
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 4px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
  
  @media (max-width: 360px) {
    font-size: 1.8rem;
  }

  &:hover {
    background-color: transparent;
    transform: scale(1.02);
  }
  
  &:active {
    background-color:rgba(192, 192, 192, 0.19);
    transform: scale(0.98);
  }
`;