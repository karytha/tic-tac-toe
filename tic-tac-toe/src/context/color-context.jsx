"use client";
import { createContext, useContext, useState } from 'react';


const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
    const [backgroundTableColor, setBackgroundTableColor] = useState('#ffffff');
    const [winnerColor, setWinnerColor] = useState('#000000');
    const [loserColor, setLoserColor] = useState('#000000');
    const [fontColor, setFontColor] = useState('#000000');
    const [fontColorX, setFontColorX] = useState('#000000');
    const [fontColorO, setFontColorO] = useState('#000000');



    return <ColorContext.Provider value={{ backgroundTableColor, setBackgroundTableColor, winnerColor, setWinnerColor, loserColor, setLoserColor, fontColor, setFontColor, fontColorX, setFontColorX, fontColorO, setFontColorO }}>{children}</ColorContext.Provider>
}

export const useColor = () => useContext(ColorContext);