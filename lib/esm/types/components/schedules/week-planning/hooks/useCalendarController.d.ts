/// <reference types="react" />
import { EventType } from "../models/models";
type TuseCalendarControllerProps = {
    weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
    scheduleIdentifier: string;
    events?: EventType[];
};
declare const useCalendarController: ({ weekStartsOn, scheduleIdentifier, events, }: TuseCalendarControllerProps) => {
    updateScroll: () => void;
    scrollRef: import("react").MutableRefObject<HTMLDivElement | null>;
    calendarData: {
        weekDayNames: string[];
    };
    setEventIdToDisplay: (args_0: {
        day: number | undefined;
        id: number | undefined;
        startTime: number | undefined;
        endTime: number | undefined;
    } | ((prev: {
        day: number | undefined;
        id: number | undefined;
        startTime: number | undefined;
        endTime: number | undefined;
    } | null) => {
        day: number | undefined;
        id: number | undefined;
        startTime: number | undefined;
        endTime: number | undefined;
    } | null) | null) => void;
    scrollToBottom: () => void;
    isScrolling: boolean;
    executeScroll: () => void;
    scrollToTop: () => void;
    sortedEventsDaySlotArray: {
        day: number;
        time_slot: {
            start: number;
            instruction: string;
        }[];
    }[] | undefined;
    dataForIsScrollingCondition: {
        start: number;
        instruction: string;
    }[] | undefined;
    eventIdToDisplay: {
        day: number | undefined;
        id: number | undefined;
        startTime: number | undefined;
        endTime: number | undefined;
    } | null;
};
export default useCalendarController;
//# sourceMappingURL=useCalendarController.d.ts.map