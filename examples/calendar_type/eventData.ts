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
      id: "5bfaefe7-a189-40de-bd8c-468bd4ff0e77",
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
      id: "47cdbc5a-74a9-47c6-a5ca-4c285748889b",
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
  eventPlace_id: "e2076d6a-9d6d-4b93-9ce0-a41f04c38c40",
  [EeventTypes.appointement]: "",
  [EeventTypes.away]: "Pas de rendez-vous",
};
