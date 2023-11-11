import { useEffect, useState } from 'react';

interface IButtonProps {
  color: string;
  imgUrlOff: string;
  imgUrlOn: string;
  imgAlt: string;
  position: string;
  rounded: string;
  sequence: string[];
}

function Button({
  color,
  imgUrlOff,
  imgUrlOn,
  imgAlt,
  position,
  rounded,
  sequence,
}: IButtonProps) {
  const [status, setStatus] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(1000);

  const handleClick = () => {
    setStatus(true);
    setTimeout(() => {
      setStatus(false);
    }, 500);
  };

  useEffect(() => {
    if (sequence.length > 0) {
      sequence.forEach((c, index) => {
        if (c === color) {
          setTimeout(handleClick, (index + 1) * timer);
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
