import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-gradient-initial via-gradient-middle to-gradient-final w-[30rem] h-[27rem] rounded-2xl p-[3rem] flex flex-col justify-start items-center z-10">
      <h1 className="text-center text-text-title font-title text-[3rem]">GENIUS GAME</h1>
      <p className="text-text-normal text-[2rem] flex justify-center place-items-baseline gap-2">
        Siga o caminho das luzes
        <img className="w-[2rem] h-auto" src="/images/lamp.png" alt="Icone de lâmpada" />
      </p>
      <button
        className="mt-[3rem] hover:brightness-75 hover:scale-90 transition-all duration-100 ease-in-out"
        type="button"
        onClick={() => navigate('/game')}
      >
        <img className="w-[8rem]" src="/images/btn.png" alt="Icone de botão" />
      </button>
    </div>
  );
}

export default Home;
