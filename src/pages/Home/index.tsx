import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function Home() {
  const [permission, setPermission] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((response) => {
        if (response) {
          console.log('Permisão concedida!');
          setPermission(true);
        }
      })
      .catch((error) => {
        if (error instanceof DOMException) {
          setPermission(false);
          void Swal.fire({
            title: 'Oops...',
            text: 'Você precisa conceder permissão para jogar com som!',
            icon: 'error',
          });
        }
      });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gradient-initial via-gradient-middle to-gradient-final w-[30rem] h-[27rem] rounded-2xl p-[3rem] flex flex-col justify-start items-center z-10">
      <h1 className="text-center text-text-title font-title text-[3rem]">GENIUS GAME</h1>
      <p className="font-normal text-text-normal text-[2rem] flex justify-center place-items-baseline gap-2">
        Siga o caminho das luzes
        <img className="w-[2rem] h-auto" src="/images/lamp.png" alt="Icone de lâmpada" />
      </p>
      <button
        className={`mt-[3rem] hover:brightness-75 hover:scale-90 transition-all duration-100 ease-in-out ${permission ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        type="button"
        onClick={() => navigate('/game')}
        disabled={!permission}
      >
        <img className="w-[8rem]" src="/images/btn.png" alt="Icone de botão" />
      </button>
    </div>
  );
}

export default Home;
