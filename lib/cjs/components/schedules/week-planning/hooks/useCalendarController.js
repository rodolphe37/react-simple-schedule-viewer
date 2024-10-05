"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const dateUtils_1 = require("../utils/dateUtils");
const useScrollContextCustomHook_1 = __importDefault(require("./useScrollContextCustomHook"));
const eventIdToDisplayAtom_1 = __importDefault(require("../../../../globalStates/atoms/eventIdToDisplayAtom"));
const recoil_1 = require("recoil");
const types_1 = require("../../types");
const useCalendarController = ({ weekStartsOn, scheduleIdentifier, events, }) => {
    const [calendarData] = (0, react_1.useState)((0, dateUtils_1.generateWeekDaysData)({ weekStartsOn }));
    const { updateScroll } = (0, useScrollContextCustomHook_1.default)();
    const [eventIdToDisplay] = (0, recoil_1.useRecoilState)(eventIdToDisplayAtom_1.default);
    const scrollRef = (0, react_1.useRef)(null);
    const isScrolled = sessionStorage.getItem("isScrolled") ?? null;
    const executeScroll = (0, react_1.useCallback)(() => {
        if (scrollRef?.current) {
            const barHeight = "48px";
            scrollRef.current.style.scrollMargin = barHeight;
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
        setTimeout(() => {
            sessionStorage.setItem("isScrolled", "true");
        }, 1000);
    }, []);
    const ScrollToTop = (0, react_1.useCallback)(() => {
        scrollRef?.current?.scrollIntoView({
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
        .sort(function (a, b) {
        return a.day - b.day;
    });
    const dataForIsScrollingCondition = sortedEventsDaySlotArray
        ?.flatMap((res) => res.time_slot)
        .filter((re) => re.start === 0 && re.instruction === types_1.EventTypes.EVENT_TYPE_6);
    const NUMBER_OF_DAYS = 7;
    const isScrolling = dataForIsScrollingCondition &&
        dataForIsScrollingCondition?.length === NUMBER_OF_DAYS
        ? true
        : false;
    const scrollToBottom = () => {
        const scroller = document.querySelector("#scroller");
        if (scroller) {
            const scrollerHeight = scroller?.scrollHeight * 2;
            if (scrollRef.current && scrollerHeight) {
                scrollRef.current.style.scrollMarginTop = scrollerHeight.toString();
                scrollRef.current?.scrollIntoView({
                    behavior: "smooth",
                });
                setTimeout(() => {
                    sessionStorage.setItem("isScrolled", "true");
                }, 1000);
            }
        }
    };
    (0, react_1.useEffect)(() => {
        if (!isScrolled) {
            if (isScrolling) {
                executeScroll();
            }
            else {
                ScrollToTop();
            }
        }
    }, [
        executeScroll,
        isScrolling,
        ScrollToTop,
        isScrolled,
        dataForIsScrollingCondition,
    ]);
    return {
        updateScroll,
        scrollRef,
        calendarData,
        eventIdToDisplay,
        scrollToBottom,
        isScrolling,
        executeScroll,
        ScrollToTop,
        sortedEventsDaySlotArray,
        dataForIsScrollingCondition,
    };
};
exports.default = useCalendarController;
