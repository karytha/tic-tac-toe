import { useState, useRef, useEffect, useCallback } from "react";
import useTurnPlayerTimer from "./useTurnPlayerTime";
import { TURN_PLAYER_LABEL, DRAW_LABEL } from "@/constants/constantes";
import { usePoints } from "@/context/points-context";
import { useMessage } from "@/context/message-context";

const INITIAL_STATE = Array(9).fill(null)
const WIN_POINTS = 11;

const useHandleTable = () => {
    const [table, setTable] = useState(INITIAL_STATE);
    const [currentPlayer, setCurrentPlayer] = useState('X');
    const [winner, setWinner] = useState(null);
    const [isGameOver, setIsGameOver] = useState(false);
    const { handlePoints, points, setPoints } = usePoints();
    const { setMessage } = useMessage();
    const hasPlayedRef = useRef(false);
    const timeoutRef = useRef(null);

    const { timeLeft, reset, stopTimer, setTimeLeft } = useTurnPlayerTimer(5, () => {
        if (!hasPlayedRef.current && !isGameOver) {
            makeRandomMove();
        }
        if (!isGameOver) {
            switchPlayer();
        }
    });

    const switchPlayer = () => {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
        hasPlayedRef.current = false;
        reset(); // ✅ Reset timer quando muda jogador
    }

    const makeRandomMove = () => {
        if (winner || isGameOver) return;
        const emptyIndices = table
            .map((cell, index) => (cell === null ? index : null))
            .filter(index => index !== null);
        if (emptyIndices.length === 0) return;
        const randomIndex = emptyIndices[Math.floor(Math.random() * emptyIndices.length)];
        const newTable = [...table];
        newTable[randomIndex] = currentPlayer;
        setTable(newTable);
        hasPlayedRef.current = true;
        switchPlayer();
    };

    const handleCellClick = (index) => {
        if (table[index] || winner || isGameOver) return;
        if (index !== null) {
            const newTable = [...table];
            newTable[index] = currentPlayer;
            setTable(newTable);
            hasPlayedRef.current = true;
            switchPlayer(); // ✅ Reset timer após jogada manual
        }
    }

    const handleNewGame = useCallback(() => {
        setTable(INITIAL_STATE);
        setCurrentPlayer('X');
        setWinner(null);
        setIsGameOver(false);
        setMessage(TURN_PLAYER_LABEL);
        reset(); // ✅ Reset timer no início do jogo
    }, [setMessage, reset]);

    const startNewGameWithDelay = useCallback(() => {
        setMessage(prev => prev + ' =>  Nova Partida em 2 segundos...');
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }

        timeoutRef.current = setTimeout(() => {
            handleNewGame();
        }, 2000);
    }, [handleNewGame, setMessage]);

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
        if (points?.X >= WIN_POINTS && !isGameOver) {
            setWinner('X');
            setIsGameOver(true);
            setMessage('Jogador X venceu o campeonato!');
            stopTimer();
            setTimeout(() => {
                stopTimer();
                setPoints({ X: 0, O: 0 });
                setTable(INITIAL_STATE);
            }, 3000);
        } else if (points?.O >= WIN_POINTS && !isGameOver) {
            setWinner('O');
            setIsGameOver(true);
            setMessage('Jogador O venceu o campeonato!');
            stopTimer();
            setTimeout(() => {
                setPoints({ X: 0, O: 0 });
                setTable(INITIAL_STATE);
            }, 3000);
        }
    }, [points, isGameOver, setMessage, stopTimer, setPoints]);

    useEffect(() => {
        if (!isGameOver && !winCombination.length && !isDraw) {
            setMessage(`${TURN_PLAYER_LABEL} ${currentPlayer}`);
        }
    }, [currentPlayer, isGameOver, winCombination.length, isDraw, setMessage]);

    useEffect(() => {
        if (winCombination.length > 0 && !isGameOver) {
            const winningPlayer = table[winCombination[0]?.[0]];
            setWinner(winningPlayer);
            handlePoints(winningPlayer);
            setIsGameOver(true);
            setMessage(`Vencedor: ${winningPlayer}`);
            stopTimer(); // ✅ Parar timer quando há vitória
            setTimeout(() => {
                setTable(INITIAL_STATE);
            }, 2000);
        } else if (isDraw && !isGameOver) {
            setIsGameOver(true);
            setMessage(DRAW_LABEL);
            stopTimer(); // ✅ Parar timer quando há empate
            setTimeout(() => {
                setTable(INITIAL_STATE);
            }, 2000);
        }
    }, [winCombination, isDraw, isGameOver, table, handlePoints, setMessage, stopTimer]);

    useEffect(() => {
        if (isGameOver) {
            startNewGameWithDelay();
        }
    }, [isGameOver, startNewGameWithDelay]);

    // Cleanup
    useEffect(() => {
        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        };
    }, []);

    const handlerColorCell = (index, tableColor, winColor) => winCombination[0]?.includes(index) ? winColor : tableColor

    return {
        table,
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

export default useHandleTable; 