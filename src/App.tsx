import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="w-full h-full min-h-screen bg-[url(/images/background.jpg)] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
      <Outlet />
    </div>
  );
}

export default App;
