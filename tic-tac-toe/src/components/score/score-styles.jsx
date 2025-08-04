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
`;

export const ScoreTitle = styled.h1`
  font-size: 20px;
  margin-bottom: 10px;
  color: #333;
`;

export const ScoreValue = styled.div`
  font-size: 18px;
  margin: 4px 0;
  color: #555;
  font-weight: bold;
`;
