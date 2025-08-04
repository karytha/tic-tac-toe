import styled from "styled-components";

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #44C017;
  color: #fff;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  font-size: 1rem;
  min-width: 60px;
  
  @media (max-width: 768px) {
    padding: 4px;
    font-size: 0.9rem;
    min-width: 50px;
  }
  
  @media (max-width: 480px) {
    padding: 3px;
    font-size: 0.8rem;
    min-width: 45px;
  }
  
  @media (max-width: 360px) {
    padding: 2px;
    font-size: 0.7rem;
    min-width: 40px;
  }
`;