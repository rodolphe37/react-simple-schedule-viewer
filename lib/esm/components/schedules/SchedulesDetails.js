import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLayoutEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useGetWindowDimensions";
import { Link, NavLink } from "react-router-dom";
import { schedulesContainerStyle, textWhite_blue500 } from "../../utils/style";
const SchedulesDetails = ({ scheduleByEventPlace, locale, isDarkMode, withListButtonName, withListButtonNameUs, withListReturnButton }) => {
    const [openCardId, setOpenCardId] = useState("");
    const { width } = useWindowDimensions();
    useLayoutEffect(() => {
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
    return (_jsxs("div", { "data-testid": "schedulesCard", style: schedulesContainerStyle(width), className: " w-full min-w-80  min-h-28 mr-10 pr-8 flex flex-col", children: [withListReturnButton ? _jsx("button", { className: "button-schedule", style: {
                    background: isDarkMode ? "#9ca3af" : "#f9f9f9",
                    width: "25%",
                    marginBottom: "1vh",
                }, children: _jsx(Link, { "data-testid": "forget-password", className: `${textWhite_blue500} text-l `, to: `/`, children: locale === "fr" ? withListButtonName : withListButtonNameUs }) }) : null, _jsx("div", { className: "text-left pb-2 text-blue-600 dark:text-white font-semibold", children: _jsx("p", { children: locale === "fr" ? "Liste des plannings" : "List of schedules" }) }), scheduleByEventPlace && scheduleByEventPlace?.schedules?.length > 0 ? (_jsx("ul", { className: "text-left schedulesCard ", children: scheduleByEventPlace?.schedules.map((result) => {
                    return (_jsx("div", { style: openCardId === result.id
                            ? {}
                            : { height: "64px", overflow: "hidden" }, className: `  relative card min-w-[55%] hover:bg-white ${openCardId === result.id ? "bg-white dark:bg-gray-900" : ""}  bg-gray-200  dark:bg-gray-700 dark:hover:bg-gray-900 border-b-2 border-gray-300 dark:border-gray-950  shadow-sm rounded-t-md mb-2`, children: _jsx(NavLink, { to: `${result.id}`, children: _jsx("div", { onClick: () => {
                                    handleOpenCard(result.id);
                                }, className: "cursor-pointer text-center flex items-center justify-between", children: _jsx("div", { className: "flex w-full justify-between p-4 mt-1", children: _jsx("h1", { children: result.title }) }) }) }) }, result.id + result.title));
                }) })) : (_jsx("div", { className: "flex items-center ", children: _jsx("p", { className: "card text-center max-w-md bg-white dark:bg-gray-700/90 p-8 shadow-md rounded-xl mb-8", children: locale === "fr"
                        ? "Aucun - pas de plannings trouvés"
                        : "None — no schedules found" }) }))] }));
};
export default SchedulesDetails;
