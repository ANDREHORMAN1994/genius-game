import Header from '../../components/Header';
import Simon from '../../components/Simon';

function Game() {
  return (
    <div className="z-10 flex flex-col w-4/6 h-screen">
      <Header />
      <Simon />
    </div>
  );
}

export default Game;
