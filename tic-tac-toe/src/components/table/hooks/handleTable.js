import { useState } from "react";
import handleTimer from "./useTurnPlayerTime";

const INITIAL_STATE = Array(9).fill(null)


const handleTable = () => {
    const [table, setTable] = useState(INITIAL_STATE);
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);

    const switchPlayer = () => {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }

    const handleCellClick = (index) => {
        if (table[index] || winner || isGameOver) return;
        const newTable = [...table];
        newTable[index] = currentPlayer;
        setTable(newTable);
        switchPlayer();
    }

    const handleNewGame = () => {
        setTable(INITIAL_STATE);
        setCurrentPlayer('X');
        setWinner(null);
        setIsGameOver(false);
    }

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    const winCombination = winningCombinations.filter(combination => {
        const [itemCellA, itemCellB, itemCellC] = combination;
        return (
            table[itemCellA] !== null &&
            table[itemCellA] === table[itemCellB] &&
            table[itemCellA] === table[itemCellC]
        );
    })

    const handlerColorCell = (index, tableColor, winColor) => winCombination[0]?.includes(index) ? winColor : tableColor

    return { table, currentPlayer, winner, isGameOver, winCombination, handleNewGame, handlerColorCell, winner: table[winCombination?.[0]?.[0]], handleCellClick, switchPlayer };
}

export default handleTable;