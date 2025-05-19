import React from 'react'

function BannerText({ title, img = null, entry }) {
    return (
        <div className="relative bg-black overflow-hidden border-b border-amber-500/30">
            {/* Efecto decorativo dorado */}
            <div className="absolute inset-0 opacity-10" style={{
                background: `radial-gradient(circle at 70% 30%, rgba(245, 158, 11, 0.15), transparent 70%)`
            }}></div>
            
            <div className="container relative">
                <div className="flex flex-col lg:flex-row items-center justify-between py-16 lg:py-24 gap-8">
                    {/* Contenido de texto */}
                    <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-500 leading-tight">
                            {title}
                        </h2>
                        <p className="text-lg text-amber-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            {entry}
                        </p>
                    </div>

                    {/* Contenedor de imagen */}
                    {img && (
                        <div className="lg:w-1/2 flex justify-center lg:justify-end">
                            <div className="relative group overflow-hidden rounded-xl border-2 border-amber-500/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                                <img 
                                    className="h-72 object-contain transform group-hover:scale-105 transition-transform duration-300" 
                                    src={img} 
                                    alt={title} 
                                />
                                {/* Overlay dorado */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BannerText