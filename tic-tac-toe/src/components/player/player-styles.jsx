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
`;

export const PlayerIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const PlayerName = styled.h1`
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;  
  transition: all 0.3s ease;
`;