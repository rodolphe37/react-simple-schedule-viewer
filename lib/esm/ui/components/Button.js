import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Loader } from "./Loader";
export const Button = ({ startIcon, endIcon, children, loading, className, ...buttonProps }) => {
    return (_jsxs("button", { className: `button-schedule inline-flex justify-center items-center py-2 px-3 space-x-2  bg-blue-500  shadow active:bg-blue-400 rounded-xl text-white text-sm font-semibold disabled:bg-opacity-50 hover:(transform ) ${className}`, ...buttonProps, children: [startIcon && _jsx("div", { className: "mr-2", children: startIcon }), children, loading && _jsx(Loader, { className: "text-white ml-3 w-4 h-4" }), !loading && endIcon && _jsx("div", { children: endIcon })] }));
};
