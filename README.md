# Betting Dashboard

A modern, responsive betting dashboard built with React and TypeScript. This project simulates a betting platform where users can view and add betting cards for sports games.

## Technologies Used

- **React**: For building the user interface.
- **TypeScript**: For type safety and better developer experience.
- **Redux Toolkit**: For state management.
- **Styled Components**: For styling with CSS-in-JS.
- **Vite**: For fast development and building.
- **Vitest**: For unit and component testing.
- **Testing Library**: For testing React components.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd betting-dashboard
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to see the app in action.

## Implementation Details

### State Management

The application uses Redux Toolkit for state management with a feature-based organization:

- `bettingSlice.ts` manages the betting cards state
- Actions include `addCard` and `setCards`

### API Services

The application simulates API interactions with:

- `fetchBettingCards()` - Retrieves the initial set of betting cards
- `postBettingCard()` - Creates a new betting card

These services include randomized delays and occasional errors to simulate real-world API behavior.

## Testing

The project uses Vitest and React Testing Library for testing.

### Running Tests

Run all tests once:

```bash
npm run test
# or
yarn test
```

Run tests in watch mode during development:

```bash
npm run test:watch
# or
yarn test:watch
```

Generate test coverage report:

```bash
npm run test:coverage
# or
yarn test:coverage
```

## Build for Production

```bash
npm run build
# or
yarn build
```

The build artifacts will be stored in the `dist/` directory.
