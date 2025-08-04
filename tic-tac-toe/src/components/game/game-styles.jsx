import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  margin-top: 50px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px;
  width: 100%;
  margin-bottom: 20px;
`;

export const PlayersAndTimer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const MessageBox = styled.div`
  text-align: center;
  margin-top: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  font-weight: bold;
  color: red;
`;

export const TableAndScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  position: relative;
`;
