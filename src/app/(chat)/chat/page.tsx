"use client";

import Header from "@/components/shared/header";
import Chat from "@/components/shared/chat";
import Nav from "@/components/shared/nav";
import Messages from "@/components/shared/messages";
import { useSidebar } from "@/contexts/sidebar-context";
import { defaultMessages } from "../content";

export default function ChatPage() {
  const { sidebarMode } = useSidebar();

  return (
    <div className="flex min-h-screen">
      <Nav />

      <main className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${sidebarMode === 'mini'
        ? 'ml-[var(--content-margin-mini)] w-[var(--content-width-mini)]'
        : 'ml-[var(--content-margin-full)] w-[var(--content-width-full)]'
        }`}>
        <Header />

        <Messages messages={defaultMessages} />

        <Chat />
      </main>
    </div>
  );
}
