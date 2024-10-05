[![npm](https://img.shields.io/npm/v/react-simple-schedule-viewer)](https://www.npmjs.com/package/react-simple-schedule-viewer) ![downloads](https://img.shields.io/npm/dt/react-simple-schedule-viewer?color=blue&logo=npm&logoColor=blue)

# React simple schedule viewer

📅 An easy configurable weekly Calendar viewer component.

--- 
- Full Typescript support
- Dark & Light mode support
- French & English languages support
- Schedule view with three types : 'event', 'temperature' & 'calendar'
- made with react-router-dom, tailwindcss & recoil
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

``` javascript
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

## Usage

> ### important
> > the time value expected is only in minutes from 0 to 1440.
>
> > the expected range is by 15 min intervals only
>
> [Link to the complete 24h values by 15 mins range ](./HOURSRANGE.md 'full range of value from 0 to 1440')

### 24 hours format (light & dark)

![24 hours format](demo/24h_format.png)

```javascript
import React, { useState } from 'react';
import { TimePicker } from 'react-wheel-time-picker';

export default const  App = () => {
    const [value, setValue] = useState('12:00');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const onChange = (timeValue: string) => {
    setValue(timeValue);
    };

   return (
      <div>
        <TimePicker
            label="Start time"
            isDarkMode={isDarkMode}
            onChange={onChange}
            value={value}
        />
      </div>
   );
}
```

### 12 hours format (light & dark)

![12 hours format](demo/12h_format.png)

```js
import React, { useState } from 'react';
import { TimePicker } from 'react-wheel-time-picker';

export default const  MyApp = () => {
    const [value, setValue] = useState('10:00 AM');
    const [isDarkMode, setIsDarkMode] = useState(false);

    const onChange = (timeValue) => {
        setValue(timeValue);
    }

   return (
      <div>
        <TimePicker
            use12Hours
            label="Start time"
            isDarkMode={isDarkMode}
            onChange={onChange}
            value={value}
        />
      </div>
   );
}
```

## API

| Name               | Type                                                     | Default        | Description                                                     |
| ------------------ | -------------------------------------------------------- | -------------- | --------------------------------------------------------------- |
| label              | String (optional)                                        | n/a            | Name of the input.                                              |
| isDarkMode         | Boolean (optional)                                       | n/a            | for dark mode support.                                          |
| value              | String                                                   | n/a            | Current value.                                                  |
| cellHeight         | Number (optional)                                        | 28             | The height of the cell number.                                  |
| placeHolder        | String (optional)                                        | `"Selet_time"` | Time input's placeholder.                                       |
| pickerDefaultValue | String (optional)                                        | `"00:00"`      | The initial value that the picker begin with in the first time. |
| disabled           | Boolean (optional)                                       | `false`        | Whether picker is disabled.                                     |
| isOpen             | Boolean (optional)                                       | `false`        | Whether the time picker should be opened.                       |
| required           | Boolean (optional)                                       | `false`        | Whether time input should be required.                          |
| cancelButtonText   | String (optional)                                        | `"Cancel"`     | Cancel button text content                                      |
| saveButtonText     | String (optional)                                        | `"Save"`       | Save button text content                                        |
| controllers        | Boolean (optional)                                       | `true`         | Whether the buttons should be displayed                         |
| seperator          | Boolean (optional)                                       | `true`         | whether show the colon seperator                                |
| id                 | String (optional)                                        | n/a            | Input time picker id                                            |
| name               | String (optional)                                        | n/a            | Input time picker name                                          |
| use12Hours         | Boolean (optional)                                       | false          | 12 hours display mode                                           |
| inputClassName     | String (optional)                                        | n/a            | Input time picker className                                     |
| popupClassName     | String (optional)                                        | n/a            | time picker popup className                                     |
| onChange           | `(value) => alert ('New time is: ', value)`              | n/a            | Called when select a different value                            |
| onSave             | `(value) => alert ('Time saved is: ', value)` (optional) | n/a            | When the user clicks on save button                             |
| onClose            | `() => alert('Clock closed')` (optional)                 | n/a            | When the user clicks on cancel button                           |
| onAmPmChange       | `(value) => alert('Am/Pm changed : value')` (optional)   | n/a            | called when select an am/pm value                               |
| onOpen             | `() => alert('time picker opened')` (optional)           | n/a            | called when time picker is opened                               |

## Contributions Welcome!

```shell
git clone https://github.com/rodolphe37/react-wheel-time-picker
```

## License

The ISC License.
