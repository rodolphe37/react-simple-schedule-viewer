"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useClickOutside_1 = __importDefault(require("../hooks/useClickOutside"));
const CellEventsInfosModal_1 = __importDefault(require("./CellEventsInfosModal"));
const useGetEventTypeController_1 = __importDefault(require("../../hooks/useGetEventTypeController"));
const types_1 = require("../../types");
const useDispatchColorsByEvent_1 = __importDefault(require("../../hooks/useDispatchColorsByEvent"));
const helpers_1 = require("../utils/helpers");
const useEventNamesController_1 = __importDefault(require("../hooks/useEventNamesController"));
const CellEvent = ({ timeEvent: event, events, timeEventId, startTime, day, eventIdToDisplay, isInDarkMode, setEventIdToDisplay, eventTypeData, locale, modalContent, scheduleIdentifier, eventArray, colorCellByEvents, eventsTextColor, eventsName, eventsNameUs, }) => {
    const { eventInstructionNameFr, eventInstructionNameUs } = (0, useEventNamesController_1.default)({ eventsName, eventsNameUs });
    const { colorCellByTemp, textEventColorInCell } = (0, useDispatchColorsByEvent_1.default)({
        colorCellByEvents,
        eventsTextColor,
    });
    const ModalRef = (0, react_1.useRef)(null);
    const [isModalOpen, setIsModalOpen] = (0, react_1.useState)();
    const { eventType } = (0, useGetEventTypeController_1.default)(eventTypeData, locale, eventsName);
    const eventInstructionTextWithoutWhiteSpace = event.instruction.trim();
    const currentEventType = eventType.find((el) => el.key === eventInstructionTextWithoutWhiteSpace);
    const endTime = events?.time_slot[timeEventId + 1] !== undefined
        ? events?.time_slot[timeEventId + 1]?.start
        : 1440;
    const heightSize = () => {
        const HEIGHT_BASE_MINUTES_CELLS = 12;
        const MINUTES_INTERVALS = 15;
        const CELLS_MARGIN_BOTTOM = 2;
        const diffBetweenTimes = endTime - startTime;
        return ((HEIGHT_BASE_MINUTES_CELLS * diffBetweenTimes) / MINUTES_INTERVALS -
            CELLS_MARGIN_BOTTOM);
    };
    const modalContentByScheduleId = modalContent?.filter((res) => res.id === scheduleIdentifier);
    const modalContentForDisplaying = modalContentByScheduleId?.find((res) => res.day === day &&
        res.eventType === currentEventType?.key &&
        res.startTime === startTime);
    const eventByEventType = eventArray?.flatMap((res) => res.type).toString();
    (0, useClickOutside_1.default)(ModalRef, () => setIsModalOpen(false));
    const HandleEventInfoOnMouseEnter = () => {
        if (day !== eventIdToDisplay.day ||
            timeEventId !== eventIdToDisplay.id ||
            endTime !== eventIdToDisplay.endTime) {
            setEventIdToDisplay({
                day: day,
                id: timeEventId,
                startTime: startTime,
                endTime: endTime,
            });
        }
    };
    const stringToExtract = currentEventType !== undefined ? currentEventType.value : "";
    const numbersForCalendarType = (0, helpers_1.extractNumbers)(stringToExtract);
    const isFrenchDegree = locale == "fr" ? ` °C` : ` °F`;
    console.log("currentEventType?.key", currentEventType?.key);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [currentEventType?.key === types_1.EventTypes.EVENT_TYPE_6 &&
                eventByEventType === "event"
                ? null
                : isModalOpen && ((0, jsx_runtime_1.jsx)(CellEventsInfosModal_1.default, { eventsNameUs: eventsNameUs, eventsName: eventsName, isFrenchDegree: isFrenchDegree, numbersForCalendarType: numbersForCalendarType, eventByEventType: eventByEventType, modalContentForDisplaying: modalContentForDisplaying, locale: locale, isInDarkMode: isInDarkMode, ModalRef: ModalRef, setIsModalOpen: setIsModalOpen, currentEventType: currentEventType, startTime: startTime, endTime: endTime, day: day, eventInstructionTextWithoutWhiteSpace: eventInstructionTextWithoutWhiteSpace })), (0, jsx_runtime_1.jsx)(react_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", { onMouseEnter: HandleEventInfoOnMouseEnter, style: {
                        height: heightSize(),
                        backgroundColor: colorCellByTemp(eventInstructionTextWithoutWhiteSpace),
                        color: textEventColorInCell(eventInstructionTextWithoutWhiteSpace),
                        fontSize: eventInstructionTextWithoutWhiteSpace.length > 6
                            ? "0.55rem"
                            : "0.7rem",
                    }, className: ` text-white font-semibold absolute z-[200] top-0 min-h-[60px] truncate pb-2 pl-2 pr-2 gap-y-2  flex flex-row justify-between rounded-md w-full  text-left  cursor-pointer `, onClick: () => setIsModalOpen(true), children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col w-full relative z-30", children: (0, jsx_runtime_1.jsxs)("span", { className: "flex flex-col flex-wrap w-full justify-between", children: [(0, jsx_runtime_1.jsxs)("p", { className: "flex flex-row justify-start items-start w-full", style: { fontSize: "16px" }, children: [eventByEventType === "event" &&
                                            modalContentForDisplaying?.eventTitle &&
                                            modalContentForDisplaying.eventTitle.length > 0
                                            ? currentEventType?.value
                                            : null, eventByEventType === "temp"
                                            ? numbersForCalendarType + isFrenchDegree
                                            : null, eventByEventType === "calendar" ? null : null] }), currentEventType?.key === types_1.EventTypes.EVENT_TYPE_6 &&
                                    eventByEventType === "event" ? ((0, jsx_runtime_1.jsx)("p", { style: { fontSize: "14px" }, children: locale === "fr" ? "Pas d'événements" : "No events" })) : ((0, jsx_runtime_1.jsx)("p", { style: modalContentForDisplaying?.eventTitle &&
                                        modalContentForDisplaying.eventTitle.length > 0
                                        ? { fontSize: "12px", whiteSpace: "pre-line" }
                                        : { fontSize: "14px", whiteSpace: "pre-line" }, children: modalContentForDisplaying?.day === day &&
                                        modalContentForDisplaying?.eventTitle &&
                                        modalContentForDisplaying.eventTitle.length > 0
                                        ? modalContentForDisplaying.eventTitle
                                        : locale === "fr"
                                            ? eventInstructionNameFr(event.instruction)
                                            : eventInstructionNameUs(event.instruction) }))] }) }) }) })] }));
};
exports.default = CellEvent;
