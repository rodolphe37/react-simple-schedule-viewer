import { getSchedulesByEventPlaceIdResponse } from "../../../entities/schedules";
import { TContentForModal, TeventsName, TeventTypeData } from "../types";
declare const WeekPlanning: ({ scheduleIdentifier, scheduleByEventPlace, weekStartsOn, isInDarkMode, eventTypeData, locale, modalContent, withDays, colorCellByEvents, eventsTextColor, eventsName, eventsNameUs, isInCalendarType, }: {
    scheduleIdentifier?: string | undefined;
    scheduleByEventPlace: getSchedulesByEventPlaceIdResponse;
    weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    isInDarkMode?: boolean | undefined;
    eventTypeData: TeventTypeData;
    locale: string;
    modalContent?: TContentForModal | undefined;
    withDays?: boolean | undefined;
    colorCellByEvents: Omit<TeventTypeData, "eventPlace_id">;
    eventsTextColor: Omit<TeventTypeData, "eventPlace_id">;
    eventsName?: TeventsName | undefined;
    eventsNameUs?: TeventsName | undefined;
    isInCalendarType: string | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default WeekPlanning;
//# sourceMappingURL=WeekPlanning.d.ts.map