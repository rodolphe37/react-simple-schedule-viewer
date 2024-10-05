import { TeventsName } from "../../types";
import React from "react";
type TCellEventsInfoModalProps = {
    numbersForCalendarType: string;
    ModalRef: React.RefObject<HTMLDivElement>;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
    currentEventType: {
        key: string;
        value: string | number | null;
    } | undefined;
    startTime: number;
    endTime: number;
    day: number;
    eventInstructionTextWithoutWhiteSpace: string;
    isInDarkMode?: boolean;
    locale: string;
    modalContentForDisplaying: {
        id: string;
        day: number;
        eventType: string;
        startTime: number;
        eventTitle: string;
        contentModal: JSX.Element;
    } | undefined;
    eventByEventType: string | undefined;
    isFrenchDegree: " °C" | " °F";
    eventsName?: TeventsName;
    eventsNameUs?: TeventsName;
};
declare const CellEventsInfosModal: ({ isFrenchDegree, numbersForCalendarType, ModalRef, setIsModalOpen, currentEventType, startTime, endTime, day, eventInstructionTextWithoutWhiteSpace, isInDarkMode, locale, modalContentForDisplaying, eventByEventType, eventsName, eventsNameUs, }: TCellEventsInfoModalProps) => import("react/jsx-runtime").JSX.Element;
export default CellEventsInfosModal;
//# sourceMappingURL=CellEventsInfosModal.d.ts.map