import { useEffect, useState } from 'react';

function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isMobileDevice =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent,
        );
      setIsMobile(isMobileDevice);
    };

    // Verificar al cargar la página
    handleResize();

    // Agregar un event listener para manejar cambios de tamaño de pantalla
    window.addEventListener('resize', handleResize);

    // Limpiar el event listener al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // El segundo argumento del useEffect [] asegura que solo se ejecute al montar y desmontar el componente

  return isMobile;
}

export default useIsMobile;
