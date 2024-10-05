import { jsx as _jsx } from "react/jsx-runtime";
import "../../../../assets/css/Label.module.css";
const Label = ({ children }) => {
    return (_jsx("label", { className: `Label text-black dark:text-white`, children: children }));
};
export { Label };
