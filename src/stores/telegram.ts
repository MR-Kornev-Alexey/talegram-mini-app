// zustand store для данных из Telegram WebApp SDK
import { create } from 'zustand';

type TelegramUser = {
    id: number;
    first_name?: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
};

type TelegramStore = {
    user: TelegramUser | null;
    themeParams: Record<string, string> | null;
    setTelegramData: (user: TelegramUser, themeParams: Record<string, string>) => void;
};

export const useTelegramStore = create<TelegramStore>((set) => ({
    user: null,
    themeParams: null,
    setTelegramData: (user, themeParams) => set({ user, themeParams }),
}));
