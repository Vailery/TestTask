import Image from "next/image";
import ActionsRow, { Action } from "../ui/actions-row";

export default function Messages({ actions }: { actions: Action[] }) {
    return (
        <div className="flex-1 overflow-y-auto p-6 max-w-[736px] w-full mx-auto">
            <div className="flex flex-col">
                <div className="flex flex-col gap-1 self-end">
                    <p className="max-w-[630px] w-fit font-medium text-light-gold text-base bg-white/2 p-3 rounded-[10px] rounded-br-[5px] chat-message-gradient">Hello</p>

                    <div className="h-8"></div>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex gap-4 items-start py-3">
                        <Image src="/deepshit-logo.svg" alt="avatar" width={29} height={29} />

                        <p className="max-w-[630px] w-fit font-medium text-light-gold text-base">Yo, what&apos;s up? How can I help you today?</p>
                    </div>

                    <ActionsRow actions={actions} />
                </div>

                <div className="flex flex-col gap-1 self-end">
                    <p className="max-w-[630px] w-fit font-medium text-light-gold text-base bg-white/2 p-3 rounded-[10px] rounded-br-[5px] chat-message-gradient">I want to write a letter</p>

                    <div className="h-8"></div>
                </div>

                <div className="flex flex-col gap-1">
                    <div className="flex gap-4 items-start py-3">
                        <Image src="/deepshit-logo.svg" alt="avatar" width={29} height={29} />

                        <p className="max-w-[630px] w-fit font-medium text-light-gold text-base">
                            Cool, let&apos;s get that letter written! Could you share who the letter is for, the purpose (e.g., formal, informal, job application, complaint), and any specific points you want to include? This will help me craft something that hits the mark.
                        </p>
                    </div>

                    <div className="h-8"></div>
                </div>
            </div>
        </div>
    );
}