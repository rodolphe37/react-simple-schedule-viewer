import { convertH2M, rangebyFifteenMinutes } from "../utils/helpers";
import CellEvent from "./CellEvent";
import HoursGuidelines from "./HoursGuidelines";
import { CellProps, TEventToDisplay } from "../models/models";
import eventIdToDIsplayAtom from "../../../../globalStates/atoms/eventIdToDisplayAtom";
import { EventTypes } from "../../types";
import React from "react";
import { useAtom } from "jotai";

const Cell = ({
  day,
  className,
  scrollRef,
  sortedEventsDaySlotArray,
  isInDarkMode,
  eventTypeData,
  locale,
  modalContent,
  scheduleIdentifier,
  events,
  colorCellByEvents,
  eventsTextColor,
  eventsName,
  eventsNameUs,
}: CellProps) => {
  const [eventIdToDisplay, setEventIdToDisplay] = useAtom(eventIdToDIsplayAtom);

  const eventTypesByScheduleId = events?.filter(
    (res) => res.id === scheduleIdentifier
  );

  return (
    <div
      className={`  flex flex-col gap-1 min-h-[120px] ${className} relative`}
    >
      <div>
        {rangebyFifteenMinutes.map((hour) => {
          const mins = convertH2M(hour);
          return (
            <div key={hour} className="relative">
              <div id={hour} className="  flex-col">
                <HoursGuidelines mins={mins} />
              </div>
              <div className=" w-full h-auto">
                {sortedEventsDaySlotArray &&
                  sortedEventsDaySlotArray?.map((result, id) =>
                    result.time_slot.map((timeEvent, idx) => {
                      const startTime = timeEvent.start;
                      return result.day === day && startTime === mins ? (
                        <div
                          ref={
                            idx === 1 ||
                            (idx === 0 &&
                              timeEvent.instruction !== EventTypes.EVENT_TYPE_6)
                              ? scrollRef
                              : null
                          }
                          className="absolute w-full top-0"
                          key={id}
                        >
                          <p>
                            {idx === 1 &&
                            timeEvent.instruction !== EventTypes.EVENT_TYPE_6
                              ? "There is a problem with you events, check your event array"
                              : null}
                          </p>
                          <CellEvent
                            eventsNameUs={eventsNameUs}
                            eventsName={eventsName}
                            eventsTextColor={eventsTextColor}
                            colorCellByEvents={colorCellByEvents}
                            eventArray={eventTypesByScheduleId}
                            scheduleIdentifier={scheduleIdentifier}
                            modalContent={modalContent}
                            locale={locale}
                            eventTypeData={eventTypeData}
                            isInDarkMode={isInDarkMode}
                            eventIdToDisplay={eventIdToDisplay!}
                            timeEvent={timeEvent}
                            timeEventId={idx}
                            day={result.day}
                            startTime={startTime}
                            events={result}
                          />
                        </div>
                      ) : null;
                    })
                  )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cell;
