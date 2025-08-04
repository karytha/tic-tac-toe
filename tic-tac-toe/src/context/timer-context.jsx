"use client"
import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';

const TimerContext = createContext();

export const useTimer = () => {
    return useContext(TimerContext);
};

export const TimerProvider = ({ children }) => {
    const [durationSeconds, setDurationSeconds] = useState(5);
    const [timeLeft, setTimeLeft] = useState(durationSeconds);
    const [isRunning, setIsRunning] = useState(true);
    const intervalRef = useRef(null);

    const reset = useCallback(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setTimeLeft(durationSeconds);
        setIsRunning(true);
    }, [durationSeconds]);

    const stopTimer = useCallback(() => {
        setTimeLeft(0);
        setIsRunning(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const pauseTimer = useCallback(() => {
        setIsRunning(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }, []);

    const resumeTimer = useCallback(() => {
        if (!isRunning && timeLeft > 0) {
            setIsRunning(true);
        }
    }, [isRunning, timeLeft]);

    useEffect(() => {
        if (isRunning && timeLeft > 0) {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }

            intervalRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev === 1) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                        setIsRunning(false);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [isRunning, timeLeft]);

    return (
        <TimerContext.Provider value={{ timeLeft, setTimeLeft, setDurationSeconds, durationSeconds, isRunning, setIsRunning, reset, stopTimer, pauseTimer, resumeTimer }}>
            {children}
        </TimerContext.Provider>
    );
}