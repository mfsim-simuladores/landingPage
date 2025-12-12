import { AnimatePresence, motion } from 'framer-motion';
import { Award, CheckCircle, ChevronLeft, ChevronRight, FileText, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Simuladores homologados AATD</h1>
          <p className="text-lg text-gray-400">
            A MFSim Simuladores também oferece simuladores para homologação pela ANAC com classe AATD.
          </p>
        </div>

        {/* Seção de Texto Centralizada */}
        <div className="max-w-5xl mx-auto mb-20 bg-gray-900/30 p-8 sm:p-12 rounded-2xl border border-gray-700/50">
          <div className="space-y-12">
            {/* Descrição */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <FileText className="w-12 h-12 text-mfsim-cyan flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3 text-white">Descrição Completa</h2>
                <p className="text-gray-400 leading-relaxed">
                  Desenvolvemos simuladores para aeronaves MONO e MLTE, com instrumentos analógicos ou glass cockpit (Garmin G1000 ou Entegra Avidyne). São equipados com Radiostack completo, GNS430 para voos IFR (VNAV/RNAV), duplo comando, posto de instrutor com sistema de falhas, e muito mais.
                </p>
                <p className="text-gray-400 mt-4 leading-relaxed">
                  Oferecemos suporte total para instalação e atualização do banco de dados conforme a norma <span className="text-mfsim-cyan font-semibold">IS 141-007A</span>.
                </p>
              </div>
            </div>

            {/* Características */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <CheckCircle className="w-12 h-12 text-mfsim-cyan flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Principais Características</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-400">
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-mfsim-cyan" />Equipamentos de alta qualidade</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-mfsim-cyan" />Estrutura em metal robusta</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-mfsim-cyan" />Comunicação de dados precisa</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-mfsim-cyan" />Banco de dados atualizado</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-mfsim-cyan" />Interface de instrutor intuitiva</li>
                  <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-3 text-mfsim-cyan" />Painéis customizáveis</li>
                </ul>
              </div>
            </div>

            {/* Projetos Certificados */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Award className="w-12 h-12 text-mfsim-cyan flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3 text-white">Projetos Certificados e Customizáveis</h2>
                <p className="text-gray-400 leading-relaxed">
                  Temos projetos certificados para <span className="text-white">Cessna 172, Baron 58, C208 Caravan e Cirrus SR20/Caravan</span>. Também desenvolvemos simuladores para outras aeronaves sob demanda para atender às necessidades da sua escola.
                </p>
              </div>
            </div>

            {/* Contato */}
            <div className="flex flex-col sm:flex-row items-start gap-6">
              <Mail className="w-12 h-12 text-mfsim-cyan flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold mb-3 text-white">Tem um Projeto em Mente?</h2>
                <p className="text-gray-400 leading-relaxed">
                  Qualquer dúvida ou interesse em um projeto customizado, entre em contato conosco através do formulário abaixo.
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
              <h3 className="text-3xl font-bold  text-white">CONTATE-NOS</h3>
              <p className="text-1xl mb-6 text-white">EM CASO DE DÚVIDAS</p>
              <ContactForm
                subjectPlaceholder="Assunto (Simuladores Homologados)"
                messagePlaceholder="Deixe sua dúvida sobre nossos simuladores AATD..."
                submitButtonText="Enviar Dúvida"
              />
            </div>
          </div>

          {/* Coluna de Informações */}
          <div className="bg-gray-900/50 border border-gray-700/50 p-8 rounded-lg shadow-lg h-full">
            <div className="text-center flex flex-col justify-center h-full">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-white">OU FAÇA-NOS UMA VISITA</h3>
                <div className="flex items-center justify-center text-mfsim-cyan mb-2">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-gray-400 max-w-sm mx-auto">Estrada Dr. Altino Bondensan, 500 - Eugênio de Melo, São José dos Campos - SP, 12247-016 - Centro Empresarial I, 204B</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Contato Direto</h3>
                <ul className="space-y-3 text-gray-400">
                  <li className="flex items-center justify-center"><Phone className="w-4 h-4 mr-3 text-mfsim-cyan" /> Whatsapp: (12) 99735-6422</li>
                  <li className="flex items-center justify-center"><Phone className="w-4 h-4 mr-3 text-mfsim-cyan" /> Fixo: (12) 3905-7265</li>
                  <li className="flex items-center justify-center"><Mail className="w-4 h-4 mr-3 text-mfsim-cyan" /> contato.mfsim@gmail.com</li>
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
