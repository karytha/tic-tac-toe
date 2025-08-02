"use client";

import React from 'react'
import { TableContainer, TableItem } from './table-styles'
import handleTable from './hooks/handleTable'
import { useColor } from '@/context/color-context';

const Table = () => {
  const { table, currentPlayer, isGameOver, handlerColorCell, winner, handleCellClick } = handleTable();
  const { backgroundTableColor, winnerColor, loserColor, fontColor, fontColorX, fontColorO } = useColor();
  const currentColor = (index) => index === 'X' ? fontColorX : fontColorO;
  console.log('aqui', fontColorX, fontColorO);

  return (
    <TableContainer >
      {table.map((item, index) => (
        <TableItem key={index} onClick={() => handleCellClick(index)} background={handlerColorCell(index, backgroundTableColor, winnerColor)} color={item === 'X' ? fontColorX : fontColorO}>
          {item}
        </TableItem>
      ))}
    </TableContainer>
  )
}
export default Table