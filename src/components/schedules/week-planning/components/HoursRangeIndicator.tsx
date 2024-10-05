import React from "react";
import { LanguageKeys } from "../../../../translations/enum";
import { TEventToDisplay } from "../models/models";
import {
  convertH2M,
  formatTime,
  rangebyFifteenMinutesUs,
} from "../utils/helpers";
import HoursCell from "./HoursCell";

type THoursRangeIndicatorProps = {
  rangebyFifteenMinutes: string[];
  eventIdToDisplay: TEventToDisplay;
  isInDarkMode?: boolean;
  locale: "fr" | "en";
};

const HoursRangeIndicator = ({
  rangebyFifteenMinutes,
  eventIdToDisplay,
  isInDarkMode,
  locale,
}: THoursRangeIndicatorProps) => {
  const isInFrench = locale === "fr" ? true : false;

  return (
    <div className=" relative  border-r border-slate-600 ">
      {locale == "fr" ? (
        <div className=" absolute w-full">
          {rangebyFifteenMinutes.map((minute, i) => (
            <div style={{ lineHeight: "0.746em" }} key={i}>
              <p style={{ fontSize: "0.6rem", opacity: 0 }}>{minute}</p>
              <div>
                {!minute.includes(":00") &&
                (eventIdToDisplay.endTime === convertH2M(minute) ||
                  eventIdToDisplay.startTime === convertH2M(minute)) ? (
                  <>
                    <p
                      className={
                        !minute.includes(":00") &&
                        (eventIdToDisplay.endTime === convertH2M(minute) ||
                          eventIdToDisplay.startTime === convertH2M(minute))
                          ? "opacity-1 text-blue-600 font-semibold  "
                          : " opacity-[0]"
                      }
                      style={{ fontSize: "0.6rem", textAlign: "left" }}
                    >
                      {minute}
                    </p>
                    <span
                      className="-mt-[1.2rem]"
                      style={{
                        width: "100%",
                        height: "2px",
                        backgroundColor: "#4E80EE",
                        display: "block",
                      }}
                    />
                  </>
                ) : null}
              </div>
            </div>
          ))}
          {eventIdToDisplay.endTime === 1440 ? (
            <p
              className="text-blue-600 font-semibold text-left"
              style={{ fontSize: "0.6rem", marginTop: "-0.3rem" }}
            >
              {formatTime(1440)}
            </p>
          ) : null}
        </div>
      ) : null}

      <div>
        {locale === LanguageKeys.fr
          ? rangebyFifteenMinutes.map((hour, i) => (
              <HoursCell
                isInFrench={isInFrench}
                isInDarkMode={isInDarkMode}
                key={i}
                hour={hour}
                eventIdToDisplay={eventIdToDisplay}
              />
            ))
          : rangebyFifteenMinutesUs.map((hour, i) => (
              <HoursCell
                isInFrench={isInFrench}
                isInDarkMode={isInDarkMode}
                key={i}
                hour={hour}
                eventIdToDisplay={eventIdToDisplay}
              />
            ))}
        {locale === "fr" ? (
          <div
            className={`flex items-center justify-center -mt-3 ${
              isInDarkMode ? "text-gray-200" : "text-gray-700"
            } `}
          >
            00:00
          </div>
        ) : null}
      </div>
      {locale === "fr" && eventIdToDisplay.endTime === 1440 ? (
        <>
          <span
            style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#4E80EE",
              display: "block",
              marginTop: "-0.7rem",
            }}
          />
        </>
      ) : null}
    </div>
  );
};

export default HoursRangeIndicator;
