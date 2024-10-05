import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Fragment } from "react";
import Cell from "./Cell";
import { daysOfWeekNameFr, daysOfWeekNameUs, rangebyFifteenMinutes, } from "../utils/helpers";
import { ScrollProvider } from "../hooks/useScrollContextCustomHook";
import useCalendarController from "../hooks/useCalendarController";
import CalendarScrollToTopButton from "./CalendarScrollToTopButton";
import CalendarScrollToBottomButton from "./CalendarScrollToBottomButton";
import useWindowDimensions from "../../../../hooks/useGetWindowDimensions";
import useGetDaysController from "../../hooks/useGetDaysController";
import { today } from "../utils/dateUtils";
import HoursRangeIndicator from "./HoursRangeIndicator";
const Calendar = ({ weekStartsOn, events, scheduleIdentifier, isInDarkMode, eventTypeData, locale, modalContent, withDays, colorCellByEvents, eventsTextColor, eventsName, eventsNameUs, isInCalendarType, }) => {
    const { updateScroll, scrollRef, calendarData, eventIdToDisplay, scrollToBottom, sortedEventsDaySlotArray, } = useCalendarController({ weekStartsOn, scheduleIdentifier, events });
    const { height } = useWindowDimensions();
    const { calendarWithDaysUS, calendarWithDaysFrench } = useGetDaysController(calendarData);
    const currentDay = today.getDay() - 1;
    const currentDayOfWeek = locale === "fr"
        ? calendarWithDaysFrench[currentDay]
        : calendarWithDaysUS[currentDay];
    return (_jsx(ScrollProvider, { updateScroll: updateScroll, children: _jsxs("div", { className: " relative flex flex-col gap-5", children: [_jsxs("div", { style: { maxHeight: height / 1.5 }, className: "flex flex-col  rounded-t-xl relative", children: [_jsxs("div", { className: "grid grid-cols-8 grid-rows-1 font-bold text-center text-black dark:text-white  rounded-t-xl ", children: [_jsx("div", { className: "p-2 relative -mt-[14px]", children: _jsx(CalendarScrollToTopButton, { isInDarkMode: isInDarkMode, scrollRef: scrollRef }) }), withDays || isInCalendarType === "calendar"
                                    ? locale === "fr"
                                        ? calendarWithDaysFrench?.map((day) => (_jsxs("div", { style: currentDayOfWeek === day
                                                ? {
                                                    color: isInDarkMode ? "#fff" : "#4d57ff",
                                                    fontSize: ".8rem",
                                                    position: "relative",
                                                }
                                                : {}, className: `p-2 text-xs truncate md:text-base text-blue-600 dark:text-white -ml-6`, children: [day, currentDayOfWeek === day ? (_jsx("span", { title: "Jour actuel", style: {
                                                        cursor: "pointer",
                                                        width: 7,
                                                        height: 7,
                                                        background: "red",
                                                        position: "absolute",
                                                        top: "23px",
                                                        right: "50%",
                                                        borderRadius: "100px",
                                                    } })) : null] }, day)))
                                        : calendarWithDaysUS?.map((day) => (_jsxs("div", { style: currentDayOfWeek === day
                                                ? {
                                                    color: isInDarkMode ? "#fff" : "#4d57ff",
                                                    fontSize: ".8rem",
                                                    position: "relative",
                                                }
                                                : {}, className: `p-2 text-xs truncate md:text-base text-blue-600 dark:text-white -ml-6`, children: [day, currentDayOfWeek === day ? (_jsx("span", { title: "Current day", style: {
                                                        cursor: "pointer",
                                                        width: 7,
                                                        height: 7,
                                                        background: "red",
                                                        position: "absolute",
                                                        top: "3px",
                                                        right: "50%",
                                                        borderRadius: "100px",
                                                    } })) : null] }, day)))
                                    : calendarData.weekDayNames.map((day) => (_jsx("div", { className: `p-2 text-xs truncate md:text-base text-blue-600 dark:text-white -ml-6`, children: locale === "fr"
                                            ? daysOfWeekNameFr(day)
                                            : daysOfWeekNameUs(day) }, day)))] }), _jsxs("div", { id: "scroller", style: { overflowY: "scroll" }, className: "grid flex-1 grid-cols-8 overflow-hidden border-t border-gray-400", children: [_jsx(HoursRangeIndicator, { locale: locale, isInDarkMode: isInDarkMode, rangebyFifteenMinutes: rangebyFifteenMinutes, eventIdToDisplay: eventIdToDisplay }), sortedEventsDaySlotArray?.map((res, i) => (_jsx(Fragment, { children: _jsx(Cell, { eventsNameUs: eventsNameUs, eventsName: eventsName, eventsTextColor: eventsTextColor, colorCellByEvents: colorCellByEvents, events: events, scheduleIdentifier: scheduleIdentifier, modalContent: modalContent, locale: locale, eventTypeData: eventTypeData, isInDarkMode: isInDarkMode, scrollRef: scrollRef, day: res.day, className: i !== 7 ? "p-1 " : "", sortedEventsDaySlotArray: sortedEventsDaySlotArray }) }, i)))] })] }), _jsx("div", { children: _jsx(CalendarScrollToBottomButton, { isInDarkMode: isInDarkMode, scrollToBottom: scrollToBottom }) })] }) }));
};
export default Calendar;
