import { useMemo, useState } from "react";
import { EventTypes, TeventsName, TeventTypeData } from "../types";
import useEventNamesController from "../week-planning/hooks/useEventNamesController";

type ErrorResponse = {
  error_code: number | null;
  message: string;
};
export type eventTypeArray = {
  key: string;
  value: string | number | null;
}[];

type eventWithNewNamesProps = {
  id: number;
  key: string;
  originalKey: string;
  value: number | string | null;
}[];

const useGetEventTypeController = (
  eventTypeData: TeventTypeData,
  locale: string,
  eventsName?: TeventsName,
  eventsNameUs?: TeventsName
) => {
  const error = eventTypeData === undefined;

  const eventType: eventTypeArray = useMemo(() => [], []);
  let errorResponse: ErrorResponse = { error_code: null, message: "" };

  if (!error && eventTypeData) {
    for (const [key, value] of Object.entries(eventTypeData!)) {
      if (value) {
        eventType.push({ key: key, value: value === null ? `_` : value });
      }
    }
  } else if (error) {
    errorResponse = {
      error_code: 404,
      message:
        locale === "fr"
          ? "Aucune bibliothèque de type d'évenements n'existe"
          : "No library of event types exists",
    };
  }
  const { eventInstructionNamesFr, eventInstructionNamesUs } =
    useEventNamesController({ eventsName, eventsNameUs });
  const [eventWithNewNames] = useState<eventWithNewNamesProps>([]);
  const numberOfTemperatures = 7;

  const orderedTemperatures = useMemo(
    () => () => {
      eventType.filter((res) => {
        switch (res.key) {
          case EventTypes.EVENT_TYPE_1:
            eventWithNewNames.push({
              id: 0,
              key:
                locale === "fr"
                  ? eventInstructionNamesFr.eventType_1
                  : eventInstructionNamesUs.eventType_1,
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.EVENT_TYPE_2:
            eventWithNewNames.push({
              id: 1,
              key:
                locale === "fr"
                  ? eventInstructionNamesFr.eventType_2
                  : eventInstructionNamesUs.eventType_2,
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.EVENT_TYPE_3:
            eventWithNewNames.push({
              id: 2,
              key:
                locale === "fr"
                  ? eventInstructionNamesFr.eventType_3
                  : eventInstructionNamesUs.eventType_3,
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.EVENT_TYPE_4:
            eventWithNewNames.push({
              id: 3,
              key:
                locale === "fr"
                  ? eventInstructionNamesFr.eventType_4
                  : eventInstructionNamesUs.eventType_4,
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.EVENT_TYPE_5:
            eventWithNewNames.push({
              id: 4,
              key:
                locale === "fr"
                  ? eventInstructionNamesFr.eventType_5
                  : eventInstructionNamesUs.eventType_5,
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.EVENT_TYPE_6:
            eventWithNewNames.push({
              id: 5,
              key:
                locale === "fr"
                  ? eventInstructionNamesFr.eventType_6
                  : eventInstructionNamesUs.eventType_6,
              originalKey: res.key,
              value: res.value,
            });
            break;
          case EventTypes.EVENT_TYPE_7:
            eventWithNewNames.push({
              id: 6,
              key:
                locale === "fr"
                  ? eventInstructionNamesFr.eventType_7
                  : eventInstructionNamesUs.eventType_7,
              originalKey: res.key,
              value: res.value,
            });
            break;

          default:
            break;
        }

        return eventWithNewNames.sort(function (a, b) {
          return a.id - b.id;
        });
      });
    },
    [
      eventType,
      eventWithNewNames,
      locale,
      eventInstructionNamesFr,
      eventInstructionNamesUs,
    ]
  );

  if (eventWithNewNames?.length < numberOfTemperatures) {
    orderedTemperatures();
  }

  return {
    errorResponse,
    eventType,
    error,
    eventWithNewNames,
  };
};

export default useGetEventTypeController;
