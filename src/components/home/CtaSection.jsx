import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

const CtaSection = () => {
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
        <section className="py-12 sm:py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 transform scale-90 origin-top">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                    className="cta-gradient rounded-2xl p-10 md:p-16 text-center shadow-2xl shadow-mfsim-blue/30"
                >
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white">{t('cta_title')}</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-white/90">
                        {t('cta_desc')}
                    </p>
                    <div className="mt-8">
                        <Button size="lg" variant="outline" className="bg-white text-mfsim-blue hover:bg-gray-200 hover:text-mfsim-blue border-transparent" onClick={handleNotImplemented}>
                            {t('cta_button')}
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CtaSection;