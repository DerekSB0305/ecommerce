import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Link, usePage } from '@inertiajs/react'
import ApplicationLogo from '@/Components/ApplicationLogo'
import ProfileDropdown from '../ProfileDropdown'
import MobileMenuButton from './MobileMenuButton'
import MovileProfileDropdown from './MovileProfileDropdown'
import { UserCircleIcon } from '@heroicons/react/24/outline'

const navigation_profile = [
    { name: 'Perfil', href: route('profile.orders'), current: route().current('profile.orders') },
    { name: 'Ordenes', href: route('profile.index'), current: route().current('profile.index') },
]

const navigation_sing = [
    { name: 'Acceder', href: route('login'), current: route().current('login') },
    { name: 'Crear cuenta', href: route('register'), current: route().current('register') },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MovileNavbar({ navigation }) {
    const { auth, departments } = usePage().props

    return (
        <Disclosure as="nav" className="bg-black border-b border-amber-500/30 lg:hidden">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            {/* Mobile menu button */}
                            <div className="absolute inset-y-0 left-0 flex items-center">
                                <MobileMenuButton open={open} color="text-amber-500" />
                            </div>
                            
                            {/* Logo */}
                            <div className="flex flex-1 items-center justify-center">
                                <div className="flex flex-shrink-0 items-center">
                                    <ApplicationLogo 
                                        bgIcon="bg-amber-500"
                                        colorIcon="text-black"
                                        textColor="text-amber-500"
                                        className="h-8 w-auto"
                                    />
                                </div>
                            </div>

                            {/* Profile dropdown */}
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <ProfileDropdown>
                                    <button className="flex text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500/50">
                                        <span className="sr-only">Open user menu</span>
                                        <UserCircleIcon className="h-8 w-8 text-amber-500 hover:text-amber-400 transition-colors" />
                                    </button>
                                </ProfileDropdown>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="bg-black/95 backdrop-blur-sm">
                        <>
                            {/* Departments */}
                            <div className="space-y-1 px-2 pb-3 pt-2">
                                {departments.map((item) => (
                                    <Link
                                        key={item.slug}
                                        href={route('department', item.slug)}
                                        className={classNames(
                                            route().current('department', item.slug) 
                                                ? 'bg-amber-500/10 text-amber-500'
                                                : 'text-gray-300 hover:bg-amber-500/20 hover:text-amber-400',
                                            'block rounded-md px-3 py-2.5 text-base font-medium transition-colors'
                                        )}
                                        aria-current={route().current('department', item.slug) ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>

                            {/* Auth section */}
                            <div className="border-t border-amber-500/30 pb-3 pt-4">
                                {auth.user ? (
                                    <>
                                        <div className="flex items-center px-5">
                                            <div>
                                                <div className="text-base font-medium text-amber-500">{auth.user.name}</div>
                                                <div className="text-sm font-medium text-gray-400 mt-1">{auth.user.email}</div>
                                            </div>
                                        </div>
                                        <div className="mt-3 space-y-1 px-2">
                                            {navigation_profile.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={classNames(
                                                        item.current 
                                                            ? 'bg-amber-500/10 text-amber-500'
                                                            : 'text-gray-300 hover:bg-amber-500/20 hover:text-amber-400',
                                                        'block rounded-md px-3 py-2.5 text-base font-medium transition-colors'
                                                    )}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                            <Link
                                                method="post" 
                                                href={route('logout')}
                                                as="button"
                                                className="w-full text-left block rounded-md px-3 py-2.5 text-base font-medium text-gray-300 hover:bg-amber-500/20 hover:text-amber-400 transition-colors"
                                            >
                                                Cerrar sesión
                                            </Link>
                                        </div>
                                    </>
                                ) : (
                                    <div className="space-y-1 px-2">
                                        {navigation_sing.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current 
                                                        ? 'bg-amber-500/10 text-amber-500'
                                                        : 'text-gray-300 hover:bg-amber-500/20 hover:text-amber-400',
                                                    'block rounded-md px-3 py-2.5 text-base font-medium transition-colors'
                                                )}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}