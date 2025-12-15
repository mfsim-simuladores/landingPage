import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { products as productsEnList } from '../../pages/productsDataEn';
import { products } from '../productsData';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

const cardVariants = {
    offscreen: { scale: 0.9, opacity: 0 },
    onscreen: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        delay: i * 0.15,
      },
    }),
  };

const Products = () => {
    const { toast } = useToast();
    const { t, i18n } = useTranslation();
    const currentProducts = i18n.language === 'en' ? productsEnList : products;
    const homeProducts = currentProducts.slice(0, 6);

    const handleNotImplemented = () => {
        toast({
            title: "Funcionalidade em desenvolvimento",
            description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
            variant: "default",
        });
    };

    return (
        <section className="py-12 sm:py-20 bg-mfsim-dark/95">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">{t('products_page_title')}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-mfsim-grey">
                        {t('products_page_desc')}
                    </p>
                </motion.div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {homeProducts.map((product, i) => (
                        <Link to={`/produtos/${product.name.replace(/\s+/g, '-')}`} key={product.name}>
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
                                    <p className="mt-2 text-mfsim-grey flex-grow">{product.description}</p>
                                    <div className="mt-6">
                                        <span className="text-lg font-semibold text-mfsim-cyan">{product.price}</span>
                                        <Button asChild className="w-full mt-4">
                                            <span>{t('products_btn_details')}</span>
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Link to="/produtos">
                        <Button size="lg" className="bg-mfsim-cyan hover:bg-mfsim-cyan/90 text-mfsim-dark font-bold text-lg px-8 py-6">{t('home_products_btn_all')}</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Products;