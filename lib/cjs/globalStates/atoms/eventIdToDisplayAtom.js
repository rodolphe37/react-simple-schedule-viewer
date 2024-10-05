"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const recoil_1 = require("recoil");
const eventIdToDIsplayAtom = (0, recoil_1.atom)({
    key: "eventIdToDIsplayAtom",
    default: {
        day: undefined,
        id: undefined,
        startTime: undefined,
        endTime: undefined,
    },
});
exports.default = eventIdToDIsplayAtom;
