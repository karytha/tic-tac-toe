import { useState, useRef, useEffect, useCallback } from "react";
import useTurnPlayerTimer from "./useTurnPlayerTime";
import { TURN_PLAYER_LABEL, DRAW_LABEL } from "@/constants/constantes";
import { usePoints } from "@/context/points-context";

const INITIAL_STATE = Array(9).fill(null)


const handleTable = () => {
    const [table, setTable] = useState(INITIAL_STATE);
    const [message, setMessage] = useState(TURN_PLAYER_LABEL);
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);
    const { handlePoints } = usePoints();

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
        setMessage(`${TURN_PLAYER_LABEL} ${currentPlayer}`);
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

    const { timeLeft, reset, stopTimer } = useTurnPlayerTimer(5, () => {
        if (!hasPlayedRef.current && !isGameOver) {
            makeRandomMove();
        }
        if (!isGameOver) {
            switchPlayer();
        }
    });

    const handleNewGame = () => {
        setTable(INITIAL_STATE);
        setCurrentPlayer('X');
        setWinner(null);
        setIsGameOver(false);
        setMessage(TURN_PLAYER_LABEL);
        reset();
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

    const isDraw = table.every(cell => cell !== null) && winCombination.length === 0;

    useEffect(() => {
        if (winCombination.length > 0 && !isGameOver) {
            const winningPlayer = table[winCombination[0][0]];
            setWinner(winningPlayer);
            handlePoints(winningPlayer);
            setIsGameOver(true);
            setMessage(`Vencedor: ${winningPlayer}`);
            stopTimer();
        } else if (isDraw && !isGameOver) {
            setIsGameOver(true);
            setMessage(DRAW_LABEL);
            stopTimer();
        }
    }, [table, isGameOver, isDraw, stopTimer]);

    const handlerColorCell = (index, tableColor, winColor) => winCombination[0]?.includes(index) ? winColor : tableColor

    return {
        table,
        message,
        currentPlayer,
        winner,
        isGameOver,
        winCombination,
        handleNewGame,
        handlerColorCell,
        timeLeft,
        handleCellClick,
        switchPlayer,
    };
}

export default handleTable;