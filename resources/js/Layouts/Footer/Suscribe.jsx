import InputError from "@/Components/Form/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/Form/TextInput";
import { useForm, usePage } from "@inertiajs/react";

const Suscribe = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
    });

    function handleSubmit(e) {
        e.preventDefault();
        post('/subscribe', {
            preserveScroll: true,
            onSuccess: () => reset('email'),
        });
    }

    return (
        <div className="bg-black border border-amber-500/30 rounded-lg p-8 lg:p-12 relative overflow-hidden">
            {/* Efecto de brillo dorado */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                background: `radial-gradient(circle at 80% 20%, rgba(245, 158, 11, 0.15), transparent 50%)`
            }}></div>
            
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center relative">
                {/* Sección de texto */}
                <div className="lg:w-1/2 text-center lg:text-left space-y-4">
                    <h3 className="text-2xl lg:text-3xl font-bold text-amber-500">
                        Obtenga consejos de profesionales<br className="hidden lg:block" /> en su bandeja de entrada
                    </h3>
                    <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                        Suscríbase a nuestro boletín exclusivo y manténgase actualizado con las últimas tendencias.
                    </p>
                </div>

                {/* Formulario */}
                <div className="lg:w-1/2 w-full">
                    <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-4">
                        <div className="flex-1 relative">
                            <TextInput
                                onChange={e => setData('email', e.target.value)}
                                type="email"
                                placeholder="Ingrese su correo electrónico"
                                value={data.email}
                                className="w-full bg-black/50 border border-amber-500/30 focus:border-amber-500 focus:ring-2 focus:ring-amber-500/50 placeholder-gray-400 text-gray-100 rounded-lg transition-all"
                                icon={
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                }
                            />
                            <InputError className="mt-2" message={errors.email} />
                        </div>
                        
                        <PrimaryButton 
                            className="justify-center bg-amber-600 hover:bg-amber-500 border-amber-700 text-white transition-all duration-300 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20"
                            disabled={processing} 
                            isLoading={processing}
                        >
                            Suscribirse
                        </PrimaryButton>
                    </form>
                </div>
            </div>

            {/* Detalle decorativo */}
            <div className="absolute bottom-0 right-0 h-24 w-24 bg-amber-500/10 blur-[80px] pointer-events-none"></div>
        </div>
    );
};

export default Suscribe;