export interface getSchedulesByEventPlaceIdResponse {
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
}
export type TeventTypeData = {
  eventPlace_id?: string;
  eventType_1: string;
  eventType_2?: string;
  eventType_3?: string;
  eventType_4?: string;
  eventType_5?: string;
  eventType_6: string;
  eventType_7?: string;
};
export type TcolorCellByEvents = Omit<TeventTypeData, "eventPlace_id">;

export type TeventsTextColor = Omit<TeventTypeData, "eventPlace_id">;

export enum LanguageKeys {
  en = "en",
  fr = "fr",
}


export type TeventsName = {
  eventType_1: string;
  eventType_2?: string;
  eventType_3?: string;
  eventType_4?: string;
  eventType_5?: string;
  eventType_6: string;
  eventType_7?: string;
}