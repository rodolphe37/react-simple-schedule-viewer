import { TeventsName } from "../../types";

const useEventNamesController = ({
  eventsName,
  eventsNameUs,
}: {
  eventsName?: TeventsName;
  eventsNameUs?: TeventsName;
}) => {
  const eventInstructionNamesFr = {
    eventType_1: `${eventsName?.eventType_1}`,
    eventType_2: `${eventsName?.eventType_2}`,
    eventType_3: `${eventsName?.eventType_3}`,
    eventType_4: `${eventsName?.eventType_4}`,
    eventType_5: `${eventsName?.eventType_5}`,
    eventType_6: `${eventsName?.eventType_6}`,
    eventType_7: `${eventsName?.eventType_7}`,
  };

  const eventInstructionNameFr = (str: string) => {
    return eventInstructionNamesFr[str as keyof typeof eventInstructionNamesFr];
  };
  const eventInstructionNamesUs = {
    eventType_1: `${eventsNameUs?.eventType_1}`,
    eventType_2: `${eventsNameUs?.eventType_2}`,
    eventType_3: `${eventsNameUs?.eventType_3}`,
    eventType_4: `${eventsNameUs?.eventType_4}`,
    eventType_5: `${eventsNameUs?.eventType_5}`,
    eventType_6: `${eventsNameUs?.eventType_6}`,
    eventType_7: `${eventsNameUs?.eventType_7}`,
  };

  const eventInstructionNameUs = (str: string) => {
    return eventsNameUs !== undefined
      ? eventInstructionNamesUs[str as keyof typeof eventInstructionNamesUs]
      : eventInstructionNamesFr[str as keyof typeof eventInstructionNamesFr];
  };

  return {
    eventInstructionNameFr,
    eventInstructionNamesFr,
    eventInstructionNameUs,
    eventInstructionNamesUs,
  };
};

export default useEventNamesController;
