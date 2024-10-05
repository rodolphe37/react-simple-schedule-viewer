import { useCallback, useEffect, useRef, useState } from "react";
import { generateWeekDaysData } from "../utils/dateUtils";
import useScroll from "./useScrollContextCustomHook";
import eventIdToDIsplayAtom from "../../../../globalStates/atoms/eventIdToDisplayAtom";
import { useRecoilState } from "recoil";
import { EventType, TEventToDisplay } from "../models/models";
import { EventTypes } from "../../types";

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
  const [eventIdToDisplay] =
    useRecoilState<TEventToDisplay>(eventIdToDIsplayAtom);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const isScrolled = sessionStorage.getItem("isScrolled") ?? null;

  const executeScroll = useCallback(() => {
    if (scrollRef?.current) {
      const barHeight = "48px";

      scrollRef.current.style.scrollMargin = barHeight;
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => {
      sessionStorage.setItem("isScrolled", "true");
    }, 1000);
  }, []);

  const ScrollToTop = useCallback(() => {
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
    .filter(
      (re) => re.start === 0 && re.instruction === EventTypes.EVENT_TYPE_6
    );
  const NUMBER_OF_DAYS = 7;

  const isScrolling =
    dataForIsScrollingCondition &&
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

  useEffect(() => {
    if (!isScrolled) {
      if (isScrolling) {
        executeScroll();
      } else {
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

export default useCalendarController;
