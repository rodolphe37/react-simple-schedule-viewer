"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Calendar_1 = __importDefault(require("./components/Calendar"));
const eventIdToDisplayAtom_1 = __importDefault(require("../../../globalStates/atoms/eventIdToDisplayAtom"));
const recoil_1 = require("recoil");
const WeekPlanning = ({ scheduleIdentifier, scheduleByEventPlace, weekStartsOn, isInDarkMode, eventTypeData, locale, modalContent, withDays, colorCellByEvents, eventsTextColor, eventsName, eventsNameUs, isInCalendarType, }) => {
    const [, setEventIdToDisplay] = (0, recoil_1.useRecoilState)(eventIdToDisplayAtom_1.default);
    const [events, setEvents] = (0, react_1.useState)();
    if (events === undefined && scheduleByEventPlace) {
        setEvents(scheduleByEventPlace?.schedules);
    }
    return ((0, jsx_runtime_1.jsx)("main", { onMouseLeave: () => {
            setEventIdToDisplay({
                day: undefined,
                id: undefined,
                startTime: undefined,
                endTime: undefined,
            });
        }, className: `h-full pl-4 pr-4 pb-4 mx-auto ${isInDarkMode ? "bg-gray-900" : "bg-white"}`, children: (0, jsx_runtime_1.jsx)(Calendar_1.default, { isInCalendarType: isInCalendarType, eventsNameUs: eventsNameUs, eventsName: eventsName, eventsTextColor: eventsTextColor, colorCellByEvents: colorCellByEvents, withDays: withDays, modalContent: modalContent, locale: locale, eventTypeData: eventTypeData, isInDarkMode: isInDarkMode, scheduleIdentifier: scheduleIdentifier, weekStartsOn: weekStartsOn, events: events }) }));
};
exports.default = WeekPlanning;
