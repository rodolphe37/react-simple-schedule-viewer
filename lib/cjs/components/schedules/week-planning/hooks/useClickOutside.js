"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**Small hook used for closing the event modal */
const useClickOutside = (ref, callback) => {
    (0, react_1.useEffect)(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [ref, callback]);
};
exports.default = useClickOutside;
