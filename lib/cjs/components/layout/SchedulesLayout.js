"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const SchedulesDetails_1 = __importDefault(require("../../components/schedules/SchedulesDetails"));
const react_1 = require("react");
const style_1 = require("../../utils/style");
const ScheduleViewWrapper_1 = __importDefault(require("../schedules/ScheduleViewWrapper"));
const react_error_boundary_1 = require("react-error-boundary");
const Loader_1 = require("../../ui/components/Loader");
const ErrorFallBack_1 = __importDefault(require("../../ui/components/ErrorFallBack"));
const SchedulesLayout = ({ scheduleByEventPlace, weekStartsOn, isInDarkMode, withList, 
// withLegend = false,
eventTypeData, locale, modalContent, withDays, colorCellByEvents, eventsTextColor, eventsName, eventsNameUs, withListButtonName, withListButtonNameUs, withListReturnButton, }) => {
    (0, react_1.useLayoutEffect)(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    return ((0, jsx_runtime_1.jsxs)(react_router_dom_1.Routes, { children: [(0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: `/`, element: (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)("div", { className: `w-full flex flex-col justify-center items-center h-screen overflow-y-hidden ${style_1.bgGray200_700Color}`, style: { transform: "scale(3)" }, children: (0, jsx_runtime_1.jsx)(Loader_1.Loader, {}) }), children: (0, jsx_runtime_1.jsx)(react_error_boundary_1.ErrorBoundary, { FallbackComponent: ErrorFallBack_1.default, children: withList ? ((0, jsx_runtime_1.jsx)(SchedulesDetails_1.default, { withListReturnButton: withListReturnButton, withListButtonNameUs: withListButtonNameUs, withListButtonName: withListButtonName, isDarkMode: isInDarkMode, locale: locale, scheduleByEventPlace: scheduleByEventPlace })) : ((0, jsx_runtime_1.jsx)(ScheduleViewWrapper_1.default, { eventsNameUs: eventsNameUs, eventsName: eventsName, eventsTextColor: eventsTextColor, colorCellByEvents: colorCellByEvents, withDays: withDays, locale: locale, eventTypeData: eventTypeData, withList: withList, isInDarkMode: isInDarkMode, weekStartsOn: weekStartsOn, scheduleByEventPlace: scheduleByEventPlace, modalContent: modalContent })) }) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: `/:scheduleId`, element: (0, jsx_runtime_1.jsx)(react_1.Suspense, { fallback: (0, jsx_runtime_1.jsx)("div", { className: `w-full flex flex-col justify-center items-center h-screen overflow-y-hidden ${style_1.bgGray200_700Color}`, style: { transform: "scale(3)" }, children: (0, jsx_runtime_1.jsx)(Loader_1.Loader, {}) }), children: (0, jsx_runtime_1.jsx)(react_error_boundary_1.ErrorBoundary, { FallbackComponent: ErrorFallBack_1.default, children: (0, jsx_runtime_1.jsx)(ScheduleViewWrapper_1.default, { eventsNameUs: eventsNameUs, eventsName: eventsName, eventsTextColor: eventsTextColor, colorCellByEvents: colorCellByEvents, withDays: withDays, locale: locale, eventTypeData: eventTypeData, withList: withList, isInDarkMode: isInDarkMode, weekStartsOn: weekStartsOn, scheduleByEventPlace: scheduleByEventPlace, modalContent: modalContent }) }) }) }), (0, jsx_runtime_1.jsx)(react_router_dom_1.Route, { path: "*", element: (0, jsx_runtime_1.jsx)(react_router_dom_1.Navigate, { replace: true, to: "/" }) })] }));
};
exports.default = SchedulesLayout;
