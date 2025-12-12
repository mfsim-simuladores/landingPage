import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Button } from '../ui/button';

const Location = () => {
    const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.049405629193!2d-45.78985182468301!3d-23.168593478971485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cc4555cf643379%3A0x6a38612a2e12e1a3!2sMFSim%20Simuladores%20de%20Voo!5e0!3m2!1spt-BR!2sbr!4v1725822000000!5m2!1spt-BR!2sbr";
    const businessAddress = "Avenida Doutor Altino Bondensan, 500 - Distrito de Eugênio de Melo, São José dos Campos - SP, 12247-016";

    return (
        <section className="py-12 sm:py-20 bg-mfsim-dark">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 transform scale-90 origin-top">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                        Onde Estamos
                    </h2>

                    {/* NOVO BLOCO PARA AS LOGOS LADO A LADO */}
                    <motion.div 
                        className="flex flex-col sm:flex-row items-center justify-center gap-x-8 gap-y-4 mb-6" // Flexbox para alinhar lado a lado
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        style={{ marginTop: '2rem' }} // Espaçamento superior
                    >
                        {/* Logo 1: Parque Tecnológico */}
                        <img 
                            src="/partners/pqTecnologico.png" // Caminho para sua logo do Parque Tecnológico
                            alt="Logo Parque Tecnológico São José dos Campos"
                            className="h-20 object-contain" // Altura para a logo
                        />
                        
                        {/* Logo 2: Nexus Hub (EXEMPLO) */}
                        <img 
                            src="/partners/pitSjc.png" // 👈 SUBSTITUA PELO CAMINHO DA SUA SEGUNDA LOGO (ex: Nexus Hub)
                            alt="Logo Parque de Inovação Tecnológico São José dos Campos"
                            className="h-20 object-contain" // Mesma altura para alinhar
                        />
                        <img 
                            src="/partners/nexus.png" // 👈 SUBSTITUA PELO CAMINHO DA SUA SEGUNDA LOGO (ex: Nexus Hub)
                            alt="Logo Nexus Hub de Inovação"
                            className="h-20 object-contain" // Mesma altura para alinhar
                        />
                    </motion.div>

                    <p className="mt-4 max-w-3xl mx-auto text-lg text-mfsim-grey">
                        Instalados no Parque Tecnológico de São José dos Campos - SP, desde 2019, fazemos parte do programa de incubação criado para empresas de tecnologia, chamado Nexus Hub.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
                    {/* Coluna do Mapa */}
                    <motion.div
                        className="lg:col-span-3 h-80 md:h-96 w-full rounded-2xl overflow-hidden border-2 border-gray-700/50"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <iframe
                            src={googleMapsUrl}
                            className="w-full h-full"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </motion.div>

                    {/* Coluna de Texto e Endereço */}
                    <motion.div
                        className="lg:col-span-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        <div className="bg-gray-900/40 p-8 rounded-xl">
                            <h3 className="text-2xl font-bold text-white mb-4">Nosso Endereço</h3>
                            <div className="flex items-start">
                                <MapPin className="w-6 h-6 mr-4 mt-1 flex-shrink-0 text-mfsim-cyan" />
                                <p className="text-mfsim-grey">
                                    Avenida Doutor Altino Bondensan, 500<br/>
                                    Distrito de Eugênio de Melo<br/>
                                    CEP: 12247-016<br/>
                                    São José dos Campos - SP - Brasil
                                </p>
                            </div>
                            <Button 
                                asChild
                                size="lg" 
                                className="w-full mt-6"
                            >
                                <a href="https://maps.app.goo.gl/wQ1gE6dYpG7Z9f4r5" target="_blank" rel="noopener noreferrer">
                                    Ver no Google Maps
                                </a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Location;