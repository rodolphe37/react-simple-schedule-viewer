import React from "react";

const HoursGuidelines = ({ mins }: { mins: number }) => {
  return (
    <div className="opacity-0 z-1 border-t text-center items-center justify-center border-slate-300 flex flex-col gap-1 minutes-guideline">
      {mins}
    </div>
  );
};

export default HoursGuidelines;
