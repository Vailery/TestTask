import BotMessages from "../ui/bot-messages";
import MessagesItem from "../ui/messages-item";
import { Message } from "@/app/(chat)/content";

interface MessagesProps {
    messages?: Message[];
}

export default function Messages({ messages }: MessagesProps) {
    return (
        <div className="flex-1 overflow-y-auto p-6 max-w-[736px] w-full mx-auto">
            <div className="flex flex-col">
                {messages?.map((message) => (
                    message.type === 'user' ? (
                        <MessagesItem key={message.id} message={message.text} />
                    ) : (
                        <BotMessages
                            key={message.id}
                            message={message.text}
                            actions={message.actions}
                        />
                    )
                ))}
            </div>
        </div>
    );
}