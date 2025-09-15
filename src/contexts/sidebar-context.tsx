"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type SidebarMode = 'open' | 'mini';

interface SidebarContextType {
    sidebarMode: SidebarMode;
    setSidebarMode: (mode: SidebarMode) => void;
    toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
    const [sidebarMode, setSidebarMode] = useState<SidebarMode>('open');

    const toggleSidebar = () => {
        setSidebarMode(sidebarMode === 'open' ? 'mini' : 'open');
    };

    return (
        <SidebarContext.Provider value={{ sidebarMode, setSidebarMode, toggleSidebar }}>
            {children}
        </SidebarContext.Provider>
    );
}

export function useSidebar() {
    const context = useContext(SidebarContext);
    if (context === undefined) {
        throw new Error('useSidebar must be used within a SidebarProvider');
    }
    return context;
}
