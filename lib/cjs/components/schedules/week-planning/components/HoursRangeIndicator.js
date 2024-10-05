"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const enum_1 = require("../../../../translations/enum");
const helpers_1 = require("../utils/helpers");
const HoursCell_1 = __importDefault(require("./HoursCell"));
const HoursRangeIndicator = ({ rangebyFifteenMinutes, eventIdToDisplay, isInDarkMode, locale, }) => {
    const isInFrench = locale === "fr" ? true : false;
    return ((0, jsx_runtime_1.jsxs)("div", { className: " relative  border-r border-slate-600 ", children: [locale == "fr" ? ((0, jsx_runtime_1.jsxs)("div", { className: " absolute w-full", children: [rangebyFifteenMinutes.map((minute, i) => ((0, jsx_runtime_1.jsxs)("div", { style: { lineHeight: "0.746em" }, children: [(0, jsx_runtime_1.jsx)("p", { style: { fontSize: "0.6rem", opacity: 0 }, children: minute }), (0, jsx_runtime_1.jsx)("div", { children: !minute.includes(":00") &&
                                    (eventIdToDisplay.endTime === (0, helpers_1.convertH2M)(minute) ||
                                        eventIdToDisplay.startTime === (0, helpers_1.convertH2M)(minute)) ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { className: !minute.includes(":00") &&
                                                (eventIdToDisplay.endTime === (0, helpers_1.convertH2M)(minute) ||
                                                    eventIdToDisplay.startTime === (0, helpers_1.convertH2M)(minute))
                                                ? "opacity-1 text-blue-600 font-semibold  "
                                                : " opacity-[0]", style: { fontSize: "0.6rem", textAlign: "left" }, children: minute }), (0, jsx_runtime_1.jsx)("span", { className: "-mt-[1.2rem]", style: {
                                                width: "100%",
                                                height: "2px",
                                                backgroundColor: "#4E80EE",
                                                display: "block",
                                            } })] })) : null })] }, i))), eventIdToDisplay.endTime === 1440 ? ((0, jsx_runtime_1.jsx)("p", { className: "text-blue-600 font-semibold text-left", style: { fontSize: "0.6rem", marginTop: "-0.3rem" }, children: (0, helpers_1.formatTime)(1440) })) : null] })) : null, (0, jsx_runtime_1.jsxs)("div", { children: [locale === enum_1.LanguageKeys.fr
                        ? rangebyFifteenMinutes.map((hour, i) => ((0, jsx_runtime_1.jsx)(HoursCell_1.default, { isInFrench: isInFrench, isInDarkMode: isInDarkMode, hour: hour, eventIdToDisplay: eventIdToDisplay }, i)))
                        : helpers_1.rangebyFifteenMinutesUs.map((hour, i) => ((0, jsx_runtime_1.jsx)(HoursCell_1.default, { isInFrench: isInFrench, isInDarkMode: isInDarkMode, hour: hour, eventIdToDisplay: eventIdToDisplay }, i))), locale === "fr" ? ((0, jsx_runtime_1.jsx)("div", { className: `flex items-center justify-center -mt-3 ${isInDarkMode ? "text-gray-200" : "text-gray-700"} `, children: "00:00" })) : null] }), locale === "fr" && eventIdToDisplay.endTime === 1440 ? ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("span", { style: {
                        width: "100%",
                        height: "2px",
                        backgroundColor: "#4E80EE",
                        display: "block",
                        marginTop: "-0.7rem",
                    } }) })) : null] }));
};
exports.default = HoursRangeIndicator;
