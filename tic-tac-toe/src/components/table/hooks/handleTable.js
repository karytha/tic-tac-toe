import { useState } from "react";

const handleTable = () => {
    const [table, setTable] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);

    const handleCellClick = (index) => {
        if (table[index] || winner || isGameOver) return;
        const newTable = [...table];
        newTable[index] = currentPlayer;
        setTable(newTable);
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
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
            const [a, b, c] = combination;
            return (
                table[a] !== null &&
                table[a] === table[b] &&
                table[a] === table[c]
            );
        })
       
    


    return { table, currentPlayer, winner, isGameOver, winCombination, winner: table[winCombination?.[0]?.[0]], handleCellClick };
}

export default handleTable;