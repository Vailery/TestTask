import Image from "next/image";
import ActionsRow from "./actions-row";
import { Action } from "@/app/(chat)/content";

interface BotMessagesProps {
    message: string;
    actions?: Action[];
}

export default function BotMessages({ message, actions }: BotMessagesProps) {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex gap-4 items-start py-3">
                <Image src="/svg/deepshit-logo.svg" alt="avatar" width={29} height={29} />

                <p className="max-w-[var(--message-max-width)] w-fit font-medium text-light-gold text-base">
                    {message}
                </p>
            </div>

            <div className="h-8">
                {actions && (
                    <ActionsRow actions={actions} />
                )}
            </div>
        </div>
    );
}