"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const useGetWindowDimensions_1 = __importDefault(require("../../hooks/useGetWindowDimensions"));
const react_router_dom_1 = require("react-router-dom");
const style_1 = require("../../utils/style");
const SchedulesDetails = ({ scheduleByEventPlace, locale, isDarkMode, withListButtonName, withListButtonNameUs, withListReturnButton }) => {
    const [openCardId, setOpenCardId] = (0, react_1.useState)("");
    const { width } = (0, useGetWindowDimensions_1.default)();
    (0, react_1.useLayoutEffect)(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);
    const handleOpenCard = (id) => {
        if (id === openCardId) {
            setOpenCardId("");
        }
        else {
            setOpenCardId(id);
        }
        sessionStorage.removeItem("isScrolled");
    };
    return ((0, jsx_runtime_1.jsxs)("div", { "data-testid": "schedulesCard", style: (0, style_1.schedulesContainerStyle)(width), className: " w-full min-w-80  min-h-28 mr-10 pr-8 flex flex-col", children: [withListReturnButton ? (0, jsx_runtime_1.jsx)("button", { className: "button-schedule", style: {
                    background: isDarkMode ? "#9ca3af" : "#f9f9f9",
                    width: "25%",
                    marginBottom: "1vh",
                }, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.Link, { "data-testid": "forget-password", className: `${style_1.textWhite_blue500} text-l `, to: `/`, children: locale === "fr" ? withListButtonName : withListButtonNameUs }) }) : null, (0, jsx_runtime_1.jsx)("div", { className: "text-left pb-2 text-blue-600 dark:text-white font-semibold", children: (0, jsx_runtime_1.jsx)("p", { children: locale === "fr" ? "Liste des plannings" : "List of schedules" }) }), scheduleByEventPlace && scheduleByEventPlace?.schedules?.length > 0 ? ((0, jsx_runtime_1.jsx)("ul", { className: "text-left schedulesCard ", children: scheduleByEventPlace?.schedules.map((result) => {
                    return ((0, jsx_runtime_1.jsx)("div", { style: openCardId === result.id
                            ? {}
                            : { height: "64px", overflow: "hidden" }, className: `  relative card min-w-[55%] hover:bg-white ${openCardId === result.id ? "bg-white dark:bg-gray-900" : ""}  bg-gray-200  dark:bg-gray-700 dark:hover:bg-gray-900 border-b-2 border-gray-300 dark:border-gray-950  shadow-sm rounded-t-md mb-2`, children: (0, jsx_runtime_1.jsx)(react_router_dom_1.NavLink, { to: `${result.id}`, children: (0, jsx_runtime_1.jsx)("div", { onClick: () => {
                                    handleOpenCard(result.id);
                                }, className: "cursor-pointer text-center flex items-center justify-between", children: (0, jsx_runtime_1.jsx)("div", { className: "flex w-full justify-between p-4 mt-1", children: (0, jsx_runtime_1.jsx)("h1", { children: result.title }) }) }) }) }, result.id + result.title));
                }) })) : ((0, jsx_runtime_1.jsx)("div", { className: "flex items-center ", children: (0, jsx_runtime_1.jsx)("p", { className: "card text-center max-w-md bg-white dark:bg-gray-700/90 p-8 shadow-md rounded-xl mb-8", children: locale === "fr"
                        ? "Aucun - pas de plannings trouvés"
                        : "None — no schedules found" }) }))] }));
};
exports.default = SchedulesDetails;
