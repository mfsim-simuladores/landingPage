import { useEffect, useRef, useState } from 'react'; // 👈 Adicione 'useRef'

const MouseGradientTracker = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [backgroundOffset, setBackgroundOffset] = useState({ x: 0, y: 0 }); // Novo estado para o movimento
    const animationFrameId = useRef(null); // Para controlar o requestAnimationFrame
    const lastTime = useRef(0);
    const speed = 0.15; // Velocidade do "vento"

    useEffect(() => {
        const handleMouseMove = (event) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Novo useEffect para a animação do "vento"
    useEffect(() => {
        const animate = (currentTime) => {
            if (!lastTime.current) lastTime.current = currentTime;
            const deltaTime = currentTime - lastTime.current;

            setBackgroundOffset(prevOffset => ({
                x: (prevOffset.x + speed * deltaTime) % 200, // % 200 para manter os valores gerenciáveis e criar loop
                y: (prevOffset.y + speed * deltaTime) % 200,
            }));

            lastTime.current = currentTime;
            animationFrameId.current = requestAnimationFrame(animate);
        };

        animationFrameId.current = requestAnimationFrame(animate);

        return () => {
            if (animationFrameId.current) {
                cancelAnimationFrame(animationFrameId.current);
            }
        };
    }, []); // Array de dependências vazio para rodar uma vez

    const gradientSize = 400; // Tamanho do gradiente em pixels
    const dynamicGradientSize = 800; // O dobro do tamanho para o background-position se mover
    
    const gradientStyle = {
        transform: `translate(${mousePosition.x - gradientSize / 2}px, ${mousePosition.y - gradientSize / 2}px)`,
        opacity: 0.35, // Antes estava 0.15
        backgroundSize: `${dynamicGradientSize}px ${dynamicGradientSize}px`,
        backgroundPosition: `${backgroundOffset.x}px ${backgroundOffset.y}px`,
    };

    return (
        <div
            className="pointer-events-none fixed inset-0 z-50"
        >
            <div
                className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-r from-mfsim-cyan to-mfsim-blue filter blur-3xl"
                // Remova o transform -translate-x-1/2 -translate-y-1/2 das classes do Tailwind
                // pois estamos controlando o transform via style.
                style={gradientStyle}
            ></div>
        </div>
    );
};

export default MouseGradientTracker;