import { atom } from "jotai";

type TEventToDisplay = {
  day: undefined | number;
  id: undefined | number;
  startTime: number | undefined;
  endTime: number | undefined;
};

const eventIdToDisplayAtom = atom<TEventToDisplay | null>(null);

export default eventIdToDisplayAtom;
