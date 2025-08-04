"use client";

import React from 'react'
import { TableContainer, TableItem } from './table-styles'
import Player from "@/components/player/player";
import { useColor } from '@/context/color-context';
import { X_LABEL, O_LABEL } from '@/constants/constantes';

const Table = ({ gameState }) => {
  const { table, currentPlayer, isGameOver, handlerColorCell, winner, handleCellClick, switchPlayer, timeLeft, isGameStarted } = gameState;
  const { backgroundTableColor, winnerColor, loserColor, fontColor, fontColorX, fontColorO } = useColor();

  return (
    <TableContainer >
      {table.map((item, index) => (
        <TableItem
          key={index}
          onClick={() => handleCellClick(index)}
          background={handlerColorCell(index, backgroundTableColor, winnerColor)}
          color={item === X_LABEL ? fontColorX : fontColorO}
          style={{
            cursor: isGameStarted ? 'pointer' : 'not-allowed',
            opacity: isGameStarted ? 1 : 0.6,
            filter: isGameStarted ? 'none' : 'grayscale(50%)'
          }}
        >
          {item}
        </TableItem>
      ))}
    </TableContainer>

  )
}
export default Table