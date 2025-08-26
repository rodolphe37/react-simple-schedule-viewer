"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const dateUtils_1 = require("../utils/dateUtils");
const useScrollContextCustomHook_1 = __importDefault(require("./useScrollContextCustomHook"));
const eventIdToDisplayAtom_1 = __importDefault(require("../../../../globalStates/atoms/eventIdToDisplayAtom"));
const types_1 = require("../../types");
const jotai_1 = require("jotai");
const useCalendarController = ({ weekStartsOn, scheduleIdentifier, events, }) => {
    const [calendarData] = (0, react_1.useState)((0, dateUtils_1.generateWeekDaysData)({ weekStartsOn }));
    const { updateScroll } = (0, useScrollContextCustomHook_1.default)();
    // Setter Jotai
    const [eventIdToDisplay, setEventIdToDisplay] = (0, jotai_1.useAtom)(eventIdToDisplayAtom_1.default);
    const scrollRef = (0, react_1.useRef)(null);
    const isScrolled = sessionStorage.getItem("isScrolled") === "true";
    const executeScroll = (0, react_1.useCallback)(() => {
        if (scrollRef.current) {
            const barHeight = "48px";
            scrollRef.current.style.scrollMarginTop = barHeight;
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
        setTimeout(() => {
            sessionStorage.setItem("isScrolled", "true");
        }, 1000);
    }, []);
    const scrollToTop = (0, react_1.useCallback)(() => {
        scrollRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
        setTimeout(() => {
            sessionStorage.setItem("isScrolled", "true");
        }, 1000);
    }, []);
    const sortedEventsDaySlotArray = events
        ?.filter((sch) => sch.id === scheduleIdentifier)
        ?.flatMap((re) => re.day_slot_set)
        .flatMap((r) => r.days.map((res) => ({ day: res, time_slot: r.time_slot })))
        .sort((a, b) => a.day - b.day);
    const dataForIsScrollingCondition = sortedEventsDaySlotArray
        ?.flatMap((res) => res.time_slot)
        .filter((re) => re.start === 0 && re.instruction === types_1.EventTypes.EVENT_TYPE_6);
    const NUMBER_OF_DAYS = 7;
    const isScrolling = (dataForIsScrollingCondition?.length ?? 0) === NUMBER_OF_DAYS;
    const scrollToBottom = () => {
        const scroller = document.querySelector("#scroller");
        if (scroller && scrollRef.current) {
            const scrollerHeight = scroller.scrollHeight * 2;
            scrollRef.current.style.scrollMarginTop = `${scrollerHeight}px`;
            scrollRef.current.scrollIntoView({
                behavior: "smooth",
            });
            setTimeout(() => {
                sessionStorage.setItem("isScrolled", "true");
            }, 1000);
        }
    };
    (0, react_1.useEffect)(() => {
        if (!isScrolled) {
            if (isScrolling) {
                executeScroll();
            }
            else {
                scrollToTop();
            }
        }
    }, [executeScroll, isScrolling, scrollToTop, isScrolled]);
    return {
        updateScroll,
        scrollRef,
        calendarData,
        setEventIdToDisplay,
        scrollToBottom,
        isScrolling,
        executeScroll,
        scrollToTop,
        sortedEventsDaySlotArray,
        dataForIsScrollingCondition,
        eventIdToDisplay,
    };
};
exports.default = useCalendarController;
