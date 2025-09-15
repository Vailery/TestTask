import { Paperclip, Mic, ArrowUp } from "lucide-react";
import IconButton from "../ui/icon-buttons";

export default function Chat() {
    return (
        <div className="mb-6 mx-auto max-w-[var(--container-max-width)] w-full p-2 ">
            <form
                className="flex flex-col gap-8 p-4 pb-3 border-0 rounded-[var(--border-radius-large)] chat-gradient bg-white/2"
            >
                <input
                    type="text"
                    placeholder="Ask me anything..."
                    className="flex-1 px-1 focus:outline-none placeholder:text-light-gold"
                />

                <div className="flex items-center justify-between">
                    <button
                        type="button"
                        className="border border-white/15 rounded-md p-2.5"
                    >
                        <Paperclip size={18} className="text-light-gold" />
                    </button>

                    <div className="flex items-center gap-4">
                        <button
                            type="button"
                        >
                            <Mic size={18} className="text-light-gold" />
                        </button>

                        <IconButton type="submit" icon={ArrowUp} />
                    </div>
                </div>
            </form>
        </div>
    );
}