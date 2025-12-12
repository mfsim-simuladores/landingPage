import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';
import { products } from '../pages/productsData';

const cardVariants = {
    offscreen: { scale: 0.9, opacity: 0 },
    onscreen: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: i * 0.05,
      },
    }),
  };

const ProductsPage = () => {
    const { toast } = useToast();

    const handleComingSoon = (e) => {
        e.preventDefault();
        toast({
            title: "Em Breve",
            description: "🚧 Estamos finalizando os detalhes deste produto. Em breve estará disponível! 🚀",
            variant: "default",
        });
    };

    return (
        <section className="py-20 sm:py-32 bg-mfsim-dark/95">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">Nossos Simuladores e Módulos</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-mfsim-grey">
                        Escolha a solução completa ou monte seu setup ideal peça por peça. A qualidade é a mesma.
                    </p>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, i) => {
                        // Lógica para garantir que preço e descrição apareçam, mesmo se a estrutura de dados variar
                        const price = product.pricing?.price || product.price || (product.pricing?.items ? "Ver Opções" : "Sob Consulta");
                        const description = product.description || (typeof product.details?.[0]?.content === 'string' ? product.details[0].content.substring(0, 100) + '...' : '');
                    const isComingSoon = product.pricing?.price === "...";

                        return (
                    <Link 
                        to={isComingSoon ? "#" : `/produtos/${product.name.replace(/\s+/g, '-')}`} 
                        key={product.name}
                        onClick={isComingSoon ? handleComingSoon : undefined}
                    >
                            <motion.div
                                className="bg-gray-900/40 rounded-xl overflow-hidden border border-gray-700/50 flex flex-col group h-full"
                                custom={i}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.2 }}
                                variants={cardVariants}
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        alt={product.imageAlt || `Imagem do produto ${product.name}`}
                                        src={product.imageSrc || "https://via.placeholder.com/400x300.png?text=MFSim"}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-white">{product.name}</h3>
                                    <h4 className="mt-2 text-mfsim-cyan font-semibold">{product.imageText}</h4>
                                    <p className="mt-2 text-mfsim-grey flex-grow text-sm leading-relaxed">{description}</p>
                                    <div>
                                        
                                        <Button asChild className="w-full mt-4">
                                            <span>Ver Detalhes</span>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    )})}
                </div>
            </div>
        </section>
    );
};

export default ProductsPage;