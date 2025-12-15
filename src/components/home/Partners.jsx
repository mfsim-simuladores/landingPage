import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const partnerLogos = [
    // Seus logos com a propriedade 'important: true' e 'link'
    { src: '/partners/fab.png', alt: 'Logo Força Aérea Brasileira', important: true, link: 'https://www.fab.mil.br/' },
    { src: '/partners/1-eta.png', alt: 'Logo 1 ETA', important: true, link: '#' },
    { src: '/partners/casa-militar.png', alt: 'Logo Casa Militar', important: true, link: '#' },
    
    // Outros logos
    { src: '/partners/BrazilianAerospaceCluster.png', alt: 'Logo Brazilian Aerospace Cluster', link: '#' },
    { src: '/partners/rocket.png', alt: 'Logo Rocket', link: '#' },
    { src: '/partners/aero-mt.png', alt: 'Logo Aero MT', link: '#' },
    { src: '/partners/news-academy.png', alt: 'Logo New Academy', link: '#' },
    { src: '/partners/aeroclube-marilia.png', alt: 'Logo Aeroclube de Marília', link: '#' },
    { src: '/partners/safe.png', alt: 'Logo Safe', link: 'https://www.safeescola.com.br/' },
    { src: '/partners/bsbAviation.png', alt: 'Logo BSB Aviation', link: '#' },
    { src: '/partners/proav.png', alt: 'Logo ProAv', link: '#' },
    { src: '/partners/aeroclube-guarapuava.png', alt: 'Logo Aeroclube de Guarapuava', link: '#' },
    { src: '/partners/abaete.png', alt: 'Logo Abaeté', link: '#' },
    { src: '/partners/wingsacademy.png', alt: 'Logo Wings Academy', link: '#' },
    { src: '/partners/logo-uni-guairaca.png', alt: 'Logo UniGuairacá', link: '#' },
    { src: '/partners/anhembiMorumbi.png', alt: 'Logo Anhembi Morumbi', link: 'https://anhembi.br/' },
    { src: '/partners/aeroclube-dourados.png', alt: 'Logo Aeroclube de Dourados', link: '#' },
    { src: '/partners/asas-de-socorro.png', alt: 'Logo Asas de Socorro', link: '#' },
    { src: '/partners/csav.png', alt: 'Logo CSAV', link: '#' },
    { src: '/partners/aeroclube-juiz-de-fora.png', alt: 'Logo Aeroclube Juiz de Fora', link: '#' },
    { src: '/partners/aeroclube-tupi-paulista.jpg', alt: 'Logo Aeroclube Tupi Paulista', link: '#' },
    { src: '/partners/voe-solo.png', alt: 'Logo Voe Solo', link: '#' },
    { src: '/partners/ar-aviation-school.png', alt: 'Logo AR Aviation School', link: '#' },
    { src: '/partners/iacm.png', alt: 'Logo IACM', link: '#' },
    { src: '/partners/aeroclube-santa-maria.png', alt: 'Logo Aeroclube Santa Maria', link: '#' },
    { src: '/partners/fly-company.png', alt: 'Logo Fly Company', link: '#' },
    { src: '/partners/pre-pilot.png', alt: 'Logo Pre-Pilot', link: '#' },
    { src: '/partners/cia-das-asas.png', alt: 'Logo Cia das Asas', link: '#' },
    { src: '/partners/aeroclube-francisco-beltrao.png', alt: 'Logo Aeroclube Francisco Beltrão', link: '#' },
    { src: '/partners/aviate.png', alt: 'Logo Aviate', link: '#' },
];

