import { Fragment } from "react";
import Cell from "./Cell";
import {
  daysOfWeekNameFr,
  daysOfWeekNameUs,
  extractNumbers,
  rangebyFifteenMinutes,
} from "../utils/helpers";
import { EventType } from "../models/models";
import { ScrollProvider } from "../hooks/useScrollContextCustomHook";
import useCalendarController from "../hooks/useCalendarController";
import CalendarScrollToTopButton from "./CalendarScrollToTopButton";
import CalendarScrollToBottomButton from "./CalendarScrollToBottomButton";
import useWindowDimensions from "../../../../hooks/useGetWindowDimensions";
import HoursRangeIndicator from "./HoursRangeIndicator";
import { TContentForModal, TeventsName, TeventTypeData } from "../../types";
import useGetDaysController from "../../hooks/useGetDaysController";
import { today } from "../utils/dateUtils";
import React from "react";

interface ICalendarProps {
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  events?: EventType[];
  scheduleIdentifier: string;
  isInDarkMode: boolean;
  eventTypeData: TeventTypeData;
  locale: "fr" | "en";
  modalContent?: TContentForModal;
  withDays?: boolean;
  colorCellByEvents: Omit<TeventTypeData, "eventPlace_id">;
  eventsTextColor: Omit<TeventTypeData, "eventPlace_id">;
  eventsName?: TeventsName;
  eventsNameUs?: TeventsName;
  isInCalendarType: string | undefined;
}

const Calendar = ({
  weekStartsOn,
  events,
  scheduleIdentifier,
  isInDarkMode,
  eventTypeData,
  locale,
  modalContent,
  withDays,
  colorCellByEvents,
  eventsTextColor,
  eventsName,
  eventsNameUs,
  isInCalendarType,
}: ICalendarProps) => {
  const {
    updateScroll,
    scrollRef,
    calendarData,
    eventIdToDisplay,
    scrollToBottom,
    sortedEventsDaySlotArray,
  } = useCalendarController({ weekStartsOn, scheduleIdentifier, events });
  const { height } = useWindowDimensions();
  const { calendarWithDaysUS, calendarWithDaysFrench } =
    useGetDaysController(calendarData);

  const currentDay = today.getDate();
  const actualDate = currentDay < 10 ? `0${currentDay}` : `${currentDay}`
  const currentNumber = calendarWithDaysFrench.find((res)=> res.includes(actualDate))
  const currentDayOfWeek =
    locale === "fr"
      ? calendarWithDaysFrench.find((res)=> res === currentNumber)
      : calendarWithDaysUS.find((res)=> res === currentNumber);


  return (
    <ScrollProvider
      updateScroll={updateScroll}
      children={
        <div className=" relative flex flex-col gap-5">
          <div
            style={{ maxHeight: height / 1.5 }}
            className="flex flex-col  rounded-t-xl relative"
          >
            <div className="grid grid-cols-8 grid-rows-1 font-bold text-center text-black dark:text-white  rounded-t-xl ">
              <div className="p-2 relative -mt-[14px]">
                <CalendarScrollToTopButton
                  isInDarkMode={isInDarkMode}
                  scrollRef={scrollRef}
                />
              </div>
              {withDays || isInCalendarType === "calendar"
                ? locale === "fr"
                  ? calendarWithDaysFrench?.map((day) => (
                      <div
                        style={
                          currentDayOfWeek === day
                            ? {
                                color: isInDarkMode ? "#fff" : "#4d57ff",
                                fontSize: "1.12rem",
                                position: "relative",
                              }
                            : {}
                        }
                        key={day}
                        className={`p-2 text-xs truncate md:text-base text-blue-600 dark:text-white -ml-6`}
                      >
                        {day}
                        {currentDayOfWeek === day ? (
                          <span
                            title="Jour actuel"
                            style={{
                              cursor: "pointer",
                              width: 7,
                              height: 7,
                              background: "red",
                              position: "absolute",
                              top: "3px",
                              right: "50%",
                              borderRadius: "100px",
                            }}
                          />
                        ) : null}
                      </div>
                    ))
                  : calendarWithDaysUS?.map((day) => (
                      <div
                        style={
                          currentDayOfWeek === day
                            ? {
                                color: isInDarkMode ? "#fff" : "#4d57ff",
                                fontSize: "1.12rem",
                                position: "relative",
                              }
                            : {}
                        }
                        key={day}
                        className={`p-2 text-xs truncate md:text-base text-blue-600 dark:text-white -ml-6`}
                      >
                        {day}
                        {currentDayOfWeek === day ? (
                          <span
                            title="Current day"
                            style={{
                              cursor: "pointer",
                              width: 7,
                              height: 7,
                              background: "red",
                              position: "absolute",
                              top: "3px",
                              right: "50%",
                              borderRadius: "100px",
                            }}
                          />
                        ) : null}
                      </div>
                    ))
                : calendarData.weekDayNames.map((day) => (
                    <div
                      key={day}
                      className={`p-2 text-xs truncate md:text-base text-blue-600 dark:text-white -ml-6`}
                    >
                      {locale === "fr"
                        ? daysOfWeekNameFr(day)
                        : daysOfWeekNameUs(day)}
                    </div>
                  ))}
            </div>

            <div
              id="scroller"
              style={{ overflowY: "scroll" }}
              className="grid flex-1 grid-cols-8 overflow-hidden border-t border-gray-400"
            >
              <HoursRangeIndicator
                locale={locale}
                isInDarkMode={isInDarkMode}
                rangebyFifteenMinutes={rangebyFifteenMinutes}
                eventIdToDisplay={eventIdToDisplay}
              />
              {sortedEventsDaySlotArray?.map((res, i) => (
                <Fragment key={i}>
                  <Cell
                    eventsNameUs={eventsNameUs}
                    eventsName={eventsName}
                    eventsTextColor={eventsTextColor}
                    colorCellByEvents={colorCellByEvents}
                    events={events}
                    scheduleIdentifier={scheduleIdentifier}
                    modalContent={modalContent}
                    locale={locale}
                    eventTypeData={eventTypeData}
                    isInDarkMode={isInDarkMode}
                    scrollRef={scrollRef}
                    day={res.day}
                    className={i !== 7 ? "p-1 " : ""}
                    sortedEventsDaySlotArray={sortedEventsDaySlotArray}
                  />
                </Fragment>
              ))}
            </div>
          </div>
          <div>
            <CalendarScrollToBottomButton
              isInDarkMode={isInDarkMode}
              scrollToBottom={scrollToBottom}
            />
          </div>
        </div>
      }
    />
  );
};

export default Calendar;
