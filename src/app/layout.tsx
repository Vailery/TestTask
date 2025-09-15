import type { Metadata } from "next";
import '@/styles/globals.css'
import { Inter } from "next/font/google";
import { SidebarProvider } from "@/contexts/sidebar-context";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deepershi",
  description: "by Deepershi AI",
  icons: {
    icon: "/svg/deepshit-logo.svg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </body>
    </html>
  );
}
