import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { convertH2M, formatTime } from "../utils/helpers";
const HoursCell = ({ hour, eventIdToDisplay, isInDarkMode, isInFrench, }) => {
    return (_jsxs("div", { style: hour.includes(":00") ? {} : { display: "none" }, className: " hours-column relative border-t w-full items-center justify-start border-slate-300 flex flex-col gap-1 ", children: [_jsx("p", { className: ` ${isInDarkMode ? "text-gray-200" : "text-gray-700"}`, children: hour }), _jsxs("div", { children: [eventIdToDisplay.startTime === convertH2M(hour) ? (_jsxs(_Fragment, { children: [_jsx("p", { style: {
                                    fontSize: "0.6rem",
                                    position: "absolute",
                                    top: "0.2rem",
                                    color: "#4E80EE",
                                    fontWeight: "bold",
                                    left: 0,
                                    opacity: isInFrench ? 1 : 0,
                                }, children: formatTime(eventIdToDisplay.startTime) }), _jsx("span", { style: {
                                    width: "100%",
                                    height: "2px",
                                    backgroundColor: "#4E80EE",
                                    position: "absolute",
                                    zIndex: 4,
                                    left: 0,
                                    top: 0,
                                    opacity: isInFrench ? 1 : 0,
                                } })] })) : null, eventIdToDisplay.endTime === convertH2M(hour) &&
                        eventIdToDisplay.endTime !== 1440 ? (_jsxs(_Fragment, { children: [_jsx("p", { style: {
                                    fontSize: "0.6rem",
                                    position: "absolute",
                                    fontWeight: "bold",
                                    top: "0.2rem",
                                    color: "#4E80EE",
                                    left: 0,
                                    opacity: isInFrench ? 1 : 0,
                                }, children: formatTime(eventIdToDisplay.endTime) }), _jsx("span", { style: {
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
export default HoursCell;