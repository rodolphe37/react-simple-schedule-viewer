import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Days } from "../../types";
import { capitalizeFirstLetter, formatTime, daysOfWeekNameFr, daysOfWeekNameUs, } from "../utils/helpers";
import CrossIcon from "../../../../ui/icons/CrossIcon";
import useEventNamesController from "../hooks/useEventNamesController";
const CellEventsInfosModal = ({ isFrenchDegree, numbersForCalendarType, ModalRef, setIsModalOpen, currentEventType, startTime, endTime, day, eventInstructionTextWithoutWhiteSpace, isInDarkMode, locale, modalContentForDisplaying, eventByEventType, eventsName, eventsNameUs, }) => {
    const daySelected = capitalizeFirstLetter(Days[day]);
    const { eventInstructionNameFr, eventInstructionNameUs } = useEventNamesController({ eventsName, eventsNameUs });
    return (_jsx("div", { className: `fixed w-screen h-screen top-0 left-0 z-[9999] flex items-center justify-center ${isInDarkMode ? "bg-gray-700/90" : "bg-gray-400/80"} bg-opacity-50 backdrop-blur-sm  transition-all overflow-y-auto`, children: _jsxs("div", { ref: ModalRef, className: `absolute mx-5 w-full md:max-w-[450px] ${isInDarkMode ? "bg-gray-900" : "bg-gray-100"} border border-slate-300 rounded-lg flex flex-col  z-50 justify-center`, children: [_jsxs("header", { className: `min-h-6 px-4 rounded-t-md  w-full flex items-center justify-between ${isInDarkMode ? "bg-gray-400/80" : "bg-blue-500"} text-white`, children: [_jsx("h1", { className: "text-center font-semibold mt-4 mb-4 ", children: locale === "fr" ? "Détails de l'événement" : "Event details" }), _jsxs("div", { onClick: () => setIsModalOpen(false), className: "flex items-center cursor-pointer", children: [_jsx("p", { className: "mr-2", children: locale === "fr" ? "Annuler" : "Cancel" }), _jsx(CrossIcon, { fill: "currentColor" })] })] }), _jsxs("div", { className: "flex flex-col items-center justify-start p-4", children: [_jsxs("div", { className: "flex flex-row gap-4 items-center w-[65%] justify-between", children: [_jsxs("h4", { className: `text-left font-medium ${isInDarkMode ? "text-white" : "text-black"}`, children: [eventByEventType === "event"
                                            ? modalContentForDisplaying?.eventTitle
                                            : locale === "fr"
                                                ? eventInstructionNameFr(eventInstructionTextWithoutWhiteSpace)
                                                : eventInstructionNameUs(eventInstructionTextWithoutWhiteSpace), ":"] }), _jsx("p", { className: `${isInDarkMode ? "text-white" : "text-black"}`, children: eventByEventType === "event"
                                        ? currentEventType?.value
                                        : eventByEventType === "temp"
                                            ? numbersForCalendarType + isFrenchDegree
                                            : null })] }), _jsxs("div", { className: "flex flex-row gap-4 items-center w-[65%] justify-between", children: [_jsx("h4", { className: `text-left font-medium ${isInDarkMode ? "text-white" : "text-black"}`, children: locale === "fr" ? "Début :" : "Start time:" }), _jsx("p", { className: `${isInDarkMode ? "text-white" : "text-black"}`, children: formatTime(startTime) })] }), _jsxs("div", { className: "flex flex-row gap-4 items-center w-[65%] justify-between", children: [_jsx("h4", { className: `text-left font-medium ${isInDarkMode ? "text-white" : "text-black"}`, children: locale === "fr" ? "Fin :" : "End time:" }), _jsx("p", { className: `${isInDarkMode ? "text-white" : "text-black"}`, children: formatTime(endTime) })] }), _jsxs("div", { className: "flex flex-row gap-4 items-center w-[65%] justify-between", children: [_jsx("h4", { className: `text-left font-medium ${isInDarkMode ? "text-white" : "text-black"}`, children: locale === "fr" ? "Jour :" : "Day:" }), _jsx("div", { className: `${isInDarkMode ? "text-white" : "text-black"}`, children: locale === "fr"
                                        ? daysOfWeekNameFr(daySelected)
                                        : daysOfWeekNameUs(daySelected) })] }), _jsx("div", { style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                            } }), modalContentForDisplaying?.contentModal] })] }) }));
};
export default CellEventsInfosModal;
