# Copilot Instructions for Weather-app Workspace

## Overview
This workspace contains multiple web projects, including React/Vite apps and Node.js/Express backends. The `Weather-app` folder is a standalone HTML/CSS/JS project for weather data display, with a focus on frontend logic and API integration.

## Key Patterns & Architecture
- **Weather-app**
  - `index.html`, `style.css`, `backend.js` are the main files.
  - All logic is in `backend.js`, which manipulates DOM elements and fetches weather data from an external API.
  - No build step or framework; direct browser execution.
  - API key usage: Store API keys as variables (never hardcoded in public repos).
  - Error handling is done via `displayerror(message)` which updates the `.card` element.
  - Weather display uses `displayweather(data)` and emoji selection via `getemoji(weatherid)`.

- **React/Vite Projects**
  - Found in `React/Testing/t1`, `React/To-Do2`, and `React/learnig1/React1`.
  - Use Vite for fast development and HMR.
  - ESLint is configured for code quality.
  - See project-level `README.md` for setup and conventions.

- **Node.js/Express Projects**
  - Example: `Project/VibeLink-main` uses Express and EJS for server-side rendering.
  - Standard Node.js structure: `controllers/`, `models/`, `routes/`, `views/`.
  - Start with `npm install` and `npm run dev`.

## Developer Workflows
- **Weather-app**: Open `index.html` in browser. Edit `backend.js` for logic changes. No build/test commands.
- **React/Vite**: Use `npm run dev` for local server. Edit in `src/`. Linting via ESLint.
- **Node.js/Express**: Use `npm install` then `npm run dev`.

## Project-Specific Conventions
- API keys and secrets should be kept out of public code (use `.env` for Node projects).
- Error messages are displayed in the UI, not logged to console for users.
- DOM manipulation is direct, not via frameworks in Weather-app.
- React projects use Vite and may use Babel or SWC for fast refresh.

## Integration Points
- Weather-app fetches data from external weather APIs (API key required).
- Node.js projects may connect to databases (see `models/`).
- React projects are frontend only unless otherwise noted.

## Examples
- To add a new weather feature, update `backend.js` and ensure UI changes are reflected in `.card`.
- For React projects, add components in `src/` and follow Vite conventions.
- For Node.js, add routes in `routes/` and controllers in `controllers/`.

## References
- See `README.md` in each project folder for more details.
- Main entry points: `Weather-app/index.html`, `Weather-app/backend.js`, `Project/VibeLink-main/app.js`.

---
For questions or unclear conventions, ask for clarification or check the relevant `README.md`.
