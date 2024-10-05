import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import Calendar from "./components/Calendar";
import eventIdToDIsplayAtom from "../../../globalStates/atoms/eventIdToDisplayAtom";
import { useRecoilState } from "recoil";
const WeekPlanning = ({ scheduleIdentifier, scheduleByEventPlace, weekStartsOn, isInDarkMode, eventTypeData, locale, modalContent, withDays, colorCellByEvents, eventsTextColor, eventsName, eventsNameUs, isInCalendarType, }) => {
    const [, setEventIdToDisplay] = useRecoilState(eventIdToDIsplayAtom);
    const [events, setEvents] = useState();
    if (events === undefined && scheduleByEventPlace) {
        setEvents(scheduleByEventPlace?.schedules);
    }
    return (_jsx("main", { onMouseLeave: () => {
            setEventIdToDisplay({
                day: undefined,
                id: undefined,
                startTime: undefined,
                endTime: undefined,
            });
        }, className: `h-full pl-4 pr-4 pb-4 mx-auto ${isInDarkMode ? "bg-gray-900" : "bg-white"}`, children: _jsx(Calendar, { isInCalendarType: isInCalendarType, eventsNameUs: eventsNameUs, eventsName: eventsName, eventsTextColor: eventsTextColor, colorCellByEvents: colorCellByEvents, withDays: withDays, modalContent: modalContent, locale: locale, eventTypeData: eventTypeData, isInDarkMode: isInDarkMode, scheduleIdentifier: scheduleIdentifier, weekStartsOn: weekStartsOn, events: events }) }));
};
export default WeekPlanning;
