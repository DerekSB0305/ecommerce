import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import {
    ChevronDownIcon,
    ChevronUpDownIcon,
    ShoppingBagIcon,
    ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Link, useForm, usePage } from "@inertiajs/react";
import ProfileDropdown from "./ProfileDropdown";
import DepartmentDropdown from "./DepartmentDropdown";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { formatCurrency } from "@/Helpers/helpers";

export default function DesktopNavbar({ navigation }) {
    const { auth, filters, departments, settings } = usePage().props;
    const { data, setData, get, processing, errors, reset } = useForm({
        q: filters?.q || null,
    });

    function handleSubmit(e) {
        e.preventDefault();
        get("/search", {
            preserveScroll: true,
        });
    }

    return (
        <nav className="border-b border-amber-500/30 bg-black hidden lg:block">
            {settings.rates.freeShipping && (
                <p className="flex h-10 items-center justify-center bg-gradient-to-r from-amber-600 to-amber-500 px-4 text-sm text-white sm:px-6 lg:px-8">
                    Obtenga envío gratuito en pedidos superiores a $1200
                </p>
            )}

            <div className="container pt-4 text-gray-300">
                <div className="relative text-sm grid grid-cols-12 gap-x-5 items-center">
                    <div className="col-span-3">
                        <ApplicationLogo 
                            bgIcon="bg-amber-500"
                            colorIcon="text-black"
                            textColor="text-amber-500"
                            className="h-10"
                        />
                    </div>

                    <div className="w-full md:col-span-7">
                        <form
                            onSubmit={handleSubmit}
                            className="overflow-hidden border-2 border-amber-500 bg-black/30 flex rounded-lg shadow-sm transition-all focus-within:border-amber-400"
                        >
                            <input
                                id="search-main"
                                type="text"
                                name="q"
                                onChange={(e) => setData("q", e.target.value)}
                                className="block w-full border-none bg-transparent focus:ring-0 text-white placeholder-gray-400 px-4 py-2"
                                placeholder="Buscar productos..."
                                autoComplete="search"
                                required
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 bg-amber-500 hover:bg-amber-400 transition-colors"
                            >
                                <MagnifyingGlassIcon className="w-5 h-5 text-white" />
                            </button>
                        </form>
                    </div>

                    <div className="flex items-center font-medium md:col-span-9">
                        <div className="py-5 pb-3">
                            <DepartmentDropdown />
                        </div>
                        <div className="hidden xl:block">
                            <div className="ml-5 flex gap-x-5">
                                {departments.map((item) => (
                                    <Link
                                        key={item.slug}
                                        href={route("department", item.slug)}
                                        className={classNames(
                                            route().current("department", item.slug)
                                                ? "border-amber-500 text-amber-500"
                                                : "border-transparent text-gray-300 hover:text-amber-400",
                                            "whitespace-nowrap border-b-2 px-0 py-5 pb-3 font-medium transition-colors"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                {navigation.map((item, key) => (
                                    <Link
                                        key={key}
                                        href={route(item.href)}
                                        className={classNames(
                                            route().current(item.href)
                                                ? "border-amber-500 text-amber-500"
                                                : "border-transparent text-gray-300 hover:text-amber-400",
                                            "whitespace-nowrap border-b-2 px-0 py-5 pb-3 font-medium transition-colors"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-x-5 items-center ml-auto md:col-span-3">
                        {auth.user ? (
                            <ProfileDropdown>
                                <button className="inline-flex items-center rounded-md font-medium text-amber-500 hover:text-amber-400 transition-colors">
                                    {auth.user.name}
                                    <ChevronUpDownIcon
                                        className="w-5 h-5 ml-1 -mr-1 text-amber-500"
                                        aria-hidden="true"
                                    />
                                </button>
                            </ProfileDropdown>
                        ) : (
                            <div className="flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-4">
                                <Link
                                    href={route("login")}
                                    className="font-medium text-gray-300 hover:text-amber-400 transition-colors"
                                >
                                    Acceder
                                </Link>
                                <span
                                    className="h-6 w-px bg-amber-500/30"
                                    aria-hidden="true"
                                ></span>
                                <Link
                                    href={route("register")}
                                    className="font-medium text-gray-300 hover:text-amber-400 transition-colors"
                                >
                                    Crear cuenta
                                </Link>
                            </div>
                        )}

                        <Link href={route("shopping-cart.index")} className="group">
                            <div className="group -m-2 flex items-center p-2 hover:bg-amber-500/20 rounded-lg transition-colors">
                                <ShoppingBagIcon className="h-6 w-6 flex-shrink-0 text-amber-500 group-hover:text-amber-400 transition-colors" />
                                <span className="ml-2 text-sm font-medium text-gray-300 group-hover:text-amber-400 transition-colors">
                                    {auth.shoppingCartCount || 0}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

// Helper function para classNames
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}