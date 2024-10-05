export function generateWeekDaysData({ weekStartsOn = 1, } = {}) {
    const dayNames = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    const weekDayNames = [
        ...dayNames.slice(weekStartsOn),
        ...dayNames.slice(0, weekStartsOn),
    ];
    return {
        weekDayNames,
    };
}
export const today = new Date();
