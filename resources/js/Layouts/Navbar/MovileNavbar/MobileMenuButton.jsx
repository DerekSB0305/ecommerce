import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import React from 'react'

export default function MobileMenuButton({ open, color = 'text-amber-500' }) {
    return (
        <Disclosure.Button 
            className={`
                inline-flex items-center justify-center 
                rounded-lg p-2 transition-all
                hover:bg-amber-500/20 
                focus:outline-none focus:ring-2 
                focus:ring-amber-500/50 focus:ring-offset-2 
                focus:ring-offset-black
                ${open ? 'bg-amber-500/30' : ''}
            `}
        >
            <span className="sr-only">Abrir menú principal</span>
            {open ? (
                <XMarkIcon className={`h-6 w-6 ${color} hover:text-amber-400 transition-colors`} />
            ) : (
                <Bars3Icon className={`h-6 w-6 ${color} hover:text-amber-400 transition-colors`} />
            )}
        </Disclosure.Button>
    )
}