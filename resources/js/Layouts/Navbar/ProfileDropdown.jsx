import Dropdown from "@/Components/Dropdown"
import { AdjustmentsHorizontalIcon, ArrowLeftOnRectangleIcon, ArrowRightOnRectangleIcon, ShoppingBagIcon, UserCircleIcon } from "@heroicons/react/24/outline"
import { usePage } from "@inertiajs/react"

export default function ProfileDropdown({ children }) {
    const navigation_profile = [
        {
            name: 'Perfil',
            href: route('profile.index'),
            icon: UserCircleIcon
        },
        {
            name: 'Mis Compras',
            href: route('profile.orders'),
            icon: ShoppingBagIcon
        },
    ]

    const navigation_sing = [
        {
            name: 'Acceder',
            href: route('login'),
            icon: ArrowRightOnRectangleIcon
        },
        {
            name: 'Crear cuenta',
            href: route('register'),
            icon: ArrowLeftOnRectangleIcon
        },
    ]

    const { auth } = usePage().props

    return (
        <Dropdown>
            <Dropdown.Trigger>
                {children}
            </Dropdown.Trigger>
            
            <Dropdown.Content className="bg-black border border-amber-500/30 shadow-xl">
                {auth.user ? (
                    <>
                        {navigation_profile.map((item) => (
                            <Dropdown.Link 
                                href={item.href} 
                                key={item.name}
                                className="text-black hover:bg-amber-500/10 px-4 py-2.5" // Modificado
                            >
                                <div className="flex items-center">
                                    <item.icon className="h-5 w-5 mr-2 text-amber-500" />
                                    <span>{item.name}</span>
                                </div>
                            </Dropdown.Link>
                        ))}

                        {(auth.user.role == 'admin') && (
                            <a 
                                className="block px-4 py-2.5 text-black hover:bg-amber-500/10 border-t border-amber-500/30" // Modificado
                                target='_blank' 
                                href={route('dashboard.home')}
                            >
                                <div className="flex items-center">
                                    <AdjustmentsHorizontalIcon className="h-5 w-5 mr-2 text-amber-500" />
                                    <span>Dashboard</span>
                                </div>
                            </a>
                        )}

                        <Dropdown.Link 
                            href={route('logout')} 
                            method="post" 
                            className="text-black hover:bg-amber-500/10 border-t border-amber-500/30 px-4 py-2.5" // Modificado
                        >
                            <div className="flex items-center">
                                <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2 text-amber-500" />
                                <span>Cerrar sesión</span>
                            </div>
                        </Dropdown.Link>
                    </>
                ) : (
                    navigation_sing.map((item) => (
                        <Dropdown.Link 
                            href={item.href} 
                            key={item.name}
                            className="text-black hover:bg-amber-500/10 px-4 py-2.5" // Modificado
                        >
                            <div className="flex items-center">
                                <item.icon className="h-5 w-5 mr-2 text-amber-500" />
                                <span>{item.name}</span>
                            </div>
                        </Dropdown.Link>
                    ))
                )}
            </Dropdown.Content>
        </Dropdown>
    )
}