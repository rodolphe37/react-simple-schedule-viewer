import { getSchedulesByEventPlaceIdResponse } from "../../entities/schedules";
import { TContentForModal, TeventsName, TeventTypeData } from "./types";
declare const ScheduleViewWrapper: ({ scheduleByEventPlace, weekStartsOn, isInDarkMode, withList, eventTypeData, locale, modalContent, withDays, colorCellByEvents, eventsTextColor, eventsName, eventsNameUs, }: {
    scheduleByEventPlace: getSchedulesByEventPlaceIdResponse;
    weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    isInDarkMode: boolean;
    withList?: boolean | undefined;
    eventTypeData: TeventTypeData;
    locale: "fr" | "en";
    modalContent?: TContentForModal | undefined;
    withDays?: boolean | undefined;
    colorCellByEvents: Omit<TeventTypeData, "eventPlace_id">;
    eventsTextColor: Omit<TeventTypeData, "eventPlace_id">;
    eventsName?: TeventsName | undefined;
    eventsNameUs?: TeventsName | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default ScheduleViewWrapper;
//# sourceMappingURL=ScheduleViewWrapper.d.ts.map