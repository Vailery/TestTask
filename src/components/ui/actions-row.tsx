import { Action } from "@/app/(chat)/content";

interface ActionsRowProps {
    actions?: Action[];
    className?: string;
}

export default function ActionsRow({ actions, className = "" }: ActionsRowProps) {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            {actions?.map((action, index) => {
                const IconComponent = action.icon;

                return (
                    <button
                        key={`${action.type}-${index}`}
                        type="button"
                        onClick={action.onClick}
                        disabled={action.disabled}
                        title={action.tooltip}
                        className={`${action.disabled && 'opacity-50 cursor-not-allowed'}`}
                    >
                        <IconComponent size={16} className="m-2 text-light-gold" />
                    </button>
                );
            })}
        </div>
    );
};