
import { Navigate, Route, Routes} from "react-router-dom";
import SchedulesDetails from "../../components/schedules/SchedulesDetails";
import {Suspense, useLayoutEffect } from "react";
import { bgGray200_700Color } from "../../utils/style";
import ScheduleViewWrapper from "../schedules/ScheduleViewWrapper";
import { ErrorBoundary } from "react-error-boundary";
import { Loader } from "../../ui/components/Loader";
import ErrorFallback from "../../ui/components/ErrorFallBack";
import { RecoilRoot } from "recoil";
// import ParametersDetails from "../legende-color/ParametersDetails";
import { TeventsName } from "../schedules/types";
import React from "react";

 const SchedulesLayout = ({
  scheduleByEventPlace,
  weekStartsOn,
  isInDarkMode,
  withList,
  // withLegend = false,
  eventTypeData,
  locale,
  modalContent,
  withDays,
  colorCellByEvents,
  eventsTextColor,
  eventsName,
  eventsNameUs,
  withListButtonName,
  withListButtonNameUs,
  withListReturnButton,
}: {
  scheduleByEventPlace: {
    schedules: {
      id: string;
      title: string;
      type: string;
      day_slot_set: {
        days: number[];
        time_slot: {
          start: number;
          instruction: string;
        }[];
      }[];
    }[];
  };
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  isInDarkMode: boolean;
  colorCellByEvents: Omit<typeof eventTypeData, "eventPlace_id">;
  eventsTextColor: Omit<typeof eventTypeData, "eventPlace_id">;
  locale: "fr" | "en";
  eventsName?: TeventsName;
  eventsNameUs?: TeventsName;
  eventTypeData: {
    eventPlace_id?: string;
    eventType_1: number | string;
    eventType_2?: number | string;
    eventType_3?: number | string;
    eventType_4?: number | string;
    eventType_5?: number | string;
    eventType_6: number | string;
    eventType_7?: number | string;
  };

  modalContent?: {
    id: string;
    day: number;
    eventType: string;
    startTime: number;
    eventTitle: string;
    contentModal: JSX.Element;
  }[];
  withDays?: boolean;
  withList?: boolean;
  // withLegend?: boolean;
  withListButtonName?: string;
  withListButtonNameUs?: string;
  withListReturnButton?: boolean;
}) => {
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <RecoilRoot>
      <Routes>
        <Route
          path={`/`}
          element={
            <Suspense
              fallback={
                <div
                  className={`w-full flex flex-col justify-center items-center h-screen overflow-y-hidden ${bgGray200_700Color}`}
                  style={{ transform: "scale(3)" }}
                >
                  <Loader />
                </div>
              }
            >
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                {withList ? (
                  <SchedulesDetails
                    withListReturnButton={withListReturnButton}
                    withListButtonNameUs={withListButtonNameUs}
                    withListButtonName={withListButtonName}
                    isDarkMode={isInDarkMode}
                    locale={locale}
                    scheduleByEventPlace={scheduleByEventPlace}
                  />
                ) : (
                  <ScheduleViewWrapper
                    eventsNameUs={eventsNameUs}
                    eventsName={eventsName}
                    eventsTextColor={eventsTextColor}
                    colorCellByEvents={colorCellByEvents}
                    withDays={withDays}
                    locale={locale}
                    eventTypeData={eventTypeData}
                    withList={withList}
                    isInDarkMode={isInDarkMode}
                    weekStartsOn={weekStartsOn}
                    scheduleByEventPlace={scheduleByEventPlace}
                    modalContent={modalContent}
                  />
                )}
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route
          path={`/:scheduleId`}
          element={
            <Suspense
              fallback={
                <div
                  className={`w-full flex flex-col justify-center items-center h-screen overflow-y-hidden ${bgGray200_700Color}`}
                  style={{ transform: "scale(3)" }}
                >
                  <Loader />
                </div>
              }
            >
              <ErrorBoundary FallbackComponent={ErrorFallback}>
                {/* {withLegend ? (
                  <Fragment>
                    <ParametersDetails
                      modalContent={modalContent}
                      eventsNameUs={eventsNameUs}
                      eventsName={eventsName}
                      eventsTextColor={eventsTextColor}
                      colorCellByEvents={colorCellByEvents}
                      locale={locale}
                      isInDarkMode={isInDarkMode}
                      eventTypeData={eventTypeData}
                      scheduleByEventPlace={scheduleByEventPlace}
                    />
                    <ScheduleViewWrapper
                      eventsNameUs={eventsNameUs}
                      eventsName={eventsName}
                      eventsTextColor={eventsTextColor}
                      colorCellByEvents={colorCellByEvents}
                      withDays={withDays}
                      locale={locale}
                      eventTypeData={eventTypeData}
                      withList={withList}
                      isInDarkMode={isInDarkMode}
                      weekStartsOn={weekStartsOn}
                      scheduleByEventPlace={scheduleByEventPlace}
                      modalContent={modalContent}
                    />
                  </Fragment>
                ) : ( */}
                  <ScheduleViewWrapper
                    eventsNameUs={eventsNameUs}
                    eventsName={eventsName}
                    eventsTextColor={eventsTextColor}
                    colorCellByEvents={colorCellByEvents}
                    withDays={withDays}
                    locale={locale}
                    eventTypeData={eventTypeData}
                    withList={withList}
                    isInDarkMode={isInDarkMode}
                    weekStartsOn={weekStartsOn}
                    scheduleByEventPlace={scheduleByEventPlace}
                    modalContent={modalContent}
                  />
                {/* )} */}
              </ErrorBoundary>
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </RecoilRoot>
  );
};
export default SchedulesLayout;