import Header from '../../components/Header';
import Simon from '../../components/Simon';

function Game() {
  return (
    <div className="z-10 flex flex-col w-5/6 h-screen lg:w-4/6">
      <Header />
      <Simon />
    </div>
  );
}

export default Game;
