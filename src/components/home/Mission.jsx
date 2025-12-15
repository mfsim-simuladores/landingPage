import { motion } from 'framer-motion';
import { Rocket, Target, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Mission = () => {
    const { t } = useTranslation();

    const values = [
        {
            icon: <Rocket className="h-8 w-8 text-mfsim-cyan" />,
            title: t('mission_value_1_title'),
            description: t('mission_value_1_desc')
        },
        {
            icon: <Target className="h-8 w-8 text-mfsim-cyan" />,
            title: t('mission_value_2_title'),
            description: t('mission_value_2_desc')
        },
        {
            icon: <Users className="h-8 w-8 text-mfsim-cyan" />,
            title: t('mission_value_3_title'),
            description: t('mission_value_3_desc')
        }
    ];

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
                            alt={t('mission_img_alt')}
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
                            {t('mission_main_title_prefix')} <span className="text-mfsim-cyan">{t('mission_main_title_suffix')}</span>
                        </h2>
                        <p className="mt-6 text-lg text-mfsim-grey">
                            {t('mission_main_desc')}
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