import { motion } from 'framer-motion';
import { Rocket, Target, Users } from 'lucide-react';

const values = [
    {
        icon: <Rocket className="h-8 w-8 text-mfsim-cyan" />,
        title: "Inovação Contínua",
        description: "Buscamos incansavelmente as tecnologias mais avançadas para garantir que seu treinamento seja sempre à frente do tempo."
    },
    {
        icon: <Target className="h-8 w-8 text-mfsim-cyan" />,
        title: "Precisão Absoluta",
        description: "Nossa engenharia é focada em replicar cada detalhe do voo com máxima fidelidade, do hardware ao software."
    },
    {
        icon: <Users className="h-8 w-8 text-mfsim-cyan" />,
        title: "Parceria com o Cliente",
        description: "Oferecemos suporte completo e customizado, entendendo que o seu sucesso é o nosso destino final."
    }
];

const Mission = () => {
    return (
        <section className="py-12 sm:py-20 bg-mfsim-dark overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 transform scale-90 origin-top">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Coluna da Imagem */}
                    <motion.div 
                        className="w-full h-80 lg:h-full rounded-2xl overflow-hidden"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <img 
                            src="/partners/IMG_8768.png" // Sugestão de imagem
                            alt="Piloto em um cockpit de avião olhando para o horizonte durante o pôr do sol"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Coluna do Texto */}
                    <motion.div
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                            Nossa Missão é Impulsionar <span className="text-mfsim-cyan">Seu Potencial</span>
                        </h2>
                        <p className="mt-6 text-lg text-mfsim-grey">
                            Mais do que simuladores, criamos ferramentas que capacitam pilotos e entusiastas a alcançarem a excelência. Combinamos paixão pela aviação com engenharia de precisão para entregar experiências que transformam o treinamento aéreo.
                        </p>
                        
                        <div className="mt-10 space-y-8">
                            {values.map((value) => (
                                <div key={value.title} className="flex items-start">
                                    <div className="flex-shrink-0">{value.icon}</div>
                                    <div className="ml-5">
                                        <h3 className="text-xl font-bold text-white">{value.title}</h3>
                                        <p className="mt-1 text-mfsim-grey">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Mission;