import { ParametersContainerStyle } from "../../utils/style";
import useWindowDimensions from "../../hooks/useGetWindowDimensions";
import useGetEventTypeController from "../schedules/hooks/useGetEventTypeController";
import InstructionsList from "./InstructionsList";
import { TeventsName, TeventTypeData } from "../schedules/types";
import { getSchedulesByEventPlaceIdResponse } from "../../entities/schedules";
import { useParams } from "react-router-dom";
import React from "react";

const ParametersDetails = ({
  eventTypeData,
  isInDarkMode,
  locale,
  colorCellByEvents,
  eventsTextColor,
  eventsName,
  eventsNameUs,
  scheduleByEventPlace,
  modalContent,
}: {
  eventTypeData: TeventTypeData;
  isInDarkMode: boolean;
  locale: "fr" | "en";
  colorCellByEvents: Omit<typeof eventTypeData, "eventPlace_id">;
  eventsTextColor: Omit<typeof eventTypeData, "eventPlace_id">;
  eventsName?: TeventsName;
  eventsNameUs?: TeventsName;
  scheduleByEventPlace: getSchedulesByEventPlaceIdResponse;
  modalContent:
    | {
        id: string;
        day: number;
        eventType: string;
        startTime: number;
        eventTitle: string;
        contentModal: JSX.Element;
      }[]
    | undefined;
}) => {
  const { width } = useWindowDimensions();
  const { scheduleId } = useParams<"scheduleId">();
  const { errorResponse, eventWithNewNames } = useGetEventTypeController(
    eventTypeData!,
    locale,
    eventsName,
    eventsNameUs
  );

  const scheduleTypeByScheduleId = scheduleByEventPlace.schedules.find(
    (res) => res.id === scheduleId
  )?.type;

  const modalContentManipulation = modalContent?.flatMap((res) => [
    { title: res.eventTitle, event: res.eventType },
  ]);
  const modalContentTitles = [...new Map(modalContentManipulation?.map(item => [item["title"], item])).values()];

  const newArrayForEventType = [
    {
      id: 0,
      key: modalContentTitles[0].title,
      originalKey: modalContentTitles[0].event,
      value: "",
    },
    {
      id: 1,
      key: modalContentTitles[1].title,
      originalKey: modalContentTitles[1].event,
      value: "",
    },
    {
      id: 2,
      key: modalContentTitles[2].title,
      originalKey: modalContentTitles[2].event,
      value: "",
    },
    {
      id: 3,
      key: modalContentTitles[3].title,
      originalKey: modalContentTitles[3].event,
      value: "",
    },
    {
      id: 4,
      key: modalContentTitles[4].title,
      originalKey: modalContentTitles[4].event,
      value: "",
    },
    {
      id: 5,
      key: modalContentTitles[5]?.title,
      originalKey: modalContentTitles[5]?.event,
      value: "",
    },
    {
      id: 6,
      key: modalContentTitles[6]?.title,
      originalKey: modalContentTitles[6]?.event,
      value: "",
    },
  ];

  console.log("newArrayForEventType", newArrayForEventType);
  console.log("eventWithNewNames", eventWithNewNames);
  // console.log("modalContent", modalContent);

  return (
    <div
      className="w-full -mt-28 pr-8 pl-4"
      style={ParametersContainerStyle(width)}
    >
      <div
        className={` p-8 flex items-center justify-center ${errorResponse.error_code === 404 ? "w-[35%]" : ""}`}
      >
        {errorResponse.error_code !== 404 && eventWithNewNames.length > 0 ? (
          <div
          style={{width:"fit-content", gap:20}}
            className={`card ${
              isInDarkMode ? "bg-gray-900" : "bg-slate-100"
            } p-2 rounded-lg w-auto flex flex-row flex-wrap justify-between`}
          >
            {scheduleTypeByScheduleId === "event"
              ? newArrayForEventType.filter((res)=> res.key !== undefined).map((result) => {
                  return (
                    <InstructionsList
                      scheduleTypeByScheduleId={scheduleTypeByScheduleId}
                      locale={locale}
                      eventsTextColor={eventsTextColor}
                      colorCellByEvents={colorCellByEvents}
                      key={result.id}
                      instruction={result}
                    />
                  );
                })
              : eventWithNewNames.filter((res)=> res.key !== undefined).map((result) => {
                  return (
                    <InstructionsList
                      scheduleTypeByScheduleId={scheduleTypeByScheduleId}
                      locale={locale}
                      eventsTextColor={eventsTextColor}
                      colorCellByEvents={colorCellByEvents}
                      key={result.id}
                      instruction={result}
                    />
                  );
                })}
          </div>
        ) : (
          <>
            <p>{errorResponse.message}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default ParametersDetails;
