"use client";

import React from 'react'
import { TableContainer, TableItem } from './table-styles'
import Timer from "@/components/timer/timer";

import handleTable from './hooks/handleTable'
import { useColor } from '@/context/color-context';

const Table = () => {
  const { table, currentPlayer, isGameOver, handlerColorCell, winner, handleCellClick, switchPlayer, timeLeft } = handleTable();
  const { backgroundTableColor, winnerColor, loserColor, fontColor, fontColorX, fontColorO } = useColor();

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', justifyContent: 'left' }}>
      <h2>{winner ? `Vencedor: ${winner}` : `Vez do jogador: ${currentPlayer}`}</h2>
        <Timer timeLeft={timeLeft} />
      </div>
      
      <TableContainer >
        
        {table.map((item, index) => (
          <TableItem key={index} onClick={() => handleCellClick(index)} background={handlerColorCell(index, backgroundTableColor, winnerColor)} color={item === 'X' ? fontColorX : fontColorO}>
            {item}
          </TableItem>
        ))}
      </TableContainer>
    </>
  )
}
export default Table