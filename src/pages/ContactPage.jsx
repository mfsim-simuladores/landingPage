import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/ContactForm';

const ContatoPage = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-mfsim-dark text-white min-h-screen pt-20 sm:pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 transform scale-90 origin-top">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">{t('contact_page_title')}</h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            {t('contact_page_desc')}
          </p>
        </div>

        {/* Seção de Contato, Formulário e Mapa */}
        <div className="flex flex-col gap-16">
          {/* Linha Superior: Informações e Formulário */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Coluna de Informações */}
            <div className="bg-gray-900/50 border border-gray-700/50 p-8 rounded-lg shadow-lg">
              <div className="text-center flex flex-col justify-center h-full">
                <div className="mb-8">
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
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-white">{t('contact_address_title')}</h3>
                  <div className="flex items-center justify-center text-mfsim-cyan mb-2">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="text-gray-400 max-w-sm mx-auto">{t('address_full')}</p>
                </div>
              </div>
            </div>

            {/* Coluna do Formulário */}
            <div className="bg-gray-900/50 border border-gray-700/50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-white">{t('contact_message_title')}</h3>
              <ContactForm />
            </div>
          </div>

          {/* Linha Inferior: Mapa */}
          <div>
            <div className="bg-gray-900/50 border border-gray-700/50 p-4 rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.399583297065!2d-45.7899698246816!3d-23.15525947908098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4f00a3593579%3A0x1d954a4a18dec98!2sMFSim%20Simuladores%20de%20Voo!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px', borderRadius: '0.25rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatoPage;
