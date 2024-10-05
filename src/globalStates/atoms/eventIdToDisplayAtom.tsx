import { atom } from "recoil";

type TEventToDisplay = {
  day: undefined | number;
  id: undefined | number;
  startTime: number | undefined;
  endTime: number | undefined;
};

const eventIdToDIsplayAtom = atom<TEventToDisplay>({
  key: "eventIdToDIsplayAtom",
  default: {
    day: undefined,
    id: undefined,
    startTime: undefined,
    endTime: undefined,
  },
});

export default eventIdToDIsplayAtom;
