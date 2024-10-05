import { createContext, useCallback, useContext, useEffect } from "react";
import React from "react";

type ContextType = {
  updateScroll: () => void;
};

const ScrollContext = createContext<ContextType>({
  updateScroll: () => {},
});

export const ScrollProvider = (prop: {
  children: JSX.Element | JSX.Element[];
  updateScroll: () => void;
}) => {
  const updateScroll = useCallback(() => {
    const scroller = document.querySelector("#scroller");
    const topChevron = document.querySelector("#topChevron");
    const bottomChevron = document.querySelector("#bottomChevron");

    let scrollDistance = 0;
    topChevron?.classList.add("hidden");
    scroller?.addEventListener(
      "scroll",
      () => {
        scrollDistance = Math.floor(scroller?.scrollTop);

        if (scrollDistance < 150) {
          topChevron?.classList.add("hidden");
          bottomChevron?.classList.remove("hidden");
        } else if (scrollDistance > 500) {
          bottomChevron?.classList.add("hidden");
          topChevron?.classList.remove("hidden");
        } else if (scrollDistance > 151 && scrollDistance < 445) {
          topChevron?.classList.remove("hidden");
          bottomChevron?.classList.remove("hidden");
        }
      },
      { passive: true }
    );
  }, []);

  useEffect(() => {
    updateScroll();
  }, [updateScroll]);

  return (
    <ScrollContext.Provider value={{ updateScroll }}>
      {prop.children}
    </ScrollContext.Provider>
  );
};

const useScroll = () => useContext(ScrollContext) as ContextType;

// eslint-disable-next-line react-refresh/only-export-components
export default useScroll;
