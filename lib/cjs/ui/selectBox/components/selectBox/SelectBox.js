"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectBox = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Label_1 = require("../Label");
require("../../../../assets/css/SelectBox.css");
const SelectBox = ({ value, label, disabled, className, options, icon, containerStyle, labelStyle, onChange, withoutchevron, isInDarkMode, }) => {
    const selectBox = ((0, jsx_runtime_1.jsxs)("div", { className: `relative `, children: [icon && (0, jsx_runtime_1.jsx)("div", { children: icon }), (0, jsx_runtime_1.jsx)("select", { "aria-label": "Schedule_list", className: `${className} styledSelect ${isInDarkMode ? "bg-gray-900" : "bg-gray-200"} selectList ${icon ? " indent-9" : ""}`, disabled: disabled, onChange: onChange, value: value, id: `select ${value}`, style: !withoutchevron
                    ? {
                        backgroundImage: isInDarkMode
                            ? `url("data:image/svg+xml;utf8,<svg fill='white' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`
                            : `url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>")`,
                    }
                    : {}, children: options.map(({ value, label }) => ((0, jsx_runtime_1.jsx)("option", { className: "text-black dark:text-white", value: value, children: label }, value))) })] }));
    const result = label ? ((0, jsx_runtime_1.jsxs)(Label_1.Label, { children: [(0, jsx_runtime_1.jsx)("div", { id: "buildings_list", style: labelStyle, className: "Label", children: label }), selectBox] })) : (selectBox);
    return (0, jsx_runtime_1.jsx)("div", { className: containerStyle, children: result });
};
exports.SelectBox = SelectBox;
