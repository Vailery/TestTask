import { LucideIcon } from "lucide-react";

interface IconButtonProps {
    type: "submit" | "reset" | "button";
    icon: LucideIcon;
    onClick?: () => void;
    className?: string;
}

export default function IconButton({ type, icon: Icon, onClick, className = "" }: IconButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-deep-gold p-2.5 rounded-md ${className}`}
        >
            <Icon size={20} className="text-black" />
        </button>
    );
}