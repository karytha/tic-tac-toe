"use client";
import { createContext, useContext, useState } from 'react';
import { INITIAL_MESSAGE } from '@/constants/constantes';

const MessageContext = createContext();

export const MessageProvider = ({ children }) => {
    const [message, setMessage] = useState(INITIAL_MESSAGE);

    return <MessageContext.Provider value={{ message, setMessage }}>{children}</MessageContext.Provider>
}

export const useMessage = () => useContext(MessageContext);