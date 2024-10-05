"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const types_1 = require("../types");
const useEventNamesController_1 = __importDefault(require("../week-planning/hooks/useEventNamesController"));
const useGetEventTypeController = (eventTypeData, locale, eventsName, eventsNameUs) => {
    const error = eventTypeData === undefined;
    const eventType = (0, react_1.useMemo)(() => [], []);
    let errorResponse = { error_code: null, message: "" };
    if (!error && eventTypeData) {
        for (const [key, value] of Object.entries(eventTypeData)) {
            if (value) {
                eventType.push({ key: key, value: value === null ? `_` : value });
            }
        }
    }
    else if (error) {
        errorResponse = {
            error_code: 404,
            message: locale === "fr"
                ? "Aucune bibliothèque de type d'évenements n'existe"
                : "No library of event types exists",
        };
    }
    const { eventInstructionNamesFr, eventInstructionNamesUs } = (0, useEventNamesController_1.default)({ eventsName, eventsNameUs });
    const [eventWithNewNames] = (0, react_1.useState)([]);
    const numberOfTemperatures = 7;
    const orderedTemperatures = (0, react_1.useMemo)(() => () => {
        eventType.filter((res) => {
            switch (res.key) {
                case types_1.EventTypes.EVENT_TYPE_1:
                    eventWithNewNames.push({
                        id: 0,
                        key: locale === "fr"
                            ? eventInstructionNamesFr.eventType_1
                            : eventInstructionNamesUs.eventType_1,
                        originalKey: res.key,
                        value: res.value,
                    });
                    break;
                case types_1.EventTypes.EVENT_TYPE_2:
                    eventWithNewNames.push({
                        id: 1,
                        key: locale === "fr"
                            ? eventInstructionNamesFr.eventType_2
                            : eventInstructionNamesUs.eventType_2,
                        originalKey: res.key,
                        value: res.value,
                    });
                    break;
                case types_1.EventTypes.EVENT_TYPE_3:
                    eventWithNewNames.push({
                        id: 2,
                        key: locale === "fr"
                            ? eventInstructionNamesFr.eventType_3
                            : eventInstructionNamesUs.eventType_3,
                        originalKey: res.key,
                        value: res.value,
                    });
                    break;
                case types_1.EventTypes.EVENT_TYPE_4:
                    eventWithNewNames.push({
                        id: 3,
                        key: locale === "fr"
                            ? eventInstructionNamesFr.eventType_4
                            : eventInstructionNamesUs.eventType_4,
                        originalKey: res.key,
                        value: res.value,
                    });
                    break;
                case types_1.EventTypes.EVENT_TYPE_5:
                    eventWithNewNames.push({
                        id: 4,
                        key: locale === "fr"
                            ? eventInstructionNamesFr.eventType_5
                            : eventInstructionNamesUs.eventType_5,
                        originalKey: res.key,
                        value: res.value,
                    });
                    break;
                case types_1.EventTypes.EVENT_TYPE_6:
                    eventWithNewNames.push({
                        id: 5,
                        key: locale === "fr"
                            ? eventInstructionNamesFr.eventType_6
                            : eventInstructionNamesUs.eventType_6,
                        originalKey: res.key,
                        value: res.value,
                    });
                    break;
                case types_1.EventTypes.EVENT_TYPE_7:
                    eventWithNewNames.push({
                        id: 6,
                        key: locale === "fr"
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
    }, [
        eventType,
        eventWithNewNames,
        locale,
        eventInstructionNamesFr,
        eventInstructionNamesUs,
    ]);
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
exports.default = useGetEventTypeController;
