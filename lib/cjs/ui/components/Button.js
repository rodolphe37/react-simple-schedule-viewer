"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Loader_1 = require("./Loader");
const Button = ({ startIcon, endIcon, children, loading, className, ...buttonProps }) => {
    return ((0, jsx_runtime_1.jsxs)("button", { className: `button-schedule inline-flex justify-center items-center py-2 px-3 space-x-2  bg-blue-500  shadow active:bg-blue-400 rounded-xl text-white text-sm font-semibold disabled:bg-opacity-50 hover:(transform ) ${className}`, ...buttonProps, children: [startIcon && (0, jsx_runtime_1.jsx)("div", { className: "mr-2", children: startIcon }), children, loading && (0, jsx_runtime_1.jsx)(Loader_1.Loader, { className: "text-white ml-3 w-4 h-4" }), !loading && endIcon && (0, jsx_runtime_1.jsx)("div", { children: endIcon })] }));
};
exports.Button = Button;
