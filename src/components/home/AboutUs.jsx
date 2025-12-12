import { motion } from 'framer-motion';
import YouTube from 'react-youtube';

const AboutUs = () => {
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
                            Nascemos da Paixão pela <span className="text-mfsim-cyan">Aviação</span>
                        </h2>
                        <p className="mt-6 text-lg text-mfsim-grey">
                            A MFSim é mais do que uma empresa; é a realização de um sonho. Fundada por entusiastas e especialistas em engenharia, nossa jornada começou com o objetivo de tornar o treinamento de voo mais acessível, realista e eficaz no Brasil.
                        </p>
                        <p className="mt-4 text-lg text-mfsim-grey">
                            Cada componente é projetado e montado em nossa sede em São José dos Campos, o maior polo tecnológico aeroespacial da América Latina. Unimos tecnologia de ponta e um rigoroso controle de qualidade para criar simuladores que não apenas replicam, mas elevam a experiência de voo.
                        </p>
                        
                        <h2 className="text 3x1 sm:text-4xl lg:text-5xl font-bold text-white" style={{ marginTop: '1.5rem' }}>
                            Quem Somos:
                        </h2>
                        <p className="mt-4 text-lg text-mfsim-grey">
                            A MFSim é uma empresa nacional associada ao Cluster Aeroespacial Brasileiro, especializada na área de simuladores de voo homologados e pessoais, com tecnologias de hardware e software próprios que oferecem uma experiência fiel  no voo simulado para Flight Simulator e Xplane.
                            Os simuladores possuem aviônicos essenciais para o treinamento e procedimentos de voo por instrumentos (IFR), oferecendo a alunos de aeroclubes e entusiastas um meio pratico de estudos e para pilotos formados, o aprimoramento de suas habilidades.
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