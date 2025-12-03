import { proxy } from "valtio";

export type ThemeMode = "light" | "dark" | "system";

export interface UiState {
  theme: ThemeMode;
  sidebarOpen: boolean;
}

export interface AppState {
  ui: UiState;
}

export const appState = proxy<AppState>({
  ui: {
    theme: "system",
    sidebarOpen: false,
  },
});

export const toggleSidebar = () => {
  appState.ui.sidebarOpen = !appState.ui.sidebarOpen;
};
