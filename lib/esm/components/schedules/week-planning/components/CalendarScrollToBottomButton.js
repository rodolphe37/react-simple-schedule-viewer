import { jsx as _jsx } from "react/jsx-runtime";
import DoubleChevronIcon from "../../../../ui/icons/doubleChevronIcon";
const CalendarScrollToBottomButton = ({ scrollToBottom, isInDarkMode, }) => {
    return (_jsx("div", { onClick: () => scrollToBottom(), className: ` ${isInDarkMode ? "bg-gray-800" : "bg-white"} cursor-pointer`, id: "bottomChevron", style: {
            width: "12.34%",
            height: "6%",
            position: "absolute",
            zIndex: 5,
            bottom: "2.6%",
        }, children: _jsx(DoubleChevronIcon, { style: { marginBottom: "6%" }, className: "-bottom-0 left-[44%] absolute rotate-180" }) }));
};
export default CalendarScrollToBottomButton;
