"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const WeekPlanning_1 = __importDefault(require("./WeekPlanning"));
const ScheduleView = ({ isInCalendarType, scheduleId, scheduleByEventPlace, weekStartsOn, isInDarkMode, eventTypeData, locale, modalContent, withDays, colorCellByEvents, eventsTextColor, eventsName, eventsNameUs, }) => {
    return ((0, jsx_runtime_1.jsx)("div", { className: "w-full", children: (0, jsx_runtime_1.jsx)(WeekPlanning_1.default, { isInCalendarType: isInCalendarType, eventsNameUs: eventsNameUs, eventsName: eventsName, eventsTextColor: eventsTextColor, colorCellByEvents: colorCellByEvents, withDays: withDays, modalContent: modalContent, locale: locale, eventTypeData: eventTypeData, isInDarkMode: isInDarkMode, weekStartsOn: weekStartsOn, scheduleByEventPlace: scheduleByEventPlace, scheduleIdentifier: scheduleId }) }));
};
exports.default = ScheduleView;
