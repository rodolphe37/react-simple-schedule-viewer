"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const useEventNamesController = ({ eventsName, eventsNameUs, }) => {
    const eventInstructionNamesFr = {
        eventType_1: `${eventsName?.eventType_1}`,
        eventType_2: `${eventsName?.eventType_2}`,
        eventType_3: `${eventsName?.eventType_3}`,
        eventType_4: `${eventsName?.eventType_4}`,
        eventType_5: `${eventsName?.eventType_5}`,
        eventType_6: `${eventsName?.eventType_6}`,
        eventType_7: `${eventsName?.eventType_7}`,
    };
    const eventInstructionNameFr = (str) => {
        return eventInstructionNamesFr[str];
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
    const eventInstructionNameUs = (str) => {
        return eventsNameUs !== undefined
            ? eventInstructionNamesUs[str]
            : eventInstructionNamesFr[str];
    };
    return {
        eventInstructionNameFr,
        eventInstructionNamesFr,
        eventInstructionNameUs,
        eventInstructionNamesUs,
    };
};
exports.default = useEventNamesController;
