import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="w-full h-full min-h-screen bg-[url(/images/background.jpg)] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
      <div className="absolute top-0 left-0 z-0 w-screen h-screen bg-black opacity-50" />
      <Outlet />
    </div>
  );
}

export default App;
