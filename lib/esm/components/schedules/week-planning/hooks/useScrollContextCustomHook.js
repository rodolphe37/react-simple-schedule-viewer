import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useEffect } from "react";
const ScrollContext = createContext({
    updateScroll: () => { },
});
export const ScrollProvider = (prop) => {
    const updateScroll = useCallback(() => {
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
    useEffect(() => {
        updateScroll();
    }, [updateScroll]);
    return (_jsx(ScrollContext.Provider, { value: { updateScroll }, children: prop.children }));
};
const useScroll = () => useContext(ScrollContext);
// eslint-disable-next-line react-refresh/only-export-components
export default useScroll;
