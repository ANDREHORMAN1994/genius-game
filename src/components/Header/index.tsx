import { useContext } from 'react';
import { SimonContext } from '../../context/Provider';

function Header() {
  const { score, highest } = useContext(SimonContext);

  return (
    <div className="flex flex-row items-start justify-between w-full h-full pt-32">
      <p className="text-center text-white font-title text-[3rem]">{`Score: ${score}`}</p>
      <p className="text-center text-white font-title text-[3rem]">{`Highest: ${highest}`}</p>
    </div>
  );
}

export default Header;
