'use client';

import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTelegramStore } from '@/stores/telegram';
import { useDataStore } from '@/stores/data';
import { fetchWebinars } from '@/lib/api';
import PageContainer from '@/components/PageContainer';
import Hero from '@/components/Hero';
import MainButtons from '@/components/MainButtons';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import { TelegramUser } from '@/types/telegram'; // если есть

type InitDataUnsafe = {
    user?: TelegramUser;
    query_id?: string;
    auth_date?: string;
    hash?: string;
};

export default function HomePage() {
    const setTelegramData = useTelegramStore((state) => state.setTelegramData);
    const setWebinars = useDataStore((state) => state.setWebinars);
    const userId = useTelegramStore((state) => state.user);

    const [newUser, setNewUser] = useState<number | null>(null);
    const [initData, setInitData] = useState<InitDataUnsafe | null>(null);

    useEffect(() => {
        const tg = window.Telegram?.WebApp;
        if (tg?.initDataUnsafe) {
            setInitData(tg.initDataUnsafe);
            const user = tg.initDataUnsafe.user;
            if (user) {
                setNewUser(user.id);
                setTelegramData(user, tg?.themeParams || {});
            }
        }
    }, [setTelegramData]);

    const { status, data } = useQuery({
        queryKey: ['webinars'],
        queryFn: fetchWebinars,
    });

    useEffect(() => {
        if (status === 'success' && data) {
            setWebinars(data);
        }
    }, [status, data, setWebinars]);

    return (
        <PageContainer title="Навигация" description='Навигатор по каналу "Материнство"'>
            <Hero />
            <Box>
                <strong>newUser:</strong> {JSON.stringify(newUser)}
                <br />
                <strong>Zustand User ID:</strong> {JSON.stringify(userId)}
            </Box>
            <Box sx={{ p: 4 }}>
                <Typography variant="h4" gutterBottom>
                    Telegram Init Data Debug
                </Typography>
                <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
                    {initData
                        ? JSON.stringify(initData, null, 2)
                        : 'Нет данных от Telegram WebApp'}
                </Typography>
                <MainButtons />
            </Box>

        </PageContainer>
    );
}
