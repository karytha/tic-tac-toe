import styled from 'styled-components';

export const PlayerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 10px;
  padding: 10px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(0, 234, 255, 0.05);
  }
  
  @media (max-width: 768px) {
    gap: 8px;
    padding: 8px;
  }
  
  @media (max-width: 480px) {
    gap: 6px;
    padding: 6px;
  }
`;

export const PlayerIcon = styled.img`
  width: 24px;
  height: 24px;
  
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
  
  @media (max-width: 480px) {
    width: 18px;
    height: 18px;
  }
`;

export const PlayerName = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;  
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;