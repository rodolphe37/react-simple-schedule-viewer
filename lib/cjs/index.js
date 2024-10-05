"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Schedule = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("./assets/css/index.css");
require("./assets/css/index-schedule.css");
require("./assets/css/react-simple-calendar-viewer.css");
require("./assets/css/Label.module.css");
require("./assets/css/SelectBox.css");
require("./assets/css/customSelect.css");
const SchedulesLayout_1 = __importDefault(require("./components/layout/SchedulesLayout"));
function Schedule({ scheduleByEventPlace = { schedules: [] }, weekStartsOn = 0, isInDarkMode = false, colorCellByEvents = { eventType_1: "", eventType_6: "" }, eventsTextColor = { eventType_1: "", eventType_6: "" }, locale = "fr", eventsNameUs = { eventType_1: "", eventType_6: "" }, eventsName = { eventType_1: "", eventType_6: "" }, eventTypeData = { eventType_1: "", eventType_6: "" }, modalContent = [], withDays = false, withList = false, withListButtonName = "", withListButtonNameUs = "", withListReturnButton = false, }) {
    return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, jsx_runtime_1.jsx)(SchedulesLayout_1.default, { scheduleByEventPlace: scheduleByEventPlace, weekStartsOn: weekStartsOn, isInDarkMode: isInDarkMode, colorCellByEvents: colorCellByEvents, eventsTextColor: eventsTextColor, locale: locale, eventsNameUs: eventsNameUs, eventsName: eventsName, eventTypeData: eventTypeData, modalContent: modalContent, withDays: withDays, withList: withList, withListButtonName: withListButtonName, withListButtonNameUs: withListButtonNameUs, withListReturnButton: withListReturnButton }) }));
}
exports.Schedule = Schedule;
exports.default = Schedule;
