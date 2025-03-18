// lib/utils.ts

/**
 * Formatuje datę w formacie ISO do postaci czytelnej dla użytkownika
 * @param dateString - Data w formacie ISO
 * @returns Sformatowana data w formacie DD.MM.YYYY
 */
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    return `${day}.${month}.${year}`;
}