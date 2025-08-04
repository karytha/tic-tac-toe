import React from 'react'
import { PlayerContainer, PlayerName } from './player-styles'

const Player = ({ player, currentColor }) => {
    console.log(currentColor);
    return (
        <PlayerContainer>
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill={currentColor === '#000000' ? '#fff' : currentColor}
                style={{ width: '24px', height: '24px' }}
            >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <PlayerName>Jogador {player}</PlayerName>
        </PlayerContainer>
    )
}

export default Player