import { useNavigate, useOutletContext } from 'react-router-dom';

function Home() {
  const permission = useOutletContext();
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-gradient-initial via-gradient-middle to-gradient-final w-5/6 h-[20rem] lg:w-[30rem] lg:h-[27rem] rounded-2xl p-[3rem] flex flex-col justify-start items-center z-10">
      <h1 className="text-center text-text-title font-title text-[2rem] lg:text-[3rem]">GENIUS GAME</h1>
      <p className="font-normal text-text-normal text-[1.5rem] lg:text-[2rem] flex justify-center place-items-baseline gap-2">
        Siga o caminho das luzes
        <img className="w-[1.5rem] lg:w-[2rem] h-auto" src="/images/lamp.png" alt="Icone de lâmpada" />
      </p>
      <button
        className={`mt-[2rem] lg:mt-[3rem] hover:brightness-75 hover:scale-90 transition-all duration-100 ease-in-out ${permission ? 'cursor-pointer' : 'cursor-not-allowed'}`}
        type="button"
        onClick={() => navigate('/game')}
        disabled={!permission}
      >
        <img className="w-[6rem] lg:w-[8rem] h-auto" src="/images/btn.png" alt="Icone de botão" />
      </button>
    </div>
  );
}

export default Home;
