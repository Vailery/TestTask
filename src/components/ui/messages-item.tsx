interface MessagesItemProps {
    message: string;
}

export default function MessagesItem({ message }: MessagesItemProps) {
    return (
        <div className="flex flex-col gap-1 self-end">
            <p className="max-w-[var(--message-max-width)] w-fit font-medium text-light-gold text-base bg-white/2 p-3 rounded-[var(--border-radius-medium)] rounded-br-[var(--border-radius-small)] chat-message-gradient">
                {message}
            </p>

            <div className="h-8"></div>
        </div>
    );
}