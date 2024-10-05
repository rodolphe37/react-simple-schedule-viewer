"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Loader = ({ className, ...props }) => {
    return ((0, jsx_runtime_1.jsxs)("svg", { className: `animate-spin h-5 w-5 text-blue-400  hover:cursor-not-allowed ${className}`, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", ...props, children: [(0, jsx_runtime_1.jsx)("title", { children: "Loader" }), (0, jsx_runtime_1.jsx)("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" }), (0, jsx_runtime_1.jsx)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" })] }));
};
exports.Loader = Loader;
