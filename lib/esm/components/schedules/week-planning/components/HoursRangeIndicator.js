import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { LanguageKeys } from "../../../../translations/enum";
import { convertH2M, formatTime, rangebyFifteenMinutesUs, } from "../utils/helpers";
import HoursCell from "./HoursCell";
const HoursRangeIndicator = ({ rangebyFifteenMinutes, eventIdToDisplay, isInDarkMode, locale, }) => {
    const isInFrench = locale === "fr" ? true : false;
    return (_jsxs("div", { className: " relative  border-r border-slate-600 ", children: [locale == "fr" ? (_jsxs("div", { className: " absolute w-full", children: [rangebyFifteenMinutes.map((minute, i) => (_jsxs("div", { style: { lineHeight: "0.746em" }, children: [_jsx("p", { style: { fontSize: "0.6rem", opacity: 0 }, children: minute }), _jsx("div", { children: !minute.includes(":00") &&
                                    (eventIdToDisplay.endTime === convertH2M(minute) ||
                                        eventIdToDisplay.startTime === convertH2M(minute)) ? (_jsxs(_Fragment, { children: [_jsx("p", { className: !minute.includes(":00") &&
                                                (eventIdToDisplay.endTime === convertH2M(minute) ||
                                                    eventIdToDisplay.startTime === convertH2M(minute))
                                                ? "opacity-1 text-blue-600 font-semibold  "
                                                : " opacity-[0]", style: { fontSize: "0.6rem", textAlign: "left" }, children: minute }), _jsx("span", { className: "-mt-[1.2rem]", style: {
                                                width: "100%",
                                                height: "2px",
                                                backgroundColor: "#4E80EE",
                                                display: "block",
                                            } })] })) : null })] }, i))), eventIdToDisplay.endTime === 1440 ? (_jsx("p", { className: "text-blue-600 font-semibold text-left", style: { fontSize: "0.6rem", marginTop: "-0.3rem" }, children: formatTime(1440) })) : null] })) : null, _jsxs("div", { children: [locale === LanguageKeys.fr
                        ? rangebyFifteenMinutes.map((hour, i) => (_jsx(HoursCell, { isInFrench: isInFrench, isInDarkMode: isInDarkMode, hour: hour, eventIdToDisplay: eventIdToDisplay }, i)))
                        : rangebyFifteenMinutesUs.map((hour, i) => (_jsx(HoursCell, { isInFrench: isInFrench, isInDarkMode: isInDarkMode, hour: hour, eventIdToDisplay: eventIdToDisplay }, i))), locale === "fr" ? (_jsx("div", { className: `flex items-center justify-center -mt-3 ${isInDarkMode ? "text-gray-200" : "text-gray-700"} `, children: "00:00" })) : null] }), locale === "fr" && eventIdToDisplay.endTime === 1440 ? (_jsx(_Fragment, { children: _jsx("span", { style: {
                        width: "100%",
                        height: "2px",
                        backgroundColor: "#4E80EE",
                        display: "block",
                        marginTop: "-0.7rem",
                    } }) })) : null] }));
};
export default HoursRangeIndicator;
