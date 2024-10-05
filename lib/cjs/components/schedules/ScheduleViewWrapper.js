"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_router_dom_1 = require("react-router-dom");
const ScheduleView_1 = __importDefault(require("./week-planning/ScheduleView"));
const react_1 = require("react");
const useGetWindowDimensions_1 = __importDefault(require("../../hooks/useGetWindowDimensions"));
const BackArrowIcon_1 = __importDefault(require("../../ui/icons/BackArrowIcon"));
const CustomSelect_1 = __importDefault(require("../../ui/customSelectComponent/CustomSelect"));
const dateUtils_1 = require("./week-planning/utils/dateUtils");
const ScheduleViewWrapper = ({ scheduleByEventPlace, weekStartsOn, isInDarkMode, withList, eventTypeData, locale, modalContent, withDays, colorCellByEvents, eventsTextColor, eventsName, eventsNameUs, }) => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    const { scheduleId } = (0, react_router_dom_1.useParams)();
    const location = (0, react_router_dom_1.useLocation)();
    const schedulesList = (0, react_1.useMemo)(() => (scheduleByEventPlace ? scheduleByEventPlace?.schedules : []), [scheduleByEventPlace]);
    const { height } = (0, useGetWindowDimensions_1.default)();
    const options = [
        ...schedulesList.map((sch) => ({ label: sch.title, value: sch.id })),
    ];
    const [value, setValue] = (0, react_1.useState)();
    const [selectedValue, setSelectedValue] = (0, react_1.useState)(null);
    const selectedScheduleId = schedulesList.find((sched) => sched.id === scheduleId)?.id;
    const selectedScheduleTitle = schedulesList.find((sched) => sched.id === scheduleId)?.title;
    const onChange = (newValue) => {
        setValue(newValue);
        sessionStorage.removeItem("isScrolled");
        navigate(`/schedule/${newValue}`, {
            replace: true,
        });
    };
    const isBadId = scheduleId !== undefined &&
        !schedulesList.flatMap((res) => res.id).includes(scheduleId);
    const firstElement = schedulesList.find((res) => res.id)?.id;
    (0, react_1.useLayoutEffect)(() => {
        if (!withList && scheduleId === undefined) {
            navigate(`/schedule/${firstElement}`);
        }
        if (isBadId) {
            navigate("/");
            window.location.reload();
        }
    }, [navigate, schedulesList, withList, firstElement, isBadId, scheduleId]);
    (0, react_1.useEffect)(() => {
        if (selectedScheduleId === scheduleId) {
            setValue(selectedScheduleId);
            if (selectedScheduleId && selectedScheduleTitle) {
                setSelectedValue({
                    label: selectedScheduleTitle,
                    value: selectedScheduleId,
                });
            }
        }
    }, [scheduleId, selectedScheduleId, selectedScheduleTitle]);
    const isInCalendarType = scheduleByEventPlace.schedules.find((res) => res.id === scheduleId)?.type;
    (0, react_1.useEffect)(() => {
        const body = document.getElementsByTagName("body")[0];
        if (scheduleId && location.pathname.includes(scheduleId)) {
            body.style.overflowY = "hidden";
            body.style.position = "fixed";
        }
        else {
            body.style.overflowY = "scroll";
            body.style.position = "inherit";
        }
        return () => {
            body.style.overflowY = "inherit";
            body.style.position = "inherit";
        };
    }, [height, location, scheduleId]);
    const MONTHS = locale === "fr" ? [
        "Janvier",
        "Fevrier",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
    ] : [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "Décember",
    ];
    const month = dateUtils_1.today.getMonth();
    const year = dateUtils_1.today.getFullYear();
    return ((0, jsx_runtime_1.jsxs)("div", { className: "pr-0 pl-2 w-full", style: { padding: "1em 4em 4em 4em" }, children: [(0, jsx_runtime_1.jsxs)("div", { children: [isInCalendarType === "calendar" ? ((0, jsx_runtime_1.jsxs)("h1", { style: {
                            fontSize: 18,
                            fontWeight: "bold",
                            padding: 0,
                            marginTop: "2vh",
                            position: "absolute",
                            left: "46%",
                            color: isInDarkMode ? "#fff" : "#404ad7"
                        }, children: [MONTHS[month], " ", year] })) : null, (0, jsx_runtime_1.jsxs)("button", { className: "button-schedule flex text-blue-600 hover:text-blue-800 dark:bg-gray-400 dark:text-white p-23 mb-2 mt-1 appearance-none outline-none focus:outline-none border-none active:border-none focus:border-none hover:border-none", onClick: () => (withList ? navigate(-1) : navigate("/")), children: [(0, jsx_runtime_1.jsx)(BackArrowIcon_1.default, {}), withList ? ((0, jsx_runtime_1.jsx)("p", { className: "ml-2", children: locale === "fr" ? "Retour à la liste" : "Back to the list" })) : ((0, jsx_runtime_1.jsx)("p", { className: "ml-2", children: locale === "fr" ? "Retour " : "Back " }))] })] }), (0, jsx_runtime_1.jsx)("div", { className: `relative w-full shadow rounded-t-md rounded-b-none ${isInDarkMode ? "bg-gray-500/80" : "bg-blue-600"} z-[250]`, children: (0, jsx_runtime_1.jsx)(CustomSelect_1.default, { isInDarkMode: isInDarkMode, strokeColor: "stroke-white", className: "text-white", selectedValue: selectedValue, setSelectedValue: setSelectedValue, options: options, placeHolder: schedulesList.find((sch) => sch.id === value)?.title, onChange: onChange }) }), (0, jsx_runtime_1.jsx)(ScheduleView_1.default, { isInCalendarType: isInCalendarType, eventsNameUs: eventsNameUs, eventsName: eventsName, eventsTextColor: eventsTextColor, colorCellByEvents: colorCellByEvents, withDays: withDays, locale: locale, eventTypeData: eventTypeData, isInDarkMode: isInDarkMode, weekStartsOn: weekStartsOn, scheduleByEventPlace: scheduleByEventPlace, scheduleId: scheduleId, modalContent: modalContent })] }));
};
exports.default = ScheduleViewWrapper;
