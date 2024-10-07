import {
  getSchedulesByEventPlaceIdResponse,
  TeventTypeData,
} from "./dataTypes";

//  enum for identidying the event_Type easily
export enum EeventTypes {
  appointement = "eventType_1",
  away = "eventType_6", // eventType_6 must be always the away, away or no activity event
  // appointement = "eventType_7", no used in this example
}

export const scheduleByEventPlace: getSchedulesByEventPlaceIdResponse = {
  schedules: [
    {
      id: "d86ae448-012e-4f87-a7e5-d8e667346ea6",
      title: "Exemple de calendrier de type 'calendar'",
      type: "calendar",
      day_slot_set: [
        {
          days: [0, 1, 2, 3, 4, 5, 6],
          time_slot: [
            {
              start: 0,
              instruction: EeventTypes.away,
            },
            {
              start: 600,
              instruction: EeventTypes.appointement,
            },
            {
              start: 960,
              instruction: EeventTypes.away,
            },
          ],
        },
      ],
    },
    {
      id: "61d6024f-8d18-43dc-8cdc-9c38c796b93b",
      title: "Exemple de calendrier de type 'calendar' vide",
      type: "calendar",
      day_slot_set: [
        {
          days: [0, 1, 2, 3, 4, 5, 6],
          time_slot: [
            {
              start: 0,
              instruction: EeventTypes.away,
            },
          ],
        },
      ],
    },
  ],
};

export const eventTypeData: TeventTypeData = {
  eventPlace_id: "b4514cca-bd0f-4876-a3c3-b77444c047b4",
  [EeventTypes.appointement]: "",
  [EeventTypes.away]: "Pas de rendez-vous",
};
