import { motion } from 'framer-motion';
import { Star, User } from 'lucide-react';

const testimonials = [
    {
        name: 'João P., Piloto Comercial',
        quote: 'A precisão do simulador MFSim é impressionante. Foi uma ferramenta crucial na minha preparação para os exames práticos.',
        avatar: '',
    },
    {
        name: 'Carlos E., Entusiasta de Aviação',
        quote: 'Nunca imaginei que poderia ter uma experiência tão realista em casa. O suporte da equipe MFSim foi excelente durante a montagem.',
        avatar: '',
    },
    {
        name: 'Escola de Aviação Céu Azul',
        quote: 'Adquirimos dois simuladores para nossa escola. A qualidade do treinamento dos nossos alunos melhorou significativamente. Equipamento robusto e confiável.',
        avatar: '',
    },
];

const cardVariants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        delay: i * 0.2,
      },
    }),
  };

const Testimonials = () => {
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
                        Aprovado por quem <span className="text-mfsim-cyan">Voa de Verdade</span>
                    </h2>
                     <p className="mt-4 max-w-2xl mx-auto text-lg text-mfsim-grey">
                        Veja o que nossos clientes dizem sobre a experiência MFSim.
                    </p>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, i) => (
                        <motion.div
                            key={testimonial.name}
                            className="bg-gray-900/40 p-8 rounded-xl border border-gray-700/50 flex flex-col"
                            custom={i}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: 0.3 }}
                            variants={cardVariants}
                        >
                            <div className="flex text-yellow-400">
                                <Star fill="currentColor" className="w-5 h-5" />
                                <Star fill="currentColor" className="w-5 h-5" />
                                <Star fill="currentColor" className="w-5 h-5" />
                                <Star fill="currentColor" className="w-5 h-5" />
                                <Star fill="currentColor" className="w-5 h-5" />
                            </div>
                            <blockquote className="mt-4 text-mfsim-grey flex-grow">"{testimonial.quote}"</blockquote>
                            <footer className="mt-6 flex items-center">
                                <div className="w-12 h-12 rounded-full bg-mfsim-blue flex items-center justify-center">
                                    <User className="w-6 h-6 text-white" />
                                </div>
                                <div className="ml-4">
                                    <p className="font-bold text-white">{testimonial.name}</p>
                                </div>
                            </footer>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;