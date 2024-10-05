import { getSchedulesByEventPlaceIdResponse } from "../../../entities/schedules";
import { TContentForModal, TeventsName, TeventTypeData } from "../types";
import WeekPlanning from "./WeekPlanning";
import React from "react";

const ScheduleView = ({
  isInCalendarType,
  scheduleId,
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
}: {
  isInCalendarType: string | undefined;
  scheduleId: string | undefined;
  scheduleByEventPlace: getSchedulesByEventPlaceIdResponse;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  isInDarkMode?: boolean;
  eventTypeData: TeventTypeData;
  locale: "fr" | "en";
  modalContent?: TContentForModal;
  withDays?: boolean;
  colorCellByEvents: Omit<typeof eventTypeData, "eventPlace_id">;
  eventsTextColor: Omit<typeof eventTypeData, "eventPlace_id">;
  eventsName?: TeventsName;
  eventsNameUs?: TeventsName;
}) => {
  return (
    <div className="w-full">
      <WeekPlanning
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
        weekStartsOn={weekStartsOn}
        scheduleByEventPlace={scheduleByEventPlace}
        scheduleIdentifier={scheduleId}
      />
    </div>
  );
};

export default ScheduleView;
