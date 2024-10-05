import { TeventTypeData } from "../types";
declare const useDispatchColorsByEvent: ({ colorCellByEvents, eventsTextColor, }: {
    colorCellByEvents: Omit<TeventTypeData, "eventPlace_id">;
    eventsTextColor: Omit<TeventTypeData, "eventPlace_id">;
}) => {
    colorCellByTemp: (event: string) => string | number | undefined;
    textEventColorInCell: (event: string) => string | number | undefined;
};
export default useDispatchColorsByEvent;
//# sourceMappingURL=useDispatchColorsByEvent.d.ts.map