import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

const Hero = () => {
    const { toast } = useToast();
    const { t } = useTranslation();

    const handleNotImplemented = () => {
      toast({
        title: "Funcionalidade em desenvolvimento",
        description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
        variant: "default",
      });
    };
    
    return (
        <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="absolute inset-0 z-0">
                 <img  className="w-full h-full object-cover" alt={t('hero_img_alt')} src="https://images.unsplash.com/photo-1546029203-bb37fe2fdd0d" />
            </div>
            <div className="container relative z-20 px-4 sm:px-6 lg:px-8 transform scale-90 origin-top">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-wider" style={{ textShadow: '0 0 20px rgba(55, 192, 193, 0.5)' }}>
                        {t('hero_title_prefix')} <span className="text-mfsim-cyan">{t('hero_title_suffix')}</span>
                    </h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-mfsim-grey">
                        {t('hero_desc')}
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contato">
                            <Button size="lg">{t('hero_btn_primary')}</Button>
                        </Link>
                        <Link to="/produtos">
                            <Button size="lg" variant="outline">{t('hero_btn_secondary')}</Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;