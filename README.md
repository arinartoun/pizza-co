# React Pizza Co.
<img width="955" height="440" alt="Screenshot 2026-06-27 135747" src="https://github.com/user-attachments/assets/94ac38a8-4bd0-4f7f-af22-f08affd48e2e" />
<img width="957" height="440" alt="Screenshot 2026-06-27 141205" src="https://github.com/user-attachments/assets/783e27f9-6f42-47bc-a171-8bb0e2c95811" />


A responsive pizza-ordering single-page application built with React, TypeScript, Redux Toolkit, React Router, and Tailwind CSS. Customers can browse the menu, manage a cart, place an order, look up an existing order, and upgrade an order to priority delivery.

## Features

- Customer name capture and personalized ordering flow
- Menu loaded from a remote restaurant API
- Add, remove, and change quantities of cart items
- Order form with phone validation and optional browser geolocation
- Priority delivery pricing
- Order creation, lookup, status display, and priority upgrades
- Responsive layout with route-level loading and error states

## Tech stack

- React 18 and TypeScript
- Vite
- React Router data APIs (loaders, actions, and fetchers)
- Redux Toolkit and React Redux
- Tailwind CSS

## Getting started

### Prerequisites

- Node.js 18 or newer
- npm
- Internet access for the menu, order, geocoding, and Google Fonts services

### Installation

```bash
git clone <repository-url>
cd fast-react-pizza
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Routes

| Route | Description |
| --- | --- |
| `/` | Home page and customer-name entry |
| `/menu` | Pizza menu and cart controls |
| `/cart` | Cart summary |
| `/order/new` | Checkout form |
| `/order/:orderId` | Order status and priority update |

## Project structure

```text
src/
├── features/
│   ├── cart/       # Cart state, selectors, and UI
│   ├── menu/       # Menu route and menu items
│   ├── order/      # Checkout, lookup, status, and updates
│   └── user/       # Customer and geolocation state
├── services/       # Restaurant and reverse-geocoding API clients
├── types/          # Shared TypeScript models
├── ui/             # Shared layout and UI components
├── utils/          # Currency and date helpers
├── App.tsx         # Route configuration
├── main.tsx        # Application entry point
└── store.ts        # Redux store
```

## External services

The application currently calls these public services directly from the browser:

- Restaurant API: `https://react-fast-pizza-api.onrender.com/api`
- Reverse geocoding: `https://api.bigdatacloud.net/data/reverse-geocode-client`
- Google Fonts for Roboto Mono

No environment variables are required by the current implementation. For a production deployment, configure the host to serve `index.html` for unknown paths so that direct navigation to client-side routes works.

## Current limitations

- Cart and customer state are held in memory and are reset on page refresh.
- The project does not yet include automated tests or dedicated lint/type-check scripts.
- Availability depends on the external APIs listed above.

## License

No license has been specified.
