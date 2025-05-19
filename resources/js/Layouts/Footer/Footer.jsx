import { Link, usePage } from "@inertiajs/react";
import Suscribe from "./Suscribe";
import ApplicationLogo from "@/Components/ApplicationLogo";
import SocilaMediaIcon from "./SocilaMediaIcon";

const Footer = () => {
    const { settings } = usePage().props;
    return (
        <>
            <div className="container py-12 border-b border-amber-500/30">
                <Suscribe />
            </div>

            <footer className="bg-black text-white relative overflow-hidden">
                {/* Efecto de brillo dorado */}
                <div className="absolute inset-0 opacity-10" style={{
                    background: `radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.3), transparent 70%)`
                }}></div>
                
                <div className="container relative">
                    <div className="py-12 grid grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                        {/* Sección Logo y Descripción */}
                        <div className="col-span-2 space-y-6">
                            <ApplicationLogo
                                bgIcon="bg-amber-500"
                                colorIcon="text-black"
                                textColor="text-amber-500"
                                className="h-12 w-auto"
                            />
                            <p className="text-gray-300 leading-relaxed text-sm">
                                {settings.company.entry}
                            </p>
                            <div className="flex space-x-4">
                                <SocilaMediaIcon className="text-amber-500 hover:text-amber-400 transition-colors" />
                            </div>
                        </div>

                        {/* Secciones de Contenido */}
                        <ItemFooter title="Contacto">
                            <div className="space-y-3 text-gray-300">
                                <div className="flex items-center space-x-2">
                                    <EnvelopeIcon className="h-4 w-4 text-amber-500" />
                                    <span>{settings.company.email}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MapPinIcon className="h-4 w-4 text-amber-500" />
                                    <span>{settings.company.address}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <PhoneIcon className="h-4 w-4 text-amber-500" />
                                    <span>{settings.company.phone}</span>
                                </div>
                            </div>
                        </ItemFooter>

                        <ItemFooter title="Información">
                            <div className="space-y-3">
                                <FooterLink href="/shipping-delivery" text="Envío y Entrega" />
                                <FooterLink href="/return-exchanges" text="Devoluciones y cambios" />
                                <FooterLink href="/faq" text="Preguntas frecuentes" />
                            </div>
                        </ItemFooter>

                        <ItemFooter title="Categorias">
                            <div className="space-y-3">
                                <FooterLink 
                                    href={route("search", {"categories[]": "teclados"})}
                                    text="Teclados"
                                />
                                <FooterLink 
                                    href={route("search", {"categories[]": "mouses"})}
                                    text="Mouses"
                                />
                                <FooterLink 
                                    href={route("search", {"categories[]": "procesadores"})}
                                    text="Procesadores"
                                />
                                <FooterLink 
                                    href={route("search", {"categories[]": "ram"})}
                                    text="Memoria RAM"
                                />
                            </div>
                        </ItemFooter>
                    </div>

                    {/* Sección Inferior */}
                    <div className="border-t border-amber-500/30 py-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
                            <div className="text-gray-400">
                                © 2025 {settings.company.name}. Todos los derechos reservados.
                            </div>
                            <div className="flex space-x-6">
                                <Link href="/privacy" className="text-gray-300 hover:text-amber-500 transition-colors">
                                    Política de Privacidad
                                </Link>
                                <Link href="/terms" className="text-gray-300 hover:text-amber-500 transition-colors">
                                    Términos de Servicio
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

// Componente auxiliar para enlaces del footer
const FooterLink = ({ href, text }) => (
    <Link href={href} className="block text-gray-300 hover:text-amber-500 transition-colors text-sm">
        {text}
    </Link>
);

// Componente ItemFooter mejorado
const ItemFooter = ({ title, children }) => (
    <div className="space-y-4">
        <h4 className="text-amber-500 font-semibold uppercase tracking-wide text-sm">
            {title}
        </h4>
        <div className="space-y-2.5">
            {children}
        </div>
    </div>
);

// Iconos de ejemplo (debes importarlos o usar tu propia implementación)
const EnvelopeIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

const MapPinIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const PhoneIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

export default Footer;