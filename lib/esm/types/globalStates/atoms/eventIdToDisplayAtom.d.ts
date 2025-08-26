type TEventToDisplay = {
    day: undefined | number;
    id: undefined | number;
    startTime: number | undefined;
    endTime: number | undefined;
};
declare const eventIdToDisplayAtom: import("jotai").PrimitiveAtom<TEventToDisplay | null> & {
    init: TEventToDisplay | null;
};
export default eventIdToDisplayAtom;
//# sourceMappingURL=eventIdToDisplayAtom.d.ts.map