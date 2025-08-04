"use client";
import { createContext, useContext, useState } from 'react';


const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
    const [backgroundTableColor, setBackgroundTableColor] = useState('#ffffff');
    const [winnerColor, setWinnerColor] = useState('#44c017');
    const [fontColorX, setFontColorX] = useState('#888888');
    const [fontColorO, setFontColorO] = useState('#888888');

    return <ColorContext.Provider value={{ backgroundTableColor, setBackgroundTableColor, winnerColor, setWinnerColor, fontColorX, setFontColorX, fontColorO, setFontColorO }}>{children}</ColorContext.Provider>
}

export const useColor = () => useContext(ColorContext);