import { format, formatDistance } from 'date-fns';

export function getTimeElapsed(dateString: string): string {
    return formatDistance(
        new Date(dateString),
        new Date(),
        { addSuffix: true }
    );
}

export function getLastUpdated(dateString: string): string {
    return format(
        new Date(dateString), "do MMMM yyyy, h:mm aaaaa'm'"
    );
}
