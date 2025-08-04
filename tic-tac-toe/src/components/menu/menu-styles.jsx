import styled from 'styled-components';

export const ContainerMenu = styled.div`
  position: relative;
  display: inline-block;
`;

export const BotaoMenu = styled.button`
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
  
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

export const MenuFlutuante = styled.div.withConfig({
    shouldForwardProp: (prop) => prop !== 'showMenu'
})`
  position: absolute;
  top: 0;
  left: 100%;
  min-width: 200px;
  margin-left: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0px 8px 16px rgba(0,0,0,0.2);
  z-index: 1;
  display: ${props => (props.showMenu ? 'block' : 'none')};
  
  @media (max-width: 768px) {
    min-width: 180px;
    margin-left: 8px;
    padding: 8px;
  }
  
  @media (max-width: 480px) {
    min-width: 160px;
    margin-left: 5px;
    padding: 6px;
    left: 0;
    top: 100%;
    margin-top: 5px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;


