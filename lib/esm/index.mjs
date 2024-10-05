import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment } from "react";
import "./assets/css/index.css";
import "./assets/css/index-schedule.css";
import "./assets/css/react-simple-calendar-viewer.css";
import "./assets/css/Label.module.css";
import "./assets/css/SelectBox.css";
import "./assets/css/customSelect.css";
import SchedulesLayout from "./components/layout/SchedulesLayout";
export function Schedule({ scheduleByEventPlace = { schedules: [] }, weekStartsOn = 0, isInDarkMode = false, colorCellByEvents = { eventType_1: "", eventType_6: "" }, eventsTextColor = { eventType_1: "", eventType_6: "" }, locale = "fr", eventsNameUs = { eventType_1: "", eventType_6: "" }, eventsName = { eventType_1: "", eventType_6: "" }, eventTypeData = { eventType_1: "", eventType_6: "" }, modalContent = [], withDays = false, withList = false, withListButtonName = "", withListButtonNameUs = "", withListReturnButton = false, }) {
    return (_jsx(Fragment, { children: _jsx(SchedulesLayout, { scheduleByEventPlace: scheduleByEventPlace, weekStartsOn: weekStartsOn, isInDarkMode: isInDarkMode, colorCellByEvents: colorCellByEvents, eventsTextColor: eventsTextColor, locale: locale, eventsNameUs: eventsNameUs, eventsName: eventsName, eventTypeData: eventTypeData, modalContent: modalContent, withDays: withDays, withList: withList, withListButtonName: withListButtonName, withListButtonNameUs: withListButtonNameUs, withListReturnButton: withListReturnButton }) }));
}
export default Schedule;
