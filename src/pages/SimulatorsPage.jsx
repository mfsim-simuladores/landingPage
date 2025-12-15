import { AnimatePresence, motion } from 'framer-motion';
import { Award, CheckCircle, ChevronLeft, ChevronRight, FileText, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';

const images = [
  { src: "/imagens/C172.jpg", alt: "Simulador Cessna 172" },
  { src: "/imagens/B58.jpg", alt: "Simulador Baron 58" },
  { src: "/imagens/SMC208.jpg", alt: "Simulador C208 Caravan" },
  { src: "/imagens/C172G1000.jpg", alt: "Simulador Cessna 172 G1000" },
  { src: "/imagens/C172C.jpg", alt: "Simulador Cessna 172 Compacto" },
];

const SimulatorsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-mfsim-dark text-white min-h-screen pt-20 sm:pt-32">
      {/* O container principal agora tem um max-width maior e mais padding nas laterais */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 transform scale-90 origin-top">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">{t('simulators_hero_title')}</h1>
          <p className="text-lg text-gray-400">
            {t('simulators_hero_desc')}
          </p>
        </div>

        {/* Seção de Texto Centralizada */}
        <div className="max-w-5xl mx-auto mb-20 bg-gray-900/30 p-8 sm:p-12 rounded-2xl border border-gray-700/50">
          <div className="space-y-12">
            {/* Descrição */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <FileText className="w-12 h-12 text-mfsim-cyan flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3 text-white">{t('simulators_desc_title')}</h2>
                <p className="text-gray-400 leading-relaxed">
                  {t('simulators_desc_text')}
                </p>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  {t('simulators_support_text')} <span className="text-mfsim-cyan font-semibold">IS 141-007A</span>.
                </p>
              </div>
            </div>

            {/* Características */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <CheckCircle className="w-12 h-12 text-mfsim-cyan flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">{t('simulators_features_title')}</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-mfsim-cyan" />{t('simulators_feature_1')}</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-mfsim-cyan" />{t('simulators_feature_2')}</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-mfsim-cyan" />{t('simulators_feature_3')}</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-mfsim-cyan" />{t('simulators_feature_4')}</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-mfsim-cyan" />{t('simulators_feature_5')}</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-mfsim-cyan" />{t('simulators_feature_6')}</li>
                </ul>
              </div>
            </div>

            {/* Projetos Certificados */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Award className="w-12 h-12 text-mfsim-cyan flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3 text-white">{t('simulators_projects_title')}</h2>
                <p className="text-gray-400 leading-relaxed">
                  {t('simulators_projects_text')} <span className="text-white">{t('simulators_projects_list')}</span>{t('simulators_projects_text_2')}
                </p>
              </div>
            </div>

            {/* Contato */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Mail className="w-12 h-12 text-mfsim-cyan flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3 text-white">{t('simulators_mind_title')}</h2>
                <p className="text-gray-400 leading-relaxed">
                  {t('simulators_mind_text')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Galeria de Imagens */}
        <div className="space-y-8">
          {/* Carrossel de Imagens */}
          <div className="relative h-[350px] sm:h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="absolute w-full h-full object-cover rounded-lg shadow-lg"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
            <button onClick={handlePrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60 transition-colors z-10">
              <ChevronLeft size={28} />
            </button>
            <button onClick={handleNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white hover:bg-black/60 transition-colors z-10">
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Imagens Estáticas Adicionais */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <img src="/imagens/C172G1000.jpg" alt="Painel Glass Cockpit G1000" className="w-full h-auto object-cover rounded-lg shadow-lg aspect-video" />
            <img src="/imagens/C172C.jpg" alt="Posto de instrução" className="w-full h-auto object-cover rounded-lg shadow-lg aspect-video" />
          </div>
        </div>

        {/* Seção de Contato e Formulário */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Coluna do Formulário */}
          <div>
            <div className="bg-gray-900/50 border border-gray-700/50 p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold  text-white">{t('customizados_contact_title')}</h3>
              <p className="text-1xl mb-6 text-white">{t('simulators_contact_subtitle')}</p>
              <ContactForm
                subjectPlaceholder={t('form_subject_simulators')}
                messagePlaceholder={t('form_message_simulators')}
                submitButtonText={t('form_submit_simulators')}
              />
            </div>
          </div>

          {/* Coluna de Informações */}
          <div className="bg-gray-900/50 border border-gray-700/50 p-8 rounded-lg shadow-lg h-full">
            <div className="text-center flex flex-col justify-center h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">{t('customizados_visit_title')}</h3>
                <div className="flex items-center justify-center text-mfsim-cyan mb-2">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-gray-400 max-w-sm mx-auto">{t('address_full')}</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">{t('contact_direct_title')}</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-3 text-mfsim-cyan" />
                    <a href="https://wa.me/5512997356422" className="hover:text-mfsim-cyan transition-colors duration-300">
                      Whatsapp: (12) 99735-6422
                    </a>
                  </li>
                  <li className="flex items-center justify-center">
                    <Phone className="w-4 h-4 mr-3 text-mfsim-cyan" />
                    <a href="tel:+551239057265" className="hover:text-mfsim-cyan transition-colors duration-300">
                      Fixo: (12) 3905-7265
                    </a>
                  </li>
                  <li className="flex items-center justify-center">
                    <Mail className="w-4 h-4 mr-3 text-mfsim-cyan" />
                    <a href="mailto:contato.mfsim@gmail.com" className="hover:text-mfsim-cyan transition-colors duration-300">
                      contato.mfsim@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimulatorsPage;
