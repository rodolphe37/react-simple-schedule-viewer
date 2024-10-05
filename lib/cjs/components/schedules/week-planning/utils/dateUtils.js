"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.today = exports.generateWeekDaysData = void 0;
function generateWeekDaysData({ weekStartsOn = 1, } = {}) {
    const dayNames = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    const weekDayNames = [
        ...dayNames.slice(weekStartsOn),
        ...dayNames.slice(0, weekStartsOn),
    ];
    return {
        weekDayNames,
    };
}
exports.generateWeekDaysData = generateWeekDaysData;
exports.today = new Date();
