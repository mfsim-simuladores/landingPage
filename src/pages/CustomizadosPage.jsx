import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';

const CustomizadosPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-mfsim-dark text-white min-h-screen pt-20 sm:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          {/* Imagem à esquerda */}
          <div className="w-full h-auto">
            <img
              src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=2070"
              alt="Simulador em transição para blueprint"
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
          {/* Texto à direita */}
          <div className="text-right">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              {t('customizados_hero_title_1')} <span className="text-mfsim-cyan">{t('customizados_hero_title_2')}</span> {t('customizados_hero_title_3')} <span className="text-mfsim-cyan">{t('customizados_hero_title_4')}</span>
            </h1>
          </div>
        </div>

        {/* Primeira Galeria de Imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-24">
          <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=2070" alt="Detalhe de manche customizado" className="rounded-lg shadow-lg w-full h-full object-cover aspect-square" />
          <img src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&q=80&w=800" alt="Painel de instrumentos customizado" className="rounded-lg shadow-lg w-full h-full object-cover aspect-square" />
          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" alt="Estrutura de simulador customizado" className="rounded-lg shadow-lg w-full h-full object-cover aspect-square" />
        </div>

        {/* Seção de Texto Intermediária */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{t('customizados_concept_title')}</h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            {t('customizados_concept_desc')}
          </p>
        </div>

        {/* Segunda Galeria de Imagens */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-24">
          <img src="https://images.unsplash.com/photo-1599139329639-f3c294991f0c?auto=format&fit=crop&q=80&w=800" alt="Simulador de helicóptero customizado" className="rounded-lg shadow-lg w-full h-full object-cover aspect-square" />
          <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="Setup de instrutor customizado" className="rounded-lg shadow-lg w-full h-full object-cover aspect-square" />
          <img src="https://images.unsplash.com/photo-1473862170180-84427c485aca?auto=format&fit=crop&q=80&w=800" alt="Simulador com cockpit aberto customizado" className="rounded-lg shadow-lg w-full h-full object-cover aspect-square" />
        </div>

        {/* Seção de Contato (Cópia de Homologados) */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Coluna do Formulário */}
          <div>
            <div className="bg-gray-900/50 border border-gray-700/50 p-8 rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-white">{t('customizados_contact_title')}</h3>
              <p className="text-1xl mb-6 text-white">{t('customizados_contact_subtitle')}</p>
              <ContactForm
                subjectPlaceholder={t('form_subject_custom')}
                messagePlaceholder={t('form_message_custom')}
                submitButtonText={t('form_submit_custom')}
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

export default CustomizadosPage;