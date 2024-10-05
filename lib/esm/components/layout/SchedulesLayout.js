import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Navigate, Route, Routes } from "react-router-dom";
import SchedulesDetails from "../../components/schedules/SchedulesDetails";
import { Suspense, useLayoutEffect } from "react";
import { bgGray200_700Color } from "../../utils/style";
import ScheduleViewWrapper from "../schedules/ScheduleViewWrapper";
import { ErrorBoundary } from "react-error-boundary";
import { Loader } from "../../ui/components/Loader";
import ErrorFallback from "../../ui/components/ErrorFallBack";
import { RecoilRoot } from "recoil";
const SchedulesLayout = ({ scheduleByEventPlace, weekStartsOn, isInDarkMode, withList, 
// withLegend = false,
eventTypeData, locale, modalContent, withDays, colorCellByEvents, eventsTextColor, eventsName, eventsNameUs, withListButtonName, withListButtonNameUs, withListReturnButton, }) => {
    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    return (_jsx(RecoilRoot, { children: _jsxs(Routes, { children: [_jsx(Route, { path: `/`, element: _jsx(Suspense, { fallback: _jsx("div", { className: `w-full flex flex-col justify-center items-center h-screen overflow-y-hidden ${bgGray200_700Color}`, style: { transform: "scale(3)" }, children: _jsx(Loader, {}) }), children: _jsx(ErrorBoundary, { FallbackComponent: ErrorFallback, children: withList ? (_jsx(SchedulesDetails, { withListReturnButton: withListReturnButton, withListButtonNameUs: withListButtonNameUs, withListButtonName: withListButtonName, isDarkMode: isInDarkMode, locale: locale, scheduleByEventPlace: scheduleByEventPlace })) : (_jsx(ScheduleViewWrapper, { eventsNameUs: eventsNameUs, eventsName: eventsName, eventsTextColor: eventsTextColor, colorCellByEvents: colorCellByEvents, withDays: withDays, locale: locale, eventTypeData: eventTypeData, withList: withList, isInDarkMode: isInDarkMode, weekStartsOn: weekStartsOn, scheduleByEventPlace: scheduleByEventPlace, modalContent: modalContent })) }) }) }), _jsx(Route, { path: `/:scheduleId`, element: _jsx(Suspense, { fallback: _jsx("div", { className: `w-full flex flex-col justify-center items-center h-screen overflow-y-hidden ${bgGray200_700Color}`, style: { transform: "scale(3)" }, children: _jsx(Loader, {}) }), children: _jsx(ErrorBoundary, { FallbackComponent: ErrorFallback, children: _jsx(ScheduleViewWrapper, { eventsNameUs: eventsNameUs, eventsName: eventsName, eventsTextColor: eventsTextColor, colorCellByEvents: colorCellByEvents, withDays: withDays, locale: locale, eventTypeData: eventTypeData, withList: withList, isInDarkMode: isInDarkMode, weekStartsOn: weekStartsOn, scheduleByEventPlace: scheduleByEventPlace, modalContent: modalContent }) }) }) }), _jsx(Route, { path: "*", element: _jsx(Navigate, { replace: true, to: "/" }) })] }) }));
};
export default SchedulesLayout;
