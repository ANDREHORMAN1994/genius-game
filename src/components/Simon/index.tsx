import {
  useCallback, useContext, useEffect, useRef, useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Button from '../Button';
import { BTN_COLORS } from '../../utils';
import { SimonContext } from '../../context/Provider';

function Simon() {
  const [sequence, setSequence] = useState<string[]>([]);
  const [userSequence, setUserSequence] = useState<string[]>([]);
  const [timer, setTimer] = useState<number>(1000);
  const [isUserTurn, setIsUserTurn] = useState<boolean>(false);
  const timerRef = useRef<number>(timer);
  const navigate = useNavigate();
  const { score, setScore, maxHighest } = useContext(SimonContext);

  const playGame = () => {
    const randomIndex = Math.floor(Math.random() * BTN_COLORS.length);
    setSequence((prevSequence) => [
      ...prevSequence,
      BTN_COLORS[randomIndex].color,
    ]);
  };

  const gameOver = useCallback((message: string) => {
    void Swal.fire({
      title: 'Oops...',
      text: message,
      icon: 'error',
      confirmButtonText: 'Jogar novamente?',
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        setScore(0);
        setSequence([]);
        setUserSequence([]);
        navigate('/');
      }
    });
  }, [navigate, setScore]);

  const addLevel = (color: string) => {
    if (isUserTurn) {
      const newUserSequence = [...userSequence, color];
      const verifySequenceError = newUserSequence.some(
        (c, index) => c !== sequence[index],
      );
      if (verifySequenceError) {
        gameOver('Você errou a sequência!');
      } else if (sequence.length === newUserSequence.length) {
        setScore(score + 1);
        maxHighest(score + 1);
        playGame();
        setIsUserTurn(false);
      } else {
        setUserSequence(newUserSequence);
      }
    }
  };

  useEffect(() => {
    if (sequence.length > 0) {
      const newTimer = Math.max(1000 - (sequence.length - 1) * 100, 600);
      timerRef.current = newTimer;
      setTimer(newTimer);
    }
  }, [sequence]);

  useEffect(playGame, []);

  return (
    <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[35rem] h-[36.5rem] flex flex-col justify-center items-center">
      <img
        className="z-40 w-[20rem] h-auto rounded-full"
        src="/images/Simon-center.png"
        alt="Imagem da base do Simon"
      />
      {BTN_COLORS.map(
        ({
          color,
          position,
          rounded,
          soundUrl,
          imgUrlOff,
          imgUrlOn,
          imgAlt,
        }) => (
          <Button
            key={color}
            color={color}
            soundUrl={soundUrl}
            imgUrlOff={imgUrlOff}
            imgUrlOn={imgUrlOn}
            imgAlt={imgAlt}
            position={position}
            rounded={rounded}
            sequence={sequence}
            timerRef={timerRef}
            isUserTurn={isUserTurn}
            setIsUserTurn={setIsUserTurn}
            setUserSequence={setUserSequence}
            addLevel={addLevel}
            gameOver={gameOver}
          />
        ),
      )}
      {isUserTurn && (
        <p className="font-normal text-[3rem] text-white z-30 absolute -bottom-24">
          Sua vez...
        </p>
      )}
    </div>
  );
}

export default Simon;
