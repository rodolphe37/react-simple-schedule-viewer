import { TEventToDisplay } from "../models/models";
import { convertH2M, formatTime } from "../utils/helpers";
import React from "react";

const HoursCell = ({
  hour,
  eventIdToDisplay,
  isInDarkMode,
  isInFrench,
}: {
  hour: string;
  eventIdToDisplay: TEventToDisplay;
  isInDarkMode?: boolean;
  isInFrench: boolean;
}) => {
  return (
    <div
      style={hour.includes(":00") ? {} : { display: "none" }}
      className=" hours-column relative border-t w-full items-center justify-start border-slate-300 flex flex-col gap-1 "
    >
      <p className={` ${isInDarkMode ? "text-gray-200" : "text-gray-700"}`}>
        {hour}
      </p>
      <div>
        {eventIdToDisplay.startTime === convertH2M(hour) ? (
          <>
            <p
              style={{
                fontSize: "0.6rem",
                position: "absolute",
                top: "0.2rem",
                color: "#4E80EE",
                fontWeight: "bold",
                left: 0,
                opacity: isInFrench ? 1 : 0,
              }}
            >
              {formatTime(eventIdToDisplay.startTime)}
            </p>
            <span
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#4E80EE",
                position: "absolute",
                zIndex: 4,
                left: 0,
                top: 0,
                opacity: isInFrench ? 1 : 0,
              }}
            />
          </>
        ) : null}
        {eventIdToDisplay.endTime === convertH2M(hour) &&
        eventIdToDisplay.endTime !== 1440 ? (
          <>
            <p
              style={{
                fontSize: "0.6rem",
                position: "absolute",
                fontWeight: "bold",
                top: "0.2rem",
                color: "#4E80EE",
                left: 0,
                opacity: isInFrench ? 1 : 0,
              }}
            >
              {formatTime(eventIdToDisplay.endTime)}
            </p>
            <span
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#4E80EE",
                position: "absolute",
                left: 0,
                top: 0,
                opacity: isInFrench ? 1 : 0,
                zIndex: 4,
              }}
            />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default HoursCell;
