import { TeventsName } from "../../types";
declare const useEventNamesController: ({ eventsName, eventsNameUs, }: {
    eventsName?: TeventsName | undefined;
    eventsNameUs?: TeventsName | undefined;
}) => {
    eventInstructionNameFr: (str: string) => string;
    eventInstructionNamesFr: {
        eventType_1: string;
        eventType_2: string;
        eventType_3: string;
        eventType_4: string;
        eventType_5: string;
        eventType_6: string;
        eventType_7: string;
    };
    eventInstructionNameUs: (str: string) => string;
    eventInstructionNamesUs: {
        eventType_1: string;
        eventType_2: string;
        eventType_3: string;
        eventType_4: string;
        eventType_5: string;
        eventType_6: string;
        eventType_7: string;
    };
};
export default useEventNamesController;
//# sourceMappingURL=useEventNamesController.d.ts.map