import emailjs from '@emailjs/browser';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useToast } from '../components/ui/use-toast';

const ContactForm = ({
    subjectPlaceholder,
    messagePlaceholder,
    submitButtonText
}) => {
    const { t } = useTranslation();
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
                subject: `${t('form_subject_budget')}: ${productName}`
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
                title: t('toast_error_config_title'),
                description: t('toast_error_config_desc'),
                variant: "destructive",
            });
            setIsSending(false);
            return;
        }

        try {
            await emailjs.send(serviceID, templateID, formState, publicKey);
                toast({
                    title: t('toast_success_title'),
                    description: t('toast_success_desc'),
                });
                const params = new URLSearchParams(location.search);
                const productName = params.get('produto');
                setFormState({
                    from_name: '',
                    from_email: '',
                    subject: productName ? `${t('form_subject_budget')}: ${productName}` : '',
                    message: ''
                });
        } catch (error) {
            console.error("Erro EmailJS:", error);
                toast({
                    title: t('toast_error_send_title'),
                    description: t('toast_error_send_desc'),
                    variant: "destructive",
                });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <form onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="from_name" placeholder={t('form_name_placeholder')} className="bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-mfsim-cyan w-full" value={formState.from_name} onChange={handleInputChange} required />
                <input type="email" name="from_email" placeholder={t('form_email_placeholder')} className="bg-gray-700 text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-mfsim-cyan w-full" value={formState.from_email} onChange={handleInputChange} required />
            </div>
            <input type="text" name="subject" placeholder={subjectPlaceholder || t('form_subject_placeholder')} className="bg-gray-700 text-white p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-mfsim-cyan" value={formState.subject} onChange={handleInputChange} required />
            <textarea name="message" placeholder={messagePlaceholder || t('form_message_placeholder')} rows="5" className="bg-gray-700 text-white p-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-mfsim-cyan" value={formState.message} onChange={handleInputChange} required></textarea>
            <button type="submit" disabled={isSending} className="bg-mfsim-cyan hover:bg-cyan-500 text-mfsim-dark font-bold py-3 px-6 rounded-lg w-full transition-colors disabled:bg-gray-500 disabled:cursor-not-allowed">
                {isSending ? t('form_sending_btn') : (submitButtonText || t('form_submit_btn'))}
            </button>
        </form>
    );
};

export default ContactForm;