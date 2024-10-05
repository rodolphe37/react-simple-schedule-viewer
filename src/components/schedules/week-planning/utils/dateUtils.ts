interface GenerateDaysOptions {
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
}

export function generateWeekDaysData({
  weekStartsOn = 1,
}: GenerateDaysOptions = {}) {
  const dayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const weekDayNames = [
    ...dayNames.slice(weekStartsOn),
    ...dayNames.slice(0, weekStartsOn),
  ];

  return {
    weekDayNames,
  };
}

export const today = new Date();
