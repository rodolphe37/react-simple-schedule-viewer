import { Suspense, useEffect, useState } from "react";
import "../App.css";
import { Route, Routes } from "react-router-dom";
import { TcolorCellByEvents, TeventsName, TeventsTextColor } from "./dataTypes";
import { EeventTypes, eventTypeData, scheduleByEventPlace } from "./eventData";
import React from "react";
import { useTheme } from "../theme/useTheme";
import HomePage from "../HomePage";

import Schedule from "react-simple-schedule-viewer";




function App() {
  //  Variables for the Schedule component
  const weekStartsOn = 0;
  const { theme, setTheme } = useTheme();
  const [isDarkMode] = useState(theme === "dark" ? true : false);

  // the default order of background colors in the array is
  const colorCellByEvents: TcolorCellByEvents = {
    [EeventTypes.appointement]: "#B0DCFF", // eventType_1 - required
    [EeventTypes.away]: isDarkMode ? "#2D3648" : "#EDF0F7", // eventType_6 - required - is always the away, closed or absent event
  };
  // the default order of text colors in the array is
  const eventsTextColor: TeventsTextColor = {
    [EeventTypes.appointement]: "#0196EC", // eventType_1 - required
    [EeventTypes.away]: "#a0abc0", // eventType_6 - required - is always the away, closed or absent event
  };

  // This is for TEMP & CALENDAR type of schedule, the names of all eventTypes.
  // (for the EVENT type, the name of the event is on the contentForModal - eventTitle)
  const eventsName: TeventsName = {
    [EeventTypes.appointement]: "rendez-vous quotidien",
    [EeventTypes.away]: "Pas de rendez-vous",
  };
  //  For french/English support both at the same time
  const eventsNameUs: TeventsName = {
    [EeventTypes.appointement]: "daily appointment",
    [EeventTypes.away]: "No appointment",
  };

  useEffect(() => {
    if (isDarkMode) {
      setTheme("dark");
    } else if (!isDarkMode) {
      setTheme("light");
    }
  });

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/schedule/*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Schedule
                scheduleByEventPlace={scheduleByEventPlace}
                weekStartsOn={weekStartsOn}
                isInDarkMode={isDarkMode}
                colorCellByEvents={colorCellByEvents}
                eventsTextColor={eventsTextColor}
                locale={"fr"}
                eventsNameUs={eventsNameUs}
                eventsName={eventsName}
                eventTypeData={eventTypeData}
              />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
