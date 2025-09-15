import { Plus } from "lucide-react";
import Image from "next/image";
import IconButton from "../ui/icon-buttons";
import Link from "next/link";
import NavItem from "../ui/nav-item";
import { navItems } from "@/app/(chat)/content";
import { useSidebar } from "@/contexts/sidebar-context";

export default function Nav() {
    const { sidebarMode, toggleSidebar } = useSidebar();

    return (
        <aside
            className={`fixed top-0 left-0 h-screen bg-white/2 border-b nav-gradient flex flex-col z-50 transition-all duration-300 ease-in-out pt-6 pb-8 ${sidebarMode === 'mini'
                ? 'w-[var(--sidebar-width-mini)] px-[var(--spacing-sidebar-padding-mini)]'
                : 'w-[var(--sidebar-width-full)] px-[var(--spacing-sidebar-padding-full)]'
                }`}
        >
            <div className={`flex items-center justify-between pb-6 border-b nav-logo-gradient flex-shrink-0 ${sidebarMode === 'mini' && 'justify-center'}`}>
                {sidebarMode === 'open' && (
                    <Link href="/" className="flex items-center gap-1.5">
                        <Image src="/svg/deepshit-logo.svg" alt="Deepershi" width={30} height={30} className="mt-1" />

                        <p className="flex flex-col leading-none font-semibold">
                            <span className="text-xl text-light-gold">Deep<span className="text-deep-gold">er</span>shi</span>

                            <span className="text-[10px] text-white">by Deepershi AI</span>
                        </p>
                    </Link>
                )}

                <button
                    type="button"
                    onClick={toggleSidebar}
                >
                    <Image src="/svg/sidebar-icon.svg" alt="sidebar" width={24} height={24} className="text-light-gold" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto min-h-0">
                <div className="pt-6 pb-8 flex items-center justify-center gap-2">
                    <IconButton type="button" icon={Plus} size={18} />

                    {sidebarMode === 'open' && (
                        <div className="relative nav-search-gradient rounded-md w-full">
                            <button type="button">
                                <Image src="/svg/search-icon.svg" alt="search" width={18} height={18} className="absolute left-3 top-2.5 text-light-gold" />
                            </button>

                            <input
                                type="text"
                                placeholder="Search Conversation..."
                                className="p-3 w-full text-xs rounded-lg pl-10 focus:outline-none"
                            />
                        </div>
                    )}
                </div>

                <nav className="space-y-3 text-sm">
                    {navItems.map((item) => (
                        <NavItem
                            key={item.id}
                            icon={item.icon}
                            label={sidebarMode === 'mini' ? '' : item.label}
                            href={item.href}
                            isActive={item.isActive}
                            isMini={sidebarMode === 'mini'}
                        />
                    ))}
                </nav>

                {sidebarMode === 'open' && (
                    <div className="mt-8 pt-5 pb-4 text-sm gap-2.5 flex flex-col">
                        <p className="font-medium text-light-gold mb-4 uppercase">Conversations <span>(1)</span></p>

                        <Link href="#" className="ml-3 text-light-gold">
                            AI Chat Tool Ethics
                        </Link>
                    </div>
                )}
            </div>

            <Link href="#" className={`mt-auto flex items-center flex-shrink-0 ${sidebarMode === 'mini' ? 'justify-center' : 'gap-4'}`}>
                <div className="bg-deep-gold py-3.5 px-4 rounded-full font-medium text-lg text-dark-text">AS</div>

                {sidebarMode === 'open' && (
                    <div className="flex flex-col">
                        <p className="text-base font-medium text-white">Adeleke Sherifah</p>

                        <p className="text-sm text-white/75">Free</p>
                    </div>
                )}
            </Link>
        </aside>
    )
}