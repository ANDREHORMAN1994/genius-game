import {
  useCallback, useEffect, useState,
} from 'react';

interface IButtonProps {
  color: string;
  soundUrl: string;
  imgUrlOff: string;
  imgUrlOn: string;
  imgAlt: string;
  position: string;
  rounded: string;
  sequence: string[];
  timerRef: React.MutableRefObject<number>;
  isUserTurn: boolean;
  setIsUserTurn: React.Dispatch<React.SetStateAction<boolean>>;
  setUserSequence: React.Dispatch<React.SetStateAction<string[]>>;
  addLevel: (color: string) => void;
}

function Button({
  color,
  soundUrl,
  imgUrlOff,
  imgUrlOn,
  imgAlt,
  position,
  rounded,
  sequence,
  timerRef,
  isUserTurn,
  setIsUserTurn,
  setUserSequence,
  addLevel,
}: IButtonProps) {
  const [status, setStatus] = useState<boolean>(false);

  const handleClickUser = useCallback(async () => {
    const TIMER_BTN_ON = 500;
    const audio = new Audio(soundUrl);
    audio.volume = 1;
    await audio.play();

    setStatus(true);
    setTimeout(() => {
      audio.pause();
      setStatus(false);
      addLevel(color);
    }, TIMER_BTN_ON);
  }, [addLevel, color, soundUrl]);

  const handleClickBot = useCallback(async (index: number) => {
    const TIMER_BTN_ON = 500;
    const audio = new Audio(soundUrl);
    audio.volume = 1;
    await audio.play();

    setStatus(true);
    setTimeout(() => {
      audio.pause();
      setStatus(false);
      if (index === sequence.length - 1) {
        setIsUserTurn(true);
        setUserSequence([]);
      }
    }, TIMER_BTN_ON);
  }, [sequence.length, setIsUserTurn, setUserSequence, soundUrl]);

  useEffect(() => {
    if (sequence.length > 0 && !isUserTurn) {
      sequence.forEach((c, index) => {
        const TIMER_ACC_BTN = (index + 1) * timerRef.current;
        if (c === color) {
          setTimeout(async () => {
            await handleClickBot(index);
          }, TIMER_ACC_BTN);
        }
      });
    }
  }, [color, handleClickBot, isUserTurn, sequence, timerRef]);

  return (
    <button
      type="button"
      className={`${position} z-20 h-auto w-[20rem] ${rounded} overflow-hidden ${status ? 'hover:brightness-[1.2]' : 'hover:brightness-[.7]'} hover:scale-90 transition-all duration-100 ease-in-out ${isUserTurn ? 'cursor-pointer' : 'cursor-not-allowed'}}`}
      onClick={handleClickUser}
      disabled={!isUserTurn}
    >
      <img src={status ? imgUrlOn : imgUrlOff} alt={imgAlt} />
    </button>
  );
}

export default Button;
