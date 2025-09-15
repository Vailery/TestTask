import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface NavItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
    isActive?: boolean;
    isMini?: boolean;
    onClick?: () => void;
}

export default function NavItem({ icon: Icon, label, href, isActive = false, isMini = false, onClick }: NavItemProps) {
    return (
        <Link
            href={href}
            onClick={onClick}
            className={`flex items-center ${isMini ? 'justify-center px-2' : 'gap-3 px-2.5'} py-3 rounded cursor-pointer text-light-gold ${isActive
                ? 'nav-search-gradient'
                : 'hover:nav-item-gradient'
                }`}
            title={isMini ? label : undefined}
        >
            <Icon size={20} className="text-light-gold" />
            {!isMini && label}
        </Link>
    );
}
