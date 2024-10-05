"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("../../../../assets/css/Label.module.css");
const Label = ({ children }) => {
    return ((0, jsx_runtime_1.jsx)("label", { className: `Label text-black dark:text-white`, children: children }));
};
exports.Label = Label;
