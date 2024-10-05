/// <reference types="react" />
import { TeventsName } from "../schedules/types";
declare const SchedulesLayout: ({ scheduleByEventPlace, weekStartsOn, isInDarkMode, withList, eventTypeData, locale, modalContent, withDays, colorCellByEvents, eventsTextColor, eventsName, eventsNameUs, withListButtonName, withListButtonNameUs, withListReturnButton, }: {
    scheduleByEventPlace: {
        schedules: {
            id: string;
            title: string;
            type: string;
            day_slot_set: {
                days: number[];
                time_slot: {
                    start: number;
                    instruction: string;
                }[];
            }[];
        }[];
    };
    weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    isInDarkMode: boolean;
    colorCellByEvents: Omit<{
        eventPlace_id?: string | undefined;
        eventType_1: number | string;
        eventType_2?: string | number | undefined;
        eventType_3?: string | number | undefined;
        eventType_4?: string | number | undefined;
        eventType_5?: string | number | undefined;
        eventType_6: number | string;
        eventType_7?: string | number | undefined;
    }, "eventPlace_id">;
    eventsTextColor: Omit<{
        eventPlace_id?: string | undefined;
        eventType_1: number | string;
        eventType_2?: string | number | undefined;
        eventType_3?: string | number | undefined;
        eventType_4?: string | number | undefined;
        eventType_5?: string | number | undefined;
        eventType_6: number | string;
        eventType_7?: string | number | undefined;
    }, "eventPlace_id">;
    locale: "fr" | "en";
    eventsName?: TeventsName | undefined;
    eventsNameUs?: TeventsName | undefined;
    eventTypeData: {
        eventPlace_id?: string;
        eventType_1: number | string;
        eventType_2?: number | string;
        eventType_3?: number | string;
        eventType_4?: number | string;
        eventType_5?: number | string;
        eventType_6: number | string;
        eventType_7?: number | string;
    };
    modalContent?: {
        id: string;
        day: number;
        eventType: string;
        startTime: number;
        eventTitle: string;
        contentModal: JSX.Element;
    }[] | undefined;
    withDays?: boolean | undefined;
    withList?: boolean | undefined;
    withListButtonName?: string | undefined;
    withListButtonNameUs?: string | undefined;
    withListReturnButton?: boolean | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default SchedulesLayout;
//# sourceMappingURL=SchedulesLayout.d.ts.map