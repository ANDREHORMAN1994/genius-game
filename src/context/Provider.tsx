import {
  ReactNode, createContext, useCallback, useEffect, useMemo, useState,
} from 'react';
import { useCookies } from 'react-cookie';

export const SimonContext = createContext({
  score: 0,
  setScore: (_score: number) => {},
  highest: 0,
  setHighest: (_highest: number) => {},
  maxHighest: (_newScore: number) => {},
});

function Provider({ children }: { children: ReactNode }) {
  const [score, setScore] = useState<number>(0);
  const [highest, setHighest] = useState<number>(0);
  const [cookies, setCookie] = useCookies<string>(['highest']);

  const maxHighest = useCallback((newScore: number) => {
    if (newScore > highest) {
      setCookie('highest', newScore);
    }
  }, [highest, setCookie]);

  useEffect(() => {
    const cookieHighest: number = cookies?.highest || 0;
    if (cookieHighest) {
      setHighest(cookieHighest);
    }
  }, [cookies?.highest]);

  const contextValue = useMemo(() => ({
    score,
    setScore,
    highest,
    setHighest,
    maxHighest,
  }), [highest, maxHighest, score]);

  return (
    <SimonContext.Provider value={contextValue}>
      {children}
    </SimonContext.Provider>
  );
}

export default Provider;
