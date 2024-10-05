"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const doubleChevronIcon_1 = __importDefault(require("../../../../ui/icons/doubleChevronIcon"));
const CalendarScrollToBottomButton = ({ scrollToBottom, isInDarkMode, }) => {
    return ((0, jsx_runtime_1.jsx)("div", { onClick: () => scrollToBottom(), className: ` ${isInDarkMode ? "bg-gray-800" : "bg-white"} cursor-pointer`, id: "bottomChevron", style: {
            width: "12.34%",
            height: "6%",
            position: "absolute",
            zIndex: 5,
            bottom: "2.6%",
        }, children: (0, jsx_runtime_1.jsx)(doubleChevronIcon_1.default, { style: { marginBottom: "6%" }, className: "-bottom-0 left-[44%] absolute rotate-180" }) }));
};
exports.default = CalendarScrollToBottomButton;
