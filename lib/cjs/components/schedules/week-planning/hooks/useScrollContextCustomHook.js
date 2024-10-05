"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScrollProvider = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const ScrollContext = (0, react_1.createContext)({
    updateScroll: () => { },
});
const ScrollProvider = (prop) => {
    const updateScroll = (0, react_1.useCallback)(() => {
        const scroller = document.querySelector("#scroller");
        const topChevron = document.querySelector("#topChevron");
        const bottomChevron = document.querySelector("#bottomChevron");
        let scrollDistance = 0;
        topChevron?.classList.add("hidden");
        scroller?.addEventListener("scroll", () => {
            scrollDistance = Math.floor(scroller?.scrollTop);
            if (scrollDistance < 150) {
                topChevron?.classList.add("hidden");
                bottomChevron?.classList.remove("hidden");
            }
            else if (scrollDistance > 500) {
                bottomChevron?.classList.add("hidden");
                topChevron?.classList.remove("hidden");
            }
            else if (scrollDistance > 151 && scrollDistance < 445) {
                topChevron?.classList.remove("hidden");
                bottomChevron?.classList.remove("hidden");
            }
        }, { passive: true });
    }, []);
    (0, react_1.useEffect)(() => {
        updateScroll();
    }, [updateScroll]);
    return ((0, jsx_runtime_1.jsx)(ScrollContext.Provider, { value: { updateScroll }, children: prop.children }));
};
exports.ScrollProvider = ScrollProvider;
const useScroll = () => (0, react_1.useContext)(ScrollContext);
// eslint-disable-next-line react-refresh/only-export-components
exports.default = useScroll;
