import { useEffect, useRef, useState } from 'react';

interface IButtonProps {
  color: string;
  imgUrlOff: string;
  imgUrlOn: string;
  imgAlt: string;
  position: string;
  rounded: string;
  sequence: string[];
  timer: number;
}

function Button({
  color,
  imgUrlOff,
  imgUrlOn,
  imgAlt,
  position,
  rounded,
  sequence,
  timer,
}: IButtonProps) {
  const [status, setStatus] = useState<boolean>(false);
  const statusRef = useRef<boolean>(status);

  const handleClick = () => {
    const TIMER_BTN_ON = 500;
    setStatus(true);
    setTimeout(() => {
      setStatus(false);
    }, TIMER_BTN_ON);
  };

  useEffect(() => {
    statusRef.current = status;
  }, [status]);

  useEffect(() => {
    if (sequence.length > 0) {
      sequence.forEach((c, index) => {
        if (!statusRef.current && c === color) {
          const TIMER_ACC_BTN = (index + 1) * timer;
          setTimeout(handleClick, TIMER_ACC_BTN);
        }
      });
    }
  }, [color, sequence, timer]);

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
