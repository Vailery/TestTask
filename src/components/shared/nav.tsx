import { Plus, Search, MessagesSquare, User, AudioLines, FileText, AlarmClockCheck, Folders, PanelLeftDashed } from "lucide-react";
import Image from "next/image";
import IconButton from "../ui/icon-buttons";

export default function Nav() {
    return (
        <aside
            className={"fixed md:static top-0 left-0 max-h-screen max-w-[280px] w-full bg-white/2 border-b nav-gradient flex flex-col px-4 pt-6 pb-8 z-50 transform transition-transform duration-300"}
        >
            <div className="flex items-center justify-between pb-6 border-b nav-logo-gradient flex-shrink-0">
                <div className="flex items-center gap-1.5">
                    <Image src="/deepshit-logo.svg" alt="Deepershi" width={30} height={30} className="mt-1" />

                    <p className="flex flex-col leading-none font-semibold">
                        <span className="text-xl text-light-gold">Deep<span className="text-deep-gold">er</span>shi</span>
                        <span className="text-[10px] text-white">by Deepershi AI</span>
                    </p>
                </div>


                <button
                    type="button"
                >
                    <PanelLeftDashed size={24} className="text-light-gold" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto min-h-0">
                <div className="pt-6 pb-8 flex items-center gap-2">
                    <IconButton type="button" icon={Plus} />

                    <div className="relative nav-search-gradient rounded-md w-full">
                        <Search size={18} className="absolute left-3 top-2.5 text-light-gold" />

                        <input
                            type="text"
                            placeholder="Search Conversation..."
                            className="p-3 w-full text-xs rounded-lg pl-10 focus:outline-none"
                        />
                    </div>
                </div>

                <nav className="space-y-3 text-sm">
                    <div className="flex items-center gap-3 px-2.5 py-3 hover:bg-gray-800 rounded cursor-pointer text-light-gold nav-search-gradient ">
                        <MessagesSquare size={20} className="text-light-gold" /> Chat
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-3 hover:bg-gray-800 rounded cursor-pointer text-light-gold">
                        <User size={20} className="text-light-gold" /> Characters
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-3 hover:bg-gray-800 rounded cursor-pointer text-light-gold">
                        <AudioLines size={20} className="text-light-gold" /> Voice
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-3 hover:bg-gray-800 rounded cursor-pointer text-light-gold">
                        <FileText size={20} className="text-light-gold" /> Files
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-3 hover:bg-gray-800 rounded cursor-pointer text-light-gold">
                        <AlarmClockCheck size={20} className="text-light-gold" /> Tasks
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-3 hover:bg-gray-800 rounded cursor-pointer text-light-gold">
                        <Folders size={20} className="text-light-gold" /> Projects
                    </div>
                </nav>

                <div className="mt-8 pt-5 pb-4 text-sm">
                    <p className="font-medium text-light-gold mb-4 uppercase">Conversations <span>(1)</span></p>

                    <p className="pl-3 py-2.5 text-light-gold">
                        AI Chat Tool Ethics
                    </p>
                </div>
            </div>

            <div className="mt-auto gap-4 flex items-center flex-shrink-0">
                <div className="bg-deep-gold py-3.5 px-4 rounded-full font-medium text-lg text-dark-text">AS</div>
                <div className="flex flex-col">
                    <p className="text-base font-medium text-white">Adeleke Sherifah</p>
                    <p className="text-sm text-white/75">Free</p>
                </div>
            </div>
        </aside>
    )
}