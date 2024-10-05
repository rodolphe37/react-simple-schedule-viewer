"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const helpers_1 = require("../utils/helpers");
const HoursCell = ({ hour, eventIdToDisplay, isInDarkMode, isInFrench, }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { style: hour.includes(":00") ? {} : { display: "none" }, className: " hours-column relative border-t w-full items-center justify-start border-slate-300 flex flex-col gap-1 ", children: [(0, jsx_runtime_1.jsx)("p", { className: ` ${isInDarkMode ? "text-gray-200" : "text-gray-700"}`, children: hour }), (0, jsx_runtime_1.jsxs)("div", { children: [eventIdToDisplay.startTime === (0, helpers_1.convertH2M)(hour) ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { style: {
                                    fontSize: "0.6rem",
                                    position: "absolute",
                                    top: "0.2rem",
                                    color: "#4E80EE",
                                    fontWeight: "bold",
                                    left: 0,
                                    opacity: isInFrench ? 1 : 0,
                                }, children: (0, helpers_1.formatTime)(eventIdToDisplay.startTime) }), (0, jsx_runtime_1.jsx)("span", { style: {
                                    width: "100%",
                                    height: "2px",
                                    backgroundColor: "#4E80EE",
                                    position: "absolute",
                                    zIndex: 4,
                                    left: 0,
                                    top: 0,
                                    opacity: isInFrench ? 1 : 0,
                                } })] })) : null, eventIdToDisplay.endTime === (0, helpers_1.convertH2M)(hour) &&
                        eventIdToDisplay.endTime !== 1440 ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("p", { style: {
                                    fontSize: "0.6rem",
                                    position: "absolute",
                                    fontWeight: "bold",
                                    top: "0.2rem",
                                    color: "#4E80EE",
                                    left: 0,
                                    opacity: isInFrench ? 1 : 0,
                                }, children: (0, helpers_1.formatTime)(eventIdToDisplay.endTime) }), (0, jsx_runtime_1.jsx)("span", { style: {
                                    width: "100%",
                                    height: "2px",
                                    backgroundColor: "#4E80EE",
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    opacity: isInFrench ? 1 : 0,
                                    zIndex: 4,
                                } })] })) : null] })] }));
};
exports.default = HoursCell;
