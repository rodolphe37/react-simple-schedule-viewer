import { today } from "./dateUtils";

// CODE FOR FIFTEEN MINUTES RANGE
const byFifteenMinutesitems = [];
for (let hour = 0; hour < 24; hour++) {
  byFifteenMinutesitems.push([hour, 0]);
  byFifteenMinutesitems.push([hour, 15]);
  byFifteenMinutesitems.push([hour, 30]);
  byFifteenMinutesitems.push([hour, 45]);
}

const forMinutesdate = today;
const formatterMinutes = new Intl.DateTimeFormat("fr-FR", {
  hour: "numeric",
  minute: "numeric",
  hour12: false,
});
export const rangebyFifteenMinutes = byFifteenMinutesitems.map((time) => {
  const [hour, minute] = time;
  forMinutesdate.setHours(hour);
  forMinutesdate.setMinutes(minute);

  return formatterMinutes.format(forMinutesdate);
});

const formatterMinutesUS = new Intl.DateTimeFormat("us-US", {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
});

export const rangebyFifteenMinutesUs = byFifteenMinutesitems.map((time) => {
  const [hour, minute] = time;
  forMinutesdate.setHours(hour);
  forMinutesdate.setMinutes(minute);

  return formatterMinutesUS.format(forMinutesdate);
});

//  CODE FOR CONVERT HOURS/MINUTES FORMAT TO MINUTES FORMAT
export function convertH2M(timeInHour: string) {
  const timeParts = timeInHour.split(":");
  return Number(timeParts[0]) * 60 + Number(timeParts[1]);
}

// CODE FOR CONVERT MINUTES FORMAT TO HOURS/MINUTES FORMAT
export function formatTime(time: number) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;
  return `${hours === 24 ? "00" : hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
}

export const capitalizeFirstLetter = (str: string) => {
  return `${str.charAt(0).toUpperCase()}${str.slice(1).toLowerCase()}`;
};

enum daysOfWeekNamesFr {
  Monday = "Lundi",
  Tuesday = "Mardi",
  Wednesday = "Mercredi",
  Thursday = "Jeudi",
  Friday = "Vendredi",
  Saturday = "Samedi",
  Sunday = "Dimanche",
}

export const daysOfWeekNameFr = (str: string) => {
  return daysOfWeekNamesFr[str as keyof typeof daysOfWeekNamesFr];
};

enum daysOfWeekNamesUs {
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
  Sunday = "Sunday",
}

export const daysOfWeekNameUs = (str: string) => {
  return daysOfWeekNamesUs[str as keyof typeof daysOfWeekNamesUs];
};

export function extractNumbers(str: string) {
  let numbers = "0";
  const matches = str.match(/[-+]?[0-9]*\.?[0-9]*/);

  if (matches) {
    numbers = matches[0];
  }

  return numbers;
}


// export function getUniqueListBy(arr:[], key: string) {
//   return [...new Map(arr.map(item => [item[key], item])).values()]
// }