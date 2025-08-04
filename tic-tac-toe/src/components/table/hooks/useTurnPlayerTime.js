import { useState, useEffect, useRef, useCallback } from 'react';

const useTurnPlayerTimer = (durationSeconds = 5, onTimeout) => {
    const [timeLeft, setTimeLeft] = useState(durationSeconds);
    const intervalRef = useRef(null);

    const reset = useCallback(() => {
        setTimeLeft(durationSeconds);
    }, [durationSeconds]);

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev === 1) {
                    clearInterval(intervalRef.current);
                    onTimeout?.();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(intervalRef.current);
    }, [reset, onTimeout]);
    return { timeLeft, reset };
}

export default useTurnPlayerTimer;