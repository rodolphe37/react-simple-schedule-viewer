"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Cell_1 = __importDefault(require("./Cell"));
const helpers_1 = require("../utils/helpers");
const useScrollContextCustomHook_1 = require("../hooks/useScrollContextCustomHook");
const useCalendarController_1 = __importDefault(require("../hooks/useCalendarController"));
const CalendarScrollToTopButton_1 = __importDefault(require("./CalendarScrollToTopButton"));
const CalendarScrollToBottomButton_1 = __importDefault(require("./CalendarScrollToBottomButton"));
const useGetWindowDimensions_1 = __importDefault(require("../../../../hooks/useGetWindowDimensions"));
const useGetDaysController_1 = __importDefault(require("../../hooks/useGetDaysController"));
const dateUtils_1 = require("../utils/dateUtils");
const HoursRangeIndicator_1 = __importDefault(require("./HoursRangeIndicator"));
const Calendar = ({ weekStartsOn, events, scheduleIdentifier, isInDarkMode, eventTypeData, locale, modalContent, withDays, colorCellByEvents, eventsTextColor, eventsName, eventsNameUs, isInCalendarType, }) => {
    const { updateScroll, scrollRef, calendarData, eventIdToDisplay, scrollToBottom, sortedEventsDaySlotArray, } = (0, useCalendarController_1.default)({ weekStartsOn, scheduleIdentifier, events });
    const { height } = (0, useGetWindowDimensions_1.default)();
    const { calendarWithDaysUS, calendarWithDaysFrench } = (0, useGetDaysController_1.default)(calendarData);
    const currentDay = dateUtils_1.today.getDay() - 1;
    const currentDayOfWeek = locale === "fr"
        ? calendarWithDaysFrench[currentDay]
        : calendarWithDaysUS[currentDay];
    return ((0, jsx_runtime_1.jsx)(useScrollContextCustomHook_1.ScrollProvider, { updateScroll: updateScroll, children: (0, jsx_runtime_1.jsxs)("div", { className: " relative flex flex-col gap-5", children: [(0, jsx_runtime_1.jsxs)("div", { style: { maxHeight: height / 1.5 }, className: "flex flex-col  rounded-t-xl relative", children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid grid-cols-8 grid-rows-1 font-bold text-center text-black dark:text-white  rounded-t-xl ", children: [(0, jsx_runtime_1.jsx)("div", { className: "p-2 relative -mt-[14px]", children: (0, jsx_runtime_1.jsx)(CalendarScrollToTopButton_1.default, { isInDarkMode: isInDarkMode, scrollRef: scrollRef }) }), withDays || isInCalendarType === "calendar"
                                    ? locale === "fr"
                                        ? calendarWithDaysFrench?.map((day) => ((0, jsx_runtime_1.jsxs)("div", { style: currentDayOfWeek === day
                                                ? {
                                                    color: isInDarkMode ? "#fff" : "#4d57ff",
                                                    fontSize: ".8rem",
                                                    position: "relative",
                                                }
                                                : {}, className: `p-2 text-xs truncate md:text-base text-blue-600 dark:text-white -ml-6`, children: [day, currentDayOfWeek === day ? ((0, jsx_runtime_1.jsx)("span", { title: "Jour actuel", style: {
                                                        cursor: "pointer",
                                                        width: 7,
                                                        height: 7,
                                                        background: "red",
                                                        position: "absolute",
                                                        top: "3px",
                                                        right: "50%",
                                                        borderRadius: "100px",
                                                    } })) : null] }, day)))
                                        : calendarWithDaysUS?.map((day) => ((0, jsx_runtime_1.jsxs)("div", { style: currentDayOfWeek === day
                                                ? {
                                                    color: isInDarkMode ? "#fff" : "#4d57ff",
                                                    fontSize: ".8rem",
                                                    position: "relative",
                                                }
                                                : {}, className: `p-2 text-xs truncate md:text-base text-blue-600 dark:text-white -ml-6`, children: [day, currentDayOfWeek === day ? ((0, jsx_runtime_1.jsx)("span", { title: "Current day", style: {
                                                        cursor: "pointer",
                                                        width: 7,
                                                        height: 7,
                                                        background: "red",
                                                        position: "absolute",
                                                        top: "3px",
                                                        right: "50%",
                                                        borderRadius: "100px",
                                                    } })) : null] }, day)))
                                    : calendarData.weekDayNames.map((day) => ((0, jsx_runtime_1.jsx)("div", { className: `p-2 text-xs truncate md:text-base text-blue-600 dark:text-white -ml-6`, children: locale === "fr"
                                            ? (0, helpers_1.daysOfWeekNameFr)(day)
                                            : (0, helpers_1.daysOfWeekNameUs)(day) }, day)))] }), (0, jsx_runtime_1.jsxs)("div", { id: "scroller", style: { overflowY: "scroll" }, className: "grid flex-1 grid-cols-8 overflow-hidden border-t border-gray-400", children: [(0, jsx_runtime_1.jsx)(HoursRangeIndicator_1.default, { locale: locale, isInDarkMode: isInDarkMode, rangebyFifteenMinutes: helpers_1.rangebyFifteenMinutes, eventIdToDisplay: eventIdToDisplay }), sortedEventsDaySlotArray?.map((res, i) => ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, jsx_runtime_1.jsx)(Cell_1.default, { eventsNameUs: eventsNameUs, eventsName: eventsName, eventsTextColor: eventsTextColor, colorCellByEvents: colorCellByEvents, events: events, scheduleIdentifier: scheduleIdentifier, modalContent: modalContent, locale: locale, eventTypeData: eventTypeData, isInDarkMode: isInDarkMode, scrollRef: scrollRef, day: res.day, className: i !== 7 ? "p-1 " : "", sortedEventsDaySlotArray: sortedEventsDaySlotArray }) }, i)))] })] }), (0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(CalendarScrollToBottomButton_1.default, { isInDarkMode: isInDarkMode, scrollToBottom: scrollToBottom }) })] }) }));
};
exports.default = Calendar;
