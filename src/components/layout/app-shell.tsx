"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { appState, toggleSidebar } from "@/store";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const { ui } = appState;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b px-6 py-4 flex items-center justify-between">
        <button type="button" className="text-sm font-medium" onClick={toggleSidebar}>
          Toggle menu
        </button>
        <span className="text-sm text-muted-foreground">Online Group</span>
      </header>
      <div className="flex">
        <aside className={cn("w-60 border-r px-4 py-6 hidden md:block", ui.sidebarOpen && "block")}>
          <nav className="space-y-2 text-sm text-muted-foreground">
            <p className="font-semibold text-foreground">Navigation</p>
            <button type="button" className="block hover:text-foreground">
              Dashboard
            </button>
            <button type="button" className="block hover:text-foreground">
              Orders
            </button>
          </nav>
        </aside>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
