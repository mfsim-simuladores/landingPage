import { ArrowLeft, CheckCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import YouTube from 'react-youtube';
import { Button } from '../components/ui/button';
import { products } from '../pages/productsData';
import { products as productsEnList } from '../pages/productsDataEn';

const ProductDetailPage = () => {
    const { t, i18n } = useTranslation();
    const { productId } = useParams();
    
    const currentProducts = i18n.language === 'en' ? productsEnList : products;

    // Usamos o 'id' do produto, que foi adicionado aos dados.
    const product = currentProducts.find(p => p.id === productId);

    if (!product) {
        return (
            <div className="h-screen flex flex-col items-center justify-center bg-mfsim-dark text-white">
                <h2 className="text-3xl font-bold mb-4">{t('product_not_found_title')}</h2>
                <p className="text-mfsim-grey mb-8">{t('product_not_found_desc')}</p>
                <Link to="/produtos">
                    <Button>{t('product_back_btn')}</Button>
                </Link>
            </div>
        );
    }

    const videoOptions = {
        height: '100%',
        width: '100%',
        playerVars: {
            autoplay: 0,
            controls: 1,
            rel: 0,
        },
    };

    return (
        <section className="py-24 sm:py-32 bg-mfsim-dark text-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 transform scale-90 origin-top">
                <Link to="/produtos" className="inline-flex items-center text-mfsim-cyan hover:text-white mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    {t('product_back_btn')}
                </Link>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Seção de Fotos */}
                    <div className="space-y-8">
                        <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden border border-gray-700/50">
                            <img
                                src={product.imageSrc || "https://via.placeholder.com/800x600.png?text=MFSim"}
                                alt={product.imageAlt || `Imagem do produto ${product.name}`}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {product.videoId && (
                            <div className="w-full rounded-lg overflow-hidden border border-gray-700/50 shadow-2xl shadow-mfsim-cyan/20" style={{ aspectRatio: '16/9' }}>
                                <YouTube
                                    videoId={product.videoId}
                                    opts={videoOptions}
                                    className="w-full h-full"
                                />
                            </div>
                        )}

                        {/* Seção de Preços Emoldurada */}
                        <div className="bg-gray-900/50 border border-mfsim-cyan/30 rounded-lg p-6 lg:p-8">
                            <div className={`grid grid-cols-1 ${product.pricing.imageSrc ? 'md:grid-cols-2' : ''} gap-6 items-center`}>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">{t('product_pricing_title')}</h3>
                                    {product.pricing.items ? (
                                        <div className="space-y-6 mb-6">
                                            {product.pricing.items.map((item, index) => (
                                                <div key={index} className="border-b border-gray-700/50 pb-4 last:border-0 last:pb-0">
                                                    <p className="text-lg font-semibold text-white">{item.name}</p>
                                                    <p className="text-2xl font-bold text-mfsim-cyan">{item.price}</p>
                                                    <p className="text-sm text-mfsim-grey">{item.description || t('product_payment_terms')}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <>
                                            <p className="text-3xl font-bold text-mfsim-cyan mb-6">{product.pricing.price}</p>
                                            <p className="text-base text-mfsim-grey leading-relaxed mb-4">{t('product_payment_terms')}</p>
                                        </>
                                    )}
                                    <Button asChild size="lg" className="w-full text-base">
                                        <Link to={`/contato?produto=${encodeURIComponent(product.name)}`}>{t('product_contact_btn')}</Link>
                                    </Button>
                                </div>
                                {product.pricing.imageSrc && (
                                    <div className="aspect-w-4 aspect-h-3 rounded-md overflow-hidden">
                                        <img src={product.pricing.imageSrc} alt={product.pricing.imageAlt || 'Módulos do produto'} className="w-full h-full object-cover" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Seção de Informações */}
                    <div>
                        <h1 className="text-3xl sm:text-4xl font-bold text-white">{product.name}</h1>
                        <h2 className="mt-2 text-lg text-mfsim-cyan font-semibold">{product.imageText}</h2>
                        
                        {/* Seções de Detalhes Dinâmicas */}
                        <div className="mt-8 space-y-8">
                            {product.details?.map((section, index) => {
                                const isHighlighted = !section.title || section.title.trim() === '';
                                return (
                                    <div key={index} className={isHighlighted ? "bg-gray-900/50 border border-mfsim-cyan/30 rounded-lg p-6" : ""}>
                                        {!isHighlighted && <h3 className="text-xl font-bold text-white mb-3">{section.title}</h3>}
                                        {typeof section.content === 'string' ? (
                                            <p className="text-base text-mfsim-grey leading-relaxed">{section.content}</p>
                                        ) : (
                                            <div className="space-y-4 text-base text-mfsim-grey leading-relaxed">
                                                {section.content.paragraphs?.map((p, i) => <p key={i}>{p}</p>)}
                                                {section.content.list && (
                                                    <ul className="space-y-3 pl-2 mt-4">
                                                        {section.content.list.map((item, i) => (
                                                            <li key={i} className="flex items-start">
                                                                <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0 text-mfsim-cyan" />
                                                                <span>{item}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetailPage;