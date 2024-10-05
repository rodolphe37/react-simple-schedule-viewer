[![npm](https://img.shields.io/npm/v/react-simple-schedule-viewer)](https://www.npmjs.com/package/react-simple-schedule-viewer) ![downloads](https://img.shields.io/npm/dt/react-simple-schedule-viewer?color=blue&logo=npm&logoColor=blue)

# WORK IN PROGRESS...

# React simple schedule viewer

📅 An easy configurable weekly Calendar viewer component.

---

- Full Typescript support
- Dark & Light mode support
- French & English languages support
- Schedule view with three types : 'event', 'temperature' & 'calendar'
- made with react, react-router-dom, tailwindcss & recoil
- With only one peer dependency other than react & react-dom -> react-router-dom

---

## pictures demo :

> ### Event type:
>
> French - Light & Dark mode
> ![French - Light](demo/pictures/event-fr-light.png)
>
> English - Light & Dark mode
> ![French - Light](demo/pictures/event-en-light.png)

> ### Temperature type:
>
> French - Light & Dark mode
> ![French - Light](demo/pictures/temp-fr-light.png)
>
> English - Light & Dark mode
> ![French - Light](demo/pictures/temp-en-light.png)

> ### Calendar type:
>
> French - Light & Dark mode
> ![French - Light](demo/pictures/calendar-fr-light.png)
>
> English - Light & Dark mode
> ![French - Light](demo/pictures/calendar-en-light.png)

### Live demo

> To see the live demo:
> [Click here](https://bright-jalebi-193c3a.netlify.app/)

### install dependency

- as react-router-dom is a peer dependency, you need to install it first.

```
yarn add react-router-dom
```

> of course, like all react application wich use react router dom, you need to wrap your App element with a provider into the main.tsx page like that:

```javascript
// main.tsx
  ...
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ...
```

## install library

```
npm install react-simple-schedule-viewer
```

or

```
yarn add react-simple-schedule-viewer
```

## API

| Name                 | Type               | Default                                | Description                                                                    |
| -------------------- | ------------------ | -------------------------------------- | ------------------------------------------------------------------------------ |
| scheduleByEventPlace | Object (required)  | `{ schedules: [] }`                    | The data object for the schedule.                                              |
| weekStartsOn         | Number (required)  | `0`                                    | The day of the week start                                                      |
| isInDarkMode         | Boolean (required) | `false`                                | For dark mode support.                                                         |
| colorCellByEvents    | Object (required)  | `{ eventType_1: "", eventType_6: "" }` | The colors of the cells.                                                       |
| eventsTextColor      | Object (required)  | `{ eventType_1: "", eventType_6: "" }` | the color for the text cells calendar.                                         |
| locale               | String (required)  | `"fr" `                                | for fr/en support.                |
| eventsNameUs         | Object (optional)  | `{ eventType_1: "", eventType_6: "" }` | the events name in us version.                                                 |
| eventsName           | Object (optional)  | `{ eventType_1: "", eventType_6: "" }` | the events name in fr version.                                                 |
| eventTypeData        | Object (required)  | `{ eventType_1: "", eventType_6: "" }` | The value of each event (prices, degrees, or other infos).                                                       |
| modalContent         | Array (optional)   | `[]`                                   | Custom modal content (event type only)                                         |
| withDays             | boolean (optional) | `false`                                | display the day of each week days.                                             |
| withList             | Boolean (optional) | `false`                                | display a list of the schedules before the calendar view.                      |
| withListButtonName   | String (optional)  | `""`                                   | when the list is true you can add a french text for the return button |
| withListButtonNameUs | String (optional)  | `""`                                   |  you can add an English text for the button                                                         |
| withListReturnButton | Boolean (optional) | `false`                                | when the list is true you can add a return button by setting the value to true |                                                         |

## Usage

> ### important
>
> > the time value expected is only in minutes from 0 to 1440.
>
> > the expected range is by 15 min intervals only
>
> [Link to the complete 24h values by 15 mins range ](./HOURSRANGE.md "full range of value from 0 to 1440")

### Event type calendar view

```javascript
// components/ScheduleEvent.tsx
import { Suspense, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useTheme } from "../../useTheme";
import {
  TcolorCellByEvents,
  TeventsName,
  TeventsTextColor,
} from "../../dataTypes";
import { eventTypeData, scheduleByEventPlace } from "../../data";
import { contentForModal } from "../../dataCards";

import Schedule from "react-simple-schedule-viewer";

function ScheduleEvent() {
  //  Variables for the Schedule component
  const weekStartsOn = 0;
  const { theme, setTheme } = useTheme();
  const [isDarkMode] = useState(theme === "dark" ? true : false);

  // the default order of background colors in the array is
  const colorCellByEvents: TcolorCellByEvents = {
    eventType_1: "#FFF2C4", // eventType_1 - required
    eventType_2: "#FED7AD", // eventType_2 - optional
    eventType_3: "#DBFFE2", // eventType_3 - optional
    eventType_4: "#F6D1FF", // eventType_4 - optional
    eventType_5: "#A0ABC0", // eventType_5 - optional
    eventType_6: isDarkMode ? "#2D3648" : "#EDF0F7", // eventType_6 - required - is always the away, closed or absent event
    eventType_7: "#B0DCFF", // eventType_7 - optional
  };
  // the default order of text colors in the array is
  const eventsTextColor: TeventsTextColor = {
    eventType_1: "#B99100", // eventType_1 - required
    eventType_2: "#D46E00", // eventType_2 - optional
    eventType_3: "#00B51E", // eventType_3 - optional
    eventType_4: "#F134F7", // eventType_4 - optional
    eventType_5: "#FFFFFF", // eventType_5 - optional
    eventType_6: "#a0abc0", // eventType_6 - required - is always the away, closed or absent event
    eventType_7: "#0196EC", // eventType_7 - optional
  };

  // This is for TEMP & CALENDAR type of schedule, the names of all eventTypes.
  // (for the EVENT type, the name of the event is on the contentForModal - eventTitle)
  const eventsName: TeventsName = {
    eventType_1: "Présence 1",
    eventType_2: "Présence 2",
    eventType_3: "Présence 3",
    eventType_4: "Présence 4",
    eventType_5: "Éco",
    eventType_6: "Absence",
    eventType_7: "rendez-vous quotidien",
  };
  //  For french/English support both at the same time
  const eventsNameUs: TeventsName = {
    eventType_1: "Presence 1",
    eventType_2: "Presence 2",
    eventType_3: "Presence 3",
    eventType_4: "Presence 4",
    eventType_5: "Eco",
    eventType_6: "Away",
    eventType_7: "daily appointment",
  };

// Just for the demo
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
          path="/schedule/*" // The path must be /schedule/*
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Schedule
                scheduleByEventPlace={scheduleByEventPlace}
                weekStartsOn={weekStartsOn}
                isInDarkMode={isDarkMode}
                colorCellByEvents={colorCellByEvents}
                eventsTextColor={eventsTextColor}
                locale={"en"}
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

export default ScheduleEvent;

```

### the data file

```javascript
  // DATA SECTION
  //  enum for identifying the event_Type easily
  enum EeventTypes {
    food = "eventType_1",
    concert = "eventType_2",
    game_force = "eventType_3",
    game_dark = "eventType_4",
    lecture = "eventType_5",
    closed = "eventType_6", // eventType_6 must be always the away, closed or no activity event
    appointement = "eventType_7",
  }
  //   Mocked data for example - set the price of each event for example
  const eventTypeData: TeventTypeData = {
    eventPlace_id: "e2076d6a-9d6d-4b93-9ce0-a41f04c38c40", // If you have many places with different prices this id must be unique
    [EeventTypes.food]: "12.5 Euros",
    [EeventTypes.concert]: "20 Euros",
    [EeventTypes.game_force]: "21 Euros",
    [EeventTypes.game_dark]: "10 Euros",
    [EeventTypes.lecture]: "6.5 Euros",
    [EeventTypes.closed]: "",
  };

  //   Mocked data for example - schedules array with each calendar cells event
  const scheduleByEventPlace: getSchedulesByEventPlaceIdResponse = {
    schedules: [
      {
        id: "a397f1fe-14bf-4ca3-af8c-e497b98451f7", // Unique schedule identifier
        title: "Exemple de calendrier de type 'event'", // title of the event
        type: "event", // type of the event (event - temperature - calendar)
        day_slot_set: [
          // each days & time slot instruction, start time only & the type of event (eventType_1 for example)
          {
            days: [0], // Monday
            time_slot: [
              {
                start: 0, // start at midnight with closed type event
                instruction: EeventTypes.closed,
              },
              {
                start: 600, // start at 10:00AM (this is the end of the previous event too)
                instruction: EeventTypes.lecture,
              },
              {
                start: 720, // start at 12:00AM with food (eventType_1 in this example)
                instruction: EeventTypes.food,
              },
              {
                start: 900,
                instruction: EeventTypes.game_dark,
              },
              {
                start: 1230,
                instruction: EeventTypes.concert,
              },
              {
                start: 1380,
                instruction: EeventTypes.closed,
              },
            ],
          },
          {
            days: [1],
            time_slot: [
              {
                start: 0,
                instruction: EeventTypes.closed,
              },
              {
                start: 600,
                instruction: EeventTypes.lecture,
              },
              {
                start: 720,
                instruction: EeventTypes.food,
              },
              {
                start: 900,
                instruction: EeventTypes.game_force,
              },
              {
                start: 1020,
                instruction: EeventTypes.concert,
              },

              {
                start: 1380,
                instruction: EeventTypes.closed,
              },
            ],
          },
          {
            days: [2],
            time_slot: [
              {
                start: 0,
                instruction: EeventTypes.closed,
              },
              {
                start: 495,
                instruction: EeventTypes.game_dark,
              },
              {
                start: 720,
                instruction: EeventTypes.food,
              },
              {
                start: 900,
                instruction: EeventTypes.game_dark,
              },
              {
                start: 1215,
                instruction: EeventTypes.closed,
              },
            ],
          },
          {
            days: [3],
            time_slot: [
              {
                start: 0,
                instruction: EeventTypes.closed,
              },
              {
                start: 450,
                instruction: EeventTypes.concert,
              },
              {
                start: 900,
                instruction: EeventTypes.closed,
              },
            ],
          },
          {
            days: [4],
            time_slot: [
              {
                start: 0,
                instruction: EeventTypes.closed,
              },

              {
                start: 480,
                instruction: EeventTypes.game_force,
              },
              {
                start: 1380,
                instruction: EeventTypes.closed,
              },
            ],
          },
          {
            days: [5],
            time_slot: [
              {
                start: 0,
                instruction: EeventTypes.closed,
              },
              {
                start: 450,
                instruction: EeventTypes.game_dark,
              },
              {
                start: 1020,
                instruction: EeventTypes.closed,
              },
            ],
          },
          {
            days: [6],
            time_slot: [
              {
                start: 0,
                instruction: EeventTypes.closed,
              },
            ],
          },
        ],
      },
    ],
  };

```

### The App file

```javascript
// App.tsx
import ScheduleEvent from "./components/ScheduleEvent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ScheduleEvent />
    </div>
  );
}

export default App;
```


## Contributions Welcome!

```shell
git clone https://github.com/rodolphe37/react-simple-schedule-viewer
```

## License

The ISC License.
