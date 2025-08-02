"use client";

import React from 'react'
import { TableContainer, TableItem } from './table-styles'
import handleTable from './hooks/handleTable'   


const Table = () => {
const { table, currentPlayer, isGameOver, winCombination, winner, handleCellClick } = handleTable();
console.log(winCombination, winner)
  return (
    <TableContainer>
      {table.map((item, index) => (
        <TableItem key={index} onClick={() => handleCellClick(index)} background={winCombination[0]?.includes(index) ? 'red' : 'green'}>
          {item}
        </TableItem>
      ))}
    </TableContainer>
  )
}
export default Table