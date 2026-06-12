# APAX Test Assessment

A simple React + TypeScript + Vite application that displays token holdings using reusable components, static data, and scoped CSS styles.

## Project overview

- `src/main.tsx` - Application entry point. Renders the React app into the DOM.
- `src/App.tsx` - Main app component. Loads token data and renders the holdings UI.
- `src/components/TokenCard.tsx` - Presentational component for a single token card.
- `src/components/TokenHoldings.tsx` - Container component that renders a list of `TokenCard` items.
- `src/data/index.ts` - Static token data used by the app.
- `src/utils/index.ts` - Utility functions for formatting and data handling.
- `src/styles/TokenCard.css` - Component-specific styles for token cards.
- `src/styles/TokenHoldings.css` - Styles for the holdings list.

## How to run

1. Install dependencies: `npm install`
2. Start development: `npm run dev`
3. Open the app in the browser at the local URL shown by Vite.
