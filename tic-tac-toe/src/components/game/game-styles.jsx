import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  margin-top: 20px;
  width: 100%;
  padding: 0 20px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    margin-top: 10px;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    margin-top: 5px;
    padding: 0 5px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  width: 100%;
  margin-bottom: 20px;

  h1 {
    font-size: 2.5rem;
    margin: 0;
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    gap: 10px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
  }
`;

export const PlayersAndTimer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    gap: 10px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const MessageBox = styled.div`
  text-align: center;
  margin-top: 10px;
  padding: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  font-weight: bold;
  color: red;
  font-size: 1rem;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 8px;
  }
  
  @media (max-width: 480px) {
    font-size: 0.8rem;
    padding: 6px;
  }
`;

export const TableAndScore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  margin-top: 20px;
  position: relative;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-top: 10px;
    flex-direction: column;
  }
`;
