import { Days, TeventsName } from "../../types";
import {
  capitalizeFirstLetter,
  formatTime,
  daysOfWeekNameFr,
  daysOfWeekNameUs,
} from "../utils/helpers";
import CrossIcon from "../../../../ui/icons/CrossIcon";
import useEventNamesController from "../hooks/useEventNamesController";
import React from "react";

type TCellEventsInfoModalProps = {
  numbersForCalendarType: string;
  ModalRef: React.RefObject<HTMLDivElement>;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  currentEventType:
    | {
        key: string;
        value: string | number | null;
      }
    | undefined;
  startTime: number;
  endTime: number;
  day: number;
  eventInstructionTextWithoutWhiteSpace: string;
  isInDarkMode?: boolean;
  locale: string;
  modalContentForDisplaying:
    | {
        id: string;
        day: number;
        eventType: string;
        startTime: number;
        eventTitle: string;
        contentModal: JSX.Element;
      }
    | undefined;
  eventByEventType: string | undefined;
  isFrenchDegree: " °C" | " °F";
  eventsName?: TeventsName;
  eventsNameUs?: TeventsName;
};

const CellEventsInfosModal = ({
  isFrenchDegree,
  numbersForCalendarType,
  ModalRef,
  setIsModalOpen,
  currentEventType,
  startTime,
  endTime,
  day,
  eventInstructionTextWithoutWhiteSpace,
  isInDarkMode,
  locale,
  modalContentForDisplaying,
  eventByEventType,
  eventsName,
  eventsNameUs,
}: TCellEventsInfoModalProps) => {
  const daySelected = capitalizeFirstLetter(Days[day]);
  const { eventInstructionNameFr, eventInstructionNameUs } =
    useEventNamesController({ eventsName, eventsNameUs });

  return (
    <div
      className={`fixed w-screen h-screen top-0 left-0 z-[9999] flex items-center justify-center ${
        isInDarkMode ? "bg-gray-700/90" : "bg-gray-400/80"
      } bg-opacity-50 backdrop-blur-sm  transition-all overflow-y-auto`}
    >
      <div
        ref={ModalRef}
        className={`absolute mx-5 w-full md:max-w-[450px] ${
          isInDarkMode ? "bg-gray-900" : "bg-gray-100"
        } border border-slate-300 rounded-lg flex flex-col  z-50 justify-center`}
      >
        <header
          className={`min-h-6 px-4 rounded-t-md  w-full flex items-center justify-between ${
            isInDarkMode ? "bg-gray-400/80" : "bg-blue-500"
          } text-white`}
        >
          <h1 className="text-center font-semibold mt-4 mb-4 ">
            {locale === "fr" ? "Détails de l'événement" : "Event details"}
          </h1>
          <div
            onClick={() => setIsModalOpen(false)}
            className="flex items-center cursor-pointer"
          >
            <p className="mr-2">{locale === "fr" ? "Annuler" : "Cancel"}</p>
            <CrossIcon fill="currentColor" />
          </div>
        </header>

        <div className="flex flex-col items-center justify-start p-4">
          <div className="flex flex-row gap-4 items-center w-[65%] justify-between">
            <h4
              className={`text-left font-medium ${
                isInDarkMode ? "text-white" : "text-black"
              }`}
            >
              {eventByEventType === "event"
                ? modalContentForDisplaying?.eventTitle
                : locale === "fr"
                ? eventInstructionNameFr(eventInstructionTextWithoutWhiteSpace)
                : eventInstructionNameUs(eventInstructionTextWithoutWhiteSpace)}
              :
            </h4>
            <p className={`${isInDarkMode ? "text-white" : "text-black"}`}>
              {eventByEventType === "event"
                ? currentEventType?.value
                : eventByEventType === "temp"
                ? numbersForCalendarType + isFrenchDegree
                : null}
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center w-[65%] justify-between">
            <h4
              className={`text-left font-medium ${
                isInDarkMode ? "text-white" : "text-black"
              }`}
            >
              {locale === "fr" ? "Début :" : "Start time:"}
            </h4>
            <p className={`${isInDarkMode ? "text-white" : "text-black"}`}>
              {formatTime(startTime)}
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center w-[65%] justify-between">
            <h4
              className={`text-left font-medium ${
                isInDarkMode ? "text-white" : "text-black"
              }`}
            >
              {locale === "fr" ? "Fin :" : "End time:"}
            </h4>
            <p className={`${isInDarkMode ? "text-white" : "text-black"}`}>
              {formatTime(endTime)}
            </p>
          </div>
          <div className="flex flex-row gap-4 items-center w-[65%] justify-between">
            <h4
              className={`text-left font-medium ${
                isInDarkMode ? "text-white" : "text-black"
              }`}
            >
              {locale === "fr" ? "Jour :" : "Day:"}
            </h4>
            <div className={`${isInDarkMode ? "text-white" : "text-black"}`}>
              {locale === "fr"
                ? daysOfWeekNameFr(daySelected)
                : daysOfWeekNameUs(daySelected)}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          ></div>
          {modalContentForDisplaying?.contentModal}
        </div>
      </div>
    </div>
  );
};

export default CellEventsInfosModal;
