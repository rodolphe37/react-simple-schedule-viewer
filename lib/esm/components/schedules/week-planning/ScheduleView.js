import { jsx as _jsx } from "react/jsx-runtime";
import WeekPlanning from "./WeekPlanning";
const ScheduleView = ({ isInCalendarType, scheduleId, scheduleByEventPlace, weekStartsOn, isInDarkMode, eventTypeData, locale, modalContent, withDays, colorCellByEvents, eventsTextColor, eventsName, eventsNameUs, }) => {
    return (_jsx("div", { className: "w-full", children: _jsx(WeekPlanning, { isInCalendarType: isInCalendarType, eventsNameUs: eventsNameUs, eventsName: eventsName, eventsTextColor: eventsTextColor, colorCellByEvents: colorCellByEvents, withDays: withDays, modalContent: modalContent, locale: locale, eventTypeData: eventTypeData, isInDarkMode: isInDarkMode, weekStartsOn: weekStartsOn, scheduleByEventPlace: scheduleByEventPlace, scheduleIdentifier: scheduleId }) }));
};
export default ScheduleView;
