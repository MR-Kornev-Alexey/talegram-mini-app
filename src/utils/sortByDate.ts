type QAItem = {
    id: number;
    uuid: string;
    title: string;
    date: string; // формат: DD-MM-YY
    link: string;
};

export function sortByDateDesc(data: QAItem[]): QAItem[] {
    return [...data].sort((a, b) => {
        const [dayA, monthA, yearA] = a.date.split('-').map(Number);
        const [dayB, monthB, yearB] = b.date.split('-').map(Number);

        const dateA = new Date(2000 + yearA, monthA - 1, dayA);
        const dateB = new Date(2000 + yearB, monthB - 1, dayB);

        return dateB.getTime() - dateA.getTime();
    });
}