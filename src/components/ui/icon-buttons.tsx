import { LucideIcon } from "lucide-react";

interface IconButtonProps {
    type: "submit" | "reset" | "button";
    icon: LucideIcon;
    onClick?: () => void;
    className?: string;
    size?: number;
}

export default function IconButton({ type, icon: Icon, onClick, className = "", size = 20 }: IconButtonProps) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-deep-gold p-2.5 rounded-md ${className}`}
        >
            <Icon size={size} className="text-black" />
        </button>
    );
}