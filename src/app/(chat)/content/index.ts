import { ThumbsDown, ThumbsUp, Upload, RefreshCcw, Copy } from "lucide-react";
import { Action } from "@/components/ui/actions-row";

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