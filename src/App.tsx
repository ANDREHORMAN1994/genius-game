import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

function App() {
  const [permission, setPermission] = useState<boolean>(false);
  const location = useLocation();

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
            text: 'Você precisa conceder permissão de áudio para jogar!',
            icon: 'error',
          });
        }
      });
  }, [location]);

  return (
    <div className="w-full h-full min-h-screen bg-[url(/images/background.jpg)] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center">
      <div className="absolute top-0 left-0 z-0 w-screen h-screen bg-black opacity-50" />
      <Outlet context={permission} />
    </div>
  );
}

export default App;
