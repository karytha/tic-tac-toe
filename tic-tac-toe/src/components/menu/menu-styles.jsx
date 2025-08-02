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
`;


