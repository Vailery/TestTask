import { ChevronDown, Ellipsis, Pin } from "lucide-react";
import Image from "next/image";

export default function Header() {
    return (
        <header className="px-6 py-4.5 flex items-center justify-between">
            <button type="button" className="flex items-center gap-1.5">
                <Image src="/svg/deepshit-logo.svg" alt="Deepershi" width={20} height={20} />

                <span className="font-semibold text-sm">Deepershi R1</span>

                <ChevronDown size={20} />
            </button>

            <div className="flex items-center gap-2">
                <button type="button">
                    <Pin size={16} className="m-2" />
                </button>

                <button type="button">
                    <Ellipsis size={16} className="m-2" />
                </button>
            </div>
        </header>
    );
}