import { useEffect } from 'react';

const MidiasPage = () => {
  useEffect(() => {
    // URL do script da Elfsight
    const scriptSrc = 'https://elfsightcdn.com/platform.js';

    // Verifica se o script já não foi adicionado ao DOM
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }

    // A Elfsight pode precisar reinicializar ao navegar entre páginas no React.
    // Se o widget não carregar, a linha abaixo pode ser necessária.
    // (window as any).ElfsightApps?.init();

  }, []); // O array vazio garante que o efeito rode apenas uma vez, quando o componente montar.

  return (
    // Elfsight Instagram Feed | Untitled Instagram Feed
    <div className="elfsight-app-fdeff54f-0c08-47e0-bb71-82abba349e6a pt-20 sm:pt-32" data-elfsight-app-lazy></div>
  );
};

export default MidiasPage;