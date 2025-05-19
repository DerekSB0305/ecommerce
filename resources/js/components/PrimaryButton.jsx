import Spinner from "./Spinner";

export default function PrimaryButton({ 
    className = '', 
    Icon = null, 
    disabled, 
    children, 
    isLoading, 
    ...props 
}) {
    return (
        <button
            {...props}
            className={`
                relative inline-flex items-center justify-center
                px-4 py-2.5 rounded-lg font-medium
                bg-black text-white
                border border-amber-500/20
                transition-all duration-300
                hover:bg-gray-900 hover:border-amber-500/30
                focus:outline-none focus:ring-2 focus:ring-amber-500/50
                ${(disabled || isLoading) && 'opacity-70 cursor-not-allowed'}
                ${className}
            `}
            disabled={disabled || isLoading}
        >
            <div className={`inline-flex items-center ${isLoading ? 'invisible' : 'visible'}`}>
                {Icon && (
                    <Icon className="w-5 h-5 mr-2 text-amber-400" />
                )}
                {children}
            </div>
            
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Spinner className="w-5 h-5 text-amber-500" />
                </div>
            )}
        </button>
    );
}