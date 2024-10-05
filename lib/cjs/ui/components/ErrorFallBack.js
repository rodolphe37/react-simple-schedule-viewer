"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorFallback = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Button_1 = require("./Button");
function ErrorFallback({ error, resetErrorBoundary, }) {
    return ((0, jsx_runtime_1.jsxs)("div", { role: "alert", children: [(0, jsx_runtime_1.jsx)("p", { className: "text-xl font-bold mb-4", children: "Something went wrong: " }), (0, jsx_runtime_1.jsx)("pre", { className: "text-red-500 font-semibold break-words mb-4", children: error.message }), (0, jsx_runtime_1.jsx)(Button_1.Button, { onClick: resetErrorBoundary, children: "Try again" })] }));
}
exports.ErrorFallback = ErrorFallback;
exports.default = ErrorFallback;
