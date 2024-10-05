import { jsx as _jsx } from "react/jsx-runtime";
import DoubleChevronIcon from "../../../../ui/icons/doubleChevronIcon";
const CalendarScrollToTopButton = ({ scrollRef, isInDarkMode, }) => {
    return (_jsx("div", { onClick: () => scrollRef?.current?.scrollIntoView({
            behavior: "smooth",
            block: "end",
        }), className: ` ${isInDarkMode ? "bg-gray-800" : "bg-white"} cursor-pointer`, id: "topChevron", style: {
            width: "98.5%",
            height: "75%",
            bottom: "-76%",
            position: "absolute",
            zIndex: 5,
            left: "0px",
        }, children: _jsx(DoubleChevronIcon, { className: "bottom-2 left-[44%] absolute" }) }));
};
export default CalendarScrollToTopButton;
