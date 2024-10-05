"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const helpers_1 = require("../utils/helpers");
const CellEvent_1 = __importDefault(require("./CellEvent"));
const HoursGuidelines_1 = __importDefault(require("./HoursGuidelines"));
const recoil_1 = require("recoil");
const eventIdToDisplayAtom_1 = __importDefault(require("../../../../globalStates/atoms/eventIdToDisplayAtom"));
const types_1 = require("../../types");
const Cell = ({ day, className, scrollRef, sortedEventsDaySlotArray, isInDarkMode, eventTypeData, locale, modalContent, scheduleIdentifier, events, colorCellByEvents, eventsTextColor, eventsName, eventsNameUs, }) => {
    const [eventIdToDisplay, setEventIdToDisplay] = (0, recoil_1.useRecoilState)(eventIdToDisplayAtom_1.default);
    const eventTypesByScheduleId = events?.filter((res) => res.id === scheduleIdentifier);
    return ((0, jsx_runtime_1.jsx)("div", { className: `  flex flex-col gap-1 min-h-[120px] ${className} relative`, children: (0, jsx_runtime_1.jsx)("div", { children: helpers_1.rangebyFifteenMinutes.map((hour) => {
                const mins = (0, helpers_1.convertH2M)(hour);
                return ((0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("div", { id: hour, className: "  flex-col", children: (0, jsx_runtime_1.jsx)(HoursGuidelines_1.default, { mins: mins }) }), (0, jsx_runtime_1.jsx)("div", { className: " w-full h-auto", children: sortedEventsDaySlotArray &&
                                sortedEventsDaySlotArray?.map((result, id) => result.time_slot.map((timeEvent, idx) => {
                                    const startTime = timeEvent.start;
                                    return result.day === day && startTime === mins ? ((0, jsx_runtime_1.jsxs)("div", { ref: idx === 1 ||
                                            (idx === 0 &&
                                                timeEvent.instruction !== types_1.EventTypes.EVENT_TYPE_6)
                                            ? scrollRef
                                            : null, className: "absolute w-full top-0", children: [(0, jsx_runtime_1.jsx)("p", { children: idx === 1 &&
                                                    timeEvent.instruction !== types_1.EventTypes.EVENT_TYPE_6
                                                    ? "There is a problem with you events, check your event array"
                                                    : null }), (0, jsx_runtime_1.jsx)(CellEvent_1.default, { eventsNameUs: eventsNameUs, eventsName: eventsName, eventsTextColor: eventsTextColor, colorCellByEvents: colorCellByEvents, eventArray: eventTypesByScheduleId, scheduleIdentifier: scheduleIdentifier, modalContent: modalContent, locale: locale, eventTypeData: eventTypeData, isInDarkMode: isInDarkMode, eventIdToDisplay: eventIdToDisplay, setEventIdToDisplay: setEventIdToDisplay, timeEvent: timeEvent, timeEventId: idx, day: result.day, startTime: startTime, events: result })] }, id)) : null;
                                })) })] }, hour));
            }) }) }));
};
exports.default = Cell;
