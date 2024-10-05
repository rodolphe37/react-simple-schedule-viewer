"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
require("../../assets/css/customSelect.css");
const useClickOutside_1 = __importDefault(require("../../components/schedules/week-planning/hooks/useClickOutside"));
// Icon component
const Icon = ({ isOpen, strokeColor, }) => {
    return ((0, jsx_runtime_1.jsx)("svg", { viewBox: "0 0 24 24", width: "18", height: "18", stroke: "currentColor", strokeWidth: "4.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", className: `${isOpen ? "translate" : ""} ${strokeColor}`, children: (0, jsx_runtime_1.jsx)("polyline", { points: "6 9 12 15 18 9" }) }));
};
// CustomSelect component
const CustomSelect = ({ placeHolder, options, onChange, align, selectedValue, setSelectedValue, className, icon, strokeColor, isInDarkMode, }) => {
    const [showMenu, setShowMenu] = (0, react_1.useState)(false);
    const inputRef = (0, react_1.useRef)(null);
    const handleInputClick = () => {
        setShowMenu(!showMenu);
    };
    const getDisplay = () => {
        if (!selectedValue) {
            return placeHolder;
        }
        return selectedValue.label;
    };
    const onItemClick = (option) => {
        const newValue = option;
        setSelectedValue(newValue);
        onChange(newValue.value);
        setShowMenu(false);
    };
    const isSelected = (option) => {
        if (!selectedValue) {
            return false;
        }
        return selectedValue.value === option.value;
    };
    const getOptions = () => {
        return options;
    };
    (0, useClickOutside_1.default)(inputRef, () => setShowMenu(false));
    return ((0, jsx_runtime_1.jsxs)("div", { ref: inputRef, className: "custom--dropdown-container w-full", children: [(0, jsx_runtime_1.jsxs)("div", { onClick: handleInputClick, className: `dropdown-input w-full `, children: [icon && (0, jsx_runtime_1.jsx)("div", { children: icon }), " ", (0, jsx_runtime_1.jsx)("div", { className: `${className} dropdown-selected-value font-semibold truncate  ${!selectedValue ? "placeholder" : ""} `, children: getDisplay() }), (0, jsx_runtime_1.jsx)("div", { className: "dropdown-tools", children: (0, jsx_runtime_1.jsx)("div", { className: "dropdown-tool", children: (0, jsx_runtime_1.jsx)(Icon, { strokeColor: strokeColor, isOpen: showMenu }) }) })] }), showMenu && ((0, jsx_runtime_1.jsx)("div", { style: isInDarkMode
                    ? { backgroundColor: "#2d3648" }
                    : { backgroundColor: "#edf0f7" }, className: `dropdown-menu alignment--${align || "auto"} w-full `, children: getOptions().map((option) => ((0, jsx_runtime_1.jsx)("div", { onClick: () => {
                        onItemClick(option);
                        isSelected(option);
                    }, className: `dropdown-item text-left ${isInDarkMode ? "text-white" : "text-black"} ${isSelected(option) && "selected"}`, children: option.label }, option.value))) }))] }));
};
exports.default = CustomSelect;
