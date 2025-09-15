interface MessagesItemProps {
    message: string;
}

export default function MessagesItem({ message }: MessagesItemProps) {
    return (
        <div className="flex flex-col gap-1 self-end">
            <p className="max-w-[630px] w-fit font-medium text-light-gold text-base bg-white/2 p-3 rounded-[10px] rounded-br-[5px] chat-message-gradient">
                {message}
            </p>

            <div className="h-8"></div>
        </div>
    );
}