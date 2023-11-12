import { useEffect, useState } from 'react';
import Button from '../Button';
import { BTN_COLORS } from '../../utils';

function Simon() {
  const [level, setLevel] = useState<number>(1);
  const [sequence, setSequence] = useState<string[]>([]);
  const [timer, setTimer] = useState<number>(1000);

  useEffect(() => {
    const playGame = () => {
      const randomIndex = Math.floor(Math.random() * BTN_COLORS.length);
      setSequence((prevSequence) => [...prevSequence, BTN_COLORS[randomIndex].color]);
    };
    playGame();
  }, [level]);

  useEffect(() => {
    if (sequence.length > 0) {
      const newTimer = Math.max(1000 - (sequence.length - 1) * 50, 720);
      setTimer(newTimer);
    }
  }, [sequence]);

  return (
    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[35rem] h-[36.5rem] flex flex-col justify-center items-center">
      <img
        className="z-40 w-[20rem] h-auto rounded-full"
        src="/images/Simon-center.png"
        alt="Imagem da base do Simon"
      />
      {BTN_COLORS.map(({ color, position, rounded }) => (
        <Button
          key={color}
          color={color}
          imgUrlOff={`/images/Simon-${color}-off.png`}
          imgUrlOn={`/images/Simon-${color}-on.png`}
          imgAlt={`Botão ${color} desligado`}
          position={position}
          rounded={rounded}
          sequence={sequence}
          timer={timer}
        />
      ))}
      <button className="z-30 p-[3rem] bg-blue-300 absolute -bottom-40" type="button" onClick={() => setLevel(level + 1)}>next</button>
    </div>
  );
}

export default Simon;
