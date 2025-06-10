import { Webinar } from '@/types/webinar';

export const fetchWebinars = async (): Promise<Webinar[]> => {
    const res = await fetch('http://localhost:8000/api/webinars'); // или https://ваш-бэк/webinars
    if (!res.ok) {
        throw new Error('Ошибка при получении вебинаров');
    }

    const json = await res.json();
    return json.data; // важно: json должен быть формата { data: Webinar[] }
};