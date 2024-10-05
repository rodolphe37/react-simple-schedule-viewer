import React, { Fragment } from "react";
import "./assets/css/index.css"
import "./assets/css/index-schedule.css";
import "./assets/css/react-simple-calendar-viewer.css";
import "./assets/css/Label.module.css";
import "./assets/css/SelectBox.css";
import "./assets/css/customSelect.css";
import SchedulesLayout from "./components/layout/SchedulesLayout";
import { TeventsName } from "./components/schedules/types";

function Schedule({
  scheduleByEventPlace = { schedules: [] },
  weekStartsOn = 0,
  isInDarkMode = false,
  colorCellByEvents = { eventType_1: "", eventType_6: "" },
  eventsTextColor = { eventType_1: "", eventType_6: "" },
  locale = "fr",
  eventsNameUs = { eventType_1: "", eventType_6: "" },
  eventsName = { eventType_1: "", eventType_6: "" },
  eventTypeData = { eventType_1: "", eventType_6: "" },
  modalContent = [],
  withDays = false,
  withList = false,
  withListButtonName = "",
  withListButtonNameUs = "",
  withListReturnButton = false,
}: {
  scheduleByEventPlace: {
    schedules: {
      id: string;
      title: string;
      type: string;
      day_slot_set: {
        days: number[];
        time_slot: {
          start: number;
          instruction: string;
        }[];
      }[];
    }[];
  };
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  isInDarkMode: boolean;
  colorCellByEvents: Omit<typeof eventTypeData, "eventPlace_id">;
  eventsTextColor: Omit<typeof eventTypeData, "eventPlace_id">;
  locale: string;
  eventsName?: TeventsName;
  eventsNameUs?: TeventsName;
  eventTypeData: {
    eventPlace_id?: string;
    eventType_1: number | string;
    eventType_2?: number | string;
    eventType_3?: number | string;
    eventType_4?: number | string;
    eventType_5?: number | string;
    eventType_6: number | string;
    eventType_7?: number | string;
  };

  modalContent?: {
    id: string;
    day: number;
    eventType: string;
    startTime: number;
    eventTitle: string;
    contentModal: JSX.Element;
  }[];
  withDays?: boolean;
  withList?: boolean;
  // withLegend?: boolean;
  withListButtonName?: string;
  withListButtonNameUs?: string;
  withListReturnButton?: boolean;
}) {
  return (
    <Fragment>
      <SchedulesLayout
        scheduleByEventPlace={scheduleByEventPlace}
        weekStartsOn={weekStartsOn}
        isInDarkMode={isInDarkMode}
        colorCellByEvents={colorCellByEvents}
        eventsTextColor={eventsTextColor}
        locale={locale}
        eventsNameUs={eventsNameUs}
        eventsName={eventsName}
        eventTypeData={eventTypeData}
        modalContent={modalContent}
        withDays={withDays}
        withList={withList}
        withListButtonName={withListButtonName}
        withListButtonNameUs={withListButtonNameUs}
        withListReturnButton={withListReturnButton}
      />
    </Fragment>
  );
}

export default Schedule;
