import { ChevronDown, Ellipsis, Pin } from "lucide-react";
import Image from "next/image";

export default function Header() {
    return (
        <header className="px-6 py-4.5 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
                <Image src="/deepshit-logo.svg" alt="Deepershi" width={20} height={20} />

                <span className="font-bold text-sm">Deepershi R1</span>

                <ChevronDown size={20} />
            </div>

            <div className="flex items-center gap-2">
                <Pin size={16} className="m-2" />

                <Ellipsis size={16} className="m-2" />
            </div>
        </header>
    );
}