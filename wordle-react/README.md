# Wordle (React)

A Wordle clone built with React and Vite.

## Run it
```bash
npm install
npm run dev
```

## Structure
- `src/data/words.js` - word list and random answer picker
- `src/utils/checkGuess.js` - green / yellow / grey algorithm (two passes)
- `src/hooks/useWordle.js` - game state and rules
- `src/components/` - Tile, Row, Board, Keyboard
- `src/App.jsx` - ties everything together
