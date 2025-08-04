import { useState, useEffect, useRef, useCallback } from 'react';

const useTurnPlayerTimer = (durationSeconds = 5, onTimeout) => {
    const [timeLeft, setTimeLeft] = useState(durationSeconds);
    const [isRunning, setIsRunning] = useState(true);
    const intervalRef = useRef(null);

    const reset = useCallback(() => {
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
            intervalRef.current = setInterval(() => {
                setTimeLeft(prev => {
                    if (prev === 1) {
                        clearInterval(intervalRef.current);
                        intervalRef.current = null;
                        setIsRunning(false);
                        onTimeout?.();
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
    }, [isRunning, timeLeft, onTimeout]);

    return {
        timeLeft,
        reset,
        stopTimer,
        pauseTimer,
        resumeTimer,
        isRunning
    };
}

export default useTurnPlayerTimer;