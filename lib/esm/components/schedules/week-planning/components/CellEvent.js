import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Fragment, useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import CellEventsInfosModal from "./CellEventsInfosModal";
import useGetEventTypeController from "../../hooks/useGetEventTypeController";
import { EventTypes } from "../../types";
import useDispatchColorsByEvent from "../../hooks/useDispatchColorsByEvent";
import { extractNumbers } from "../utils/helpers";
import useEventNamesController from "../hooks/useEventNamesController";
const CellEvent = ({ timeEvent: event, events, timeEventId, startTime, day, eventIdToDisplay, isInDarkMode, setEventIdToDisplay, eventTypeData, locale, modalContent, scheduleIdentifier, eventArray, colorCellByEvents, eventsTextColor, eventsName, eventsNameUs, }) => {
    const { eventInstructionNameFr, eventInstructionNameUs } = useEventNamesController({ eventsName, eventsNameUs });
    const { colorCellByTemp, textEventColorInCell } = useDispatchColorsByEvent({
        colorCellByEvents,
        eventsTextColor,
    });
    const ModalRef = useRef(null);
    const [isModalOpen, setIsModalOpen] = useState();
    const { eventType } = useGetEventTypeController(eventTypeData, locale, eventsName);
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
    useClickOutside(ModalRef, () => setIsModalOpen(false));
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
    const numbersForCalendarType = extractNumbers(stringToExtract);
    const isFrenchDegree = locale == "fr" ? ` °C` : ` °F`;
    return (_jsxs(_Fragment, { children: [currentEventType?.key === EventTypes.EVENT_TYPE_6 &&
                eventByEventType === "event"
                ? null
                : isModalOpen && (_jsx(CellEventsInfosModal, { eventsNameUs: eventsNameUs, eventsName: eventsName, isFrenchDegree: isFrenchDegree, numbersForCalendarType: numbersForCalendarType, eventByEventType: eventByEventType, modalContentForDisplaying: modalContentForDisplaying, locale: locale, isInDarkMode: isInDarkMode, ModalRef: ModalRef, setIsModalOpen: setIsModalOpen, currentEventType: currentEventType, startTime: startTime, endTime: endTime, day: day, eventInstructionTextWithoutWhiteSpace: eventInstructionTextWithoutWhiteSpace })), _jsx(Fragment, { children: _jsx("div", { onMouseEnter: HandleEventInfoOnMouseEnter, style: {
                        height: heightSize(),
                        backgroundColor: colorCellByTemp(eventInstructionTextWithoutWhiteSpace),
                        color: textEventColorInCell(eventInstructionTextWithoutWhiteSpace),
                        fontSize: eventInstructionTextWithoutWhiteSpace.length > 6
                            ? "0.55rem"
                            : "0.7rem",
                    }, className: ` text-white font-semibold absolute z-[200] top-0 min-h-[60px] truncate pb-2 pl-2 pr-2 gap-y-2  flex flex-row justify-between rounded-md w-full  text-left  cursor-pointer `, onClick: () => setIsModalOpen(true), children: _jsx("div", { className: "flex flex-col w-full relative z-30", children: _jsxs("span", { className: "flex flex-col flex-wrap w-full justify-between", children: [_jsxs("p", { className: "flex flex-row justify-start items-start w-full", style: { fontSize: "16px" }, children: [eventByEventType === "event" &&
                                            modalContentForDisplaying?.eventTitle &&
                                            modalContentForDisplaying.eventTitle.length > 0
                                            ? currentEventType?.value
                                            : null, eventByEventType === "temp"
                                            ? numbersForCalendarType + isFrenchDegree
                                            : null, eventByEventType === "calendar" ? null : null] }), currentEventType?.key === EventTypes.EVENT_TYPE_6 &&
                                    eventByEventType === "event" ? (_jsx("p", { style: { fontSize: "14px" }, children: locale === "fr" ? "Pas d'événements" : "No events" })) : (_jsx("p", { style: modalContentForDisplaying?.eventTitle &&
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
export default CellEvent;
