import { daysOfWeekNameUs } from "./../week-planning/utils/helpers";
import { useCallback, useEffect, useState } from "react";
import { daysOfWeekNameFr } from "../week-planning/utils/helpers";

type TdaysOfWeek = {
  weekDayNames: string[];
};

const useGetDaysController = (calendarData: TdaysOfWeek) => {
  const [daysOfWeek, setDaysOfWeek] = useState<string[]>();

  const getWeekDays = useCallback(() => {
    const curr = new Date();
    const week: string[] = [];
    for (let i = 0; i <= 7; i++) {
      const first =
        curr.getDate() - curr.getDay() + i + (curr.getDay() === 0 ? -6 : 1);
      const day = new Date(curr.setDate(Number(first)))
        .toISOString()
        .slice(8, 10);
      week.push(day);

      setDaysOfWeek(week);
    }
  }, []);
  useEffect(() => {
    getWeekDays();
  }, [getWeekDays]);

  const daysOfCurrentWeek = daysOfWeek !== undefined ? daysOfWeek : [];

  const calendarWithDaysUS = [
    `${daysOfWeekNameUs(calendarData.weekDayNames[0])} ${daysOfCurrentWeek[0]}`,
    `${daysOfWeekNameUs(calendarData.weekDayNames[1])} ${daysOfCurrentWeek[1]}`,
    `${daysOfWeekNameUs(calendarData.weekDayNames[2])} ${daysOfCurrentWeek[2]}`,
    `${daysOfWeekNameUs(calendarData.weekDayNames[3])} ${daysOfCurrentWeek[3]}`,
    `${daysOfWeekNameUs(calendarData.weekDayNames[4])} ${daysOfCurrentWeek[4]}`,
    `${daysOfWeekNameUs(calendarData.weekDayNames[5])} ${daysOfCurrentWeek[5]}`,
    `${daysOfWeekNameUs(calendarData.weekDayNames[6])} ${daysOfCurrentWeek[6]}`,
  ];

  const calendarWithDaysFrench = [
    `${daysOfWeekNameFr(calendarData.weekDayNames[0])} ${daysOfCurrentWeek[0]}`,
    `${daysOfWeekNameFr(calendarData.weekDayNames[1])} ${daysOfCurrentWeek[1]}`,
    `${daysOfWeekNameFr(calendarData.weekDayNames[2])} ${daysOfCurrentWeek[2]}`,
    `${daysOfWeekNameFr(calendarData.weekDayNames[3])} ${daysOfCurrentWeek[3]}`,
    `${daysOfWeekNameFr(calendarData.weekDayNames[4])} ${daysOfCurrentWeek[4]}`,
    `${daysOfWeekNameFr(calendarData.weekDayNames[5])} ${daysOfCurrentWeek[5]}`,
    `${daysOfWeekNameFr(calendarData.weekDayNames[6])} ${daysOfCurrentWeek[6]}`,
  ];

  return { calendarWithDaysUS, calendarWithDaysFrench };
};

export default useGetDaysController;
