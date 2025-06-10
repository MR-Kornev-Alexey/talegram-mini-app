// types/telegram.d.ts
export type TelegramUser = {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    language_code?: string;
    is_premium?: boolean;
    allows_write_to_pm?: boolean;
    photo_url?: string;
};

interface TelegramWebApp {
    initData: string;
    initDataUnsafe: {
        user?: TelegramUser;
        query_id?: string;
        auth_date?: string;
        hash?: string;
    };
    close: () => void;
    themeParams?: Record<string, string>;
    MainButton: {
        isVisible: boolean;
        show: () => void;
        hide: () => void;
    };
}

declare global {
    interface Window {
        Telegram: {
            WebApp: TelegramWebApp;
        };
    }
}
