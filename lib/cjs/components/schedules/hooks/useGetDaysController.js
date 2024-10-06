"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helpers_1 = require("./../week-planning/utils/helpers");
const react_1 = require("react");
const helpers_2 = require("../week-planning/utils/helpers");
const useGetDaysController = (calendarData) => {
    const [daysOfWeek, setDaysOfWeek] = (0, react_1.useState)();
    const getWeekDays = (0, react_1.useCallback)(() => {
        const curr = new Date();
        const week = [];
        for (let i = 0; i <= 7; i++) {
            const first = curr.getDate() - curr.getDay() + i + (curr.getDay() === 0 ? -6 : 1);
            const day = new Date(curr.setDate(Number(first)))
                .toISOString()
                .slice(8, 10);
            week.push(day);
            setDaysOfWeek(week);
        }
    }, []);
    (0, react_1.useEffect)(() => {
        getWeekDays();
    }, [getWeekDays]);
    const daysOfCurrentWeek = daysOfWeek !== undefined ? daysOfWeek : [];
    const calendarWithDaysUS = [
        `${(0, helpers_1.daysOfWeekNameUs)(calendarData.weekDayNames[0])} ${daysOfCurrentWeek[0]}`,
        `${(0, helpers_1.daysOfWeekNameUs)(calendarData.weekDayNames[1])} ${daysOfCurrentWeek[1]}`,
        `${(0, helpers_1.daysOfWeekNameUs)(calendarData.weekDayNames[2])} ${daysOfCurrentWeek[2]}`,
        `${(0, helpers_1.daysOfWeekNameUs)(calendarData.weekDayNames[3])} ${daysOfCurrentWeek[3]}`,
        `${(0, helpers_1.daysOfWeekNameUs)(calendarData.weekDayNames[4])} ${daysOfCurrentWeek[4]}`,
        `${(0, helpers_1.daysOfWeekNameUs)(calendarData.weekDayNames[5])} ${daysOfCurrentWeek[5]}`,
        `${(0, helpers_1.daysOfWeekNameUs)(calendarData.weekDayNames[6])} ${daysOfCurrentWeek[6]}`,
    ];
    const calendarWithDaysFrench = [
        `${(0, helpers_2.daysOfWeekNameFr)(calendarData.weekDayNames[0])} ${daysOfCurrentWeek[0]}`,
        `${(0, helpers_2.daysOfWeekNameFr)(calendarData.weekDayNames[1])} ${daysOfCurrentWeek[1]}`,
        `${(0, helpers_2.daysOfWeekNameFr)(calendarData.weekDayNames[2])} ${daysOfCurrentWeek[2]}`,
        `${(0, helpers_2.daysOfWeekNameFr)(calendarData.weekDayNames[3])} ${daysOfCurrentWeek[3]}`,
        `${(0, helpers_2.daysOfWeekNameFr)(calendarData.weekDayNames[4])} ${daysOfCurrentWeek[4]}`,
        `${(0, helpers_2.daysOfWeekNameFr)(calendarData.weekDayNames[5])} ${daysOfCurrentWeek[5]}`,
        `${(0, helpers_2.daysOfWeekNameFr)(calendarData.weekDayNames[6])} ${daysOfCurrentWeek[6]}`,
    ];
    return { calendarWithDaysUS, calendarWithDaysFrench };
};
exports.default = useGetDaysController;
