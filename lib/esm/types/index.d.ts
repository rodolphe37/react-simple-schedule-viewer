/// <reference types="react" />
import "./assets/css/index.css";
import "./assets/css/index-schedule.css";
import "./assets/css/react-simple-calendar-viewer.css";
import "./assets/css/Label.module.css";
import "./assets/css/SelectBox.css";
import "./assets/css/customSelect.css";
import { TeventsName } from "./components/schedules/types";
declare function Schedule({ scheduleByEventPlace, weekStartsOn, isInDarkMode, colorCellByEvents, eventsTextColor, locale, eventsNameUs, eventsName, eventTypeData, modalContent, withDays, withList, withListButtonName, withListButtonNameUs, withListReturnButton, }: {
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
    colorCellByEvents: Omit<typeof eventTypeData, "eventPlace_id">;
    eventsTextColor: Omit<typeof eventTypeData, "eventPlace_id">;
    locale: string;
    eventsName?: TeventsName;
    eventsNameUs?: TeventsName;
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
    }[];
    withDays?: boolean;
    withList?: boolean;
    withListButtonName?: string;
    withListButtonNameUs?: string;
    withListReturnButton?: boolean;
}): import("react/jsx-runtime").JSX.Element;
export default Schedule;
//# sourceMappingURL=index.d.ts.map