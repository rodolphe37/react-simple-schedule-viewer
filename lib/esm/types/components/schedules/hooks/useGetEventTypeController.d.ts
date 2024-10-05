import { TeventsName, TeventTypeData } from "../types";
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
declare const useGetEventTypeController: (eventTypeData: TeventTypeData, locale: string, eventsName?: TeventsName, eventsNameUs?: TeventsName) => {
    errorResponse: ErrorResponse;
    eventType: eventTypeArray;
    error: boolean;
    eventWithNewNames: eventWithNewNamesProps;
};
export default useGetEventTypeController;
//# sourceMappingURL=useGetEventTypeController.d.ts.map