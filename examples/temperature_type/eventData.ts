import {
  getSchedulesByEventPlaceIdResponse,
  TeventTypeData,
} from "./dataTypes";

//  enum for identidying the event_Type easily
export enum EeventTypes {
  presence_1 = "eventType_1",
  presence_2 = "eventType_2",
  presence_3 = "eventType_3",
  presence_4 = "eventType_4",
  eco = "eventType_5",
  away = "eventType_6", // eventType_6 must be always the away, away or no activity event
  // appointement = "eventType_7", no used in this example
}

export const scheduleByEventPlace: getSchedulesByEventPlaceIdResponse = {
  schedules: [
    {
      id: "48a39d16-4acf-496c-a14d-106666dfd740",
      title: "Exemple de calendrier  de type 'temp'",
      type: "temp",
      day_slot_set: [
        {
          days: [0, 1, 2, 3, 4],
          time_slot: [
            {
              start: 0,
              instruction: EeventTypes.away,
            },
            {
              start: 360,
              instruction: EeventTypes.eco,
            },
            {
              start: 600,
              instruction: EeventTypes.presence_1,
            },
            {
              start: 720,
              instruction: EeventTypes.presence_2,
            },
            {
              start: 960,
              instruction: EeventTypes.presence_3,
            },
          ],
        },
        {
          days: [5, 6],
          time_slot: [
            {
              start: 0,
              instruction: EeventTypes.away,
            },
            {
              start: 360,
              instruction: EeventTypes.presence_4,
            },
          ],
        },
      ],
    },
    {
      id: "c81458c3-a4d5-4702-8b3f-09e2fd0fe17b",
      title: "Exemple de calendrier de type 'temp' vide",
      type: "temp",
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
  [EeventTypes.presence_1]: "19",
  [EeventTypes.presence_2]: "20",
  [EeventTypes.presence_3]: "21",
  [EeventTypes.presence_4]: "22",
  [EeventTypes.eco]: "6.5",
  [EeventTypes.away]: "12",
};
