import { SetterOrUpdater } from "recoil";
import { TContentForModal, TeventsName, TeventTypeData } from "../../types";

export interface EventType {
  id: string;
  title: string;
  type: string;
  day_slot_set: {
    days: number[];
    time_slot: { start: number; instruction: string }[];
  }[];
}
// eslint-disable-next-line @typescript-eslint/no-unused-expressions
[];

export interface CellEventProps {
  timeEvent: {
    start: number;
    instruction: string;
  };
  events: {
    day: number;
    time_slot: {
      start: number;
      instruction: string;
    }[];
  };
  timeEventId: number;
  startTime: number;
  day: number;
  eventIdToDisplay: TEventToDisplay;
  setEventIdToDisplay: SetterOrUpdater<TEventToDisplay>;
  isInDarkMode?: boolean;
  eventTypeData: TeventTypeData;
  locale: string;
  modalContent?: TContentForModal;
  scheduleIdentifier: string;
  eventArray: EventType[] | undefined;
  colorCellByEvents: Omit<TeventTypeData, "eventPlace_id">;
  eventsTextColor: Omit<TeventTypeData, "eventPlace_id">;
  eventsName?: TeventsName;
  eventsNameUs?: TeventsName;
}

export interface CellProps {
  day: number | null;
  className?: string;
  scrollRef: React.MutableRefObject<HTMLDivElement | null>;
  sortedEventsDaySlotArray:
    | {
        day: number;
        time_slot: {
          start: number;
          instruction: string;
        }[];
      }[]
    | undefined;
  isInDarkMode?: boolean;
  eventTypeData: TeventTypeData;
  locale: string;
  modalContent?: TContentForModal;
  scheduleIdentifier: string;
  events: EventType[] | undefined;
  colorCellByEvents: Omit<TeventTypeData, "eventPlace_id">;
  eventsTextColor: Omit<TeventTypeData, "eventPlace_id">;
  eventsName?: TeventsName;
  eventsNameUs?: TeventsName;
}

export type TEventToDisplay = {
  day: undefined | number;
  id: undefined | number;
  startTime: number | undefined;
  endTime: number | undefined;
};