const Partners = () => {
    const { t } = useTranslation();
    // Mesma lógica de separação de logos
    const importantLogos = partnerLogos.filter(logo => logo.important);
    const otherLogos = partnerLogos.filter(logo => !logo.important);

    // Combinamos os logos de volta para uma única faixa, alternando ou priorizando conforme a necessidade.
    // Para um efeito de "nebula", vamos misturar e deixar o CSS cuidar do destaque.
    const combinedLogos = [...importantLogos, ...otherLogos].sort(() => 0.5 - Math.random()); // Embaralha para uma aparência mais orgânica

    const speed = 40; // Velocidade padrão para o carrossel. Ajuste conforme necessário.
    const x = useMotionValue(0);
    const containerRef = useRef(null);
    const contentWidth = useRef(0);

    useEffect(() => {
        const calculateWidth = () => {
            if (containerRef.current) {
                // Mede a largura do conteúdo, garantindo que seja metade da largura total duplicada
                contentWidth.current = containerRef.current.scrollWidth / 2;
            }
        };

        // Usa IntersectionObserver para garantir que a medição ocorra quando o componente está visível
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                calculateWidth();
            }
        }, { threshold: 0.1 }); // Dispara quando 10% do elemento está visível

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        // Adiciona listener para recalcular em caso de redimensionamento da janela
        window.addEventListener('resize', calculateWidth);

        // Limpeza dos eventos
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
            window.removeEventListener('resize', calculateWidth);
        };
    }, [combinedLogos]); // Dependência em combinedLogos para recalcular se a lista mudar

    useAnimationFrame((time, delta) => {
        let moveBy = (speed * delta) / 1000;
        
        // Proteção para garantir que a animação só comece após a medição
        if (contentWidth.current > 0 && x.get() <= -contentWidth.current) {
            x.set(0); // Reinicia o carrossel suavemente
        }
        
        x.set(x.get() - moveBy);
    });

    return (
        // Seção com fundo ainda mais escuro para o contraste "nebula"
        <section className="py-12 sm:py-20 bg-gray-950 overflow-hidden relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 transform scale-90 origin-top">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16" // Adicionado mb-16 para espaço
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                        {t('partners_title_prefix')} <span className="text-mfsim-cyan">{t('partners_title_suffix')}</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400"> {/* Cor do texto ajustada */}
                        {t('partners_desc')}
                    </p>
                </motion.div>

                {/* ✨ NOVO BOX "NEBULA": Mais sutil, flutuante e com gradientes de opacidade aprimorados */}
                <div className="relative p-4 md:p-8 bg-gray-800 bg-opacity-30 backdrop-blur-sm rounded-3xl border border-gray-700/50 shadow-2xl">
                    <div className="relative w-full overflow-hidden">
                        <motion.div
                            className="flex flex-nowrap items-center py-4" // Adicionado py-4 para respiro vertical
                            ref={containerRef}
                            style={{ x: x }}
                        >
                            {[...combinedLogos, ...combinedLogos].map((logo, index) => (
                                <div key={index} className="flex-shrink-0 mx-8 md:mx-12 flex items-center justify-center">
                                    <a 
                                        href={logo.link || '#'} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        aria-label={logo.alt}
                                        className="block" // Adicionado block para garantir que o link ocupe todo o espaço
                                    >
                                        <img
                                            src={logo.src}
                                            alt={logo.alt}
                                            // Classes dinâmicas para logos importantes vs. outros
                                            className={`
                                                w-auto object-contain transition-all duration-500 ease-in-out
                                                ${logo.important 
                                                    ? 'max-h-40 md:max-h-48 drop-shadow-lg opacity-100 hover:scale-105' 
                                                    : 'max-h-24 md:max-h-32 opacity-70 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110'
                                                }
                                            `}
                                        />
                                    </a>
                                </div>
                            ))}
                        </motion.div>

                        {/* Gradientes de opacidade para efeito de fading nas bordas */}
                        <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-r from-gray-950/80 to-transparent z-10 pointer-events-none"></div>
                        <div className="absolute top-0 right-0 w-1/4 h-full bg-gradient-to-l from-gray-950/80 to-transparent z-10 pointer-events-none"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partners;