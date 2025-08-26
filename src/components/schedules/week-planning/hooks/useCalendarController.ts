import { useCallback, useEffect, useRef, useState } from "react";
import { generateWeekDaysData } from "../utils/dateUtils";
import useScroll from "./useScrollContextCustomHook";
import eventIdToDisplayAtom from "../../../../globalStates/atoms/eventIdToDisplayAtom";
import { EventType } from "../models/models";
import { EventTypes } from "../../types";
import { useAtom, useSetAtom } from "jotai";

type TuseCalendarControllerProps = {
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  scheduleIdentifier: string;
  events?: EventType[];
};

const useCalendarController = ({
  weekStartsOn,
  scheduleIdentifier,
  events,
}: TuseCalendarControllerProps) => {
  const [calendarData] = useState(generateWeekDaysData({ weekStartsOn }));
  const { updateScroll } = useScroll();

  // Setter Jotai
  const [eventIdToDisplay, setEventIdToDisplay] = useAtom(eventIdToDisplayAtom);

  const scrollRef = useRef<HTMLDivElement | null>(null);

  const isScrolled = sessionStorage.getItem("isScrolled") === "true";

  const executeScroll = useCallback(() => {
    if (scrollRef.current) {
      const barHeight = "48px";

      scrollRef.current.style.scrollMarginTop = barHeight;
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => {
      sessionStorage.setItem("isScrolled", "true");
    }, 1000);
  }, []);

  const scrollToTop = useCallback(() => {
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
    .filter(
      (re) => re.start === 0 && re.instruction === EventTypes.EVENT_TYPE_6
    );

  const NUMBER_OF_DAYS = 7;

  const isScrolling =
    (dataForIsScrollingCondition?.length ?? 0) === NUMBER_OF_DAYS;

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

  useEffect(() => {
    if (!isScrolled) {
      if (isScrolling) {
        executeScroll();
      } else {
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

export default useCalendarController;
