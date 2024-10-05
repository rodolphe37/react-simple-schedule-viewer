
# React-simple-schedule-viewer

![First render](demo/demo.png)

## Component with event type

### light mode

![First render](demo/event-calendar-1.png)

### event details

- you can add custom element in the modal...
- ![First render](demo/event-calendar-2.png)
- ![First render](demo/event-3.png)

### dark mode

![First render](demo/event-dark-1.png)

### event details

- you can add custom element in the modal...
- ![First render](demo/event-dark-3.png)
- ![First render](demo/event-dark-2.png)

## Component with calendar type

### light mode

![First render](demo/temp-calendar-1.png)

### calendar details

- ![First render](demo/temp-calendar-2.png)

### dark mode

![First render](demo/calendar-dark-1.png)

### event details

- ![First render](demo/calendar-dark-2.png)

# Live demo

- [Link to live demo](https://bright-jalebi-193c3a.netlify.app/)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```
