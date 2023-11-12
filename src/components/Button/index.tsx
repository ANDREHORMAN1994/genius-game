import {
  useCallback, useEffect, useRef, useState,
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
}: IButtonProps) {
  const [status, setStatus] = useState<boolean>(false);
  const statusRef = useRef<boolean>(status);

  const handleClick = useCallback(async () => {
    const TIMER_BTN_ON = 500;
    const audio = new Audio(soundUrl);
    audio.volume = 1;

    setStatus(true);
    await audio.play();
    setTimeout(() => {
      setStatus(false);
      audio.pause();
    }, TIMER_BTN_ON);
  }, [soundUrl]);

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  useEffect(() => {
    if (sequence.length > 0) {
      sequence.forEach((c, index) => {
        if (!statusRef.current && c === color) {
          const TIMER_ACC_BTN = (index + 1) * timerRef.current;
          setTimeout(handleClick, TIMER_ACC_BTN);
        }
      });
    }
  }, [color, handleClick, sequence, timerRef]);

  return (
    <button
      type="button"
      className={`${position} z-20 h-auto w-[20rem] ${rounded} overflow-hidden ${status ? 'hover:brightness-[1.2]' : 'hover:brightness-[.7]'} hover:scale-90 transition-all duration-100 ease-in-out`}
      onClick={handleClick}
    >
      <img src={status ? imgUrlOn : imgUrlOff} alt={imgAlt} />
    </button>
  );
}

export default Button;
