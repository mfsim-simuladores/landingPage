import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { useToast } from '../components/ui/use-toast';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { toast } = useToast();
    const langRef = useRef(null);
    const { t, i18n } = useTranslation();


    const handleNotImplemented = (e) => {
        e.preventDefault();
        toast({
            title: "Funcionalidade em desenvolvimento",
            description: "🚧 Este recurso ainda não foi implementado, mas não se preocupe! Você pode solicitá-lo no seu próximo prompt! 🚀",
            variant: "default",
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (langRef.current && !langRef.current.contains(event.target)) {
                setIsLangOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    // Alteramos o array para ser um array de objetos, contendo o nome e o caminho da rota.
    const navItems = [
        { name: t('nav_inicio'), href: "/" },
        { name: t('nav_produtos'), href: "/produtos" },
        { name: t('nav_homologacao') , href: "/simulador-homologado-aatd"},
        { name: t('nav_customizados') , href: "/customizados" },
        { name: t('nav_midias'), href: "/midias" },
        { name: t('nav_contato'), href: "/contato" },
    ];

    const LanguageSwitcher = ({ isMobile = false }) => {
        if (isMobile) {
            return (
                <div className="flex justify-center items-center space-x-4 py-2">
                    <span className="text-white">Idioma:</span>
                    <button onClick={() => i18n.changeLanguage('pt')} className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-700/50 ${i18n.language === 'pt' ? '' : 'opacity-50'}`}>
                        <img src="/icons/brazil.png" alt="Português" className="w-6 h-6 rounded-full" />
                    </button>
                    <button onClick={() => i18n.changeLanguage('en')} className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-700/50 ${i18n.language === 'en' ? '' : 'opacity-50'}`}>
                        <img src="/icons/united-states.png" alt="English" className="w-6 h-6 rounded-full" />
                    </button>
                </div>
            );
        }

        return (
            <div className="relative" ref={langRef}>
                <button onClick={() => setIsLangOpen(!isLangOpen)} className="w-8 h-8 rounded-full overflow-hidden focus:outline-none ring-2 ring-transparent hover:ring-mfsim-cyan focus:ring-mfsim-cyan transition">
                    <img src={i18n.language === 'pt' ? "/icons/brazil.png" : "/icons/united-states.png"} alt="Selecionar Idioma" className="w-full h-full object-cover" />
                </button>
                {isLangOpen && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="absolute top-full right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-md shadow-lg">
                        <button onClick={() => { i18n.changeLanguage('pt'); setIsLangOpen(false); }} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-white hover:bg-gray-700/50">
                            <img src="/icons/brazil.png" alt="Português" className="w-5 h-5 rounded-full" />
                            <span>{t('lang_pt')}</span>
                        </button>
                        <button onClick={() => { i18n.changeLanguage('en'); setIsLangOpen(false); }} className="w-full flex items-center gap-3 px-4 py-2 text-sm text-white hover:bg-gray-700/50">
                            <img src="/icons/united-states.png" alt="English" className="w-5 h-5 rounded-full" />
                            <span>{t('lang_en')}</span>
                        </button>
                    </motion.div>
                )}
            </div>
        );
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-mfsim-dark/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
                <Link to="/" className="flex-shrink-0 flex items-center">
                    <img
                        src="/partners/mfsim_menu.png"
                        alt="Logo da MFSim"
                        className="h-10 w-auto"
                    />
                </Link>

                <nav className="hidden md:flex items-center space-x-6">
                    {navItems.map((item) =>
                        item.href ? (
                            <Link key={item.name} to={item.href} className="text-white font-medium hover:text-mfsim-cyan transition-colors duration-300">
                                {item.name}
                            </Link>
                        ) : (
                            <a key={item.name} href="#" onClick={handleNotImplemented} className="text-white font-medium hover:text-mfsim-cyan transition-colors duration-300 cursor-pointer">
                                {item.name}
                            </a>
                        )
                    )}
                </nav>

                <div className="hidden md:flex items-center gap-6">
                    <Link to="/contato">
                        <Button>{t('btn_solicitar_orcamento')}</Button>
                    </Link>
                    <LanguageSwitcher />
                </div>

                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="md:hidden bg-mfsim-dark"
                >
                    <nav className="px-4 pt-2 pb-4 space-y-2 flex flex-col items-center">
                        {navItems.map((item) =>
                            item.href ? (
                                <Link key={item.name} to={item.href} onClick={() => setIsOpen(false)} className="block text-white text-lg font-medium hover:text-mfsim-cyan transition-colors duration-300 py-2">
                                    {item.name}
                                </Link>
                            ) : (
                                <a key={item.name} href="#" onClick={(e) => { handleNotImplemented(e); setIsOpen(false); }} className="block text-white text-lg font-medium hover:text-mfsim-cyan transition-colors duration-300 py-2">
                                    {item.name}
                                </a>
                            )
                        )}
                        <LanguageSwitcher isMobile={true} />
                        <Link to="/contato" className="w-full">
                            <button className="bg-mfsim-cyan hover:bg-cyan-500 text-mfsim-dark font-bold py-3 px-6 rounded-lg w-full mt-4 transition-colors">
                                {t('btn_solicitar_orcamento')}
                            </button>
                        </Link>
                    </nav>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Header;