import { motion } from 'framer-motion';
import { CheckCircle, HardDrive, Volume as Vr, Wrench } from 'lucide-react';

const features = [
    {
        icon: <HardDrive className="h-10 w-10 text-mfsim-cyan" />,
        title: 'Hardware de Ponta',
        description: 'Componentes robustos e de alta fidelidade que replicam com perfeição os controles de aeronaves reais.',
    },
    {
        icon: <Vr className="h-10 w-10 text-mfsim-cyan" />,
        title: 'Imersão Total',
        description: 'Sistemas visuais e sonoros que criam uma experiência de voo ultrarrealista e envolvente.',
    },
    {
        icon: <Wrench className="h-10 w-10 text-mfsim-cyan" />,
        title: 'Módulos Customizáveis',
        description: 'Construa seu simulador por etapas, com módulos independentes e totalmente integráveis.',
    },
    {
        icon: <CheckCircle className="h-10 w-10 text-mfsim-cyan" />,
        title: 'Opção de Homologação',
        description: 'Nossos equipamentos podem ser certificados para treinamento profissional de pilotos (ANAC).',
    },
];

const cardVariants = {
    offscreen: {
        y: 50,
        opacity: 0,
    },
    onscreen: (i) => ({
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            bounce: 0.4,
            duration: 0.8,
            delay: i * 0.1,
        },
    }),
};

const Features = () => {
    return (
        <section className="py-12 sm:py-20 bg-mfsim-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 transform scale-90 origin-top">
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                        Projetado para a <span className="text-mfsim-cyan">Máxima Performance</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-mfsim-grey">
                        Cada detalhe dos nossos simuladores foi pensado para oferecer a experiência mais autêntica e confiável do mercado.
                    </p>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            custom={i}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                            className="bg-gray-900/40 p-8 rounded-xl border border-gray-700/50 shadow-lg hover:border-mfsim-cyan/50 hover:shadow-mfsim-cyan/10 transition-all duration-300"
                        >
                            <div className="flex-shrink-0">{feature.icon}</div>
                            <h3 className="mt-6 text-xl font-bold text-white">{feature.title}</h3>
                            <p className="mt-2 text-mfsim-grey">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;