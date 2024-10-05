import { atom } from "recoil";
const eventIdToDIsplayAtom = atom({
    key: "eventIdToDIsplayAtom",
    default: {
        day: undefined,
        id: undefined,
        startTime: undefined,
        endTime: undefined,
    },
});
export default eventIdToDIsplayAtom;
