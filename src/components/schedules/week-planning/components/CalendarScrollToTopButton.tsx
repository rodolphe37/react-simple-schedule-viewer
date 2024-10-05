import DoubleChevronIcon from "../../../../ui/icons/doubleChevronIcon";
import React from "react";

const CalendarScrollToTopButton = ({
  scrollRef,
  isInDarkMode,
}: {
  scrollRef: React.MutableRefObject<HTMLDivElement | null>;
  isInDarkMode?: boolean;
}) => {
  return (
    <div
      onClick={() =>
        scrollRef?.current?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        })
      }
      className={` ${isInDarkMode ? "bg-gray-800" : "bg-white"} cursor-pointer`}
      id="topChevron"
      style={{
        width: "98.5%",
        height: "75%",
        bottom: "-76%",
        position: "absolute",
        zIndex: 5,
        left: "0px",
      }}
    >
      <DoubleChevronIcon className="bottom-2 left-[44%] absolute" />
    </div>
  );
};

export default CalendarScrollToTopButton;
