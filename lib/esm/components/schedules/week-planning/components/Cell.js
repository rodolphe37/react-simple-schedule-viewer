import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { convertH2M, rangebyFifteenMinutes } from "../utils/helpers";
import CellEvent from "./CellEvent";
import HoursGuidelines from "./HoursGuidelines";
import eventIdToDIsplayAtom from "../../../../globalStates/atoms/eventIdToDisplayAtom";
import { EventTypes } from "../../types";
import { useAtom } from "jotai";
const Cell = ({ day, className, scrollRef, sortedEventsDaySlotArray, isInDarkMode, eventTypeData, locale, modalContent, scheduleIdentifier, events, colorCellByEvents, eventsTextColor, eventsName, eventsNameUs, }) => {
    const [eventIdToDisplay, setEventIdToDisplay] = useAtom(eventIdToDIsplayAtom);
    const eventTypesByScheduleId = events?.filter((res) => res.id === scheduleIdentifier);
    return (_jsx("div", { className: `  flex flex-col gap-1 min-h-[120px] ${className} relative`, children: _jsx("div", { children: rangebyFifteenMinutes.map((hour) => {
                const mins = convertH2M(hour);
                return (_jsxs("div", { className: "relative", children: [_jsx("div", { id: hour, className: "  flex-col", children: _jsx(HoursGuidelines, { mins: mins }) }), _jsx("div", { className: " w-full h-auto", children: sortedEventsDaySlotArray &&
                                sortedEventsDaySlotArray?.map((result, id) => result.time_slot.map((timeEvent, idx) => {
                                    const startTime = timeEvent.start;
                                    return result.day === day && startTime === mins ? (_jsxs("div", { ref: idx === 1 ||
                                            (idx === 0 &&
                                                timeEvent.instruction !== EventTypes.EVENT_TYPE_6)
                                            ? scrollRef
                                            : null, className: "absolute w-full top-0", children: [_jsx("p", { children: idx === 1 &&
                                                    timeEvent.instruction !== EventTypes.EVENT_TYPE_6
                                                    ? "There is a problem with you events, check your event array"
                                                    : null }), _jsx(CellEvent, { eventsNameUs: eventsNameUs, eventsName: eventsName, eventsTextColor: eventsTextColor, colorCellByEvents: colorCellByEvents, eventArray: eventTypesByScheduleId, scheduleIdentifier: scheduleIdentifier, modalContent: modalContent, locale: locale, eventTypeData: eventTypeData, isInDarkMode: isInDarkMode, eventIdToDisplay: eventIdToDisplay, timeEvent: timeEvent, timeEventId: idx, day: result.day, startTime: startTime, events: result })] }, id)) : null;
                                })) })] }, hour));
            }) }) }));
};
export default Cell;
