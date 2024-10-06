import { Suspense, useEffect, useState } from "react";
import "../../App.css";
import { Route, Routes } from "react-router-dom";
import Schedule from "react-simple-schedule-viewer";
import { useTheme } from "../theme/useTheme";
import { TcolorCellByEvents, TeventsName, TeventsTextColor } from "./dataTypes";
import { EeventTypes, eventTypeData, scheduleByEventPlace } from "./eventData";
import React from "react";
import HomePage from "../HomePage";

function App() {
  //  Variables for the Schedule component
  const weekStartsOn = 0;
  const { theme, setTheme } = useTheme();
  const [isDarkMode] = useState(theme === "dark" ? true : false);

  // the default order of background colors in the array is
  const colorCellByEvents: TcolorCellByEvents = {
    [EeventTypes.presence_1]: "#FFF2C4", // eventType_1 - required
    [EeventTypes.presence_2]: "#FED7AD", // eventType_2 - optional
    [EeventTypes.presence_3]: "#DBFFE2", // eventType_3 - optional
    [EeventTypes.presence_4]: "#F6D1FF", // eventType_4 - optional
    [EeventTypes.eco]: "#A0ABC0", // eventType_5 - optional
    [EeventTypes.away]: isDarkMode ? "#2D3648" : "#EDF0F7", // eventType_6 - required - is always the away, closed or absent event
    // eventType_7: "#B0DCFF", // eventType_7 - optional
  };
  // the default order of text colors in the array is
  const eventsTextColor: TeventsTextColor = {
    [EeventTypes.presence_1]: "#B99100", // eventType_1 - required
    [EeventTypes.presence_2]: "#D46E00", // eventType_2 - optional
    [EeventTypes.presence_3]: "#00B51E", // eventType_3 - optional
    [EeventTypes.presence_4]: "#F134F7", // eventType_4 - optional
    [EeventTypes.eco]: "#FFFFFF", // eventType_5 - optional
    [EeventTypes.away]: "#a0abc0", // eventType_6 - required - is always the away, closed or absent event
    // eventType_7: "#0196EC", // eventType_7 - optional
  };

  // This is for TEMP & CALENDAR type of schedule, the names of all eventTypes.
  // (for the EVENT type, the name of the event is on the contentForModal - eventTitle)
  const eventsName: TeventsName = {
    [EeventTypes.presence_1]: "Présence 1",
    [EeventTypes.presence_2]: "Présence 2",
    [EeventTypes.presence_3]: "Présence 3",
    [EeventTypes.presence_4]: "Présence 4",
    [EeventTypes.eco]: "Éco",
    [EeventTypes.away]: "Absence",
  };
  //  For french/English support both at the same time
  const eventsNameUs: TeventsName = {
    [EeventTypes.presence_1]: "Presence 1",
    [EeventTypes.presence_2]: "Presence 2",
    [EeventTypes.presence_3]: "Presence 3",
    [EeventTypes.presence_4]: "Presence 4",
    [EeventTypes.eco]: "Eco",
    [EeventTypes.away]: "Away",
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
