export declare const rangebyFifteenMinutes: string[];
export declare const rangebyFifteenMinutesUs: string[];
export declare function convertH2M(timeInHour: string): number;
export declare function formatTime(time: number): string;
export declare const capitalizeFirstLetter: (str: string) => string;
declare enum daysOfWeekNamesFr {
    Monday = "Lundi",
    Tuesday = "Mardi",
    Wednesday = "Mercredi",
    Thursday = "Jeudi",
    Friday = "Vendredi",
    Saturday = "Samedi",
    Sunday = "Dimanche"
}
export declare const daysOfWeekNameFr: (str: string) => daysOfWeekNamesFr;
declare enum daysOfWeekNamesUs {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}
export declare const daysOfWeekNameUs: (str: string) => daysOfWeekNamesUs;
export declare function extractNumbers(str: string): string;
export {};
//# sourceMappingURL=helpers.d.ts.map