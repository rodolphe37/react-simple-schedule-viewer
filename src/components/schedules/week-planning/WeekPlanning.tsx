import { useState } from "react";
import { EventType, TEventToDisplay } from "./models/models";
import Calendar from "./components/Calendar";
import eventIdToDIsplayAtom from "../../../globalStates/atoms/eventIdToDisplayAtom";
import { useRecoilState } from "recoil";
import { getSchedulesByEventPlaceIdResponse } from "../../../entities/schedules";
import { TContentForModal, TeventsName, TeventTypeData } from "../types";
import React from "react";

const WeekPlanning = ({
  scheduleIdentifier,
  scheduleByEventPlace,
  weekStartsOn,
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
}: {
  scheduleIdentifier?: string;
  scheduleByEventPlace: getSchedulesByEventPlaceIdResponse;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  isInDarkMode?: boolean;
  eventTypeData: TeventTypeData;
  locale: string;
  modalContent?: TContentForModal;
  withDays?: boolean;
  colorCellByEvents: Omit<typeof eventTypeData, "eventPlace_id">;
  eventsTextColor: Omit<typeof eventTypeData, "eventPlace_id">;
  eventsName?: TeventsName;
  eventsNameUs?: TeventsName;
  isInCalendarType: string | undefined;
}) => {
  const [, setEventIdToDisplay] =
    useRecoilState<TEventToDisplay>(eventIdToDIsplayAtom);
  const [events, setEvents] = useState<EventType[] | undefined>();

  if (events === undefined && scheduleByEventPlace) {
    setEvents(scheduleByEventPlace?.schedules);
  }

  return (
    <main
      onMouseLeave={() => {
        setEventIdToDisplay({
          day: undefined,
          id: undefined,
          startTime: undefined,
          endTime: undefined,
        });
      }}
      className={`h-full pl-4 pr-4 pb-4 mx-auto ${
        isInDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <Calendar
        isInCalendarType={isInCalendarType}
        eventsNameUs={eventsNameUs}
        eventsName={eventsName}
        eventsTextColor={eventsTextColor}
        colorCellByEvents={colorCellByEvents}
        withDays={withDays}
        modalContent={modalContent}
        locale={locale}
        eventTypeData={eventTypeData}
        isInDarkMode={isInDarkMode!}
        scheduleIdentifier={scheduleIdentifier!}
        weekStartsOn={weekStartsOn}
        events={events}
      />
    </main>
  );
};

export default WeekPlanning;
