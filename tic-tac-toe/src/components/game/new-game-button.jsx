import React from 'react';
import { StyledButton, Overlay, InvitationText } from "./game-styles";
import { NEW_GAME_BUTTON_TEXT, NEW_GAME_INVITATION_TEXT } from "@/constants/constantes";

const NewGameButton = ({ onStartGame }) => {
    return (
        <Overlay>
            <InvitationText>
                {NEW_GAME_INVITATION_TEXT}
            </InvitationText>
            <StyledButton onClick={onStartGame}>
                {NEW_GAME_BUTTON_TEXT}
            </StyledButton>
        </Overlay>
    );
};

export default NewGameButton;