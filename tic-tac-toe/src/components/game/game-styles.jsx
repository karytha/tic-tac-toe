import styled from "styled-components";

export const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: left;
  width: 100%;
  padding: 0 20px;
  max-width: 1200px;
  margin-top: 100px;
  @media (max-width: 768px) {
    margin-top: 100px;
    align-items: center;
    padding: 0 10px;
  }

  @media (max-width: 480px) {
    margin-top: 5px;
    padding: 0 5px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  `

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
  color: black;
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
  padding: 50px;
  border-radius: 10px;
  margin-top: 20px;
  position: relative;
  flex-wrap: wrap;
  background-color: #fff;    

  @media (max-width: 768px) {
    gap: 40px;
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    gap: 30px;
    margin-top: 10px;
    flex-direction: column;
  }
`;

export const Overlay = styled.div`
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    border-radius: 8px;
    backdrop-filter: blur(1px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 20px;
`;

export const InvitationText = styled.div`
    color: white;
    font-size: clamp(18px, 4vw, 24px);
    font-weight: bold;
    margin-bottom: clamp(15px, 3vw, 20px);
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    z-index: 1001;
    line-height: 1.2;
`;

export const StyledButton = styled.button`
    padding: clamp(12px, 2.5vw, 16px) clamp(24px, 5vw, 32px);
    font-size: clamp(14px, 3vw, 18px);
    font-weight: bold;
    background-color: #44c017;
    color: white;
    border: none;
    border-radius: 12px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    transition: all 0.3s ease;
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255,255,255,0.2);
    z-index: 1001;
    min-width: clamp(120px, 25vw, 160px);
    min-height: clamp(40px, 8vw, 50px);

    &:hover {
        background-color: #3aa015;
        transform: translateY(-2px) scale(1.05);
        box-shadow: 0 6px 16px rgba(0,0,0,0.4);
    }
    &:focus, &:active {
        outline: none;
        background-color: #3aa015;
    }
`;