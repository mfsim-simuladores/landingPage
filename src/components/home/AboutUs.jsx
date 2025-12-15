import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import YouTube from 'react-youtube';

const AboutUs = () => {
    const { t } = useTranslation();
    const videoId = "wAmI4ihyw2s";
    const playerOptions = {
      height: '100%',
      width: '100%',
      playerVars: {
        autoplay: 1,      // Autoplay ativado
        mute: 1,          // Vídeo sem som (obrigatório para autoplay)
        loop: 1,          // Repetir o vídeo
        playlist: videoId, // ID do vídeo para o loop funcionar
        controls: 0,      // Esconder os controles do player
        showinfo: 0,      // Esconder informações do vídeo
        rel: 0,           // Não mostrar vídeos relacionados no final
      },
    };

    
    return (
        <section className="py-12 sm:py-20 bg-mfsim-dark/95 overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 transform scale-90 origin-top">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Coluna de Texto */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                            {t('about_title_prefix')} <span className="text-mfsim-cyan">{t('about_title_suffix')}</span>
                        </h2>
                        <p className="mt-6 text-lg text-mfsim-grey">
                            {t('about_desc_1')}
                        </p>
                        <p className="mt-4 text-lg text-mfsim-grey">
                            {t('about_desc_2')}
                        </p>
                        
                        <h2 className="text 3x1 sm:text-4xl lg:text-5xl font-bold text-white" style={{ marginTop: '1.5rem' }}>
                            {t('about_who_we_are_title')}
                        </h2>
                        <p className="mt-4 text-lg text-mfsim-grey">
                            {t('about_who_we_are_desc')}
                        </p>
                    </motion.div>
                    {/* Coluna do Player do YouTube */}
                    <motion.div
                        className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-mfsim-cyan/20"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        {/* 3. Substitua o <iframe> pelo componente <YouTube> */}
                        <YouTube
                            videoId={videoId}
                            opts={playerOptions}
                            className="w-full h-full"
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;