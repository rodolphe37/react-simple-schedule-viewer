import { EventType } from "../models/models";
import { TContentForModal, TeventsName, TeventTypeData } from "../../types";
interface ICalendarProps {
    weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    events?: EventType[];
    scheduleIdentifier: string;
    isInDarkMode: boolean;
    eventTypeData: TeventTypeData;
    locale: "fr" | "en";
    modalContent?: TContentForModal;
    withDays?: boolean;
    colorCellByEvents: Omit<TeventTypeData, "eventPlace_id">;
    eventsTextColor: Omit<TeventTypeData, "eventPlace_id">;
    eventsName?: TeventsName;
    eventsNameUs?: TeventsName;
    isInCalendarType: string | undefined;
}
declare const Calendar: ({ weekStartsOn, events, scheduleIdentifier, isInDarkMode, eventTypeData, locale, modalContent, withDays, colorCellByEvents, eventsTextColor, eventsName, eventsNameUs, isInCalendarType, }: ICalendarProps) => import("react/jsx-runtime").JSX.Element;
export default Calendar;
//# sourceMappingURL=Calendar.d.ts.map