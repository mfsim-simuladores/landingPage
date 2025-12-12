import { motion } from 'framer-motion';
import { Facebook, Instagram, MessageSquare, Youtube } from 'lucide-react';

const socialLinks = [
  {
    href: 'https://wa.me/5512997356422', // Link para seu WhatsApp
    icon: <MessageSquare size={22} />,
    label: 'WhatsApp',
  },
  {
    href: 'https://www.instagram.com/mfsim_hc/', // Link para seu Instagram
    icon: <Instagram size={22} />,
    label: 'Instagram',
  },
  {
    href: 'https://www.facebook.com/mfsimhc/', // Link para seu Facebook
    icon: <Facebook size={22} />,
    label: 'Facebook',
  },
  {
    href: 'https://www.youtube.com/@mfsimsimuladores', // Link para seu YouTube
    icon: <Youtube size={22} />,
    label: 'YouTube',
  },
];

const FloatingSocials = () => {
  return (
    <motion.div
      className="fixed top-1/2 -translate-y-1/2 left-0 z-40 hidden md:block"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="flex flex-col items-center space-y-2 bg-gray-800/50 backdrop-blur-sm p-2 rounded-r-lg border-y border-r border-gray-700/50">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className="p-2 text-white hover:text-mfsim-cyan transition-colors duration-300 rounded-full hover:bg-gray-700/50"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default FloatingSocials;