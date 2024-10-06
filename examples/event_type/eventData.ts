import {
  getSchedulesByEventPlaceIdResponse,
  TeventTypeData,
} from "./dataTypes";

//  enum for identidying the event_Type easily
export enum EeventTypes {
  food = "eventType_1",
  concert = "eventType_2",
  game_force = "eventType_3",
  game_dark = "eventType_4",
  lecture = "eventType_5",
  closed = "eventType_6", // eventType_6 must be always the away, closed or no activity event
  appointement = "eventType_7",
}
//   Mocked data for example - set the price of each event for example
export const eventTypeData: TeventTypeData = {
  eventPlace_id: "e2076d6a-9d6d-4b93-9ce0-a41f04c38c40", // If you have many places with different prices this id must be unique
  [EeventTypes.food]: "12.5 Euros",
  [EeventTypes.concert]: "20 Euros",
  [EeventTypes.game_force]: "21 Euros",
  [EeventTypes.game_dark]: "10 Euros",
  [EeventTypes.lecture]: "6.5 Euros",
  [EeventTypes.closed]: "pas d'événement",
};

//   Mocked data for example - schedules array with each calendar cells event
export const scheduleByEventPlace: getSchedulesByEventPlaceIdResponse = {
  schedules: [
    {
      id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7", // Unique schedule id identifier
      title: "Exemple de calendrier de type 'event'", // title of the event
      type: "event", // type of the event (event - temperature - calendar)
      day_slot_set: [
        // each days & time slot instruction, start time only & the type of event (eventType_1 for example)
        {
          days: [0], // Monday
          time_slot: [
            {
              start: 0, // start at midnight with closed type event
              instruction: EeventTypes.closed,
            },
            {
              start: 600, // start at 10:00AM (this is the end of the previous event too)
              instruction: EeventTypes.lecture,
            },
            {
              start: 720, // start at 12:00AM with food (eventType_1 in this example)
              instruction: EeventTypes.food,
            },
            {
              start: 900,
              instruction: EeventTypes.game_dark,
            },
            {
              start: 1230,
              instruction: EeventTypes.concert,
            },
            {
              start: 1380,
              instruction: EeventTypes.closed,
            },
          ],
        },
        {
          days: [1],
          time_slot: [
            {
              start: 0,
              instruction: EeventTypes.closed,
            },
            {
              start: 600,
              instruction: EeventTypes.lecture,
            },
            {
              start: 720,
              instruction: EeventTypes.food,
            },
            {
              start: 900,
              instruction: EeventTypes.game_force,
            },
            {
              start: 1020,
              instruction: EeventTypes.concert,
            },

            {
              start: 1380,
              instruction: EeventTypes.closed,
            },
          ],
        },
        {
          days: [2],
          time_slot: [
            {
              start: 0,
              instruction: EeventTypes.closed,
            },
            {
              start: 495,
              instruction: EeventTypes.game_dark,
            },
            {
              start: 720,
              instruction: EeventTypes.food,
            },
            {
              start: 900,
              instruction: EeventTypes.game_dark,
            },
            {
              start: 1215,
              instruction: EeventTypes.closed,
            },
          ],
        },
        {
          days: [3],
          time_slot: [
            {
              start: 0,
              instruction: EeventTypes.closed,
            },
            {
              start: 450,
              instruction: EeventTypes.concert,
            },
            {
              start: 900,
              instruction: EeventTypes.closed,
            },
          ],
        },
        {
          days: [4],
          time_slot: [
            {
              start: 0,
              instruction: EeventTypes.closed,
            },

            {
              start: 480,
              instruction: EeventTypes.game_force,
            },
            {
              start: 1380,
              instruction: EeventTypes.closed,
            },
          ],
        },
        {
          days: [5],
          time_slot: [
            {
              start: 0,
              instruction: EeventTypes.closed,
            },
            {
              start: 450,
              instruction: EeventTypes.game_dark,
            },
            {
              start: 1020,
              instruction: EeventTypes.closed,
            },
          ],
        },
        {
          days: [6],
          time_slot: [
            {
              start: 0,
              instruction: EeventTypes.closed,
            },
          ],
        },
      ],
    },
    {
      id: "89d07045-095f-4e15-b03c-6450a8ab4264",
      title: "Exemple de calendrier de type 'event' vide",
      type: "event",
      day_slot_set: [
        {
          days: [0, 1, 2, 3, 4, 5, 6],
          time_slot: [
            {
              start: 0,
              instruction: EeventTypes.closed,
            },
          ],
        },
      ],
    },
  ],
};
