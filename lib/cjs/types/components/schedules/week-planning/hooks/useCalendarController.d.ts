/// <reference types="react" />
import { EventType, TEventToDisplay } from "../models/models";
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
    eventIdToDisplay: TEventToDisplay;
    scrollToBottom: () => void;
    isScrolling: boolean;
    executeScroll: () => void;
    ScrollToTop: () => void;
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
};
export default useCalendarController;
//# sourceMappingURL=useCalendarController.d.ts.map