import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useToast } from '../components/ui/use-toast';

const ContactForm = ({
    subjectPlaceholder = "Assunto",
    messagePlaceholder = "Mensagem",
    submitButtonText = "Enviar Mensagem"
}) => {
    const { toast } = useToast();
    const location = useLocation();
    const [isSending, setIsSending] = useState(false);
    const [formState, setFormState] = useState({
        from_name: '',
        from_email: '',
        subject: '',
        message: ''
    });

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const productName = params.get('produto');
        if (productName) {
            setFormState(prevState => ({
                ...prevState,
                subject: `Solicitação de Orçamento: ${productName}`
            }));
        }
    }, [location]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setIsSending(true);

        const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceID || !templateID || !publicKey) {
            console.error("EmailJS environment variables are not configured.");
            toast({
                title: "Erro de Configuração",
                description: "O serviço de envio de e-mail não está configurado corretamente.",
                variant: "destructive",
            });
            setIsSending(false);
            return;
        }

        try {
            await emailjs.send(serviceID, templateID, formState, publicKey);
                toast({
                    title: "Mensagem Enviada!",
                    description: "Seu e-mail foi enviado com sucesso. Entraremos em contato em breve.",
                });
                const params = new URLSearchParams(location.search);
                const productName = params.get('produto');
                setFormState({
                    from_name: '',
                    from_email: '',
                    subject: productName ? `Solicitação de Orçamento: ${productName}` : '',
                    message: ''
                });
        } catch (error) {
            console.error("Erro EmailJS:", error);
                toast({
                    title: "Erro ao Enviar",
                    description: "Houve um problema ao enviar sua mensagem. Por favor, tente novamente mais tarde.",
                    variant: "destructive",
                });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <form onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="from_name" placeholder="Nome" className="bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-mfsim-cyan w-full" value={formState.from_name} onChange={handleInputChange} required />
                <input type="email" name="from_email" placeholder="Email" className="bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-mfsim-cyan w-full" value={formState.from_email} onChange={handleInputChange} required />
            </div>
            <input type="text" name="subject" placeholder={subjectPlaceholder} className="bg-gray-700 text-white p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-mfsim-cyan" value={formState.subject} onChange={handleInputChange} required />
            <textarea name="message" placeholder={messagePlaceholder} rows="5" className="bg-gray-700 text-white p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-mfsim-cyan" value={formState.message} onChange={handleInputChange} required></textarea>
            <button type="submit" disabled={isSending} className="bg-mfsim-cyan hover:bg-cyan-500 text-mfsim-dark font-bold py-3 px-6 rounded-lg w-full transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed">
                {isSending ? 'Enviando...' : submitButtonText}
            </button>
        </form>
    );
};

export default ContactForm;