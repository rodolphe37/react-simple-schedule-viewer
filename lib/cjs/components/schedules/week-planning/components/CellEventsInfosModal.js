"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const types_1 = require("../../types");
const helpers_1 = require("../utils/helpers");
const CrossIcon_1 = __importDefault(require("../../../../ui/icons/CrossIcon"));
const useEventNamesController_1 = __importDefault(require("../hooks/useEventNamesController"));
const CellEventsInfosModal = ({ isFrenchDegree, numbersForCalendarType, ModalRef, setIsModalOpen, currentEventType, startTime, endTime, day, eventInstructionTextWithoutWhiteSpace, isInDarkMode, locale, modalContentForDisplaying, eventByEventType, eventsName, eventsNameUs, }) => {
    const daySelected = (0, helpers_1.capitalizeFirstLetter)(types_1.Days[day]);
    const { eventInstructionNameFr, eventInstructionNameUs } = (0, useEventNamesController_1.default)({ eventsName, eventsNameUs });
    return ((0, jsx_runtime_1.jsx)("div", { className: `fixed w-screen h-screen top-0 left-0 z-[9999] flex items-center justify-center ${isInDarkMode ? "bg-gray-700/90" : "bg-gray-400/80"} bg-opacity-50 backdrop-blur-sm  transition-all overflow-y-auto`, children: (0, jsx_runtime_1.jsxs)("div", { ref: ModalRef, className: `absolute mx-5 w-full md:max-w-[450px] ${isInDarkMode ? "bg-gray-900" : "bg-gray-100"} border border-slate-300 rounded-lg flex flex-col  z-50 justify-center`, children: [(0, jsx_runtime_1.jsxs)("header", { className: `min-h-6 px-4 rounded-t-md  w-full flex items-center justify-between ${isInDarkMode ? "bg-gray-400/80" : "bg-blue-500"} text-white`, children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-center font-semibold mt-4 mb-4 ", children: locale === "fr" ? "Détails de l'événement" : "Event details" }), (0, jsx_runtime_1.jsxs)("div", { onClick: () => setIsModalOpen(false), className: "flex items-center cursor-pointer", children: [(0, jsx_runtime_1.jsx)("p", { className: "mr-2", children: locale === "fr" ? "Annuler" : "Cancel" }), (0, jsx_runtime_1.jsx)(CrossIcon_1.default, { fill: "currentColor" })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-col items-center justify-start p-4", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-4 items-center w-[65%] justify-between", children: [(0, jsx_runtime_1.jsxs)("h4", { className: `text-left font-medium ${isInDarkMode ? "text-white" : "text-black"}`, children: [eventByEventType === "event"
                                            ? modalContentForDisplaying?.eventTitle
                                            : locale === "fr"
                                                ? eventInstructionNameFr(eventInstructionTextWithoutWhiteSpace)
                                                : eventInstructionNameUs(eventInstructionTextWithoutWhiteSpace), ":"] }), (0, jsx_runtime_1.jsx)("p", { className: `${isInDarkMode ? "text-white" : "text-black"}`, children: eventByEventType === "event"
                                        ? currentEventType?.value
                                        : eventByEventType === "temp"
                                            ? numbersForCalendarType + isFrenchDegree
                                            : null })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-4 items-center w-[65%] justify-between", children: [(0, jsx_runtime_1.jsx)("h4", { className: `text-left font-medium ${isInDarkMode ? "text-white" : "text-black"}`, children: locale === "fr" ? "Début :" : "Start time:" }), (0, jsx_runtime_1.jsx)("p", { className: `${isInDarkMode ? "text-white" : "text-black"}`, children: (0, helpers_1.formatTime)(startTime) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-4 items-center w-[65%] justify-between", children: [(0, jsx_runtime_1.jsx)("h4", { className: `text-left font-medium ${isInDarkMode ? "text-white" : "text-black"}`, children: locale === "fr" ? "Fin :" : "End time:" }), (0, jsx_runtime_1.jsx)("p", { className: `${isInDarkMode ? "text-white" : "text-black"}`, children: (0, helpers_1.formatTime)(endTime) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "flex flex-row gap-4 items-center w-[65%] justify-between", children: [(0, jsx_runtime_1.jsx)("h4", { className: `text-left font-medium ${isInDarkMode ? "text-white" : "text-black"}`, children: locale === "fr" ? "Jour :" : "Day:" }), (0, jsx_runtime_1.jsx)("div", { className: `${isInDarkMode ? "text-white" : "text-black"}`, children: locale === "fr"
                                        ? (0, helpers_1.daysOfWeekNameFr)(daySelected)
                                        : (0, helpers_1.daysOfWeekNameUs)(daySelected) })] }), (0, jsx_runtime_1.jsx)("div", { style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "column",
                            } }), modalContentForDisplaying?.contentModal] })] }) }));
};
exports.default = CellEventsInfosModal;
