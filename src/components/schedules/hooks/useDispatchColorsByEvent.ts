import { EventTypes, TeventTypeData } from "../types";

const useDispatchColorsByEvent = ({
  colorCellByEvents,
  eventsTextColor,
}: {
  colorCellByEvents:Omit<TeventTypeData, "eventPlace_id">;
  eventsTextColor: Omit<TeventTypeData, "eventPlace_id">
}) => {
  type TColorByEventProps = string;

  const colorCellByTemp = (event: TColorByEventProps) =>
    event === EventTypes.EVENT_TYPE_1
      ? colorCellByEvents.eventType_1
      : event === EventTypes.EVENT_TYPE_2
      ? colorCellByEvents.eventType_2
      : event === EventTypes.EVENT_TYPE_3
      ? colorCellByEvents.eventType_3
      : event === EventTypes.EVENT_TYPE_4
      ? colorCellByEvents.eventType_4
      : event === EventTypes.EVENT_TYPE_5
      ? colorCellByEvents.eventType_5
      : event === EventTypes.EVENT_TYPE_6
      ? colorCellByEvents.eventType_6
      : event === EventTypes.EVENT_TYPE_7
      ? colorCellByEvents.eventType_7
      : "";

  const textEventColorInCell = (event: TColorByEventProps) =>
    event === EventTypes.EVENT_TYPE_1
      ? eventsTextColor.eventType_1
      : event === EventTypes.EVENT_TYPE_2
      ? eventsTextColor.eventType_2
      : event === EventTypes.EVENT_TYPE_3
      ? eventsTextColor.eventType_3
      : event === EventTypes.EVENT_TYPE_4
      ? eventsTextColor.eventType_4
      : event === EventTypes.EVENT_TYPE_5
      ? eventsTextColor.eventType_5
      : event === EventTypes.EVENT_TYPE_6
      ? eventsTextColor.eventType_6
      : event === EventTypes.EVENT_TYPE_7
      ? eventsTextColor.eventType_7
      : "";

  return { colorCellByTemp, textEventColorInCell };
};

export default useDispatchColorsByEvent;
