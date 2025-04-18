export function formatDate(dateStr: string): string {
    const [day, month, year] = dateStr.split('-');
    const fullYear = parseInt(year, 10) + 2000;

    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];

    const monthIndex = parseInt(month, 10) - 1;
    const monthName = months[monthIndex] || '';

    return `${parseInt(day)} ${monthName} ${fullYear} года`;
}
