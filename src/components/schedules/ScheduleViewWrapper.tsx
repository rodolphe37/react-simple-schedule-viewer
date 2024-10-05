import { useLocation, useNavigate, useParams } from "react-router-dom";
import ScheduleView from "./week-planning/ScheduleView";
import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import { SelectOption } from "../../ui/selectBox";
import useWindowDimensions from "../../hooks/useGetWindowDimensions";
import BackArrowIcon from "../../ui/icons/BackArrowIcon";
import CustomSelect from "../../ui/customSelectComponent/CustomSelect";
import { TSelectedValueProps } from "../../ui/customSelectComponent/types";
import { getSchedulesByEventPlaceIdResponse } from "../../entities/schedules";
import { TContentForModal, TeventsName, TeventTypeData } from "./types";
import { today } from "./week-planning/utils/dateUtils";
import React from "react";

const ScheduleViewWrapper = ({
  scheduleByEventPlace,
  weekStartsOn,
  isInDarkMode,
  withList,
  eventTypeData,
  locale,
  modalContent,
  withDays,
  colorCellByEvents,
  eventsTextColor,
  eventsName,
  eventsNameUs,
}: {
  scheduleByEventPlace: getSchedulesByEventPlaceIdResponse;
  weekStartsOn: 0 | 1 | 2 | 3 | 4 | 5 | 6 | undefined;
  isInDarkMode: boolean;
  withList?: boolean;
  eventTypeData: TeventTypeData;
  locale: string;
  modalContent?: TContentForModal;
  withDays?: boolean;
  colorCellByEvents: Omit<typeof eventTypeData, "eventPlace_id">;
  eventsTextColor: Omit<typeof eventTypeData, "eventPlace_id">;
  eventsName?: TeventsName;
  eventsNameUs?: TeventsName;
}) => {
  const navigate = useNavigate();
  const { scheduleId } = useParams<"scheduleId">();
  const location = useLocation();
  const schedulesList = useMemo(
    () => (scheduleByEventPlace ? scheduleByEventPlace?.schedules : []),
    [scheduleByEventPlace]
  );
  const { height } = useWindowDimensions();
  const options: SelectOption[] = [
    ...schedulesList.map((sch) => ({ label: sch.title, value: sch.id })),
  ];
  const [value, setValue] = useState<string | null | undefined>();
  const [selectedValue, setSelectedValue] =
    useState<TSelectedValueProps | null>(null);
  const selectedScheduleId = schedulesList.find(
    (sched) => sched.id === scheduleId
  )?.id;
  const selectedScheduleTitle = schedulesList.find(
    (sched) => sched.id === scheduleId
  )?.title;

  const onChange = (newValue: string) => {
    setValue(newValue);
    sessionStorage.removeItem("isScrolled");
    navigate(`/schedule/${newValue}`, {
      replace: true,
    });
  };

  const isBadId =
    scheduleId !== undefined &&
    !schedulesList.flatMap((res) => res.id).includes(scheduleId);

  const firstElement = schedulesList.find((res) => res.id)?.id;

  useLayoutEffect(() => {
    if (!withList && firstElement && scheduleId === undefined) {
      navigate(`/schedule/${firstElement}`);
    }
    if (isBadId) {
      navigate("/");
      window.location.reload();
    }
  }, [navigate, schedulesList, withList, firstElement, isBadId, scheduleId]);

  useEffect(() => {
    if (selectedScheduleId === scheduleId) {
      setValue(selectedScheduleId);
      if (selectedScheduleId && selectedScheduleTitle) {
        setSelectedValue({
          label: selectedScheduleTitle,
          value: selectedScheduleId,
        });
      }
    }
  }, [scheduleId, selectedScheduleId, selectedScheduleTitle]);

  const isInCalendarType = scheduleByEventPlace.schedules.find(
    (res) => res.id === scheduleId
  )?.type;


  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];

    if (scheduleId && location.pathname.includes(scheduleId)) {
      body.style.overflowY = "hidden";
      body.style.position = "fixed";
    } else {
      body.style.overflowY = "scroll";
      body.style.position = "inherit";
    }
    return () => {
      body.style.overflowY = "inherit";
      body.style.position = "inherit";
    };
  }, [height, location, scheduleId]);

  const MONTHS = locale === "fr" ? [
    "Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre",
  ] : [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "Décember",
  ];



  const month = today.getMonth();
  const year = today.getFullYear();


  return (
    <div className="pr-0 pl-2 w-full" style={{ padding: "1em 4em 4em 4em" }}>
      <div>
        {isInCalendarType === "calendar" ? (
          <h1
            style={{
              fontSize: 18,
              fontWeight: "bold",
              padding: 0,
              marginTop: "2vh",
              position: "absolute",
              left: "46%",
              color: isInDarkMode ? "#fff" : "#404ad7"
            }}
          >
            {MONTHS[month]} {year}
          </h1>
        ) : null}
        <button 
          className="button-schedule flex text-blue-600 hover:text-blue-800 dark:bg-gray-400 dark:text-white p-23 mb-2 mt-1 appearance-none outline-none focus:outline-none border-none active:border-none focus:border-none hover:border-none"
          onClick={() => (withList ? navigate(-1) : navigate("/"))}
        >
          <BackArrowIcon />

          {withList ? (
            <p className="ml-2">
              {locale === "fr" ? "Retour à la liste" : "Back to the list"}
            </p>
          ) : (
            <p className="ml-2">
              {locale === "fr" ? "Retour " : "Back "}
            </p>
          )}
        </button>
      </div>
      <div
        className={`relative w-full shadow rounded-t-md rounded-b-none ${
          isInDarkMode ? "bg-gray-500/80" : "bg-blue-600"
        } z-[250]`}
      >
        <CustomSelect
          isInDarkMode={isInDarkMode}
          strokeColor="stroke-white"
          className="text-white"
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          options={options}
          placeHolder={schedulesList.find((sch) => sch.id === value)?.title}
          onChange={onChange}
        />
      </div>
      <ScheduleView
        isInCalendarType={isInCalendarType}
        eventsNameUs={eventsNameUs}
        eventsName={eventsName}
        eventsTextColor={eventsTextColor}
        colorCellByEvents={colorCellByEvents}
        withDays={withDays}
        locale={locale}
        eventTypeData={eventTypeData}
        isInDarkMode={isInDarkMode!}
        weekStartsOn={weekStartsOn}
        scheduleByEventPlace={scheduleByEventPlace}
        scheduleId={scheduleId}
        modalContent={modalContent}
      />
    </div>
  );
};

export default ScheduleViewWrapper;
