// lib/utils.ts
export function formatDate(dateString: string) {
    const date = new Date(dateString);

    // Format date as DD.MM.YYYY
    return date.toLocaleDateString('pl-PL', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}