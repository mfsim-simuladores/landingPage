import { motion } from 'framer-motion';
import { CheckCircle, HardDrive, Volume as Vr, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
    const { t } = useTranslation();

    const features = [
        {
            icon: <HardDrive className="h-10 w-10 text-mfsim-cyan" />,
            title: t('features_hardware_title'),
            description: t('features_hardware_desc'),
        },
        {
            icon: <Vr className="h-10 w-10 text-mfsim-cyan" />,
            title: t('features_immersion_title'),
            description: t('features_immersion_desc'),
        },
        {
            icon: <Wrench className="h-10 w-10 text-mfsim-cyan" />,
            title: t('features_modules_title'),
            description: t('features_modules_desc'),
        },
        {
            icon: <CheckCircle className="h-10 w-10 text-mfsim-cyan" />,
            title: t('features_certification_title'),
            description: t('features_certification_desc'),
        },
    ];

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
                        {t('features_main_title_prefix')} <span className="text-mfsim-cyan">{t('features_main_title_suffix')}</span>
                    </h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-mfsim-grey">
                        {t('features_main_desc')}
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