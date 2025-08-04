import { useState, useRef, useEffect } from "react";
import useTurnPlayerTimer from "./useTurnPlayerTime";

const INITIAL_STATE = Array(9).fill(null)


const handleTable = () => {
    const [table, setTable] = useState(INITIAL_STATE);
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);
    const hasPlayedRef = useRef(false);

    const switchPlayer = () => {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        hasPlayedRef.current = false;
    }

    const handleCellClick = (index) => {
        if (table[index] || winner || isGameOver) return;
        const newTable = [...table];
        newTable[index] = currentPlayer;
        setTable(newTable);
        hasPlayedRef.current = true;
        switchPlayer();
        reset();
    }

    const makeRandomMove = () => {
        if (winner || isGameOver) return;
        const emptyIndices = table
            .map((cell, index) => (cell === null ? index : null))
            .filter(index => index !== null);
        if (emptyIndices.length === 0) return;
        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        handleCellClick(randomIndex);
    };

    const { timeLeft, reset } = useTurnPlayerTimer(5, () => {
        if (!hasPlayedRef.current) {
            makeRandomMove();
        }
        switchPlayer();
        reset();
    });

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

    useEffect(() => {
        if (winCombination.length > 0) {
            setWinner(table[winCombination?.[0]?.[0]]);
            setIsGameOver(true);
            reset();
        }
    }, [winCombination]);

    const handlerColorCell = (index, tableColor, winColor) => winCombination[0]?.includes(index) ? winColor : tableColor

    return { table, currentPlayer, winner, isGameOver, winCombination, handleNewGame, handlerColorCell, winner: table[winCombination?.[0]?.[0]], timeLeft, handleCellClick, switchPlayer };
}

export default handleTable;