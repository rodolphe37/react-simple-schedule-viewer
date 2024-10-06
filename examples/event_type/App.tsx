import { Suspense, useEffect, useState } from "react";
import "../../App.css";
import { Route, Routes } from "react-router-dom";
import { contentForModal } from "./dataCards";
import { EeventTypes, eventTypeData, scheduleByEventPlace } from "./eventData";

import Schedule from "react-simple-schedule-viewer";
import { TcolorCellByEvents, TeventsTextColor } from "./dataTypes";
import {useTheme} from "../theme/useTheme";
import HomePage from "../HomePage"
import React from "react";

function App() {
  //  Variables for the Schedule component
  const weekStartsOn = 0;
  const { theme, setTheme } = useTheme();
  const [isDarkMode] = useState(theme === "dark" ? true : false);

  // the default order of background colors in the array is
  const colorCellByEvents: TcolorCellByEvents = {
    [EeventTypes.food]: "#FFF2C4", // eventType_1 - required
    [EeventTypes.concert]: "#FED7AD", // eventType_2 - optional
    [EeventTypes.game_force]: "#DBFFE2", // eventType_3 - optional
    [EeventTypes.game_dark]: "#F6D1FF", // eventType_4 - optional
    [EeventTypes.lecture]: "#A0ABC0", // eventType_5 - optional
    [EeventTypes.closed]: isDarkMode ? "#2D3648" : "#EDF0F7", // eventType_6 - required - is always the away, closed or absent event
    // eventType_7: "#B0DCFF", // eventType_7 - optional - unused in this example
  };
  // the default order of text colors in the array is
  const eventsTextColor: TeventsTextColor = {
    [EeventTypes.food]: "#B99100", // eventType_1 - required
    [EeventTypes.concert]: "#D46E00", // eventType_2 - optional
    [EeventTypes.game_force]: "#00B51E", // eventType_3 - optional
    [EeventTypes.game_dark]: "#F134F7", // eventType_4 - optional
    [EeventTypes.lecture]: "#FFFFFF", // eventType_5 - optional
    [EeventTypes.closed]: "#a0abc0", // eventType_6 - required - is always the away, closed or absent event
    // eventType_7: "#0196EC", // eventType_7 - optional -- unused in this example
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
                eventTypeData={eventTypeData}
                modalContent={contentForModal}
              />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
