import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from "react";
import "../../assets/css/customSelect.css";
import useClickOutside from "../../components/schedules/week-planning/hooks/useClickOutside";
// Icon component
const Icon = ({ isOpen, strokeColor, }) => {
    return (_jsx("svg", { viewBox: "0 0 24 24", width: "18", height: "18", stroke: "currentColor", strokeWidth: "4.5", fill: "none", strokeLinecap: "round", strokeLinejoin: "round", className: `${isOpen ? "translate" : ""} ${strokeColor}`, children: _jsx("polyline", { points: "6 9 12 15 18 9" }) }));
};
// CustomSelect component
const CustomSelect = ({ placeHolder, options, onChange, align, selectedValue, setSelectedValue, className, icon, strokeColor, isInDarkMode, }) => {
    const [showMenu, setShowMenu] = useState(false);
    const inputRef = useRef(null);
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
    useClickOutside(inputRef, () => setShowMenu(false));
    return (_jsxs("div", { ref: inputRef, className: "custom--dropdown-container w-full", children: [_jsxs("div", { onClick: handleInputClick, className: `dropdown-input w-full `, children: [icon && _jsx("div", { children: icon }), " ", _jsx("div", { className: `${className} dropdown-selected-value font-semibold truncate  ${!selectedValue ? "placeholder" : ""} `, children: getDisplay() }), _jsx("div", { className: "dropdown-tools", children: _jsx("div", { className: "dropdown-tool", children: _jsx(Icon, { strokeColor: strokeColor, isOpen: showMenu }) }) })] }), showMenu && (_jsx("div", { style: isInDarkMode
                    ? { backgroundColor: "#2d3648" }
                    : { backgroundColor: "#edf0f7" }, className: `dropdown-menu alignment--${align || "auto"} w-full `, children: getOptions().map((option) => (_jsx("div", { onClick: () => {
                        onItemClick(option);
                        isSelected(option);
                    }, className: `dropdown-item text-left ${isInDarkMode ? "text-white" : "text-black"} ${isSelected(option) && "selected"}`, children: option.label }, option.value))) }))] }));
};
export default CustomSelect;
