"use client";

import Header from "@/components/shared/header";
import Chat from "@/components/shared/chat";
import Nav from "@/components/shared/nav";
import Messages from "@/components/shared/messages";

import { defaultMessages } from "../content";

export default function ChatPage() {
  return (
    <div className="flex min-h-screen">
      <Nav />

      <main className="flex-1 flex flex-col">
        <Header />

        <Messages messages={defaultMessages} />

        <Chat />
      </main>
    </div>
  );
}
