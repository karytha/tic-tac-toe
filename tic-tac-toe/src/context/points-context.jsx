"use client";
import { createContext, useContext, useState } from 'react';
import { WIN_POINTS } from '@/constants/constantes';

const PointsContext = createContext();

export const PointsProvider = ({ children }) => {
    const [points, setPoints] = useState({
        X: 0,
        O: 0
    });

    const handlePoints = (player) => {
        setPoints(prev => ({
            ...prev,
            [player]: prev[player] === WIN_POINTS ? prev[player] : prev[player] + 1
        }));
    }

    return <PointsContext.Provider value={{ points, setPoints, handlePoints }}>{children}</PointsContext.Provider>
}

export const usePoints = () => useContext(PointsContext);