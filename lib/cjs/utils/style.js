"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ringGray200_900 = exports.textColorGray700_300 = exports.textGray900_50 = exports.textGray600_50 = exports.textColorInDarkMode = exports.textGray800_200Color = exports.textGray800 = exports.textGray700_light100 = exports.textGray700_white = exports.textGray700 = exports.textGray300 = exports.textDark700 = exports.textWhite_blue500 = exports.textWhite = exports.textBlue500 = exports.bgGray100Gradient900To800 = exports.bgGradientGray100To50And900To800 = exports.bgGray900 = exports.bgGray800 = exports.bgGray600 = exports.bgGray500 = exports.bgBlue500 = exports.bgGray200 = exports.bgGray200_900Color = exports.bgGray50_900Color = exports.bgGray50_800Color = exports.bgWhite_gray800Color = exports.bgWhite200Gray700_90 = exports.bgWhite_gray700Color = exports.bgWhiteGray_600Color = exports.bgWhite = exports.bgGray100_900Color = exports.bgGray100_600Color = exports.bgGray200_700_90 = exports.bgGray200_700Color = exports.schedulesContainerStyle = exports.ParametersContainerStyle = void 0;
const breakpoints_1 = __importDefault(require("./breakpoints"));
const ParametersContainerStyle = (width) => width < breakpoints_1.default.xs
    ? { paddingTop: "9rem" }
    : width < breakpoints_1.default.sm
        ? { paddingTop: "6rem" }
        : width > breakpoints_1.default.md
            ? { paddingTop: "2rem" }
            : { paddingTop: "6rem" };
exports.ParametersContainerStyle = ParametersContainerStyle;
const schedulesContainerStyle = (width) => width < breakpoints_1.default.xs
    ? { marginTop: "1rem", padding: "4em 6em" }
    : width < breakpoints_1.default.sm
        ? { marginTop: "1rem", padding: "4em 6em" }
        : width > breakpoints_1.default.md
            ? { marginTop: "1rem", padding: "4em 6em" }
            : { marginTop: "2rem", padding: "4em' 6em" };
exports.schedulesContainerStyle = schedulesContainerStyle;
exports.bgGray200_700Color = "bg-gray-200 dark:bg-gray-700";
exports.bgGray200_700_90 = "bg-gray-200 dark:bg-gray-700/90";
exports.bgGray100_600Color = "bg-gray-100 dark:bg-gray-600";
exports.bgGray100_900Color = "bg-gray-100 dark:bg-gray-900";
exports.bgWhite = "bg-white";
exports.bgWhiteGray_600Color = "bg-white dark:bg-gray-600";
exports.bgWhite_gray700Color = "bg-white dark:bg-gray-700/90";
exports.bgWhite200Gray700_90 = "bg-white-200 dark:bg-gray-700/90";
exports.bgWhite_gray800Color = "bg-white dark:bg-gray-800";
exports.bgGray50_800Color = "bg-gray-50 dark:bg-gray-800";
exports.bgGray50_900Color = "bg-gray-50 dark:bg-gray-900";
exports.bgGray200_900Color = "bg-gray-200 dark:bg-gray-900";
exports.bgGray200 = "bg-gray-200";
exports.bgBlue500 = "bg-blue-500";
exports.bgGray500 = "bg-gray-500";
exports.bgGray600 = "dark:bg-gray-600";
exports.bgGray800 = "dark:bg-gray-800";
exports.bgGray900 = "dark:bg-gray-900";
exports.bgGradientGray100To50And900To800 = "bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-900 dark:to-gray-800";
exports.bgGray100Gradient900To800 = "bg-gray-100 dark:bg-gradient-to-b dark:from-gray-900 dark:to-gray-800";
exports.textBlue500 = "text-blue-600";
exports.textWhite = "text-white";
exports.textWhite_blue500 = "dark:text-white text-blue-600";
exports.textDark700 = "text-dark-700";
exports.textGray300 = "text-gray-300";
exports.textGray700 = "text-gray-700";
exports.textGray700_white = "text-gray-700 dark:text-white";
exports.textGray700_light100 = "text-gray-700 dark:text-light-100";
exports.textGray800 = "text-gray-800";
exports.textGray800_200Color = "text-gray-800 dark:text-gray-200";
exports.textColorInDarkMode = "dark:text-white";
exports.textGray600_50 = "text-gray-600 dark:text-gray-50";
exports.textGray900_50 = "text-gray-900 dark:text-gray-50";
exports.textColorGray700_300 = "text-gray-700 dark:text-gray-300";
exports.ringGray200_900 = "ring-gray-200 dark:ring-gray-900";
