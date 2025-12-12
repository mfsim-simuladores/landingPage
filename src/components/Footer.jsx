import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useToast } from '../components/ui/use-toast';

const Footer = () => {
    const { toast } = useToast();
    const { t } = useTranslation();

    const handleNotImplemented = (e) => {
        e.preventDefault();
        toast({
            title: "Funcionalidade em desenvolvimento",
            description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
            variant: "default",
        });
    };

    const handleScrollToTop = (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const footerLinks = [
        { 
            title: "Navegação", 
            links: [
                { name: t('nav_inicio'), action: handleScrollToTop },
                { name: t('nav_homologacao'), href: "/simulador-homologado-aatd" },
                { name: t('nav_produtos'), href: "/produtos" },
                { name: t('nav_contato'), href: "/contato" }
            ] 
        },
        { 
            title: "Suporte", 
            links: [
                { name: t('footer_faq'), action: handleNotImplemented },
                { name: t('footer_garantia'), action: handleNotImplemented },
                { name: t('footer_manuais'), action: handleNotImplemented },
                { name: t('footer_fale_conosco'), href: "/contato" }
            ] 
        },
    ];

    return (
        <footer id="footer" className="bg-gray-900/50 text-mfsim-grey py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <a href="/" className="flex-shrink-0 flex items-center">
                                <img 
                                    src="/partners/mfsim_menu.png" // 👈 Altere para o nome do seu arquivo de imagem
                                    alt="Logo da MFSim" 
                                    className="h-10 w-auto" // 👈 Ajuste a altura conforme necessário
                                />
                            </a>
                        </div>
                        <p className="text-sm">{t('footer_descricao')}</p>
                    </div>

                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <p className="font-bold text-white mb-4">{t(`footer_${section.title.toLowerCase()}`)}</p>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.name}>
                                        {link.href ? (
                                            <Link 
                                                to={link.href} 
                                                className="hover:text-mfsim-cyan transition-colors duration-300 text-sm">
                                                {link.name}
                                            </Link>
                                        ) : (
                                            <a 
                                                href="#" 
                                                onClick={link.action || handleNotImplemented} 
                                                className="hover:text-mfsim-cyan transition-colors duration-300 text-sm">{link.name}</a>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    
                    <div>
                        <p className="font-bold text-white mb-4">{t('footer_contato_titulo')}</p>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <MapPin className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-mfsim-cyan" />
                                <span>{t('footer_endereco')}</span>
                            </li>
                            <li className="flex items-start">
                                <Phone className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-mfsim-cyan" />
                                <a href="https://wa.me/5512997356422" /*onClick={handleNotImplemented}*/ className="hover:text-mfsim-cyan transition-colors duration-300">
                                    {t('footer_whatsapp')}
                                </a>
                            </li>
                            <li className="flex items-start">
                                <Phone className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-mfsim-cyan" />
                                <a href="tel:+551239054443" className="hover:text-mfsim-cyan transition-colors duration-300">
                                    {t('footer_fixo')}
                                </a>
                            </li>
                            <li className="flex items-start">
                                <Mail className="w-4 h-4 mr-3 mt-1 flex-shrink-0 text-mfsim-cyan" />
                                <a href={`mailto:${t('footer_email')}`} className="hover:text-mfsim-cyan transition-colors duration-300">
                                    {t('footer_email')}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-700/50 pt-8 text-center text-sm">
                    <p>MFSim Simuladores de Voo LTDA - 43.889.477/0001-82 -
Estrada Dr. Altino Bondensan, 500 - Eugênio de Melo, São José dos Campos - SP, 12247-016 - MFSim, Centro Empresarial I, 204B</p>
                    <p>&copy; {new Date().getFullYear()} MFSim Simuladores. {t('footer_direitos_reservados')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;