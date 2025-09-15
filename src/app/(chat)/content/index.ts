import { ThumbsDown, ThumbsUp, Upload, RefreshCcw, Copy, LucideIcon } from "lucide-react";

export type ActionType = 'copy' | 'thumbsUp' | 'thumbsDown' | 'upload' | 'refresh';
export interface Action {
    type: ActionType;
    icon: LucideIcon;
    onClick: () => void;
    disabled?: boolean;
    tooltip?: string;
}

export const defaultActions: Action[] = [
    {
        type: 'copy',
        icon: Copy,
        onClick: () => console.log('Copy clicked'),
        tooltip: 'Copy'
    },
    {
        type: 'thumbsUp',
        icon: ThumbsUp,
        onClick: () => console.log('Thumbs up clicked'),
        tooltip: 'Like'
    },
    {
        type: 'thumbsDown',
        icon: ThumbsDown,
        onClick: () => console.log('Thumbs down clicked'),
        tooltip: 'Dislike'
    },
    {
        type: 'upload',
        icon: Upload,
        onClick: () => console.log('Upload clicked'),
        tooltip: 'Upload'
    },
    {
        type: 'refresh',
        icon: RefreshCcw,
        onClick: () => console.log('Refresh clicked'),
        tooltip: 'Refresh'
    }
];

export interface Message {
    id: string;
    text: string;
    type: 'user' | 'bot';
    actions?: Action[];
}

export const defaultMessages: Message[] = [
    {
        id: '1',
        text: 'Hello',
        type: 'user',
    },
    {
        id: '2',
        text: 'Yo, what\'s up? How can I help you today?',
        type: 'bot',
        actions: defaultActions
    },
    {
        id: '3',
        text: 'I want to write a letter',
        type: 'user',
    },
    {
        id: '4',
        text: 'Cool, let\'s get that letter written! Could you share who the letter is for, the purpose (e.g., formal, informal, job application, complaint), and any specific points you want to include? This will help me craft something that hits the mark.',
        type: 'bot',

    }
];