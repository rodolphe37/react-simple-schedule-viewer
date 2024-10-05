import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "./Button";
export function ErrorFallback({ error, resetErrorBoundary, }) {
    return (_jsxs("div", { role: "alert", children: [_jsx("p", { className: "text-xl font-bold mb-4", children: "Something went wrong: " }), _jsx("pre", { className: "text-red-500 font-semibold break-words mb-4", children: error.message }), _jsx(Button, { onClick: resetErrorBoundary, children: "Try again" })] }));
}
export default ErrorFallback;
