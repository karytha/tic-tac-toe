import styled from "styled-components";

export const ScoreCard = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  min-width: 160px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000000;
  
  @media (max-width: 768px) {
    padding: 15px 20px;
    min-width: 140px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 16px;
    min-width: 120px;
  }
  
  @media (max-width: 360px) {
    padding: 10px 12px;
    min-width: 100px;
  }
`;

export const ScoreTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
  
  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 6px;
  }
  
  @media (max-width: 360px) {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const ScoreValue = styled.div`
  font-size: 18px;
  margin: 4px 0;
  color: #555;
  font-weight: bold;
  
  @media (max-width: 768px) {
    font-size: 16px;
    margin: 3px 0;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    margin: 2px 0;
  }
  
  @media (max-width: 360px) {
    font-size: 12px;
    margin: 2px 0;
  }
`;
